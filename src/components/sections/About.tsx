import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="relative bg-cream-light py-24 md:py-32 fabric-texture">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Về chúng tôi
          </p>
          <h2 className="text-3xl font-bold text-earth-dark md:text-5xl heading-decorated text-balance">
            Tận tâm trong từng sợi vải
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Image — asymmetric with accent border */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/xiqhn0o1cjd5fig6mkyf.webp"
                alt="Đội ngũ sản xuất Liên Việt"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 -z-10" />
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-earth text-cream px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold text-gold">12+</p>
              <p className="text-xs uppercase tracking-wider">Năm kinh nghiệm</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Sứ mệnh
                </h3>
              </div>
              <p className="text-warm-gray leading-relaxed text-lg">
                Cung cấp nguồn vải dệt kim chất lượng cao, ổn định và đa dạng
                cho thị trường trong nước và xuất khẩu. Đồng hành cùng doanh
                nghiệp may mặc bằng kinh nghiệm dày dặn và sự thấu hiểu nhu
                cầu sản xuất.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Tầm nhìn
                </h3>
              </div>
              <p className="text-warm-gray leading-relaxed text-lg">
                Xây dựng {COMPANY.shortName} thành đơn vị sản xuất và cung cấp
                vải dệt kim uy tín hàng đầu, là lựa chọn tin cậy của mọi đối
                tác trong và ngoài nước.
              </p>
            </div>

            {/* Values — horizontal with gold accents */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-cream-dark">
              {[
                { title: "Chất lượng", desc: "Tiêu chuẩn xuất khẩu", icon: "★" },
                { title: "Uy tín", desc: "Cam kết đúng hẹn", icon: "◆" },
                { title: "Đa dạng", desc: "50+ loại vải", icon: "▣" },
                { title: "Giá tốt", desc: "Trực tiếp từ xưởng", icon: "▲" },
              ].map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <span className="text-gold text-lg mt-0.5">{v.icon}</span>
                  <div>
                    <p className="font-semibold text-earth-dark">{v.title}</p>
                    <p className="text-sm text-warm-gray">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
