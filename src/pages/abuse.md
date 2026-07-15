---
layout: "../layouts/MarkdownDocumentLayout.astro"
title: "Báo cáo lạm dụng — HAV Digital Solutions"
description: "Cách báo cáo phishing, spam, tấn công, dữ liệu trái phép hoặc hành vi lạm dụng liên quan đến proxy và VPS HAV."
route: "/abuse"
canonical: "https://havdigital.com/abuse"
effectiveDate: "2026-07-16"
lastUpdated: "2026-07-16"
indexable: true
section: "trust"
internalLinks:
  - "/acceptable-use"
  - "/privacy"
  - "/terms"
  - "/contact"
---

# Báo cáo lạm dụng

HAV Digital Solutions tiếp nhận báo cáo về hành vi đáng ngờ liên quan đến proxy hoặc VPS do HAV cung cấp. Báo cáo có dữ liệu kỹ thuật chính xác giúp HAV xác định đúng tài nguyên và áp dụng biện pháp tương xứng.

## Kênh báo cáo

Gửi email tới **[sales@havdigital.com](mailto:sales@havdigital.com?subject=%5BABUSE%5D%20B%C3%A1o%20c%C3%A1o%20l%E1%BA%A1m%20d%E1%BB%A5ng)** với tiêu đề:

`[ABUSE] Loại sự cố — IP/định danh tài nguyên`

Ví dụ loại sự cố: phishing, spam, credential attack, malware, DDoS, truy cập trái phép, vi phạm dữ liệu hoặc bản quyền.

## Thông tin cần có

Vui lòng cung cấp:

- IP, hostname, URL hoặc định danh tài nguyên liên quan;
- thời điểm bắt đầu/kết thúc và **múi giờ**;
- mô tả hành vi và cách bạn xác định hành vi đó;
- log ở dạng văn bản, header đầy đủ hoặc bằng chứng kỹ thuật có liên quan;
- IP/hệ thống bị ảnh hưởng và bước tái hiện, nếu an toàn;
- tên và email để HAV có thể hỏi thêm;
- số tham chiếu từ cơ quan hoặc hệ thống khác, nếu có.

Không gửi mật khẩu, token, cookie phiên, khóa riêng, toàn bộ dữ liệu thẻ, dữ liệu của nạn nhân không liên quan hoặc mã độc có thể chạy trực tiếp. Hãy che dữ liệu không cần thiết; nếu bằng chứng nhạy cảm không thể gửi qua email, hãy mô tả loại dữ liệu trước để thống nhất cách chuyển an toàn.

## Báo cáo phishing hoặc giả mạo

Kèm URL đầy đủ, ảnh chụp, thời điểm truy cập và lý do bạn cho rằng nội dung giả mạo. Nếu có thể, cung cấp domain/website hợp pháp bị giả mạo và header email gốc. Không nhập thêm thông tin đăng nhập vào trang đáng ngờ chỉ để thu thập bằng chứng.

## Báo cáo spam

Kèm bản sao nội dung và header đầy đủ của thư, thời điểm nhận, địa chỉ nguồn/đích đã che phần không cần thiết và thông tin cho thấy lưu lượng liên quan đến tài nguyên HAV. Chỉ một ảnh chụp không có header thường không đủ để truy vết.

## Báo cáo tấn công hoặc truy cập trái phép

Kèm log firewall/server, IP nguồn, port/protocol, timestamp có múi giờ, số lần và mẫu request. Nếu báo cáo lỗ hổng của chính HAV, không khai thác vượt mức cần thiết để chứng minh, không truy cập dữ liệu của người khác và không công bố trước khi HAV có thời gian hợp lý để đánh giá.

## Báo cáo quyền sở hữu trí tuệ

Người có quyền hoặc đại diện hợp pháp nên cung cấp:

- thông tin nhận diện tác phẩm/tài sản được bảo hộ;
- vị trí cụ thể của nội dung bị cho là vi phạm;
- căn cứ về quyền hoặc thẩm quyền đại diện;
- thông tin liên hệ;
- tuyên bố thiện chí rằng việc sử dụng không được chủ thể quyền, đại diện hoặc pháp luật cho phép;
- xác nhận thông tin báo cáo là chính xác theo hiểu biết của người gửi.

HAV không quyết định tranh chấp quyền sở hữu phức tạp thay cho cơ quan có thẩm quyền, nhưng có thể bảo toàn bằng chứng, chuyển thông báo phù hợp hoặc hạn chế tài nguyên khi có căn cứ.

## Quy trình xử lý

HAV có thể:

1. kiểm tra báo cáo có đủ dữ liệu và thuộc phạm vi hay không;
2. đối chiếu log và tài nguyên vào thời điểm được nêu;
3. yêu cầu người báo cáo hoặc khách hàng cung cấp thêm thông tin;
4. giới hạn, cô lập hoặc tạm ngừng phần tài nguyên có rủi ro;
5. yêu cầu khắc phục và theo dõi tái phạm;
6. bảo toàn bằng chứng hoặc phối hợp với cơ quan có thẩm quyền khi pháp luật yêu cầu.

HAV ưu tiên theo mức độ gây hại và tính cấp bách. Vì quyền riêng tư và an ninh, HAV có thể không thể cung cấp danh tính khách hàng, log nội bộ hoặc toàn bộ kết quả điều tra cho người báo cáo.

## Báo cáo sai hoặc phản hồi của khách hàng

Không cố ý gửi báo cáo giả, gây hiểu lầm hoặc dùng quy trình abuse để quấy rối. Khách hàng cho rằng tài nguyên bị báo nhầm có thể phản hồi với mã vụ việc, giải thích use case, timestamp và bằng chứng. HAV sẽ xem xét thông tin mới nhưng có thể duy trì biện pháp tạm thời nếu rủi ro đang diễn ra.

## Trường hợp khẩn cấp

Nếu sự việc đe dọa tức thời tới tính mạng, an toàn công cộng hoặc tài sản, hãy liên hệ ngay cơ quan có thẩm quyền tại nơi xảy ra sự việc và đồng thời gửi thông tin kỹ thuật cho HAV. Email không phải kênh ứng cứu khẩn cấp được giám sát liên tục.

Xem các hành vi bị cấm tại [Chính sách sử dụng chấp nhận được](/acceptable-use), cách xử lý dữ liệu báo cáo tại [Chính sách quyền riêng tư](/privacy), hoặc [Liên hệ HAV](/contact).
