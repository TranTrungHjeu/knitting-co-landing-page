import { COMPANY } from "@/lib/constants";

export default function FloatingZalo() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Zalo */}
      <a
        href={`https://zalo.me/${COMPANY.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat với chúng tôi qua Zalo"
        className="relative group"
      >
        <span className="absolute inset-0 animate-ping bg-gold/20 rounded-full" />
        <span className="relative flex h-14 w-14 items-center justify-center bg-gold text-earth-dark shadow-lg rounded-full transition-all hover:bg-gold-light hover:shadow-xl hover:-translate-y-0.5">
          <svg viewBox="0 0 64 64" className="h-7 w-7" fill="currentColor">
            <path d="M32 4C16.536 4 4 15.626 4 30c0 7.456 3.306 14.173 8.62 19.128-.215 3.872-1.174 7.487-2.862 10.787-.402.786.25 1.685 1.125 1.554 5.47-.82 10.222-2.678 14.117-5.137A30.7 30.7 0 0 0 32 56c15.464 0 28-11.626 28-26S47.464 4 32 4z" />
          </svg>
        </span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        aria-label="Gọi điện cho chúng tôi"
        className="relative group"
      >
        <span className="absolute inset-0 animate-ping bg-gold/20 rounded-full" />
        <span className="relative flex h-14 w-14 items-center justify-center bg-gold text-earth-dark shadow-lg rounded-full transition-all hover:bg-gold-light hover:shadow-xl hover:-translate-y-0.5">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </span>
      </a>

      {/* Email */}
      <a
        href={`mailto:${COMPANY.email}`}
        aria-label="Gửi email cho chúng tôi"
        className="relative group"
      >
        <span className="absolute inset-0 animate-ping bg-gold/20 rounded-full" />
        <span className="relative flex h-14 w-14 items-center justify-center bg-gold text-earth-dark shadow-lg rounded-full transition-all hover:bg-gold-light hover:shadow-xl hover:-translate-y-0.5">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
      </a>
    </div>
  );
}
