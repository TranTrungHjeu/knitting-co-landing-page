import Image from "next/image";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="relative bg-cream-light py-24 md:py-32 fabric-texture">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Năng lực sản xuất
          </p>
          <h2 className="text-3xl font-bold text-earth-dark md:text-5xl heading-decorated text-balance">
            Dịch vụ của chúng tôi
          </h2>
          <p className="mt-6 text-warm-gray text-lg">
            Hệ thống nhà máy khép kín từ dệt — nhuộm — hoàn tất, đáp ứng mọi
            nhu cầu sản xuất vải dệt kim.
          </p>
        </div>

        {/* Services grid — alternating layout */}
        <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              className="group relative overflow-hidden bg-cream border border-cream-dark/30 transition-all duration-500 hover:border-gold/30"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/70 via-earth-dark/20 to-transparent" />

                {/* Title overlaid on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-cream mt-1">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm leading-relaxed text-warm-gray">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 border border-gold/20 px-3 py-1.5 text-[11px] font-medium text-earth-dark"
                    >
                      <span className="h-1 w-1 rotate-45 bg-gold" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
