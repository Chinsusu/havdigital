---
layout: "../layouts/MarkdownDocumentLayout.astro"
title: "Mục tiêu chất lượng dịch vụ — HAV Digital Solutions"
description: "Cách HAV định nghĩa, đo lường mục tiêu uptime 99,9% cho proxy và VPS, phạm vi loại trừ và quy trình báo sự cố."
route: "/sla"
canonical: "https://havdigital.com/sla"
effectiveDate: "2026-07-16"
lastUpdated: "2026-07-16"
indexable: false
section: "trust"
internalLinks:
  - "/status"
  - "/contact"
  - "/terms"
  - "/refund-policy"
---

# Mục tiêu chất lượng dịch vụ

**Ngày có hiệu lực: 16/07/2026**

HAV Digital Solutions đặt **mục tiêu vận hành 99,9% uptime theo tháng** cho thành phần proxy và VPS thuộc phạm vi HAV kiểm soát. Trang này giải thích cách hiểu và cách đánh giá mục tiêu đó.

> Đây là mục tiêu vận hành chung, chưa phải SLA tài chính và không tự động tạo service credit. Một cam kết bồi hoàn chỉ có hiệu lực khi đơn hàng hoặc SLA riêng của khách hàng ghi rõ phạm vi, mức cam kết và cách tính credit.

## 1. Uptime được tính như thế nào

Uptime theo tháng được tính:

`Uptime (%) = (Tổng số phút trong tháng − Phút không khả dụng đủ điều kiện) / Tổng số phút trong tháng × 100`

“Không khả dụng đủ điều kiện” là khoảng thời gian HAV xác minh rằng thành phần dịch vụ thuộc phạm vi HAV kiểm soát không thể thực hiện chức năng chính đối với phần lớn request/tài nguyên bị ảnh hưởng.

Thời điểm bắt đầu được xác định theo dữ liệu sớm nhất mà HAV có thể xác minh từ log/tín hiệu vận hành hoặc báo cáo đầy đủ của khách hàng. Thời điểm kết thúc là khi chức năng chính được khôi phục và HAV có bằng chứng hợp lý rằng dịch vụ đã ổn định.

## 2. Phạm vi đánh giá

### Proxy

Mục tiêu áp dụng cho khả năng kết nối tới gateway hoặc endpoint HAV đã cấp và khả năng chuyển tiếp lưu lượng trong phạm vi hạ tầng HAV kiểm soát. Mục tiêu không bảo đảm một website đích chấp nhận IP, không hiển thị captcha hoặc không giới hạn tài khoản.

### VPS

Mục tiêu áp dụng cho khả năng truy cập tài nguyên compute/mạng đã cấp trong phạm vi hạ tầng HAV kiểm soát. Lỗi hệ điều hành, ứng dụng, firewall hoặc cấu hình do khách hàng quản lý không được xem là lỗi uptime HAV nếu hạ tầng nền vẫn hoạt động.

## 3. Khoảng thời gian không tính vào downtime đủ điều kiện

Khi đánh giá mục tiêu nội bộ, HAV loại trừ khoảng thời gian do:

- bảo trì dự kiến đã được thông báo trong phạm vi hợp lý;
- cấu hình, phần mềm, thông tin xác thực hoặc hành động của khách hàng/người dùng được khách hàng cho phép;
- tạm ngừng theo [Chính sách sử dụng chấp nhận được](/acceptable-use), yêu cầu hợp lệ của cơ quan có thẩm quyền hoặc nghĩa vụ thanh toán;
- mạng, thiết bị hoặc hệ thống đích nằm ngoài phạm vi HAV kiểm soát;
- sự kiện bất khả kháng hoặc tấn công vượt quá biện pháp bảo vệ hợp lý, với điều kiện HAV vẫn thực hiện biện pháp giảm thiểu phù hợp;
- suy giảm không làm mất chức năng chính, trừ khi đơn hàng có ngưỡng hiệu năng riêng.

HAV không dùng danh sách loại trừ để che một lỗi do chính HAV gây ra. Nếu nhiều nguyên nhân cùng tồn tại, HAV đánh giá phần thời gian và phạm vi thực tế mà lỗi HAV làm dịch vụ không khả dụng.

## 4. Bảo trì

HAV cố gắng thực hiện bảo trì vào thời điểm ít ảnh hưởng, giới hạn phạm vi và thông báo sớm khi có thể. Bảo trì khẩn cấp có thể được thực hiện ngay để vá lỗ hổng, ngăn thiệt hại hoặc bảo vệ ổn định hệ thống; HAV sẽ cập nhật khi việc công bố không làm tăng rủi ro.

## 5. Báo sự cố

Gửi email tới [sales@havdigital.com](mailto:sales@havdigital.com?subject=%5BINCIDENT%5D%20B%C3%A1o%20s%E1%BB%B1%20c%E1%BB%91%20d%E1%BB%8Bch%20v%E1%BB%A5) với tiêu đề **`[INCIDENT] Tên dịch vụ — mô tả ngắn`** và kèm:

- mã đơn hàng hoặc định danh tài nguyên;
- endpoint/location;
- timestamp bắt đầu/kết thúc và múi giờ;
- thông báo lỗi, tỷ lệ lỗi hoặc mẫu request;
- log đã che dữ liệu nhạy cảm và bước tái hiện;
- xác nhận đã kiểm tra cấu hình phía khách hàng.

Báo cáo càng sớm và đầy đủ, HAV càng dễ xác định chính xác khoảng ảnh hưởng. Trang [Trạng thái hệ thống](/status) giải thích cách HAV phân loại và công bố sự cố.

## 6. Khắc phục và hoàn tiền

Ưu tiên đầu tiên của HAV là khôi phục dịch vụ, cấp lại tài nguyên hoặc cung cấp giải pháp thay thế phù hợp. Nếu lỗi HAV đã xác minh làm dịch vụ không thể sử dụng và không được khắc phục hợp lý, khách hàng có thể yêu cầu xử lý theo [Chính sách hoàn tiền](/refund-policy).

Trang này không hứa credit tự động. Nếu HAV ban hành SLA tài chính trong tương lai, bảng credit, thời hạn claim và giới hạn phải được ghi trực tiếp trong SLA/đơn hàng, không áp dụng hồi tố.

## 7. Minh bạch số liệu

HAV chỉ nên công bố tỷ lệ uptime lịch sử khi số liệu được lấy từ hệ thống giám sát xác định rõ thành phần, location, khoảng thời gian và cách loại trừ. Không suy rộng trải nghiệm của một khách hàng thành uptime toàn hệ thống.

Xem thêm [Điều khoản sử dụng](/terms), [Chính sách hoàn tiền](/refund-policy) và [Liên hệ](/contact).
