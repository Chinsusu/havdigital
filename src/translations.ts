export interface TranslationLocale {
  navServices: string;
  navFeatures: string;
  navFaq: string;
  navContact: string;
  navBtnContact: string;
  
  heroTitle: string;
  heroSubtitle: string;
  heroBtnExplore: string;
  heroBtnConsult: string;
  
  statUptime: string;
  statUptimeDesc: string;
  statBandwidth: string;
  statBandwidthDesc: string;
  statSupport: string;
  statSupportDesc: string;
  
  servicesTitle: string;
  servicesSubtitle: string;
  
  vpsTitle: string;
  vpsDesc: string;
  vpsFeature1: string;
  vpsFeature2: string;
  vpsFeature3: string;
  vpsFeature4: string;
  vpsFeature5: string;
  vpsBtn: string;
  
  proxyTitle: string;
  proxyDesc: string;
  proxyFeature1: string;
  proxyFeature2: string;
  proxyFeature3: string;
  proxyFeature4: string;
  proxyFeature5: string;
  proxyBtn: string;
  
  dedicatedTitle: string;
  dedicatedDesc: string;
  dedicatedFeature1: string;
  dedicatedFeature2: string;
  dedicatedFeature3: string;
  dedicatedFeature4: string;
  dedicatedFeature5: string;
  dedicatedBtn: string;
  
  featuresTitle: string;
  featuresSubtitle: string;
  featureSpeedTitle: string;
  featureSpeedDesc: string;
  featureSecureTitle: string;
  featureSecureDesc: string;
  featureAutoTitle: string;
  featureAutoDesc: string;
  featureSupportTitle: string;
  featureSupportDesc: string;
  
  faqTitle: string;
  faqSubtitle: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
  faqQ3: string;
  faqA3: string;
  faqQ4: string;
  faqA4: string;
  
  contactTitle: string;
  contactSubtitle: string;
  labelName: string;
  labelEmail: string;
  labelService: string;
  labelMessage: string;
  selectPlaceholder: string;
  optionVps: string;
  optionProxy: string;
  optionDedicated: string;
  btnSubmit: string;
  formSuccess: string;
  formError: string;
  
  footerDesc: string;
  footerInfoTitle: string;
  footerInfoAddress: string;
  footerInfoPhone: string;
  footerLinksTitle: string;
  footerCopyright: string;
}

export interface TranslationDictionary {
  vi: TranslationLocale;
  en: TranslationLocale;
}

