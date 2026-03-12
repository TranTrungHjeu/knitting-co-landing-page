import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="relative bg-cream-light py-24 md:py-32 fabric-texture">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Quy trình
          </p>
          <h2 className="text-3xl font-bold text-earth-dark md:text-5xl heading-decorated text-balance">
            Quy trình hợp tác chuyên nghiệp
          </h2>
          <p className="mt-6 text-warm-gray text-lg">
            Từ tiếp nhận yêu cầu đến giao hàng — quy trình 4 bước rõ ràng,
            minh bạch.
          </p>
        </div>

        {/* Thread timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Horizontal thread line (desktop) */}
          <div className="absolute top-10 left-0 right-0 hidden lg:block">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>

          {/* Vertical thread line (mobile) */}
          <div className="absolute top-0 bottom-0 left-10 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:hidden" />

          <div className="grid gap-0 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center py-8 lg:py-0 pl-6 lg:pl-0">
                {/* Step marker */}
                <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center border-2 border-gold/50 bg-cream-light">
                  <span className="text-2xl font-bold text-gold font-heading">
                    0{item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:mt-8 pt-1 lg:pt-0">
                  <h3 className="text-lg font-bold text-earth-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-gray max-w-[240px] lg:mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
