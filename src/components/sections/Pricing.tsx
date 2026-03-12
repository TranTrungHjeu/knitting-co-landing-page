import Link from "next/link";
import { PRICING_TIERS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-cream py-24 md:py-32 fabric-texture">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Bảng giá
          </p>
          <h2 className="text-3xl font-bold text-earth-dark md:text-5xl heading-decorated text-balance">
            Gói dịch vụ phù hợp mọi quy mô
          </h2>
          <p className="mt-6 text-warm-gray text-lg">
            Giá vải linh hoạt theo loại, định lượng và số lượng đặt hàng. Liên
            hệ để nhận báo giá chi tiết nhất.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-0 md:grid-cols-3">
          {PRICING_TIERS.map((tier, idx) => {
            const isHighlight = idx === 1;
            return (
              <div
                key={tier.name}
                className={`relative p-8 md:p-10 transition-all ${
                  isHighlight
                    ? "bg-earth-dark text-cream z-10 md:-my-4 md:py-14 border-2 border-gold/30"
                    : "bg-cream-light border border-cream-dark/50"
                }`}
              >
                {/* Gold accent on highlight */}
                {isHighlight && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50" />
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold px-5 py-1 text-[11px] font-semibold uppercase tracking-wider text-earth-dark">
                      Phổ biến nhất
                    </span>
                  </>
                )}

                <h3
                  className={`text-xl font-bold ${isHighlight ? "text-cream" : "text-earth-dark"}`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isHighlight ? "text-cream-dark/70" : "text-warm-gray"
                  }`}
                >
                  {tier.description}
                </p>

                {/* Thread separator */}
                <div className={`my-6 h-px ${
                  isHighlight
                    ? "bg-gradient-to-r from-transparent via-gold/40 to-transparent"
                    : "bg-gradient-to-r from-transparent via-cream-dark to-transparent"
                }`} />

                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className={`mt-1 block h-1.5 w-1.5 shrink-0 rotate-45 ${isHighlight ? "bg-gold" : "bg-gold/70"}`} />
                      <span
                        className={
                          isHighlight ? "text-cream-dark/90" : "text-earth-dark"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`mt-8 block w-full py-3.5 text-center text-sm font-semibold uppercase tracking-wider transition-all ${
                    isHighlight
                      ? "bg-gold text-earth-dark hover:bg-gold-light"
                      : "border-2 border-earth text-earth hover:bg-earth hover:text-cream"
                  }`}
                >
                  Liên hệ báo giá
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
