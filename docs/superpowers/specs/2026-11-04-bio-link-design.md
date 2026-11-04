# Tài liệu Thiết kế Trang Web Bio Link Cá Nhân (Minimalist Clean)

- **Ngày tạo:** 2026-11-04
- **Dự án:** Bio Link cho Creator / TikToker
- **Mục tiêu:** Tạo trang web bio link tĩnh cá nhân, phong cách tối giản thanh lịch, tải nhanh, tối ưu di động, hiển thị liên kết TikTok và mã QR nhận donate từ fan; dễ dàng deploy miễn phí lên Vercel thông qua GitHub.

---

## 1. Yêu cầu & Phạm vi (Requirements & Scope)

### 1.1 Yêu cầu chức năng
1. **Thông tin định danh:**
   - Ảnh đại diện (Avatar) hình tròn, viền kép tinh tế, hỗ trợ fallback khi chưa có ảnh.
   - Tên hiển thị cá nhân (Display Name) in đậm, kèm huy hiệu tick xanh xác thực (Verified Badge) dạng SVG.
   - Dòng tiểu sử ngắn (Bio headline/tagline) mô tả bản thân hoặc thông điệp gửi tới người theo dõi.
2. **Liên kết mạng xã hội chính:**
   - Nút liên kết trực tiếp tới trang cá nhân TikTok với biểu tượng TikTok chính thức.
   - Hiệu ứng nhấc nổi khi di chuột hoặc chạm (hover & active micro-interactions).
3. **Chức năng QR Donate cho Fan:**
   - Nút bấm mở hộp thoại (Modal/Popup) hiển thị thông tin ủng hộ/donate.
   - Hiển thị ảnh mã QR thanh toán (Ngân hàng / MoMo / Napas).
   - Hiển thị số tài khoản ngân hàng và tên chủ tài khoản.
   - Nút bấm 1-chạm sao chép số tài khoản (Copy to clipboard) có thông báo phản hồi "Đã sao chép" trực quan.
   - Hỗ trợ đóng modal bằng: phím `Esc`, bấm nút đóng `X`, hoặc bấm ra ngoài vùng mờ (backdrop).
4. **Chân trang (Footer):**
   - Dòng bản quyền cá nhân thanh lịch: `© 2026 [Tên của bạn]`.

### 1.2 Yêu cầu phi chức năng
- **Mobile-first:** Giao diện co giãn chuẩn từ màn hình nhỏ nhất (320px) đến máy tính bảng và desktop.
- **Tốc độ:** Tải trang < 0.5s, không phụ thuộc vào build tool nặng nề.
- **Zero-config:** Sử dụng HTML5, CSS hiện đại (Tailwind CSS CDN), JavaScript thuần (Vanilla JS).
- **Dễ tùy biến:** Các vị trí thay thông tin (tên, link, số tài khoản) được đánh dấu bằng chú thích code tiếng Việt rõ ràng.

---

## 2. Kiến trúc & Cấu trúc Thư mục

Dự án được đặt tại thư mục `bio-link/` với cấu trúc:

```text
bio-link/
├── index.html                   # Toàn bộ mã nguồn trang Bio (HTML + Tailwind CDN + Modal Script)
├── README.md                    # Hướng dẫn chi tiết từng bước deploy Vercel qua GitHub (kèm hình minh họa text)
├── assets/
│   ├── avatar.svg               # Ảnh đại diện mẫu (vector SVG chất lượng cao)
│   └── qr-donate.svg            # Ảnh mã QR mẫu (vector SVG minh họa rõ nét)
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-11-04-bio-link-design.md  # Tài liệu thiết kế này
```

---

## 3. Thiết kế Giao diện (UI/UX)

- **Bảng màu:**
  - Nền trang: `bg-slate-50` (trắng ngà dịu mắt, chống chói).
  - Khung nội dung: `bg-white`, bo góc mềm `rounded-3xl`, viền mờ `border border-slate-100`, bóng đổ nhẹ `shadow-xl shadow-slate-200/50`.
  - Văn bản: Tiêu đề `text-slate-900`, tiểu sử và nhãn phụ `text-slate-500`.
  - Màu nhấn TikTok: Nút màu đen `bg-slate-950 text-white` với icon SVG TikTok chính xác.
  - Màu nhấn Donate: Nút viền tinh tế `bg-rose-50/80 text-rose-700 border border-rose-200/60 hover:bg-rose-100/80`.
- **Tương tác Modal:**
  - Nền mờ `backdrop-blur-sm bg-black/40` với hiệu ứng hiện dần mượt mà.
  - Trạng thái sao chép STK: Khi click nút Copy, đổi text sang "✓ Đã chép" và đổi màu nút trong 2 giây rồi trở lại bình thường.

---

## 4. Kế hoạch Triển khai (Deploy lên Vercel qua GitHub)

1. **Khởi tạo mã nguồn:** Tạo đầy đủ file `index.html`, thư mục `assets/` với ảnh mẫu SVG chuẩn và file `README.md`.
2. **Khởi tạo Git repo cục bộ:** `git init`, `git add .`, `git commit`.
3. **Quy trình Deploy cho người dùng:**
   - Bước 1: Tạo một kho lưu trữ (Repository) mới trên GitHub (public hoặc private).
   - Bước 2: Đẩy (push) code từ máy tính lên GitHub.
   - Bước 3: Đăng nhập Vercel ([vercel.com](https://vercel.com)) bằng tài khoản GitHub.
   - Bước 4: Nhấn **Add New** > **Project** > Import repo vừa tạo > Nhấn **Deploy**.
   - Bước 5: Nhận liên kết trực tiếp `https://ten-ban-chon.vercel.app`.

---

## 5. Tiêu chí Nghiệm thu (Acceptance Criteria)

- [ ] File `index.html` mở được trực tiếp trên trình duyệt, hiển thị đầy đủ avatar, tick xanh, bio, nút TikTok, nút Donate.
- [ ] Bấm nút TikTok mở đúng liên kết trong tab mới (`target="_blank"`).
- [ ] Bấm nút Donate hiển thị modal mã QR và thông tin thanh toán; bấm nút Copy STK sao chép thành công vào clipboard.
- [ ] Modal đóng mượt mà bằng nút X hoặc click nền mờ.
- [ ] Giao diện responsive chuẩn trên điện thoại di động (iPhone / Android) và desktop.
- [ ] File `README.md` hướng dẫn đầy đủ, dễ hiểu từng bước đẩy lên GitHub và kết nối Vercel.
