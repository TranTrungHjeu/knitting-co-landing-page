import { COMPANY, CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-earth-dark py-24 md:py-32 fabric-texture-dark wave-divider-top">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Liên hệ
          </p>
          <h2 className="text-3xl font-bold text-cream md:text-5xl heading-decorated text-balance">
            Kết nối với chúng tôi
          </h2>
          <p className="mt-6 text-cream-dark/70 text-lg">
            Liên hệ ngay để được tư vấn loại vải phù hợp và nhận báo giá chi
            tiết.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="border-l-2 border-gold/30 pl-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/70 mb-1">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-cream font-medium hover:text-gold transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-cream font-medium">{info.value}</p>
                )}
              </div>
            ))}

            {/* Map */}
            <div className="aspect-video overflow-hidden border border-cream/10 mt-8">
              <iframe
                src={COMPANY.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Bản đồ ${COMPANY.name}`}
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form className="space-y-5 border border-cream/10 bg-charcoal/30 backdrop-blur-sm p-8 md:p-10">
              {/* Gold line at top */}
              <div className="-mt-8 md:-mt-10 -mx-8 md:-mx-10 mb-6 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              <h3 className="text-xl font-bold text-cream mb-4">
                Gửi yêu cầu báo giá
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-dark/60"
                  >
                    Họ và tên *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream-dark/30 outline-none transition-colors focus:border-gold/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-dark/60"
                  >
                    Số điện thoại *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="0909 123 456"
                    className="w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream-dark/30 outline-none transition-colors focus:border-gold/50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-dark/60"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  className="w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream-dark/30 outline-none transition-colors focus:border-gold/50"
                />
              </div>

              <div>
                <label
                  htmlFor="fabric"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-dark/60"
                >
                  Loại vải quan tâm
                </label>
                <select
                  id="fabric"
                  name="fabric"
                  className="w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold/50 [&>option]:bg-earth-dark [&>option]:text-cream"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn loại vải
                  </option>
                  <option value="cotton">Vải thun Cotton</option>
                  <option value="pique">Vải Cá Sấu (Pique)</option>
                  <option value="rib">Vải Rib</option>
                  <option value="interlock">Vải Interlock</option>
                  <option value="tc-cvc">Vải TC / CVC</option>
                  <option value="fleece">Vải Nỉ (Fleece)</option>
                  <option value="poly">Vải Poly (PE)</option>
                  <option value="mesh">Vải Mesh (Lưới)</option>
                  <option value="other">Loại khác</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-dark/60"
                >
                  Nội dung chi tiết *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Cho chúng tôi biết về số lượng, định lượng, màu sắc hoặc yêu cầu đặc biệt..."
                  className="w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream-dark/30 outline-none transition-colors focus:border-gold/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-wider text-earth-dark transition-all hover:bg-gold-light hover:shadow-xl"
              >
                Gửi yêu cầu báo giá
              </button>

              <p className="text-center text-xs text-cream-dark/40">
                Cam kết phản hồi trong vòng 2 giờ làm việc.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
