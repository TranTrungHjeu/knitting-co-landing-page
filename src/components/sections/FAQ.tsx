"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-cream py-24 md:py-32 fabric-texture">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-earth-dark md:text-5xl heading-decorated">
            Câu hỏi thường gặp
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-cream-dark/50 last:border-b-0"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between py-6 text-left group"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="pr-6 font-semibold text-earth-dark group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                    openIndex === idx
                      ? "border-gold bg-gold text-earth-dark rotate-45"
                      : "border-cream-dark text-warm-gray"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-warm-gray pl-0 pr-14">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="mb-4 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-sm text-warm-gray">
            Cần hỗ trợ thêm?{" "}
            <a
              href="#contact"
              className="font-semibold text-earth hover:text-gold transition-colors"
            >
              Liên hệ ngay
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
