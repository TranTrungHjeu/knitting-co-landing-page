import Image from "next/image";
import { PARTNERS } from "@/lib/constants";

export default function Partners() {
  return (
    <section className="relative bg-cream py-14 overflow-hidden">
      {/* Top gold thread line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      {/* Bottom gold thread line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-warm-gray">
          Đối tác tin cậy của chúng tôi
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {PARTNERS.map((partner) => (
            <div
              key={partner.alt}
              className="grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={48}
                className="h-10 w-auto object-contain md:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
