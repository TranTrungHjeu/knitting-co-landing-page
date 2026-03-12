import type {
  NavItem,
  Product,
  Stat,
  ContactInfo,
  FAQ,
  Partner,
  Testimonial,
  ProcessStep,
  BlogPost,
  PricingTier,
} from "@/types";

/* ===== NAVIGATION ===== */
export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Quy trình", href: "#process" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "Liên hệ", href: "#contact" },
];

/* ===== COMPANY ===== */
export const COMPANY = {
  name: "Dệt Kim Liên Việt",
  shortName: "Liên Việt",
  slogan: "Chất lượng tạo nên thương hiệu",
  description:
    "Chuyên sản xuất và cung cấp các loại vải dệt kim chất lượng cao, uy tín hàng đầu tại TP. Hồ Chí Minh.",
  founded: 2012,
  phone: "0909 045 668",
  phoneRaw: "0909045668",
  email: "detkimlienviet@gmail.com",
  zalo: "0909045668",
  address: "99/6 Trương Thị Hoa, KP3, P. Tân Thới Hiệp, Q.12, TP. Hồ Chí Minh",
  workingHours: "Thứ 2 – Thứ 7: 8:00 – 17:30",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.951554627192!2d106.6713788!3d10.8653303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529db7123992b%3A0xc6cb1c49988a25a9!2zOTkvNiBUcsawxqFuZyBUaOG7iyBIb2EsIFTDom4gVGjhu5tpIEhp4buHcCwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2svn!4v1714400000000!5m2!1svi!2svn",
};

/* ===== STATS ===== */
export const STATS: Stat[] = [
  { value: "12+", label: "Năm kinh nghiệm" },
  { value: "500+", label: "Đối tác tin cậy" },
  { value: "50+", label: "Loại vải sản xuất" },
  { value: "10+", label: "Quốc gia xuất khẩu" },
];

/* ===== PRODUCTS — FABRIC TYPES ===== */
export const PRODUCTS: Product[] = [
  {
    name: "Vải thun Cotton",
    description:
      "Vải dệt kim 100% cotton tự nhiên, mềm mại, thấm hút mồ hôi tốt, thân thiện với da. Đa dạng định lượng từ 120gsm đến 280gsm.",
    image: "/images/hero/bm32kjjzvuujwevo4u0i.webp",
    specs: ["100% Cotton", "120–280 gsm", "Khổ 1.6–1.8m"],
    applications: ["Áo thun", "Đồ lót", "Đồ trẻ em"],
  },
  {
    name: "Vải Cá Sấu (Pique)",
    description:
      "Vải dệt kim có gân nổi đặc trưng, thoáng khí, giữ form tốt. Phổ biến trong may áo polo, đồng phục cao cấp.",
    image: "/images/hero/iusr3bcw7txxunuz936a.webp",
    specs: ["Cotton / TC / CVC", "180–240 gsm", "Khổ 1.6–1.8m"],
    applications: ["Áo polo", "Đồng phục", "Thời trang"],
  },
  {
    name: "Vải Rib",
    description:
      "Vải dệt kim có độ co giãn cao theo chiều ngang, bề mặt có gân dọc đều. Thường dùng làm bo cổ, bo tay, hoặc may áo ôm sát.",
    image: "/images/hero/qq3qsuvojcm6lj6ktppo.webp",
    specs: ["Cotton / Poly blend", "180–250 gsm", "Co giãn 2 chiều"],
    applications: ["Bo cổ áo", "Áo ôm", "Phụ kiện"],
  },
  {
    name: "Vải Interlock",
    description:
      "Vải đan hai mặt phải, dày dặn, không cuộn mép, bề mặt mịn đều hai mặt. Lý tưởng cho sản phẩm cao cấp.",
    image: "/images/hero/x8zngplhilwljzqyanbt.webp",
    specs: ["Cotton / TC / PE", "200–300 gsm", "Hai mặt phải"],
    applications: ["Áo khoác nhẹ", "Đồ thể thao", "Baby wear"],
  },
  {
    name: "Vải TC / CVC",
    description:
      "Vải pha Tetron–Cotton (TC) hoặc CVC với tỉ lệ pha linh hoạt, ít nhăn, bền màu, giá thành hợp lý cho sản xuất số lượng lớn.",
    image: "/images/hero/wq79mo82dwk9tpp8zang.webp",
    specs: ["TC 65/35 hoặc CVC 60/40", "150–220 gsm", "Ít co rút"],
    applications: ["Đồng phục", "Áo thun giá tốt", "Sản xuất SL lớn"],
  },
  {
    name: "Vải Nỉ (Fleece)",
    description:
      "Vải dệt kim một mặt hoặc hai mặt chải lông, giữ ấm tốt, nhẹ và mềm. Phổ biến trong áo khoác, hoodie mùa đông.",
    image: "/images/hero/z71dp1p2jjkcn6asu0iw.webp",
    specs: ["Cotton / Poly / TC", "280–400 gsm", "Mặt trong chải bông"],
    applications: ["Hoodie", "Áo khoác", "Đồ mùa đông"],
  },
  {
    name: "Vải Poly (PE 100%)",
    description:
      "Vải Polyester dệt kim, nhanh khô, bền màu, giá thành thấp. Thích hợp cho đồ thể thao, áo sự kiện, in chuyển nhiệt.",
    image: "/images/hero/x8zngplhilwljzqyanbt.webp",
    specs: ["100% Polyester", "120–180 gsm", "Nhanh khô"],
    applications: ["Đồ thể thao", "Áo sự kiện", "In chuyển nhiệt"],
  },
  {
    name: "Vải Mesh (Lưới)",
    description:
      "Vải dệt kim có lỗ thoáng khí, nhẹ, dùng làm lớp lót, phụ kiện thể thao hoặc thời trang streetwear.",
    image: "/images/hero/xiqhn0o1cjd5fig6mkyf.webp",
    specs: ["PE / Nylon", "80–150 gsm", "Thoáng khí tối đa"],
    applications: ["Lót áo khoác", "Thể thao", "Streetwear"],
  },
];

