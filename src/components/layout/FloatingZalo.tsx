import { COMPANY } from "@/lib/constants";

export default function FloatingZalo() {
  return (
    <a
      href={`https://zalo.me/${COMPANY.zalo}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat với chúng tôi qua Zalo"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping bg-gold/20" />
      <span className="relative flex h-14 w-14 items-center justify-center bg-gold text-earth-dark shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:-translate-y-0.5">
        <svg viewBox="0 0 64 64" className="h-7 w-7" fill="currentColor">
          <path d="M32 4C16.536 4 4 15.626 4 30c0 7.456 3.306 14.173 8.62 19.128-.215 3.872-1.174 7.487-2.862 10.787-.402.786.25 1.685 1.125 1.554 5.47-.82 10.222-2.678 14.117-5.137A30.7 30.7 0 0 0 32 56c15.464 0 28-11.626 28-26S47.464 4 32 4z" />
        </svg>
      </span>
    </a>
  );
}
