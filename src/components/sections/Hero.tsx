import Link from "next/link";
import Image from "next/image";
import { COMPANY, STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/vy5vjrz1ew9ehipfxzu0.webp"
        alt="Xưởng sản xuất vải dệt kim Liên Việt"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Dark overlay + fabric texture */}
      <div className="absolute inset-0 bg-earth-dark/75 fabric-texture-dark" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/40 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
              Uy tín hàng đầu từ {COMPANY.founded}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold leading-[1.1] text-cream md:text-6xl lg:text-7xl">
            Chất lượng
            <br />
            <span className="italic text-gold">tạo nên</span>{" "}
            thương hiệu
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-dark/80 md:text-xl">
            {COMPANY.description}
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-earth-dark transition-all hover:bg-gold-light hover:shadow-xl"
            >
              Khám phá sản phẩm
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:bg-cream/10 hover:border-cream/60"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-px sm:grid-cols-4 border-t border-cream/10 pt-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="pr-6">
              <p className="text-3xl font-bold text-gold md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-cream-dark/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certification badges — bottom right */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 z-10">
        <Image
          src="/images/hangvietnamchatluongcao.png"
          alt="Hàng Việt Nam Chất Lượng Cao"
          width={64}
          height={64}
          className="h-16 w-16 drop-shadow-2xl"
        />
        <Image
          src="/images/madeinvietnam.svg"
          alt="Made in Vietnam"
          width={64}
          height={64}
          className="h-16 w-16 drop-shadow-2xl brightness-0 invert"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-light to-transparent z-10" />
    </section>
  );
}
