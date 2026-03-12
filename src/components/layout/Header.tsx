"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, COMPANY, PRODUCTS, ABOUT_SUBMENU } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top Info Bar */}
      <div
        className={`hidden md:block bg-earth-dark text-cream-dark/80 text-xs transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-gold-light transition-colors">{COMPANY.phone}</a>
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-gold-light transition-colors">{COMPANY.email}</a>
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {COMPANY.workingHours}
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-cream-light/98 shadow-lg backdrop-blur-md"
            : "bg-cream-light/70 backdrop-blur-sm"
        }`}
      >
        {/* Thin gold accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo + Brand */}
          <Link href="#home" className="shrink-0" aria-label="Trang chủ">
            <Image
              src="/logo-hearder.svg"
              alt={COMPANY.name}
              width={160}
              height={56}
              className="h-10 w-auto md:h-12 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Menu chính">
            {NAV_ITEMS.map((item) =>
              item.href === "#about" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 px-4 py-2 text-[13px] font-medium uppercase tracking-wider text-earth-dark/80 transition-colors hover:text-gold group"
                  >
                    {item.label}
                    <svg
                      className={`h-3 w-3 transition-transform duration-200 ${aboutDropdown ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-3/4" />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      aboutDropdown
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="min-w-[200px] border border-cream-dark/15 bg-cream-light/98 shadow-xl backdrop-blur-md">
                      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                      {ABOUT_SUBMENU.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setAboutDropdown(false)}
                          className="block px-5 py-2.5 text-[12px] font-medium uppercase tracking-wider text-earth-dark/70 hover:bg-gold/10 hover:text-gold transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item.href === "#products" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setProductDropdown(true)}
                  onMouseLeave={() => setProductDropdown(false)}
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 px-4 py-2 text-[13px] font-medium uppercase tracking-wider text-earth-dark/80 transition-colors hover:text-gold group"
                  >
                    {item.label}
                    <svg
                      className={`h-3 w-3 transition-transform duration-200 ${productDropdown ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-3/4" />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      productDropdown
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="min-w-[220px] max-h-[70vh] overflow-y-auto border border-cream-dark/15 bg-cream-light/98 shadow-xl backdrop-blur-md">
                      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                      {PRODUCTS.slice(0, 10).map((p) => (
                        <Link
                          key={p.slug}
                          href={`/san-pham/${p.slug}`}
                          onClick={() => setProductDropdown(false)}
                          className="block px-5 py-2.5 text-[12px] font-medium tracking-wider text-earth-dark/70 hover:bg-gold/10 hover:text-gold transition-colors"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-[13px] font-medium uppercase tracking-wider text-earth-dark/80 transition-colors hover:text-gold group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-3/4" />
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-earth text-cream text-xs font-semibold uppercase tracking-wider transition-all hover:bg-earth-dark hover:shadow-lg"
          >
            <span>Báo giá ngay</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>

          {/* Mobile Burger */}
          <button
            type="button"
            className="lg:hidden p-2 text-earth-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeLinecap="round" d="M4 7h16" />
                  <path strokeLinecap="round" d="M4 12h10" />
                  <path strokeLinecap="round" d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-earth-dark/95 backdrop-blur-md">
          <div className="flex justify-end p-5">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="p-2 text-cream"
              aria-label="Đóng menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-center gap-1 px-8 pt-4" aria-label="Menu di động">
            {NAV_ITEMS.map((item) =>
              item.href === "#about" ? (
                <div key={item.href} className="w-full">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-4 text-lg font-light uppercase tracking-widest text-cream/80 border-b border-cream/10 hover:text-gold transition-colors"
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileAboutOpen && (
                    <div className="flex flex-col items-center gap-0 pb-2">
                      {ABOUT_SUBMENU.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="w-full text-center py-2.5 text-sm font-light uppercase tracking-widest text-cream/50 hover:text-gold transition-colors"
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileAboutOpen(false);
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.href === "#products" ? (
                <div key={item.href} className="w-full">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-4 text-lg font-light uppercase tracking-widest text-cream/80 border-b border-cream/10 hover:text-gold transition-colors"
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${mobileProductOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileProductOpen && (
                    <div className="flex flex-col items-center gap-0 pb-2">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/san-pham/${p.slug}`}
                          className="w-full text-center py-2.5 text-sm font-light tracking-widest text-cream/50 hover:text-gold transition-colors"
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileProductOpen(false);
                          }}
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-full text-center py-4 text-lg font-light uppercase tracking-widest text-cream/80 border-b border-cream/10 hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="#contact"
              className="mt-8 px-10 py-3 bg-gold text-earth-dark text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Báo giá ngay
            </Link>

            <div className="mt-10 flex flex-col items-center gap-2 text-cream/50 text-sm">
              <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-gold">{COMPANY.phone}</a>
              <a href={`https://zalo.me/${COMPANY.zalo}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Zalo Chat</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
