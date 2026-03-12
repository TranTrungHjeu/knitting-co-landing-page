import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import ProductGallery from "@/components/ProductGallery";

/* ---------- Static params for SSG ---------- */
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

/* ---------- Dynamic metadata ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Dệt Kim Liên Việt`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Vải dệt kim chất lượng cao`,
      description: product.description,
      images: [product.image],
    },
  };
}



/* ---------- Section icon map ---------- */
function SectionIcon({ title }: { title: string }) {
  const t = title.toLowerCase();
  if (t.includes("đặc điểm"))
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  if (t.includes("ưu điểm"))
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  if (t.includes("ứng dụng"))
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    );
  if (t.includes("quy trình"))
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    );
  if (t.includes("bảo quản"))
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  if (t.includes("tiêu chuẩn") || t.includes("chứng nhận"))
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    );
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/* ---------- Page ---------- */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  return (
    <>
      {/* ── Breadcrumb ── */}
      <section className="bg-earth-dark fabric-texture-dark">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center gap-2 text-xs text-cream-dark/50">
            <Link href="/" className="hover:text-gold transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-gold transition-colors">
              Sản phẩm
            </Link>
            <span>/</span>
            <span className="text-cream-dark/80">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* ── Hero: Gallery + Info ── */}
      <section className="bg-cream-light fabric-texture py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Gallery */}
            <ProductGallery images={product.gallery} name={product.name} />

            {/* Info */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-earth-dark leading-tight">
                {product.name}
              </h1>

              {/* Gold separator */}
              <div className="mt-4 h-[3px] w-12 bg-gold" />

              {/* Price */}
              <p className="mt-4 text-lg font-semibold text-gold">
                Giá: Liên Hệ
              </p>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-earth-dark/70">
                {product.description}
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-earth-dark transition-all hover:bg-gold-light hover:shadow-xl"
                >
                  Yêu cầu báo giá
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 border border-earth/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-earth-dark transition-all hover:border-gold hover:text-gold"
                >
                  Xem tất cả sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Detail sections ── */}
      {product.sections.length > 0 && (
        <section className="bg-cream py-16 md:py-24 fabric-texture">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
                Chi tiết sản phẩm
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-earth-dark heading-decorated">
                Thông tin chi tiết về {product.name}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {product.sections.map((sec, i) => (
                <div
                  key={i}
                  className="relative bg-cream-light border border-earth/10 p-6 md:p-8 transition-all hover:border-gold/30 hover:shadow-lg group"
                >
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gold/10 text-gold">
                      <SectionIcon title={sec.title} />
                    </div>
                    <h3 className="text-lg font-bold text-earth-dark">
                      {sec.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {sec.content.split("\n").map((line, j) => {
                      const [bold, ...rest] = line.split(": ");
                      if (rest.length > 0) {
                        return (
                          <p key={j} className="text-sm leading-relaxed text-earth-dark/70">
                            <span className="font-semibold text-earth-dark/90">
                              {bold}:
                            </span>{" "}
                            {rest.join(": ")}
                          </p>
                        );
                      }
                      return (
                        <p key={j} className="text-sm leading-relaxed text-earth-dark/70">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section className="bg-earth-dark py-16 md:py-24 fabric-texture-dark wave-divider-top">
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
                Sản phẩm liên quan
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-cream heading-decorated">
                Sản phẩm tương tự
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/san-pham/${p.slug}`}
                  className="group relative overflow-hidden bg-charcoal/50 backdrop-blur-sm border border-cream/10 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-cream group-hover:text-gold transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream-dark/60 line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}


    </>
  );
}
