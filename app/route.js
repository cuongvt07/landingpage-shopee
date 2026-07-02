import { readFile } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Trang mặc định "/" phục vụ landing tĩnh public/phao/index.html
export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'phao', 'index.html');
  const html = await readFile(filePath, 'utf8');

  return new Response(html, {
    headers: {
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}
