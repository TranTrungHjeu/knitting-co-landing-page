"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Only smooth-scroll for hash links on the same page
      const isHashLink =
        href.startsWith("#") ||
        (href.startsWith("/") && href.includes("#") && href.split("#")[0] === pathname) ||
        (href.startsWith("/#") && pathname === "/");

      if (!isHashLink) return;

      const hash = href.includes("#") ? href.split("#")[1] : "";
      if (!hash) return;

      const el = document.getElementById(hash);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });

      // Update URL hash without scroll
      window.history.pushState(null, "", `#${hash}`);
    }

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