/* ===== PROCESS STEPS ===== */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận yêu cầu",
    description:
      "Lắng nghe nhu cầu, tư vấn loại vải phù hợp, định lượng và báo giá chi tiết.",
  },
  {
    step: 2,
    title: "Duyệt mẫu vải",
    description:
      "Sản xuất mẫu vải để khách hàng kiểm tra chất lượng, màu sắc và đặc tính trước khi duyệt.",
  },
  {
    step: 3,
    title: "Sản xuất hàng loạt",
    description:
      "Tiến hành dệt, nhuộm và hoàn tất vải với quy trình kiểm soát chất lượng nghiêm ngặt.",
  },
  {
    step: 4,
    title: "Kiểm tra & giao hàng",
    description:
      "Kiểm tra toàn bộ lô vải, đóng cuộn cẩn thận và giao hàng đúng cam kết.",
  },
];

/* ===== PARTNERS ===== */
export const PARTNERS: Partner[] = [
  { src: "/images/logos/logo1.svg", alt: "Đối tác 1" },
  { src: "/images/logos/logo2.svg", alt: "Đối tác 2" },
  { src: "/images/logos/logo3.svg", alt: "Đối tác 3" },
  { src: "/images/logos/logo4.svg", alt: "Đối tác 4" },
  { src: "/images/logos/logo5.svg", alt: "Đối tác 5" },
  { src: "/images/logos/logo6.svg", alt: "Đối tác 6" },
];

/* ===== TESTIMONIALS ===== */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Nguyễn Văn Minh",
    role: "Giám đốc, Công ty May Mặc Thành Đạt",
    content:
      "Chất lượng vải ổn định, giao hàng đúng hẹn. Liên Việt là đối tác cung cấp vải tin cậy nhất của chúng tôi suốt nhiều năm qua.",
  },
  {
    name: "Trần Thị Hoa",
    role: "Quản lý mua hàng, Chuỗi thời trang Bella",
    content:
      "Vải dệt kim Liên Việt đa dạng chủng loại, màu sắc đồng đều giữa các lô hàng. Đội ngũ tư vấn rất am hiểu và nhiệt tình.",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Chủ xưởng gia công may mặc",
    content:
      "Nguồn cung ổn định, giá sỉ hợp lý, vải ít lỗi. Đặt hàng số lượng lớn rất yên tâm về chất lượng và tiến độ.",
  },
];

