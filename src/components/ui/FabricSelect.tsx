"use client";

import { useState, useRef } from "react";
import { PRODUCTS } from "@/lib/constants";

export default function FabricSelect({
  value,
  onChange,
  name = "fabric",
  required = false,
}: {
  value: string;
  onChange: (val: string) => void;
  name?: string;
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Unique product names
  const fabricOptions = Array.from(new Set(PRODUCTS.map(p => p.name)));

  // Handle outside click
  function handleBlur(e: React.FocusEvent) {
    if (!buttonRef.current?.contains(e.relatedTarget)) setOpen(false);
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        tabIndex={0}
        onClick={() => setOpen(v => !v)}
        onBlur={handleBlur}
        className="w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold/50 flex items-center justify-between gap-2"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{value ? value : "Chọn loại vải"}</span>
        <svg className={`h-5 w-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul
          tabIndex={-1}
          className="absolute left-0 right-0 mt-2 z-20 bg-earth-dark border border-cream/15 rounded shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {fabricOptions.map((opt) => (
            <li
              key={opt}
              className={`px-4 py-3 text-sm text-cream cursor-pointer hover:bg-gold/10 transition-colors ${value === opt ? "bg-gold/20 text-gold" : ""}`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              role="option"
              aria-selected={value === opt}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" name={name} value={value} required={required} id="fabric" />
    </div>
  );
}
