"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { NAV, telHref } from "@/content/site";

/** Disclosure nav for small screens. Closes on navigation and on Escape. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="min-[760px]:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-full transition-transform ease-spring-snappy active:scale-90"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>
      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full mt-2 origin-top rounded-2xl border border-line bg-white p-2 shadow-[0_24px_48px_-24px_rgb(16_16_16/0.25)] starting:scale-95 starting:opacity-0 transition-[opacity,transform] ease-spring-snappy"
      >
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded-xl px-4 py-3 text-[15px] font-medium text-ink hover:bg-paper">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={telHref} className="mt-1 flex items-center gap-2 rounded-xl bg-ink-strong px-4 py-3 text-[15px] font-medium text-white">
              <Phone className="h-4 w-4" aria-hidden="true" /> Free 15-min call
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