export const translations: TranslationDictionary = {
  vi: {
    // Navigation
    navServices: "Dịch vụ",
    navFeatures: "Ưu điểm",
    navFaq: "Hỏi đáp",
    navContact: "Liên hệ",
    navBtnContact: "Tư vấn ngay",
    
    // Hero Section
    heroTitle: "Hạ Tầng Số Vượt Trội Cho Doanh Nghiệp Bạn",
    heroSubtitle: "Giải pháp Cloud VPS hiệu năng cao, Proxy bảo mật và Máy chủ riêng mạnh mẽ giúp doanh nghiệp vận hành mượt mà, bảo mật tối đa và tối ưu chi phí.",
    heroBtnExplore: "Khám phá Dịch vụ",
    heroBtnConsult: "Yêu cầu Tư vấn",
    
    // Stats Section
    statUptime: "99.99% Uptime",
    statUptimeDesc: "Cam kết hạ tầng ổn định",
    statBandwidth: "Băng thông cực khủng",
    statBandwidthDesc: "Kết nối trong nước & quốc tế",
    statSupport: "Hỗ trợ 24/7/365",
    statSupportDesc: "Kỹ thuật trực tuyến liên tục",
    
    // Services Section
    servicesTitle: "Dịch Vụ Chủ Đạo",
    servicesSubtitle: "Các giải pháp hạ tầng máy chủ & kết nối mạng tin cậy được thiết kế để mở rộng cùng doanh nghiệp của bạn.",
    
    // Cloud VPS
    vpsTitle: "Cloud VPS",
    vpsDesc: "Máy chủ ảo đám mây sử dụng công nghệ ảo hóa KVM hiện đại, ổ cứng NVMe SSD chuyên dụng cho hiệu năng đọc ghi siêu tốc.",
    vpsFeature1: "Vi xử lý AMD EPYC / Intel Xeon Gold thế hệ mới",
    vpsFeature2: "Lưu trữ NVMe SSD Enterprise (RAID 10)",
    vpsFeature3: "Cổng mạng 1Gbps - 10Gbps không giới hạn băng thông",
    vpsFeature4: "Hệ điều hành Linux/Windows cài đặt tự động",
    vpsFeature5: "Quản trị dễ dàng: Reinstall, VNC, Reboot tức thì",
    vpsBtn: "Nhận tư vấn cấu hình VPS",
    
    // Proxy
    proxyTitle: "Premium Proxy",
    proxyDesc: "Dịch vụ Proxy cá nhân tốc độ cao, độ trễ cực thấp. Hoàn hảo cho việc nuôi tài khoản, cào dữ liệu và marketing online.",
    proxyFeature1: "Đa dạng thể loại: IPv4, IPv6, Residential, Datacenter",
    proxyFeature2: "Hỗ trợ đầy đủ giao thức HTTP, HTTPS và SOCKS5",
    proxyFeature3: "Độ trễ (Latency) cực thấp, tốc độ tải tối đa",
    proxyFeature4: "Bảo mật cao, không log thông tin người dùng",
    proxyFeature5: "Kích hoạt tự động, thay đổi IP linh hoạt",
    proxyBtn: "Yêu cầu báo giá Proxy",
    
    // Dedicated Server
    dedicatedTitle: "Dedicated Server",
    dedicatedDesc: "Cho thuê máy chủ vật lý riêng biệt với 100% tài nguyên phần cứng chuyên dụng. Đảm bảo hiệu suất tối đa và tính riêng tư tuyệt đối.",
    dedicatedFeature1: "Phần cứng chính hãng Dell, HP cấu hình cực mạnh",
    dedicatedFeature2: "Tùy biến linh hoạt CPU, RAM, ổ cứng theo yêu cầu",
    dedicatedFeature3: "Tích hợp sẵn tường lửa chống DDoS chuyên sâu",
    dedicatedFeature4: "Bàn giao kèm quyền quản trị cao nhất qua IPMI/iDRAC",
    dedicatedFeature5: "Uptime 99.99% được giám sát liên tục 24/7",
    dedicatedBtn: "Liên hệ cấu hình Server riêng",
    
    // Features Section
    featuresTitle: "Tại Sao Nên Chọn HAV Digital?",
    featuresSubtitle: "Chúng tôi không chỉ cung cấp dịch vụ máy chủ, chúng tôi đồng hành cùng sự phát triển của bạn.",
    featureSpeedTitle: "Tốc độ vượt trội",
    featureSpeedDesc: "Sử dụng 100% phần cứng thế hệ mới nhất cùng hệ thống kết nối mạng Core Switch băng thông lớn.",
    featureSecureTitle: "An toàn thông tin",
    featureSecureDesc: "Mã hóa dữ liệu cấp độ cao kết hợp hệ thống bảo mật đa tầng chặn đứng mọi nguy cơ tấn công.",
    featureAutoTitle: "Kích hoạt tức thì",
    featureAutoDesc: "Không cần chờ đợi. Hệ thống tự động triển khai Cloud VPS và cung cấp Proxy ngay sau khi thanh toán.",
    featureSupportTitle: "Kỹ thuật túc trực 24/7",
    featureSupportDesc: "Giải quyết sự cố nhanh chóng. Kỹ thuật viên giàu kinh nghiệm hỗ trợ trực tiếp không qua trung gian.",
    
    // FAQ Section
    faqTitle: "Câu Hỏi Thường Gặp",
    faqSubtitle: "Những thắc mắc phổ biến về dịch vụ của HAV Digital.",
    faqQ1: "Tôi có thể cài đặt hệ điều hành gì trên Cloud VPS?",
    faqA1: "Hệ thống hỗ trợ tự động cài đặt các bản phân phối Linux phổ biến như Ubuntu, CentOS, Debian, AlmaLinux và cả Windows Server phiên bản mới nhất.",
    faqQ2: "Proxy của HAV Digital hỗ trợ các giao thức nào?",
    faqA2: "Toàn bộ dịch vụ Proxy của chúng tôi đều hỗ trợ đồng thời các giao thức HTTP, HTTPS và SOCKS5, tương thích hoàn toàn với các phần mềm nuôi nick, bot, và trình duyệt ẩn danh.",
    faqQ3: "Thời gian bàn giao máy chủ riêng Dedicated Server là bao lâu?",
    faqA3: "Đối với cấu hình máy chủ tiêu chuẩn có sẵn, thời gian bàn giao chỉ từ 2 đến 4 giờ. Với các cấu hình tùy chọn lắp ráp riêng theo yêu cầu, thời gian bàn giao tối đa là 24 giờ kể từ khi xác nhận đơn hàng.",
    faqQ4: "Tôi có được hỗ trợ cài đặt ban đầu không?",
    faqA4: "Có. HAV Digital hỗ trợ miễn phí cài đặt hệ điều hành, cấu hình mạng cơ bản, cài đặt web server (Nginx/Apache) hoặc control panel thông dụng (CyberPanel, AAPanel) cho khách hàng mới.",
    
    // Contact Section
    contactTitle: "Yêu Cầu Tư Vấn Dịch Vụ",
    contactSubtitle: "Hãy để lại thông tin, đội ngũ kỹ sư của HAV Digital sẽ liên hệ hỗ trợ bạn thiết lập cấu hình tối ưu nhất trong vòng 15 phút.",
    labelName: "Họ và Tên",
    labelEmail: "Địa chỉ Email",
    labelService: "Dịch vụ bạn quan tâm",
    labelMessage: "Yêu cầu cụ thể (Cấu hình VPS, số lượng Proxy, hệ điều hành...)",
    selectPlaceholder: "-- Chọn dịch vụ quan tâm --",
    optionVps: "Cloud VPS (Máy chủ ảo)",
    optionProxy: "Premium Proxy (IPv4 / IPv6 / Dân cư)",
    optionDedicated: "Dedicated Server (Máy chủ vật lý riêng)",
    btnSubmit: "Gửi Yêu Cầu Liên Hệ",
    formSuccess: "Cảm ơn bạn! Yêu cầu tư vấn của bạn đã được gửi thành công đến HAV Digital. Đội ngũ tư vấn sẽ liên hệ lại với bạn qua email sớm nhất.",
    formError: "Có lỗi xảy ra khi gửi yêu cầu. Xin hãy thử lại hoặc liên hệ trực tiếp support@havdigital.com.",
    
    // Footer
    footerDesc: "Nhà cung cấp hạ tầng số tin cậy hàng đầu. Chuyên cung cấp Cloud VPS, Proxy tốc độ cao và Dedicated Server doanh nghiệp.",
    footerInfoTitle: "Thông tin liên hệ",
    footerInfoAddress: "Địa chỉ: Đang cập nhật",
    footerInfoPhone: "Điện thoại: Đang cập nhật",
    footerLinksTitle: "Liên kết nhanh",
    footerCopyright: "© 2026 Công ty TNHH Giải pháp Số HAV. Bảo lưu mọi quyền."
  },
  en: {
    // Navigation
    navServices: "Services",
    navFeatures: "Features",
    navFaq: "FAQ",
    navContact: "Contact",
    navBtnContact: "Contact Us",
    
    // Hero Section
    heroTitle: "High-Performance Digital Infrastructure",
    heroSubtitle: "High-performance Cloud VPS, secure Proxies, and powerful Dedicated Servers built to run your business smoothly, safely, and cost-effectively.",
    heroBtnExplore: "Explore Services",
    heroBtnConsult: "Request Consultation",
    
    // Stats Section
    statUptime: "99.99% Uptime",
    statUptimeDesc: "Stable infrastructure guarantee",
    statBandwidth: "Massive Bandwidth",
    statBandwidthDesc: "Global and domestic network backbone",
    statSupport: "24/7/365 Support",
    statSupportDesc: "Continuous online engineering team",
    
    // Services Section
    servicesTitle: "Our Core Services",
    servicesSubtitle: "Reliable hosting and network solutions designed to scale alongside your business growth.",
    
    // Cloud VPS
    vpsTitle: "Cloud VPS",
    vpsDesc: "High-performance virtual private servers powered by KVM virtualization and enterprise-grade NVMe SSD storage for lightning-fast read/write speeds.",
    vpsFeature1: "Next-gen AMD EPYC / Intel Xeon Gold processors",
    vpsFeature2: "Enterprise NVMe SSD storage with RAID 10 protection",
    vpsFeature3: "1Gbps - 10Gbps uplink with unlimited bandwidth",
    vpsFeature4: "Automated Linux and Windows OS installation",
    vpsFeature5: "Instant control panel: Reinstall, VNC, Reboot",
    vpsBtn: "Request VPS Custom Configuration",
    
    // Proxy
    proxyTitle: "Premium Proxy",
    proxyDesc: "High-speed personal proxy servers with ultra-low latency. Ideal for account management, web scraping, and digital marketing operations.",
    proxyFeature1: "Various types: IPv4, IPv6, Residential, Datacenter",
    proxyFeature2: "Fully supports HTTP, HTTPS, and SOCKS5 protocols",
    proxyFeature3: "Ultra-low latency with maximum throughput speeds",
    proxyFeature4: "Highly secure, absolute privacy with no-logs policy",
    proxyFeature5: "Instant automated delivery and flexible IP rotations",
    proxyBtn: "Request Proxy Quotation",
    
    // Dedicated Server
    dedicatedTitle: "Dedicated Server",
    dedicatedDesc: "Rent physical servers with 100% dedicated hardware resources. Guarantees maximum computing performance, stability, and absolute privacy.",
    dedicatedFeature1: "Genuine Dell & HP enterprise hardware",
    dedicatedFeature2: "Fully customizable CPU, RAM, and storage layouts",
    dedicatedFeature3: "Built-in professional DDoS mitigation system",
    dedicatedFeature4: "Full root access with IPMI/iDRAC remote management",
    dedicatedFeature5: "99.99% Uptime SLA with 24/7 proactive monitoring",
    dedicatedBtn: "Request Dedicated Server Setup",
    
    // Features Section
    featuresTitle: "Why Choose HAV Digital?",
    featuresSubtitle: "We don't just host your business; we partner in your digital growth.",
    featureSpeedTitle: "Superior Speed",
    featureSpeedDesc: "Leveraging 100% next-gen hardware paired with core fiber networks for low latency.",
    featureSecureTitle: "Advanced Security",
    featureSecureDesc: "High-grade data encryption and multi-layered threat mitigation to stop cyber attacks.",
    featureAutoTitle: "Instant Provisioning",
    featureAutoDesc: "No waiting lists. Get your Cloud VPS deployed or Proxies generated instantly after checkout.",
    featureSupportTitle: "24/7 Expert Support",
    featureSupportDesc: "Fast resolution. Contact seasoned network engineers directly without long ticket queues.",
    
    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common queries regarding HAV Digital's products and platforms.",
    faqQ1: "What operating systems can I install on Cloud VPS?",
    faqA1: "We support automatic provisioning of standard Linux distributions (Ubuntu, CentOS, Debian, AlmaLinux) as well as the latest Windows Server releases.",
    faqQ2: "What protocols do your proxies support?",
    faqA2: "All our Proxy servers support HTTP, HTTPS, and SOCKS5 protocols simultaneously, compatible with all automation tools, scrapers, and anti-detect browsers.",
    faqQ3: "How long does it take to deploy a Dedicated Server?",
    faqA3: "Standard pre-configured dedicated servers are provisioned within 2 to 4 hours. Custom hardware modifications will be assembled and delivered within a maximum of 24 hours.",
    faqQ4: "Do you assist with initial server setup?",
    faqA4: "Yes! HAV Digital offers free OS installation, initial network setup, and installation of basic web servers (Nginx/Apache) or popular hosting panels (CyberPanel, AAPanel) for new clients.",
    
    // Contact Section
    contactTitle: "Request Service Consultation",
    contactSubtitle: "Leave your information and requirements. Our support engineers will contact you within 15 minutes to help set up the optimal solution.",
    labelName: "Full Name",
    labelEmail: "Email Address",
    labelService: "Service of Interest",
    labelMessage: "Detailed Requirements (VPS specs, Proxy quantity, OS details...)",
    selectPlaceholder: "-- Select service of interest --",
    optionVps: "Cloud VPS (Virtual Server)",
    optionProxy: "Premium Proxy (IPv4 / IPv6 / Residential)",
    optionDedicated: "Dedicated Server (Bare Metal)",
    btnSubmit: "Send Contact Request",
    formSuccess: "Thank you! Your request has been successfully sent to HAV Digital. Our team will contact you via email shortly.",
    formError: "Failed to send request. Please try again or contact support@havdigital.com directly.",
    
    // Footer
    footerDesc: "Your trusted digital infrastructure provider. Specializing in high-performance Cloud VPS, secure Proxies, and enterprise Dedicated Servers.",
    footerInfoTitle: "Contact Info",
    footerInfoAddress: "Address: TBA",
    footerInfoPhone: "Phone: TBA",
    footerLinksTitle: "Quick Links",
    footerCopyright: "© 2026 HAV Digital Solutions. All rights reserved."
  }
};
