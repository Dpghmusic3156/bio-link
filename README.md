# 🌟 Trang Bio Link Cá Nhân (Minimalist Clean)

Một trang web Bio Link cá nhân tĩnh, nhẹ, đẹp và tối giản dành riêng cho Content Creator / TikToker. Tích hợp sẵn nút kênh **TikTok** và cửa sổ quét **mã QR nhận donate/ủng hộ** từ fan với tính năng 1-chạm sao chép số tài khoản tiện lợi.

---

## 📁 Cấu trúc thư mục

```text
bio-link/
├── index.html          # Trang web chính (HTML + Tailwind CSS + Modal JS)
├── README.md           # Tài liệu hướng dẫn sử dụng & Deploy
└── assets/
    ├── avatar.svg      # Ảnh đại diện mẫu (vector)
    └── qr-donate.svg   # Ảnh mã QR donate mẫu (vector)
```

---

## ⚡ Xem thử nghiệm ngay trên máy tính

Không cần cài đặt bất kỳ phần mềm hay môi trường lập trình nào:
1. Mở thư mục `bio-link`.
2. Nhấp đúp chuột vào file **`index.html`**.
3. Trang web sẽ mở ra ngay lập tức trên trình duyệt (Chrome, Cốc Cốc, Edge, Safari...).

---

## ✏️ Hướng dẫn Tùy biến thông tin cá nhân

Mở file `index.html` bằng bất kỳ trình soạn thảo nào (Notepad, VS Code, Notepad++,...):

### 1. Đổi Ảnh đại diện & Mã QR Donate
- **Ảnh đại diện:** Chuẩn bị 1 file ảnh vuông (ví dụ `avatar.png` hoặc `avatar.jpg`), copy vào thư mục `assets/`. Sau đó trong `index.html` sửa dòng:
  ```html
  <img src="assets/avatar.png" ... />
  ```
- **Mã QR Donate:** Lưu ảnh mã QR từ app ngân hàng hoặc MoMo của bạn (ví dụ `qr.png`), copy vào `assets/`. Trong `index.html` sửa dòng:
  ```html
  <img id="qrImage" src="assets/qr.png" ... />
  ```

### 2. Đổi Tên hiển thị & Tiểu sử (Bio)
Tìm đoạn chú thích: `<!-- 1. THAY THÔNG TIN CÁ NHÂN -->`
- Đổi dòng chữ `Tên Của Bạn` thành tên thật hoặc biệt danh của bạn.
- Đổi dòng tiểu sử: `Sáng tạo nội dung • Chia sẻ những điều thú vị...` thành câu giới thiệu của riêng bạn.

### 3. Đổi Link kênh TikTok
Tìm đoạn chú thích: `<!-- 2. THAY LINK TIKTOK CỦA BẠN TẠI ĐÂY -->`
- Thay `https://www.tiktok.com/@username` thành link kênh TikTok thật của bạn (ví dụ: `https://www.tiktok.com/@tenkenhcua_ban`).
- Thay dòng `@username` hiển thị trên nút bấm.

### 4. Đổi Thông tin Tài khoản Ngân hàng
Tìm đoạn chú thích: `<!-- 4. THAY THÔNG TIN TÀI KHOẢN DONATE TẠI ĐÂY -->`
- Đổi tên ngân hàng: ví dụ `Vietcombank`, `MB Bank`, `MoMo`...
- Đổi tên chủ tài khoản: ví dụ `NGUYEN VAN A`.
- Đổi số tài khoản: ví dụ `0987654321` (đây là số sẽ được sao chép khi fan bấm nút).

---

## 🚀 Hướng dẫn Deploy lên Vercel Miễn phí (Qua GitHub)

Vercel cho phép bạn host website tĩnh hoàn toàn miễn phí trọn đời, hỗ trợ HTTPS bảo mật và tải cực nhanh.

### Bước 1: Đẩy mã nguồn lên GitHub
1. Đăng nhập vào [github.com](https://github.com) (tạo tài khoản miễn phí nếu chưa có).
2. Nhấn vào dấu **`+`** ở góc trên bên phải > Chọn **New repository**.
3. Đặt tên kho lưu trữ (Repository name), ví dụ: `my-bio-link`. Chọn chế độ **Public** hoặc **Private** đều được > Nhấn **Create repository**.
4. Mở cửa sổ dòng lệnh (Terminal/PowerShell) tại thư mục `bio-link` này và chạy 3 lệnh sau (thay `username` bằng tài khoản GitHub của bạn):
   ```bash
   git remote add origin https://github.com/username/my-bio-link.git
   git branch -M main
   git push -u origin main
   ```
   *(Hoặc bạn có thể kéo thả toàn bộ các file trong thư mục này lên GitHub thông qua tính năng "Upload files" trên trang web GitHub).*

### Bước 2: Kết nối và Xuất bản trang web trên Vercel
1. Truy cập [vercel.com](https://vercel.com) và chọn **Sign Up** (hoặc **Log In**) > Chọn đăng nhập bằng **Continue with GitHub**.
2. Trên bảng điều khiển Vercel, nhấn nút **Add New...** > Chọn **Project**.
3. Bạn sẽ thấy danh sách kho lưu trữ GitHub của mình. Tìm repo `my-bio-link` và nhấn nút **Import**.
4. Tại màn hình cấu hình dự án:
   - **Framework Preset**: Chọn `Other` (vì đây là trang web tĩnh HTML/CSS).
   - Các cài đặt khác giữ nguyên mặc định.
5. Nhấn nút **Deploy** màu xanh.
6. Sau khoảng 10 đến 15 giây, Vercel sẽ thông báo **Congratulations!** kèm theo đường link trang web của bạn (dạng: `https://my-bio-link-xxx.vercel.app`).

### Bước 3: Gắn link vào TikTok / Mạng xã hội
- Bạn có thể vào phần **Settings** > **Domains** trên Vercel để đổi tên miền ngắn gọn theo ý thích (ví dụ `https://tenban-bio.vercel.app`).
- Copy link này dán vào mục **Website / Trang web** hoặc **Tiểu sử** trên trang cá nhân TikTok, Facebook, Instagram của bạn!
