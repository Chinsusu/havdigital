---
layout: "../layouts/MarkdownDocumentLayout.astro"
title: "Trạng thái hệ thống — HAV Digital Solutions"
description: "Cách HAV phân loại, cập nhật và tiếp nhận báo cáo sự cố đối với dịch vụ proxy và VPS."
route: "/status"
canonical: "https://havdigital.com/status"
effectiveDate: "2026-07-16"
lastUpdated: "2026-07-16"
indexable: false
section: "operations"
internalLinks:
  - "/sla"
  - "/contact"
  - "/abuse"
---

# Trạng thái hệ thống

Trang này mô tả cách HAV Digital Solutions công bố và xử lý sự cố proxy/VPS.

## Trạng thái hiển thị

**HAV chưa hiển thị dữ liệu giám sát thời gian thực trên trang này.** Vì vậy, việc trang không có cảnh báo không đồng nghĩa mọi endpoint hoặc VPS đều đang hoạt động bình thường. Để xác minh một vấn đề cụ thể, hãy gửi báo cáo có timestamp và định danh tài nguyên theo hướng dẫn bên dưới.

HAV không hiển thị nhãn “All systems operational” nếu nhãn đó chưa được tạo từ dữ liệu monitor đủ tin cậy.

## Thành phần được theo dõi

Khi tích hợp hệ thống giám sát, HAV nên tách ít nhất:

- **Proxy:** khả năng kết nối gateway/endpoint và chuyển tiếp lưu lượng theo location;
- **VPS:** khả năng truy cập mạng và trạng thái hạ tầng compute trong phạm vi HAV kiểm soát.

Trạng thái website đích, captcha, blacklist, tài khoản bên thứ ba hoặc ứng dụng do khách hàng cài trên VPS không phải trạng thái của hạ tầng HAV.

## Mức độ sự cố

- **Gián đoạn nghiêm trọng:** chức năng chính không dùng được trên diện rộng hoặc có rủi ro an ninh đang diễn ra.
- **Gián đoạn một phần:** một location, nhóm endpoint hoặc phần tài nguyên bị ảnh hưởng nhưng dịch vụ khác vẫn hoạt động.
- **Suy giảm hiệu năng:** dịch vụ còn dùng được nhưng tỷ lệ lỗi/độ trễ tăng đáng kể so với mức bình thường đã đo.
- **Bảo trì:** thay đổi có kế hoạch hoặc khẩn cấp để bảo mật, sửa lỗi hoặc duy trì ổn định.

## Vòng đời cập nhật

Một sự cố có thể đi qua các trạng thái:

1. **Đang xác minh:** HAV đang kiểm tra tín hiệu và phạm vi.
2. **Đã xác định:** nguyên nhân hoặc thành phần ảnh hưởng đã được khoanh vùng.
3. **Đang khắc phục:** biện pháp giảm thiểu/khôi phục đang được triển khai.
4. **Đang theo dõi:** dịch vụ đã phục hồi và đang được quan sát để tránh tái phát.
5. **Đã giải quyết:** chức năng chính ổn định; HAV ghi nhận thời gian và phạm vi cuối cùng.

HAV chỉ nên đăng nguyên nhân gốc khi đã có bằng chứng. Trong lúc điều tra, bản cập nhật cần tách rõ dữ kiện đã xác minh và giả thuyết.

## Báo sự cố

Gửi email tới [sales@havdigital.com](mailto:sales@havdigital.com?subject=%5BINCIDENT%5D%20B%C3%A1o%20s%E1%BB%B1%20c%E1%BB%91%20h%E1%BB%87%20th%E1%BB%91ng) với tiêu đề **`[INCIDENT] Tên dịch vụ — location`**, kèm:

- mã đơn hàng hoặc định danh tài nguyên;
- endpoint/location;
- timestamp và múi giờ;
- thông báo lỗi, tỷ lệ lỗi hoặc mẫu request;
- log đã che dữ liệu nhạy cảm và bước tái hiện.

Không gửi mật khẩu, token, khóa riêng hoặc cookie đăng nhập. Xem [Liên hệ](/contact) để biết mẫu hỗ trợ đầy đủ. Nếu sự cố liên quan tới hành vi gây hại từ một tài nguyên HAV, dùng quy trình [Báo cáo lạm dụng](/abuse).

## Uptime và bồi hoàn

Cách HAV định nghĩa mục tiêu 99,9%, phạm vi đo và loại trừ được công bố tại [Mục tiêu chất lượng dịch vụ](/sla). Trang trạng thái không tự tạo quyền service credit; quyền đó chỉ phát sinh khi đơn hàng hoặc SLA riêng ghi rõ.
