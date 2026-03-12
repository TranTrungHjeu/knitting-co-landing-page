import type {
  NavItem,
  Product,
  ProductCategory,
  Stat,
  ContactInfo,
  FAQ,
  Partner,
  Testimonial,
  ProcessStep,
  BlogPost,
  PricingTier,
  Service,
  GalleryImage,
} from "@/types";

/* ===== NAVIGATION ===== */
export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "Tin tức", href: "#blog" },
  { label: "Liên hệ", href: "#contact" },
];

/* ===== ABOUT SUBMENU ===== */
export const ABOUT_SUBMENU = [
  { label: "Giới thiệu chung", href: "#about" },
  { label: "Dịch vụ & Năng lực", href: "#services" },
  { label: "Hình ảnh nhà xưởng", href: "#gallery" },
  { label: "Video", href: "#video" },
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

/* ===== PRODUCT CATEGORIES ===== */
export const PRODUCT_CATEGORIES: {
  key: ProductCategory | "all";
  label: string;
}[] = [
  { key: "all", label: "Tất cả" },
  { key: "basic", label: "Vải Cơ Bản" },
  { key: "special", label: "Vải Đặc Biệt" },
  { key: "pattern", label: "Vải Hoa Văn" },
  { key: "eco", label: "Vải Bền Vững" },
];

/* ===== PRODUCTS — FABRIC TYPES ===== */
export const PRODUCTS: Product[] = [
  /* ── Basic ── */
  {
    slug: "single-jersey",
    name: "Single Jersey",
    description:
      "Vải dệt kim một mặt phải cơ bản, mềm mại, nhẹ, co giãn tốt. Đa dạng thành phần từ Cotton, TC, CVC đến PE, phù hợp mọi ứng dụng may mặc.",
    image: "/images/Single_Jersey/Single_Jersey_01.jpg",
    gallery: [
      "/images/Single_Jersey/Single_Jersey_01.jpg",
      "/images/Single_Jersey/Single_Jersey_02.jpg",
      "/images/Single_Jersey/Single_Jersey_03.jpg",
      "/images/Single_Jersey/Single_Jersey_04.jpg",
      "/images/Single_Jersey/Single_Jersey_05.jpg",
      "/images/Single_Jersey/Single_Jersey_06.jpg",
    ],
    specs: ["Cotton / TC / CVC / PE", "120–220 gsm", "Khổ 1.6–1.8m"],
    applications: ["Áo thun", "Đồ lót", "Đồ trẻ em", "Đồ mặc nhà"],
    category: "basic",
    sections: [],
  },
  {
    slug: "pique",
    name: "Pique",
    description:
      "Vải dệt kim có gân nổi đặc trưng hình mắt chim, thoáng khí, giữ form tốt. Kiểu dệt tạo bề mặt có kết cấu sang trọng, phổ biến trong may áo polo và đồng phục.",
    image: "/images/Pique/Pique_01.jpg",
    gallery: [
      "/images/Pique/Pique_01.jpg",
      "/images/Pique/Pique_02.jpg",
      "/images/Pique/Pique_03.jpg",
      "/images/Pique/Pique_04.jpg",
      "/images/Pique/Pique_05.jpg",
      "/images/Pique/Pique_06.jpg",
      "/images/Pique/Pique_07.jpg",
      "/images/Pique/Pique_08.jpg",
      "/images/Pique/Pique_09.jpg",
    ],
    specs: ["Cotton / TC / CVC", "180–240 gsm", "Khổ 1.6–1.8m"],
    applications: ["Áo polo", "Đồng phục", "Thời trang nam"],
    category: "basic",
    sections: [],
  },
  {
    slug: "rib",
    name: "Rib",
    description:
      "Vải dệt kim có gân dọc đều, độ co giãn cao theo chiều ngang. Cấu trúc đan xen mặt phải–mặt trái tạo độ đàn hồi vượt trội, thường dùng làm bo cổ, bo tay hoặc may áo ôm.",
    image: "/images/Rib/Rib_01.jpg",
    gallery: [
      "/images/Rib/Rib_01.jpg",
      "/images/Rib/Rib_02.jpg",
      "/images/Rib/Rib_03.jpg",
      "/images/Rib/Rib_04.jpg",
    ],
    specs: ["Cotton / Poly blend", "180–250 gsm", "Co giãn 2 chiều"],
    applications: ["Bo cổ áo", "Áo ôm", "Phụ kiện may mặc"],
    category: "basic",
    sections: [],
  },
  {
    slug: "interlock",
    name: "Interlock",
    description:
      "Vải đan hai mặt phải, dày dặn, không cuộn mép, bề mặt mịn đều cả hai mặt. Cấu trúc đan kép tạo độ bền cao và khả năng giữ form tuyệt vời, lý tưởng cho sản phẩm cao cấp.",
    image: "/images/Interlock/Interlock_01.jpg",
    gallery: [
      "/images/Interlock/Interlock_01.jpg",
      "/images/Interlock/Interlock_02.jpg",
      "/images/Interlock/Interlock_03.jpg",
      "/images/Interlock/Interlock_04.jpg",
    ],
    specs: ["Cotton / TC / PE", "200–300 gsm", "Hai mặt phải"],
    applications: ["Áo khoác nhẹ", "Đồ thể thao", "Đồ trẻ em cao cấp"],
    category: "basic",
    sections: [],
  },
  /* ── Special ── */
  {
    slug: "fleece",
    name: "Fleece",
    description:
      "Vải dệt kim một mặt hoặc hai mặt chải lông, giữ ấm tốt, nhẹ và mềm. Bề mặt chải bông tạo lớp đệm khí giữ nhiệt hiệu quả, phổ biến trong áo khoác và hoodie mùa đông.",
    image: "/images/Fleece/Fleece_01.jpg",
    gallery: [
      "/images/Fleece/Fleece_01.jpg",
      "/images/Fleece/Fleece_02.jpg",
      "/images/Fleece/Fleece_03.jpg",
      "/images/Fleece/Fleece_04.png",
    ],
    specs: ["Cotton / Poly / TC", "280–400 gsm", "Mặt trong chải bông"],
    applications: ["Hoodie", "Áo khoác", "Đồ mùa đông"],
    category: "special",
    sections: [],
  },
  {
    slug: "terry",
    name: "Terry",
    description:
      "Vải dệt kim có vòng lông (loop) ở mặt trong, thấm hút mồ hôi tốt, mềm mại. Cấu trúc vòng lông tạo khả năng giữ ẩm và thoáng khí, phù hợp cho đồ thể thao và trang phục casual.",
    image: "/images/Terry/Terry_01.jpg",
    gallery: [
      "/images/Terry/Terry_01.jpg",
      "/images/Terry/Terry_02.jpg",
      "/images/Terry/Terry_03.jpg",
      "/images/Terry/Terry_04.jpg",
      "/images/Terry/Terry_05.jpg",
      "/images/Terry/Terry_06.jpg",
      "/images/Terry/Terry_07.jpg",
      "/images/Terry/Terry_08.jpg",
    ],
    specs: ["Cotton / TC / CVC", "220–350 gsm", "Mặt trong có loop"],
    applications: ["Áo hoodie", "Đồ thể thao", "Trang phục casual"],
    category: "special",
    sections: [],
  },
  {
    slug: "towel-terry",
    name: "Towel Terry",
    description:
      "Vải dệt kim cấu trúc tương tự khăn bông, hai mặt đều có vòng lông. Khả năng thấm hút cực cao, mềm mại và dày dặn, lý tưởng cho sản phẩm gia dụng và thời trang cao cấp.",
    image: "/images/Towel_Terry/Towel_Terry_01.jpg",
    gallery: [
      "/images/Towel_Terry/Towel_Terry_01.jpg",
      "/images/Towel_Terry/Towel_Terry_02.jpg",
      "/images/Towel_Terry/Towel_Terry_03.jpg",
      "/images/Towel_Terry/Towel_Terry_04.jpg",
    ],
    specs: ["Cotton / Bamboo blend", "300–450 gsm", "Hai mặt vòng lông"],
    applications: ["Áo choàng tắm", "Khăn tắm", "Đồ gia dụng"],
    category: "special",
    sections: [],
  },
  {
    slug: "waffle",
    name: "Waffle",
    description:
      "Vải dệt kim có bề mặt nổi hình tổ ong 3D đặc trưng, tạo kết cấu hình học độc đáo. Thoáng khí, nhẹ, thấm hút tốt nhờ các ô tổ ong giữ không khí, phù hợp đồ mặc nhà và thời trang.",
    image: "/images/Waffle/Waffle_01.jpg",
    gallery: [
      "/images/Waffle/Waffle_01.jpg",
      "/images/Waffle/Waffle_02.jpg",
      "/images/Waffle/Waffle_03.jpg",
      "/images/Waffle/Waffle_04.jpg",
      "/images/Waffle/Waffle_05.jpg",
    ],
    specs: ["Cotton / Poly blend", "180–280 gsm", "Bề mặt tổ ong"],
    applications: ["Đồ mặc nhà", "Áo thun thời trang", "Khăn mặt"],
    category: "special",
    sections: [],
  },
  {
    slug: "mesh",
    name: "Mesh",
    description:
      "Vải dệt kim có cấu trúc lỗ thoáng khí, siêu nhẹ. Thiết kế lưới mở tối đa lưu thông không khí, thường dùng làm lớp lót áo khoác, phụ kiện thể thao hoặc thời trang streetwear.",
    image: "/images/Mesh/Mesh_01.jpg",
    gallery: [
      "/images/Mesh/Mesh_01.jpg",
      "/images/Mesh/Mesh_02.jpg",
      "/images/Mesh/Mesh_03.jpg",
      "/images/Mesh/Mesh_04.jpg",
      "/images/Mesh/Mesh_05.jpg",
      "/images/Mesh/Mesh_06.jpg",
      "/images/Mesh/Mesh_07.jpg",
      "/images/Mesh/Mesh_08.jpg",
      "/images/Mesh/Mesh_09.jpg",
      "/images/Mesh/Mesh_10.jpg",
    ],
    specs: ["PE / Nylon", "80–150 gsm", "Thoáng khí tối đa"],
    applications: ["Lót áo khoác", "Đồ thể thao", "Streetwear"],
    category: "special",
    sections: [],
  },
  /* ── Pattern ── */
  {
    slug: "stripe",
    name: "Stripe",
    description:
      "Vải dệt kim sọc dệt trực tiếp trên máy, sọc bền màu không phai theo thời gian. Đa dạng kiểu sọc: sọc ngang, sọc dọc, sọc đa sắc, mang lại vẻ năng động và hiện đại.",
    image: "/images/Stripe/Stripe_01.jpg",
    gallery: [
      "/images/Stripe/Stripe_01.jpg",
      "/images/Stripe/Stripe_02.jpg",
      "/images/Stripe/Stripe_03.jpg",
      "/images/Stripe/Stripe_04.jpg",
      "/images/Stripe/Stripe_05.jpg",
      "/images/Stripe/Stripe_06.jpg",
      "/images/Stripe/Stripe_07.jpg",
    ],
    specs: ["Cotton / TC / CVC", "160–240 gsm", "Sọc dệt bền màu"],
    applications: ["Áo thời trang", "Polo sọc", "Đồ trẻ em"],
    category: "pattern",
    sections: [],
  },
  {
    slug: "print",
    name: "Print",
    description:
      "Vải dệt kim in hoa văn đa dạng: in lưới, in chuyển nhiệt, in kỹ thuật số. Màu sắc sắc nét, bền màu sau nhiều lần giặt, đáp ứng mọi thiết kế sáng tạo.",
    image: "/images/Print/Print_01.jpg",
    gallery: [
      "/images/Print/Print_01.jpg",
      "/images/Print/Print_02.jpg",
      "/images/Print/Print_03.jpg",
      "/images/Print/Print_04.jpg",
      "/images/Print/Print_05.jpg",
      "/images/Print/Print_06.jpg",
      "/images/Print/Print_07.jpg",
      "/images/Print/Print_08.jpg",
      "/images/Print/Print_09.jpg",
    ],
    specs: ["Cotton / Poly / TC", "140–220 gsm", "In lưới / Chuyển nhiệt"],
    applications: ["Thời trang", "Đồ trẻ em", "Đồ mặc nhà"],
    category: "pattern",
    sections: [],
  },
  {
    slug: "computer-jacquard",
    name: "Computer Jacquard",
    description:
      "Vải dệt kim hoa văn Jacquard điều khiển bằng máy tính, tạo họa tiết phức tạp và tinh xảo. Công nghệ dệt hiện đại cho phép tái hiện mọi hoa văn với độ chính xác cao và đa dạng sắc màu.",
    image: "/images/Computer_Jacquard/Computer_Jacquard_01.jpg",
    gallery: [
      "/images/Computer_Jacquard/Computer_Jacquard_01.jpg",
      "/images/Computer_Jacquard/Computer_Jacquard_02.jpg",
      "/images/Computer_Jacquard/Computer_Jacquard_03.jpg",
      "/images/Computer_Jacquard/Computer_Jacquard_04.jpg",
      "/images/Computer_Jacquard/Computer_Jacquard_05.jpg",
      "/images/Computer_Jacquard/Computer_Jacquard_06.jpg",
      "/images/Computer_Jacquard/Computer_Jacquard_07.jpg",
      "/images/Computer_Jacquard/Computer_Jacquard_08.jpg",
      "/images/Computer_Jacquard/Computer_Jacquard_09.jpg",
    ],
    specs: ["Cotton / Poly blend", "180–300 gsm", "Hoa văn dệt máy tính"],
    applications: ["Thời trang cao cấp", "Vải trang trí", "Áo len"],
    category: "pattern",
    sections: [],
  },
  /* ── Eco / Sustainable ── */
  {
    slug: "bamboo-fabric",
    name: "Bamboo Fabric",
    description:
      "Vải tự nhiên từ sợi tre, mềm mịn hơn cả Cotton. Kháng khuẩn tự nhiên nhờ chất bamboo kun, thoáng khí, thấm hút tốt, phân hủy sinh học và thân thiện môi trường.",
    image: "/images/Bamboo_Fabric/Bamboo_Fabric.jpg",
    gallery: ["/images/Bamboo_Fabric/Bamboo_Fabric.jpg"],
    specs: [
      "100% Bamboo / Bamboo blend",
      "150–250 gsm",
      "Kháng khuẩn tự nhiên",
    ],
    applications: ["Đồ lót", "Đồ trẻ em", "Đồ thể thao", "Đồ ngủ"],
    category: "eco",
    sections: [
      {
        title: "Đặc điểm",
        content:
          "Mềm mại và mịn màng: Vải tre có độ mềm mịn tự nhiên, thậm chí còn mềm hơn cả cotton.\nThoáng khí và thấm hút tốt: Có khả năng hút ẩm tốt, giúp người mặc cảm thấy mát mẻ và khô ráo.\nKháng khuẩn tự nhiên: Nhờ chất \u201Cbamboo kun\u201D có trong sợi tre, vải có khả năng kháng khuẩn và khử mùi hiệu quả.\nPhân hủy sinh học: Vải tre dễ dàng phân hủy trong môi trường tự nhiên, không gây ô nhiễm.",
      },
      {
        title: "Ưu điểm",
        content:
          "Thân thiện với môi trường: Tre là loại cây phát triển nhanh mà không cần thuốc trừ sâu hay phân bón hóa học.\nĐộ bền cao: Vải tre bền chắc, không bị co rút hay nhăn nhiều sau khi giặt.\nChống tia UV: Có khả năng chống lại tia UV tự nhiên, bảo vệ làn da khỏi tác hại của ánh nắng mặt trời.",
      },
      {
        title: "Ứng dụng",
        content:
          "Thời trang: Áo thun, váy, đồ lót, đồ thể thao, đồ ngủ và trang phục thường ngày.\nĐồ gia dụng: Chăn ga gối đệm, khăn tắm, khăn trải bàn.\nĐồ trẻ em: Quần áo và tã vải nhờ đặc tính mềm mại và kháng khuẩn an toàn cho da nhạy cảm.\nSản phẩm y tế: Khẩu trang, băng gạc y tế nhờ khả năng kháng khuẩn tự nhiên.",
      },
      {
        title: "Quy trình sản xuất",
        content:
          "Thu hoạch tre: Tre được thu hoạch khi đạt độ trưởng thành phù hợp.\nTách sợi: Có 2 phương pháp chính — Phương pháp cơ học (nghiền thân tre thành bột, tách sợi và xe thành chỉ) và Phương pháp hóa học (sử dụng hóa chất để hòa tan thân tre, sau đó kéo sợi — còn gọi là vải Bamboo Rayon).\nXe sợi và dệt vải: Sợi tre được xe lại và dệt thành vải theo các kiểu dệt khác nhau.",
      },
      {
        title: "Bảo quản",
        content:
          "Giặt bằng nước lạnh hoặc ấm: Tránh giặt ở nhiệt độ cao để duy trì độ bền của vải.\nPhơi nơi thoáng mát: Không phơi trực tiếp dưới ánh nắng mặt trời.\nỦi ở nhiệt độ thấp: Để bảo đảm độ mềm mại và không làm biến dạng sợi.",
      },
    ],
  },
  {
    slug: "lotus-fabric",
    name: "Lotus Fabric",
    description:
      "Vải quý hiếm từ sợi thân cây sen, mềm mịn với độ bóng tự nhiên sang trọng. Sản xuất thủ công tinh xảo, thân thiện môi trường, phân hủy sinh học hoàn toàn.",
    image: "/images/Lotus_Fabric/Lotus_Fabric.jpg",
    gallery: ["/images/Lotus_Fabric/Lotus_Fabric.jpg"],
    specs: ["100% Lotus fiber", "120–180 gsm", "Độ bóng tự nhiên"],
    applications: ["Thời trang cao cấp", "Khăn choàng", "Nội thất"],
    category: "eco",
    sections: [
      {
        title: "Đặc điểm",
        content:
          "Mềm mại và mịn màng: Vải Lotus có độ mềm mịn tự nhiên, nhẹ nhàng và thoáng mát khi chạm vào.\nThoáng khí và thấm hút mồ hôi: Thích hợp mặc trong thời tiết nóng ẩm nhờ tính năng thoáng khí tuyệt vời.\nĐộ bóng tự nhiên: Sợi Lotus có độ bóng nhẹ tự nhiên, mang đến vẻ sang trọng và tinh tế.\nPhân hủy sinh học: Dễ dàng phân hủy trong môi trường tự nhiên, thân thiện với môi trường.",
      },
      {
        title: "Ưu điểm",
        content:
          "Thân thiện với môi trường: Quá trình sản xuất không sử dụng hóa chất độc hại, giảm thiểu tác động xấu đến hệ sinh thái.\nĐộc đáo và quý hiếm: Mỗi mét vải cần hàng ngàn thân sen, sản xuất thủ công nên số lượng rất hạn chế.\nBền chắc và đàn hồi tốt: Mặc dù nhẹ nhàng nhưng vải Lotus rất bền và có độ đàn hồi tốt.",
      },
      {
        title: "Ứng dụng",
        content:
          "Thời trang cao cấp: Áo sơ mi, váy đầm, khăn choàng cổ, trang phục truyền thống.\nPhụ kiện thời trang: Cà vạt, khăn quàng cổ, túi xách cao cấp.\nNội thất sang trọng: Rèm cửa, gối trang trí, khăn trải bàn.",
      },
      {
        title: "Quy trình sản xuất",
        content:
          "Thu hoạch: Thân cây sen được thu hoạch thủ công sau khi hoa tàn.\nTách sợi: Thân sen được cắt thành từng đoạn ngắn, tách lấy sợi bằng tay và xe lại thành chỉ.\nXe sợi và dệt vải: Sợi sen được xe lại và dệt thủ công trên khung cửi truyền thống.\nHoàn thiện: Vải được làm mềm tự nhiên bằng cách giặt bằng nước suối hoặc nước mưa.",
      },
      {
        title: "Bảo quản",
        content:
          "Giặt tay bằng nước lạnh: Tránh giặt máy hoặc sử dụng hóa chất mạnh.\nPhơi nơi thoáng mát: Tránh phơi trực tiếp dưới ánh nắng mặt trời.\nỦi ở nhiệt độ thấp: Để giữ được độ mềm mại và bóng mượt của vải.",
      },
    ],
  },
  {
    slug: "sorona-fabric",
    name: "Sorona Fabric",
    description:
      "Vải sinh học từ sợi PLA chiết xuất từ tinh bột ngô, phân hủy sinh học hoàn toàn. Mềm mại, kháng khuẩn, chống tĩnh điện, an toàn cho da nhạy cảm và thay thế sợi tổng hợp từ dầu mỏ.",
    image:
      "/images/Sorona_Fabric_(Corn_Fabric)/Sorona_Fabric_(Corn_Fabric).jpg",
    gallery: [
      "/images/Sorona_Fabric_(Corn_Fabric)/Sorona_Fabric_(Corn_Fabric).jpg",
    ],
    specs: ["PLA / Corn fiber blend", "140–220 gsm", "Phân hủy sinh học"],
    applications: ["Thời trang bền vững", "Đồ lót", "Túi vải eco"],
    category: "eco",
    sections: [
      {
        title: "Đặc điểm",
        content:
          "Mềm mại và nhẹ nhàng: Vải Corn có độ mềm mịn tự nhiên, tạo cảm giác dễ chịu khi mặc.\nThoáng khí và thấm hút tốt: Giúp người mặc cảm thấy mát mẻ và thoải mái.\nKháng khuẩn và khử mùi: Đặc tính tự nhiên của sợi PLA giúp hạn chế sự phát triển của vi khuẩn và nấm mốc.\nPhân hủy sinh học: Sau khi sử dụng, vải Corn có thể phân hủy tự nhiên mà không gây ô nhiễm.",
      },
      {
        title: "Ưu điểm",
        content:
          "Thân thiện với môi trường: Sản xuất từ nguyên liệu tái tạo (ngô) và có khả năng phân hủy sinh học.\nAn toàn cho da: Không gây kích ứng, phù hợp với cả làn da nhạy cảm.\nChống tĩnh điện: Không bị bám bụi hoặc gây khó chịu khi mặc.",
      },
      {
        title: "Ứng dụng",
        content:
          "Thời trang: Áo thun, váy, đồ lót, đồ thể thao, và trang phục thường ngày.\nĐồ gia dụng: Chăn ga gối đệm, khăn tắm, khăn trải bàn.\nSản phẩm công nghiệp: Túi vải thân thiện môi trường, bao bì sinh học.",
      },
      {
        title: "Quy trình sản xuất",
        content:
          "Chiết xuất tinh bột ngô: Từ ngô non hoặc ngô già.\nChuyển hóa tinh bột thành axit lactic: Thông qua quá trình lên men sinh học.\nPolyme hóa thành PLA: Axit lactic được polyme hóa để tạo thành sợi PLA.\nXe sợi và dệt vải: Sợi PLA được xe lại và dệt thành vải theo các kiểu dệt khác nhau.",
      },
      {
        title: "Bảo quản",
        content:
          "Giặt bằng nước lạnh hoặc ấm: Tránh giặt ở nhiệt độ cao để duy trì độ bền của vải.\nPhơi nơi thoáng mát: Không phơi trực tiếp dưới ánh nắng mặt trời.\nỦi ở nhiệt độ thấp: Để bảo đảm độ mềm mại và không làm biến dạng sợi.",
      },
    ],
  },
  {
    slug: "organic-cotton",
    name: "Organic Cotton",
    description:
      "Vải từ sợi bông hữu cơ không sử dụng hóa chất độc hại. An toàn cho da nhạy cảm, đạt chứng nhận GOTS và OEKO-TEX Standard 100. Mềm mại, bền chắc, không xù lông.",
    image:
      "/images/V\u1EA3i_Organic_Cotton_(Cotton_H\u1EEFu_C\u01A1)/V\u1EA3i_Organic_Cotton_(Cotton_H\u1EEFu_C\u01A1).jpg",
    gallery: [
      "/images/V\u1EA3i_Organic_Cotton_(Cotton_H\u1EEFu_C\u01A1)/V\u1EA3i_Organic_Cotton_(Cotton_H\u1EEFu_C\u01A1).jpg",
    ],
    specs: ["100% Organic Cotton", "150–280 gsm", "Chứng nhận GOTS"],
    applications: ["Đồ trẻ em", "Đồ lót", "Thời trang bền vững"],
    category: "eco",
    sections: [
      {
        title: "Đặc điểm",
        content:
          "An toàn và thân thiện với da: Không chứa hóa chất độc hại nên phù hợp với cả làn da nhạy cảm, đặc biệt là trẻ em.\nThoáng khí và thấm hút tốt: Giúp người mặc cảm thấy thoải mái, mát mẻ trong mọi điều kiện thời tiết.\nMềm mại và bền chắc: Sợi cotton tự nhiên mang lại cảm giác mềm mại, không bị xù lông sau nhiều lần giặt.\nPhân hủy sinh học: Dễ dàng phân hủy trong môi trường tự nhiên, không gây ô nhiễm.",
      },
      {
        title: "Ưu điểm",
        content:
          "An toàn và không gây dị ứng: Không sử dụng hóa chất độc hại.\nBền vững và thân thiện môi trường: Giảm thiểu tác động xấu đến hệ sinh thái.\nChất lượng cao: Mềm mại, thoáng khí và độ bền tốt.",
      },
      {
        title: "Ứng dụng",
        content:
          "Thời trang: Sản xuất quần áo trẻ em, đồ lót, áo phông, váy, và đồ mặc nhà.\nĐồ gia dụng: Chăn ga gối đệm, khăn tắm, khăn lau.\nPhụ kiện thời trang: Khăn quàng cổ, túi vải thân thiện môi trường.",
      },
      {
        title: "Tiêu chuẩn & Chứng nhận",
        content:
          "GOTS (Global Organic Textile Standard): Chứng nhận tiêu chuẩn cao nhất cho sản phẩm hữu cơ.\nOEKO-TEX Standard 100: Đảm bảo không chứa chất độc hại.",
      },
    ],
  },
  {
    slug: "wool-fabric",
    name: "Wool Fabric",
    description:
      "Vải len tự nhiên từ lông cừu, giữ ấm vượt trội, đàn hồi cao và chống nhăn. Kháng khuẩn tự nhiên nhờ lanolin, chống cháy, thấm hút ẩm mà vẫn giữ cảm giác khô thoáng.",
    image: "/images/Wool_Fabric/Wool_Fabric.jpg",
    gallery: ["/images/Wool_Fabric/Wool_Fabric.jpg"],
    specs: ["Wool / Merino blend", "200–350 gsm", "Kháng khuẩn tự nhiên"],
    applications: ["Áo len", "Vest công sở", "Đồ mùa đông"],
    category: "eco",
    sections: [
      {
        title: "Đặc điểm",
        content:
          "Giữ ấm tuyệt vời: Nhờ cấu trúc sợi xoăn tự nhiên, vải len giữ nhiệt tốt nhưng vẫn thoáng khí.\nĐàn hồi và chống nhăn: Len có độ đàn hồi cao, không dễ bị nhăn khi mặc.\nThấm hút ẩm: Có khả năng thấm hút hơi ẩm từ cơ thể mà vẫn giữ được cảm giác khô thoáng.\nKháng khuẩn tự nhiên: Nhờ lớp biểu bì sợi len chứa lanolin, vải có khả năng kháng khuẩn và khử mùi tự nhiên.\nChống cháy: Len có khả năng chống cháy tự nhiên và khó bắt lửa.",
      },
      {
        title: "Ưu điểm",
        content:
          "Giữ ấm tốt: Phù hợp cho trang phục mùa đông.\nThoáng khí và thấm hút ẩm: Giúp người mặc cảm thấy khô ráo và thoải mái.\nĐộ bền cao và đàn hồi tốt: Vải len có độ bền cao, không dễ bị nhăn hoặc giãn sau khi sử dụng.\nKháng khuẩn và khử mùi tự nhiên: Nhờ lớp lanolin trên sợi len.",
      },
      {
        title: "Ứng dụng",
        content:
          "Thời trang cao cấp: Áo len, áo khoác, váy, khăn choàng cổ, mũ và găng tay.\nĐồ công sở: Vest, blazer, quần âu và váy công sở.\nĐồ gia dụng: Chăn, thảm, gối trang trí, rèm cửa.\nĐồ thể thao: Quần áo thể thao giữ nhiệt (đặc biệt là Merino Wool).",
      },
      {
        title: "Quy trình sản xuất",
        content:
          "Thu hoạch lông: Từ cừu, dê, thỏ hoặc lạc đà bằng cách cắt lông (shearing) hoặc chải lông (combing).\nLàm sạch và xử lý: Loại bỏ bụi bẩn, dầu mỡ và tạp chất.\nXe sợi: Sợi len được xe lại để tạo thành chỉ.\nDệt vải: Sợi len được dệt thành vải theo các kiểu dệt khác nhau.\nHoàn thiện: Vải được giặt và xử lý để làm mềm, chống co rút và chống nhăn.",
      },
      {
        title: "Bảo quản",
        content:
          "Giặt tay hoặc giặt khô: Tránh giặt máy để không làm biến dạng sợi len.\nPhơi ngang: Để tránh bị giãn và biến dạng.\nBảo quản nơi khô ráo: Tránh ẩm mốc và sâu bọ. Có thể sử dụng túi chống ẩm hoặc long não để bảo quản lâu dài.\nỦi ở nhiệt độ thấp: Sử dụng bàn ủi hơi nước để tránh cháy sợi len.",
      },
    ],
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
      "Chúng tôi sản xuất đa dạng hơn 17 loại vải: Single Jersey, Pique, Rib, Interlock, Fleece, Terry, Mesh, Waffle, Stripe, Print, Computer Jacquard, cùng các dòng vải bền vững như Bamboo, Lotus, Sorona (Corn), Organic Cotton và Wool Fabric.",
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
export const BLOG_POSTS = [
  {
    slug: "xu-huong-vai-det-kim-2026",
    title: "Xu hướng vải dệt kim năm 2026: Công nghệ & ứng dụng mới",
    excerpt:
      "Khám phá các xu hướng nổi bật trong ngành vải dệt kim năm 2026: vật liệu bền vững, công nghệ sản xuất hiện đại, ứng dụng đa dạng từ thời trang đến công nghiệp.",
    image: "/images/blog/xu-huong-2026.avif",
    category: "Xu hướng",
    date: "12/03/2026",
    content: `
      <h2>Giới thiệu</h2>
      <p>Năm 2026 đánh dấu bước chuyển mình mạnh mẽ của ngành vải dệt kim tại Việt Nam và thế giới. Các xu hướng mới về vật liệu, công nghệ sản xuất và ứng dụng đa dạng đang tạo ra cơ hội lớn cho doanh nghiệp và người tiêu dùng.</p>
      <h2>1. Vật liệu bền vững lên ngôi</h2>
      <ul>
        <li><strong>Bamboo, Organic Cotton, Sorona, Lotus</strong> là những vật liệu thân thiện môi trường, được các nhà sản xuất và thương hiệu lớn ưu tiên nhờ khả năng phân hủy sinh học, an toàn cho sức khỏe và chất lượng vượt trội.</li>
        <li>Xu hướng sử dụng sợi tái chế, sợi tự nhiên giúp giảm tác động môi trường, tiết kiệm tài nguyên và đáp ứng nhu cầu phát triển bền vững.</li>
      </ul>
      <h2>2. Công nghệ sản xuất hiện đại</h2>
      <ul>
        <li><strong>AI, IoT, tự động hóa</strong> được ứng dụng rộng rãi trong kiểm soát chất lượng, tối ưu quy trình, giảm chi phí sản xuất và nâng cao hiệu quả quản lý.</li>
        <li>Máy dệt kim thế hệ mới cho phép tạo ra sản phẩm đa dạng, chính xác, tiết kiệm thời gian và nhân lực.</li>
        <li>Phần mềm quản lý sản xuất, ERP giúp doanh nghiệp chủ động trong điều phối, kiểm tra và giao hàng.</li>
      </ul>
      <h2>3. Ứng dụng đa dạng của vải dệt kim</h2>
      <ul>
        <li><strong>Thời trang:</strong> Vải dệt kim được sử dụng cho áo thun, váy, đồ lót, đồ thể thao, trang phục trẻ em và cao cấp.</li>
        <li><strong>Y tế:</strong> Sản xuất khẩu trang, băng gạc, đồ bảo hộ nhờ đặc tính kháng khuẩn, thấm hút tốt.</li>
        <li><strong>Công nghiệp:</strong> Vải kỹ thuật dùng cho lọc, bảo vệ, trang trí nội thất, túi vải thân thiện môi trường.</li>
        <li><strong>Nội thất:</strong> Chăn ga gối đệm, rèm cửa, khăn trải bàn với thiết kế hiện đại, sang trọng.</li>
      </ul>
      <h2>4. Dự báo xu hướng phát triển</h2>
      <ul>
        <li>Doanh nghiệp dệt kim sẽ tập trung vào <strong>phát triển sản phẩm xanh</strong>, nâng cao chất lượng, đa dạng hóa mẫu mã và ứng dụng công nghệ mới.</li>
        <li>Người tiêu dùng ngày càng ưu tiên sản phẩm thân thiện môi trường, có chứng nhận quốc tế và nguồn gốc rõ ràng.</li>
        <li>Thị trường xuất khẩu mở rộng sang các quốc gia phát triển, đòi hỏi tiêu chuẩn cao về chất lượng và trách nhiệm xã hội.</li>
      </ul>
      <h2>Kết luận</h2>
      <p>Xu hướng vải dệt kim năm 2026 là sự kết hợp giữa vật liệu bền vững, công nghệ hiện đại và ứng dụng đa dạng. Doanh nghiệp cần chủ động đổi mới, đầu tư công nghệ và phát triển sản phẩm xanh để đáp ứng nhu cầu thị trường và góp phần bảo vệ môi trường.</p>
    `,
  },
  {
    slug: "kinh-nghiem-chon-vai-det-kim",
    title: "Kinh nghiệm chọn vải dệt kim phù hợp cho doanh nghiệp",
    excerpt:
      "Tư vấn cách chọn vải dệt kim phù hợp: phân biệt các loại vải, xác định nhu cầu, kiểm tra chất lượng, lựa chọn nhà cung cấp uy tín.",
    image: "/images/blog/kinh-nghiem-chon-vai.avif",
    category: "Kinh nghiệm",
    date: "10/03/2026",
    content: `
      <h2>Giới thiệu</h2>
      <p>Chọn vải dệt kim phù hợp là yếu tố quyết định chất lượng sản phẩm may mặc và hiệu quả kinh doanh. Bài viết này chia sẻ kinh nghiệm thực tế giúp doanh nghiệp lựa chọn đúng loại vải, kiểm tra chất lượng và hợp tác với nhà cung cấp uy tín.</p>
      <h2>1. Phân biệt các loại vải dệt kim</h2>
      <ul>
        <li><strong>Single Jersey:</strong> Mềm mại, nhẹ, co giãn tốt, phù hợp áo thun, đồ lót.</li>
        <li><strong>Pique:</strong> Bề mặt gân nổi, thoáng khí, giữ form tốt, dùng cho áo polo, đồng phục.</li>
        <li><strong>Rib:</strong> Co giãn nhiều, dùng cho bo cổ, bo tay, đồ thể thao.</li>
        <li><strong>Interlock:</strong> Hai mặt giống nhau, dày dặn, bền, dùng cho áo khoác, đồ trẻ em.</li>
        <li><strong>Fleece:</strong> Giữ ấm, mềm, dùng cho áo nỉ, áo khoác mùa đông.</li>
        <li><strong>Mesh:</strong> Lưới thoáng khí, nhẹ, dùng cho lớp lót, đồ thể thao.</li>
      </ul>
      <h2>2. Xác định nhu cầu sử dụng</h2>
      <ul>
        <li>Đánh giá mục đích sản xuất: thời trang, đồng phục, đồ trẻ em, đồ thể thao, v.v.</li>
        <li>Xác định yêu cầu kỹ thuật: độ co giãn, thấm hút, kháng khuẩn, màu sắc, định lượng.</li>
        <li>Tính toán số lượng, ngân sách và thời gian giao hàng.</li>
      </ul>
      <h2>3. Kiểm tra chất lượng vải</h2>
      <ul>
        <li>Kiểm tra định lượng (gsm), độ bền màu, độ co giãn, độ mềm mại.</li>
        <li>Yêu cầu mẫu thử để kiểm tra thực tế trước khi đặt hàng số lượng lớn.</li>
        <li>Đối chiếu chứng nhận chất lượng (OEKO-TEX, GOTS, v.v.) nếu cần.</li>
      </ul>
      <h2>4. Lựa chọn nhà cung cấp uy tín</h2>
      <ul>
        <li>Ưu tiên đơn vị có kinh nghiệm, quy trình sản xuất hiện đại, dịch vụ hậu mãi tốt.</li>
        <li>Tham khảo đánh giá, phản hồi từ khách hàng cũ.</li>
        <li>Đảm bảo hợp đồng rõ ràng, cam kết chất lượng và tiến độ giao hàng.</li>
      </ul>
      <h2>Kết luận</h2>
      <p>Doanh nghiệp nên chủ động tìm hiểu, kiểm tra và hợp tác với nhà cung cấp uy tín để đảm bảo chất lượng vải dệt kim, tối ưu hiệu quả sản xuất và kinh doanh.</p>
    `,
  },
  {
    slug: "cong-nghe-det-kim-ai-iot",
    title: "Công nghệ AI & IoT trong sản xuất vải dệt kim",
    excerpt:
      "AI và IoT đang thay đổi ngành dệt kim: kiểm soát chất lượng tự động, tối ưu hóa quy trình, dự báo xu hướng và nâng cao trải nghiệm khách hàng.",
    image: "/images/blog/cong-nghe-ai-iot.avif",
    category: "Công nghệ",
    date: "08/03/2026",
    content: `
      <h2>Giới thiệu</h2>
      <p>AI và IoT đang thay đổi ngành dệt kim, giúp doanh nghiệp nâng cao chất lượng, tối ưu hóa quy trình và dự báo xu hướng thị trường. Bài viết này phân tích ứng dụng thực tế và lợi ích của công nghệ mới trong sản xuất vải dệt kim.</p>
      <h2>1. Kiểm soát chất lượng tự động bằng AI</h2>
      <ul>
        <li>AI giúp phát hiện lỗi vải, kiểm tra định lượng, phân loại sản phẩm nhanh chóng và chính xác.</li>
        <li>Camera và cảm biến tích hợp AI nhận diện lỗi dệt, sai màu, sai khổ ngay trên dây chuyền sản xuất.</li>
        <li>Giảm tỷ lệ hàng lỗi, tiết kiệm chi phí kiểm tra thủ công.</li>
      </ul>
      <h2>2. Tối ưu hóa quy trình sản xuất với IoT</h2>
      <ul>
        <li>IoT kết nối máy móc, thu thập dữ liệu sản xuất, giúp quản lý hiệu quả và giảm chi phí.</li>
        <li>Giám sát trạng thái máy dệt, cảnh báo sự cố, điều phối sản xuất linh hoạt.</li>
        <li>Phần mềm quản lý sản xuất tích hợp IoT giúp doanh nghiệp chủ động trong điều phối, kiểm tra và giao hàng.</li>
      </ul>
      <h2>3. Dự báo xu hướng thị trường bằng AI</h2>
      <ul>
        <li>Phân tích dữ liệu thị trường, dự báo nhu cầu, giúp doanh nghiệp chủ động sản xuất và kinh doanh.</li>
        <li>AI hỗ trợ phân tích xu hướng tiêu dùng, mẫu mã, màu sắc, vật liệu được ưa chuộng.</li>
        <li>Giúp doanh nghiệp định hướng phát triển sản phẩm phù hợp thị trường.</li>
      </ul>
      <h2>Kết luận</h2>
      <p>Ứng dụng AI và IoT trong sản xuất vải dệt kim giúp nâng cao chất lượng, tối ưu hóa quy trình và dự báo xu hướng. Doanh nghiệp nên đầu tư công nghệ mới để tăng sức cạnh tranh và phát triển bền vững.</p>
    `,
  },
  {
    slug: "vai-bamboo-loi-ich-va-ung-dung",
    title: "Vải Bamboo: Lợi ích và ứng dụng trong ngành dệt kim hiện đại",
    excerpt:
      "Tìm hiểu về vải Bamboo: đặc tính nổi bật, lợi ích môi trường, ứng dụng thực tế và xu hướng phát triển trong ngành dệt kim.",
    image: "/images/blog/vai-bamboo.avif",
    category: "Vải Bamboo",
    date: "05/03/2026",
    content: `
      <h2>Giới thiệu</h2>
      <p>Vải Bamboo là vật liệu hiện đại, thân thiện môi trường, được sản xuất từ sợi tre tự nhiên. Bài viết này phân tích đặc tính nổi bật, lợi ích môi trường, ứng dụng thực tế và xu hướng phát triển của vải Bamboo trong ngành dệt kim.</p>
      <h2>1. Đặc tính nổi bật của vải Bamboo</h2>
      <ul>
        <li>Mềm mại, mịn màng hơn cả cotton, tạo cảm giác dễ chịu cho người mặc.</li>
        <li>Kháng khuẩn tự nhiên nhờ chất "bamboo kun" trong sợi tre, hạn chế mùi và vi khuẩn.</li>
        <li>Thấm hút tốt, thoáng khí, phù hợp khí hậu nóng ẩm.</li>
        <li>Phân hủy sinh học, thân thiện môi trường.</li>
      </ul>
      <h2>2. Lợi ích môi trường</h2>
      <ul>
        <li>Sản xuất vải Bamboo giúp giảm tác động môi trường, tiết kiệm nước, không sử dụng hóa chất độc hại.</li>
        <li>Tre là cây phát triển nhanh, không cần thuốc trừ sâu, phân bón hóa học.</li>
        <li>Quy trình sản xuất ít thải ra chất độc hại, bảo vệ hệ sinh thái.</li>
      </ul>
      <h2>3. Ứng dụng thực tế của vải Bamboo</h2>
      <ul>
        <li>May mặc: áo thun, váy, đồ lót, đồ thể thao, đồ ngủ, trang phục trẻ em.</li>
        <li>Đồ gia dụng: chăn ga gối đệm, khăn tắm, khăn trải bàn.</li>
        <li>Sản phẩm y tế: khẩu trang, băng gạc nhờ đặc tính kháng khuẩn.</li>
      </ul>
      <h2>4. Xu hướng phát triển</h2>
      <ul>
        <li>Ngày càng nhiều thương hiệu lớn lựa chọn vải Bamboo cho các bộ sưu tập thời trang bền vững.</li>
        <li>Người tiêu dùng ưu tiên sản phẩm thân thiện môi trường, an toàn cho sức khỏe.</li>
        <li>Doanh nghiệp đầu tư công nghệ sản xuất vải Bamboo để đáp ứng nhu cầu thị trường.</li>
      </ul>
      <h2>Kết luận</h2>
      <p>Vải Bamboo là lựa chọn lý tưởng cho thời trang hiện đại, thân thiện môi trường, an toàn cho sức khỏe. Doanh nghiệp nên phát triển sản phẩm từ vải Bamboo để tăng sức cạnh tranh và đáp ứng xu hướng tiêu dùng mới.</p>
    `,
  },
  {
    slug: "vai-organic-cotton-tieu-chuan-va-chung-nhan",
    title: "Vải Organic Cotton: Tiêu chuẩn và chứng nhận quốc tế",
    excerpt:
      "Vải Organic Cotton ngày càng được ưa chuộng nhờ quy trình sản xuất sạch, an toàn cho sức khỏe và môi trường. Tìm hiểu các tiêu chuẩn, chứng nhận quốc tế.",
    image: "/images/blog/organic-cotton.jpeg",
    category: "Vải hữu cơ",
    date: "03/03/2026",
    content: `
      <h2>Giới thiệu</h2>
      <p>Vải Organic Cotton ngày càng được ưa chuộng nhờ quy trình sản xuất sạch, an toàn cho sức khỏe và môi trường. Bài viết này phân tích tiêu chuẩn, chứng nhận quốc tế và ứng dụng thực tế của vải Organic Cotton.</p>
      <h2>1. Quy trình sản xuất sạch</h2>
      <ul>
        <li>Organic Cotton được trồng không hóa chất, không thuốc trừ sâu, đảm bảo an toàn cho người dùng và môi trường.</li>
        <li>Quy trình sản xuất kiểm soát nghiêm ngặt từ gieo trồng, thu hoạch đến dệt vải.</li>
        <li>Đảm bảo không tồn dư chất độc hại, phù hợp cho da nhạy cảm, trẻ em.</li>
      </ul>
      <h2>2. Tiêu chuẩn và chứng nhận quốc tế</h2>
      <ul>
        <li><strong>GOTS (Global Organic Textile Standard):</strong> Chứng nhận tiêu chuẩn cao nhất cho sản phẩm hữu cơ.</li>
        <li><strong>OEKO-TEX Standard 100:</strong> Đảm bảo không chứa chất độc hại.</li>
        <li><strong>Fairtrade:</strong> Đảm bảo nguồn gốc minh bạch, công bằng cho người sản xuất.</li>
      </ul>
      <h2>3. Ứng dụng thực tế của vải Organic Cotton</h2>
      <ul>
        <li>Thời trang: áo thun, váy, đồ trẻ em, đồ lót, sản phẩm cao cấp.</li>
        <li>Đồ gia dụng: chăn ga gối đệm, khăn tắm, khăn lau.</li>
        <li>Phụ kiện: khăn quàng cổ, túi vải thân thiện môi trường.</li>
      </ul>
      <h2>Kết luận</h2>
      <p>Vải Organic Cotton là lựa chọn lý tưởng cho thời trang bền vững, an toàn cho sức khỏe và thân thiện môi trường. Doanh nghiệp nên đầu tư phát triển sản phẩm từ vải Organic Cotton để đáp ứng xu hướng tiêu dùng mới.</p>
    `,
  },
  {
    slug: "vai-sorona-cong-nghe-moi-tu-dupont",
    title: "Vải Sorona: Công nghệ mới từ Dupont cho ngành dệt kim",
    excerpt:
      "Sorona là loại sợi polymer sinh học tiên tiến, mang lại độ bền, co giãn, thân thiện môi trường. Khám phá công nghệ và ứng dụng của Sorona.",
    image: "/images/blog/sorona.avif",
    category: "Sorona",
    date: "01/03/2026",
    content: `
      <h2>Giới thiệu</h2>
      <p>Vải Sorona là vật liệu polymer sinh học tiên tiến, phát triển bởi Dupont, mang lại độ bền, co giãn, thân thiện môi trường. Bài viết này phân tích công nghệ, ưu điểm và ứng dụng thực tế của vải Sorona trong ngành dệt kim.</p>
      <h2>1. Công nghệ Sorona</h2>
      <ul>
        <li>Sorona là sợi polymer sinh học do Dupont phát triển, có khả năng co giãn, bền màu, chống nhăn và thân thiện môi trường.</li>
        <li>Quy trình sản xuất sử dụng nguyên liệu tái tạo, giảm phát thải carbon.</li>
        <li>Sorona thay thế sợi tổng hợp từ dầu mỏ, góp phần bảo vệ môi trường.</li>
      </ul>
      <h2>2. Ưu điểm vượt trội của vải Sorona</h2>
      <ul>
        <li>Nhẹ, mềm, giữ form tốt, phù hợp cho thời trang thể thao, đồ lót, áo khoác.</li>
        <li>Kháng khuẩn, chống tĩnh điện, an toàn cho da nhạy cảm.</li>
        <li>Bền màu, chống nhăn, dễ bảo quản.</li>
      </ul>
      <h2>3. Ứng dụng thực tế của vải Sorona</h2>
      <ul>
        <li>Thời trang: áo thun, váy, đồ lót, đồ thể thao, trang phục cao cấp.</li>
        <li>Đồ gia dụng: chăn ga gối đệm, khăn tắm, khăn trải bàn.</li>
        <li>Sản phẩm công nghiệp: túi vải thân thiện môi trường, bao bì sinh học.</li>
      </ul>
      <h2>Kết luận</h2>
      <p>Vải Sorona là lựa chọn lý tưởng cho thời trang hiện đại, thân thiện môi trường, an toàn cho sức khỏe. Doanh nghiệp nên đầu tư phát triển sản phẩm từ vải Sorona để tăng sức cạnh tranh và đáp ứng xu hướng tiêu dùng mới.</p>
    `,
  },
];

/* ===== SERVICES / CAPABILITIES ===== */
export const SERVICES: Service[] = [
  {
    title: "Dệt Kim",
    description:
      "Nhà máy dệt kim với hơn 30 máy dệt các loại: Single, Double Knit, Interlock, Fleece, Rib, Jacquard. Đáp ứng đa dạng nguyên liệu từ Cotton, PE, Poly, TC, CVC đến sợi hữu cơ và tái chế.",
    image: "/images/hero/bm32kjjzvuujwevo4u0i.webp",
    highlights: ["30+ máy dệt", "Đa dạng chủng loại", "Công suất lớn"],
  },
  {
    title: "Nhuộm",
    description:
      "Hệ thống máy nhuộm hiện đại, tiết kiệm 70% nước so với công nghệ cũ. Phòng LAB kiểm soát màu sắc chính xác. Hệ thống xử lý nước thải đạt tiêu chuẩn QCVN 40:2011/BTNMT.",
    image: "/images/hero/iusr3bcw7txxunuz936a.webp",
    highlights: [
      "Tiết kiệm 70% nước",
      "Phòng LAB chuyên dụng",
      "Đạt chuẩn môi trường",
    ],
  },
  {
    title: "Hoàn tất",
    description:
      "Nhà máy hoàn tất với máy sấy không sức căng, máy Compact, máy căng kim 10 phòng, máy cào lông. Đảm bảo vải đạt chất lượng cao nhất trước khi giao hàng.",
    image: "/images/hero/qq3qsuvojcm6lj6ktppo.webp",
    highlights: [
      "Máy căng kim 10 phòng",
      "Compact hiện đại",
      "Kiểm soát chất lượng",
    ],
  },
  {
    title: "Gia công & Xuất khẩu",
    description:
      "Nhận gia công dệt nhuộm theo yêu cầu riêng. Sản xuất OEM cho các thương hiệu quốc tế. Đáp ứng tiêu chuẩn chất lượng xuất khẩu Mỹ, EU, Nhật Bản.",
    image: "/images/hero/x8zngplhilwljzqyanbt.webp",
    highlights: [
      "OEM quốc tế",
      "Tiêu chuẩn xuất khẩu",
      "Account manager riêng",
    ],
  },
];

/* ===== GALLERY ===== */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/hero/bm32kjjzvuujwevo4u0i.webp",
    alt: "Nhà máy dệt kim",
    span: "wide",
  },
  { src: "/images/hero/iusr3bcw7txxunuz936a.webp", alt: "Phân xưởng nhuộm" },
  {
    src: "/images/hero/qq3qsuvojcm6lj6ktppo.webp",
    alt: "Máy dệt kim vòng tròn",
  },
  {
    src: "/images/hero/x8zngplhilwljzqyanbt.webp",
    alt: "Kiểm tra chất lượng vải",
    span: "tall",
  },
  { src: "/images/hero/wq79mo82dwk9tpp8zang.webp", alt: "Kho nguyên liệu" },
  {
    src: "/images/hero/z71dp1p2jjkcn6asu0iw.webp",
    alt: "Quy trình hoàn tất vải",
    span: "wide",
  },
  { src: "/images/hero/xiqhn0o1cjd5fig6mkyf.webp", alt: "Showroom vải mẫu" },
  {
    src: "/images/hero/vy5vjrz1ew9ehipfxzu0.webp",
    alt: "Đóng gói và giao hàng",
  },
];

/* ===== VIDEO ===== */
export const COMPANY_VIDEOS = [
  {
    title: "Giới thiệu nhà máy Dệt Kim Liên Việt",
    thumbnail: "/images/hero/bm32kjjzvuujwevo4u0i.webp",
    youtubeId: "",
  },
  {
    title: "Quy trình sản xuất vải dệt kim",
    thumbnail: "/images/hero/wq79mo82dwk9tpp8zang.webp",
    youtubeId: "",
  },
  {
    title: "Hệ thống nhuộm tiết kiệm nước",
    thumbnail: "/images/hero/iusr3bcw7txxunuz936a.webp",
    youtubeId: "",
  },
];
