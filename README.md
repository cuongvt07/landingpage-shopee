# Phao Landing (Next.js độc lập)

Project Next.js riêng phục vụ landing page tĩnh (bản export LadiPage) tại đường dẫn `/`.

## Cấu trúc
- `app/route.js` — Route handler trả về `public/phao/index.html` tại `/`.
- `public/phao/` — HTML + CSS + JS + ảnh của landing (đổi text ở `index.html`, ảnh ở `image/`, cấu hình slider ở `js/feelex-custom.js`).
- `public/japanhourse-assets/` — runtime LadiPage (bắt buộc để trang chạy popup/countdown/animation).

## Chạy
```bash
npm install
npm run dev      # mở http://localhost:3000
```

## Ghi chú
- Ảnh slider chính cấu hình trong `public/phao/js/feelex-custom.js` (mảng `product.images`).
- Danh sách ảnh có sẵn: `public/phao/image-manifest.json`.
