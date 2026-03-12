import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";

export default function Products() {
  return (
    <section id="products" className="relative bg-earth-dark py-24 md:py-32 wave-divider-top wave-divider-bottom fabric-texture-dark">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Sản phẩm
          </p>
          <h2 className="text-3xl font-bold text-cream md:text-5xl heading-decorated text-balance">
            Vải dệt kim đa dạng chủng loại
          </h2>
          <p className="mt-6 text-cream-dark/70 text-lg">
            Hơn 50 loại vải dệt kim chất lượng cao, đáp ứng mọi nhu cầu sản
            xuất từ thời trang đến công nghiệp.
          </p>
        </div>

        {/* Product grid — 2 cols on tablet, 4 on desktop */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden bg-charcoal/50 backdrop-blur-sm border border-cream/10 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1"
            >
              {/* Gold accent strip on top */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-cream group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dark/60 line-clamp-2">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.specs.map((s) => (
                    <span
                      key={s}
                      className="border border-cream/15 px-2.5 py-1 text-[11px] font-medium text-cream-dark/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Applications */}
                <div className="mt-3 pt-3 border-t border-cream/10">
                  <p className="text-[11px] uppercase tracking-wider text-gold/80 mb-1">Ứng dụng</p>
                  <p className="text-xs text-cream-dark/50">
                    {product.applications.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-earth-dark transition-all hover:bg-gold-light hover:shadow-xl"
          >
            Yêu cầu báo giá
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
