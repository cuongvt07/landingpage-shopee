import { createSign, createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Google Sheet đích (ghi lead form vào đây)
const SPREADSHEET_ID =
  process.env.PHAO_GOOGLE_SHEET_ID || '1aV_xorVEAfb0mu8aiazPkdYHRWxBMNhL4AOOyaGspKw';

// Service account key (không commit lên git — xem .gitignore)
const DEFAULT_KEY_PATH = path.join(process.cwd(), 'config', 'google', 'service-account.json');

const SHEET_HEADERS = ['STT', 'Họ và Tên', 'Email', 'Số điện thoại', 'Địa chỉ', 'Số lượng'];
const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_SHEETS_URL = 'https://sheets.googleapis.com/v4/spreadsheets';

let tokenCache = null;

function base64Url(value) {
  return Buffer.from(value)
    .toString('base64')
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '');
}

function sanitizeText(value, maxLength) {
  if (typeof value !== 'string' && typeof value !== 'number') return '';
  return String(value).trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function normalizeQuantity(value) {
  const quantity = Number.parseInt(String(value || '1'), 10);
  if (!Number.isFinite(quantity) || quantity < 1) return '1';
  return String(Math.min(quantity, 999));
}

function normalizeLead(body) {
  return {
    name: sanitizeText(body.name, 120),
    email: sanitizeText(body.email, 160),
    phone: sanitizeText(body.phone, 40),
    address: sanitizeText(body.address, 500),
    quantity: normalizeQuantity(body.quantity)
  };
}

async function getServiceAccountKey() {
  let key;

  // 1) Ưu tiên biến môi trường (dùng cho Vercel/production — key KHÔNG nằm trong repo)
  const keyB64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_B64;
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (keyB64) {
    key = JSON.parse(Buffer.from(keyB64, 'base64').toString('utf8'));
  } else if (keyJson) {
    key = JSON.parse(keyJson);
  } else {
    // 2) Fallback: đọc file local (dev trên máy)
    const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || DEFAULT_KEY_PATH;
    key = JSON.parse(await readFile(keyPath, 'utf8'));
  }

  if (!key.client_email || !key.private_key) {
    throw new Error('Google service account key is missing client_email or private_key');
  }

  key.private_key = key.private_key.replace(/\\n/g, '\n');
  return key;
}

async function getAccessToken() {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) {
    return tokenCache.accessToken;
  }

  const key = await getServiceAccountKey();
  const now = Math.floor(Date.now() / 1000);
  const tokenUrl = key.token_uri || GOOGLE_TOKEN_URL;
  const jwtHeader = base64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const jwtPayload = base64Url(
    JSON.stringify({
      aud: tokenUrl,
      exp: now + 3600,
      iat: now,
      iss: key.client_email,
      scope: SHEETS_SCOPE
    })
  );
  const unsignedJwt = `${jwtHeader}.${jwtPayload}`;
  const signature = createSign('RSA-SHA256').update(unsignedJwt).sign(key.private_key);
  const assertion = `${unsignedJwt}.${base64Url(signature)}`;

  const response = await fetch(tokenUrl, {
    body: new URLSearchParams({
      assertion,
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer'
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(data.error || 'Unable to get Google access token');
  }

  tokenCache = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in || 3600) * 1000
  };

  return data.access_token;
}

async function googleSheetsFetch(pathName, token, init) {
  const response = await fetch(`${GOOGLE_SHEETS_URL}/${SPREADSHEET_ID}${pathName}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init?.headers || {})
    }
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || 'Google Sheets request failed');
  }

  return data;
}

function sheetRange(sheetTitle, range) {
  return `'${sheetTitle.replaceAll("'", "''")}'!${range}`;
}

async function getFirstSheet(token) {
  const metadata = await googleSheetsFetch('?fields=sheets.properties(title,sheetId)', token);
  const props = metadata.sheets?.[0]?.properties;
  if (!props?.title) throw new Error('Google spreadsheet has no sheets');
  return { title: props.title, sheetId: props.sheetId };
}

// Tô nền vàng + in đậm + freeze cho dòng tiêu đề
async function formatHeaderRow(token, sheetId) {
  await googleSheetsFetch(':batchUpdate', token, {
    method: 'POST',
    body: JSON.stringify({
      requests: [
        {
          repeatCell: {
            range: { sheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: 6 },
            cell: {
              userEnteredFormat: {
                backgroundColor: { red: 1, green: 0.85, blue: 0.4 },
                textFormat: { bold: true },
                horizontalAlignment: 'CENTER'
              }
            },
            fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)'
          }
        },
        {
          updateSheetProperties: {
            properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
            fields: 'gridProperties.frozenRowCount'
          }
        }
      ]
    })
  });
}

async function ensureHeadersAndGetNextIndex(token, sheetTitle, sheetId) {
  const range = sheetRange(sheetTitle, 'A:F');
  const data = await googleSheetsFetch(
    `/values/${encodeURIComponent(range)}?majorDimension=ROWS`,
    token
  );
  const rows = data.values || [];

  if (rows.length === 0) {
    await googleSheetsFetch(
      `/values/${encodeURIComponent(sheetRange(sheetTitle, 'A1:F1'))}?valueInputOption=USER_ENTERED`,
      token,
      {
        body: JSON.stringify({ values: [SHEET_HEADERS] }),
        method: 'PUT'
      }
    );
    try {
      await formatHeaderRow(token, sheetId);
    } catch (formatError) {
      // format lỗi không chặn việc lưu lead
    }
    return 1;
  }

  const hasHeader = rows[0]?.[0]?.trim().toLowerCase() === 'stt';
  return hasHeader ? rows.length : rows.length + 1;
}

// ===== Facebook Conversions API (server-side) =====
const FB_PIXEL_ID = process.env.FB_PIXEL_ID || '1648734006195761';
const FB_CAPI_TOKEN = process.env.FB_CAPI_TOKEN || '';
const FB_GRAPH_URL = 'https://graph.facebook.com/v19.0';
const UNIT_PRICE = 220000;

function sha256(value) {
  return createHash('sha256').update(String(value).trim().toLowerCase()).digest('hex');
}

// Chuẩn hoá SĐT VN về 84xxxxxxxxx trước khi hash (khớp Facebook)
function normalizePhoneVN(phone) {
  let d = String(phone || '').replace(/[^0-9]/g, '');
  if (d.startsWith('0')) d = '84' + d.slice(1);
  else if (!d.startsWith('84') && d.length === 9) d = '84' + d;
  return d;
}

async function sendPurchaseToCapi(lead, meta) {
  if (!FB_CAPI_TOKEN) return { skipped: 'FB_CAPI_TOKEN chưa cấu hình' };

  const qty = parseInt(lead.quantity, 10) || 1;
  const phoneNorm = normalizePhoneVN(lead.phone);
  const userData = {
    ph: [sha256(phoneNorm)],
    external_id: [sha256(phoneNorm)]
  };
  if (lead.name) {
    const parts = lead.name.trim().split(/\s+/);
    userData.fn = [sha256(parts[parts.length - 1])];
    userData.ln = [sha256(parts[0])];
  }
  if (meta.ip) userData.client_ip_address = meta.ip;
  if (meta.ua) userData.client_user_agent = meta.ua;
  if (meta.fbp) userData.fbp = meta.fbp;
  if (meta.fbc) userData.fbc = meta.fbc;

  const payload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: meta.sourceUrl || 'https://vibecar.vn/',
        ...(meta.eventId ? { event_id: meta.eventId } : {}),
        user_data: userData,
        custom_data: {
          currency: 'VND',
          value: qty * UNIT_PRICE,
          content_name: 'Phao Cứu Hộ Tự Động VibeCar',
          content_type: 'product',
          content_ids: ['phao-cuu-ho-vibecar'],
          contents: [{ id: 'phao-cuu-ho-vibecar', quantity: qty }],
          num_items: qty
        }
      }
    ]
  };

  const res = await fetch(
    `${FB_GRAPH_URL}/${FB_PIXEL_ID}/events?access_token=${encodeURIComponent(FB_CAPI_TOKEN)}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
  );
  return res.json();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const lead = normalizeLead(body);

    if (!lead.name || !lead.phone || !lead.address) {
      return NextResponse.json(
        { message: 'Họ và tên, số điện thoại và địa chỉ là bắt buộc.' },
        { status: 400 }
      );
    }

    const token = await getAccessToken();
    const { title: sheetTitle, sheetId } = await getFirstSheet(token);
    const nextIndex = await ensureHeadersAndGetNextIndex(token, sheetTitle, sheetId);
    const row = [nextIndex, lead.name, lead.email, lead.phone, lead.address, lead.quantity];
    const appendRange = sheetRange(sheetTitle, 'A:F');

    const result = await googleSheetsFetch(
      `/values/${encodeURIComponent(
        appendRange
      )}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      token,
      {
        body: JSON.stringify({ values: [row] }),
        method: 'POST'
      }
    );

    // Gửi Purchase tới Facebook Conversions API (server-side — không bị adblock/iOS/bot chặn)
    let capi = null;
    try {
      capi = await sendPurchaseToCapi(lead, {
        eventId: typeof body.event_id === 'string' ? body.event_id : undefined,
        fbp: typeof body.fbp === 'string' ? body.fbp : undefined,
        fbc: typeof body.fbc === 'string' ? body.fbc : undefined,
        ip: (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || undefined,
        ua: request.headers.get('user-agent') || undefined,
        sourceUrl: request.headers.get('referer') || 'https://vibecar.vn/'
      });
    } catch (capiError) {
      capi = { error: capiError instanceof Error ? capiError.message : 'CAPI failed' };
    }

    return NextResponse.json({
      message: 'Lead submitted',
      ok: true,
      stt: nextIndex,
      updatedRange: result.updates?.updatedRange,
      capi
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to submit lead';
    return NextResponse.json({ message }, { status: 500 });
  }
}
