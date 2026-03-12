import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, COMPANY, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-earth-dark text-cream-dark fabric-texture-dark">
      {/* Gold accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.svg"
              alt={COMPANY.name}
              width={64}
              height={64}
              className="h-14 w-14 mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-cream-dark/60 max-w-xs">
              {COMPANY.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Liên kết nhanh
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-dark/60 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Liên hệ
            </h4>
            <ul className="space-y-4">
              {CONTACT_INFO.map((info) => (
                <li key={info.label} className="text-sm">
                  <span className="block text-[11px] uppercase tracking-wider text-cream-dark/40 mb-0.5">
                    {info.label}
                  </span>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-cream-dark/70 transition-colors hover:text-gold"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-cream-dark/70">{info.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Zalo + Certifications */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Kết nối
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`https://zalo.me/${COMPANY.zalo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream-dark/60 hover:text-gold transition-colors"
              >
                Zalo: {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 text-sm text-cream-dark/60 hover:text-gold transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/images/hangvietnamchatluongcao.png"
                alt="Hàng Việt Nam Chất Lượng Cao"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <Image
                src="/images/madeinvietnam.svg"
                alt="Made in Vietnam"
                width={48}
                height={48}
                className="h-12 w-12 object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-dark/40">
            © {year} {COMPANY.name}. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-xs text-cream-dark/30">
            Thành lập từ {COMPANY.founded} · TP. Hồ Chí Minh, Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}