/* ===== CONTACT INFO ===== */
export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "map",
    label: "Địa chỉ",
    value: COMPANY.address,
  },
  {
    icon: "phone",
    label: "Điện thoại",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneRaw}`,
  },
  {
    icon: "mail",
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: "clock",
    label: "Giờ làm việc",
    value: COMPANY.workingHours,
  },
];

/* ===== PRICING TIERS ===== */
export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Đơn lẻ / Mẫu thử",
    description: "Phù hợp cá nhân hoặc doanh nghiệp cần mua mẫu thử nghiệm",
    features: [
      "Từ 10kg trở lên",
      "Đa dạng loại vải",
      "Tư vấn chọn vải phù hợp",
      "Giao hàng tận nơi tại TP.HCM",
    ],
  },
  {
    name: "Sỉ doanh nghiệp",
    description:
      "Dành cho xưởng may, doanh nghiệp sản xuất đặt hàng thường xuyên",
    features: [
      "Từ 100kg trở lên",
      "Giá ưu đãi theo số lượng",
      "Hợp đồng dài hạn",
      "Ưu tiên sản xuất & giao hàng",
      "Hỗ trợ nhuộm màu theo yêu cầu",
    ],
  },
  {
    name: "OEM / Xuất khẩu",
    description:
      "Sản xuất theo đơn đặt hàng riêng, đáp ứng tiêu chuẩn xuất khẩu",
    features: [
      "Sản xuất theo thông số riêng",
      "Kiểm tra chất lượng quốc tế",
      "Chứng nhận xuất xứ",
      "Đóng gói theo yêu cầu",
      "Hỗ trợ logistics xuất khẩu",
      "Account manager riêng",
    ],
  },
];

/* ===== FAQS ===== */
export const FAQS: FAQ[] = [
  {
    question: "Các loại vải dệt kim nào được sản xuất tại Liên Việt?",
    answer:
      "Chúng tôi sản xuất đa dạng: vải thun Cotton, Cá Sấu (Pique), Rib, Interlock, TC/CVC, Nỉ (Fleece), Poly, Mesh và nhiều loại vải đặc biệt khác theo yêu cầu.",
  },
  {
    question: "Số lượng đặt hàng tối thiểu là bao nhiêu?",
    answer:
      "Đơn hàng mẫu thử từ 10kg. Đơn sỉ từ 100kg trở lên sẽ được áp dụng giá ưu đãi. Liên hệ để được báo giá cụ thể.",
  },
  {
    question: "Có thể nhuộm màu theo yêu cầu được không?",
    answer:
      "Có. Chúng tôi nhận nhuộm màu theo mã Pantone hoặc mẫu màu khách hàng cung cấp. Đơn hàng nhuộm riêng tối thiểu 200kg/màu.",
  },
  {
    question: "Thời gian sản xuất và giao hàng?",
    answer:
      "Vải có sẵn giao trong 1–3 ngày. Đơn sản xuất riêng từ 7–15 ngày tùy số lượng. Chúng tôi giao hàng toàn quốc.",
  },
  {
    question: "Chính sách bảo hành và đổi trả?",
    answer:
      "Bảo hành lỗi sản xuất (sai màu, lỗi dệt, sai khổ/định lượng) trong 7 ngày. Miễn phí đổi trả với lô hàng lỗi.",
  },
  {
    question: "Làm sao để nhận mẫu vải thử?",
    answer:
      "Liên hệ qua Zalo hoặc điền form trên website, chúng tôi sẽ gửi mẫu vải miễn phí (phí ship khách chịu) trong 1–2 ngày.",
  },
];

/* ===== BLOG POSTS ===== */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cach-chon-vai-det-kim-phu-hop",
    title: "Cách chọn vải dệt kim phù hợp cho từng sản phẩm",
    excerpt:
      "Hướng dẫn chi tiết cách lựa chọn đúng loại vải dệt kim dựa trên mục đích sử dụng, mùa vụ và đối tượng khách hàng.",
    date: "2026-02-15",
    category: "Kiến thức vải",
    image: "/images/hero/bm32kjjzvuujwevo4u0i.webp",
  },
  {
    slug: "phan-biet-vai-cotton-tc-cvc",
    title: "Phân biệt vải Cotton, TC và CVC — Chọn đúng, tiết kiệm chi phí",
    excerpt:
      "So sánh chi tiết 3 loại vải phổ biến nhất trong ngành dệt kim: ưu nhược điểm, giá cả và ứng dụng thực tế.",
    date: "2026-01-28",
    category: "Kiến thức vải",
    image: "/images/hero/iusr3bcw7txxunuz936a.webp",
  },
  {
    slug: "xu-huong-vai-det-kim-2026",
    title: "Xu hướng vải dệt kim 2026: Bền vững và công nghệ cao",
    excerpt:
      "Tổng hợp các xu hướng vải dệt kim mới nhất: vải tái chế, vải chống khuẩn, vải cooling và công nghệ dệt 4.0.",
    date: "2026-01-10",
    category: "Tin ngành",
    image: "/images/hero/vy5vjrz1ew9ehipfxzu0.webp",
  },
];
