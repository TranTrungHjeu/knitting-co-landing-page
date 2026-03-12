import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="relative bg-earth-dark py-24 md:py-32 fabric-texture-dark wave-divider-top wave-divider-bottom">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Khách hàng nói gì
          </p>
          <h2 className="text-3xl font-bold text-cream md:text-5xl heading-decorated">
            Đánh giá từ đối tác
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative bg-charcoal/50 backdrop-blur-sm border border-cream/10 p-8 transition-all hover:border-gold/30"
            >
              {/* Large decorative quote */}
              <span className="absolute top-4 left-6 font-heading text-6xl leading-none text-gold/15" aria-hidden="true">
                &ldquo;
              </span>

              <p className="relative z-10 text-cream-dark/80 leading-relaxed italic pt-6">
                {t.content}
              </p>

              {/* Thread separator */}
              <div className="my-6 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />

              <div>
                <p className="font-semibold text-cream">{t.name}</p>
                <p className="text-sm text-gold/70">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
