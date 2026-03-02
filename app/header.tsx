"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/#team" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
];

const BOOKSY_URL =
  "https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga?do=invite&_branch_match_id=1556921415801310876&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVj8jyCMxMT%2FbJi0yyrytKTUstKsrMS49PKsovL04tsnVNSU8FAOg7uKI6AAAA";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Cierra con ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* capa para legibilidad sobre imagen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-transparent" />

      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link
          href="/"
          className="pointer-events-auto select-none text-lg font-semibold tracking-[0.22em] text-white"
          aria-label="Home"
        >
          Luxury
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pointer-events-auto text-xs font-medium uppercase tracking-[0.22em] text-white/85 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={BOOKSY_URL}
            className="pointer-events-auto rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur hover:bg-white/15 transition"
          >
            Book now
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="pointer-events-auto md:hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur"
          aria-label={open ? "Close menu" : "Open menu"}
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={[
            "fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={[
            "fixed inset-x-0 top-0 origin-top transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "-translate-y-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="border-b border-white/10 bg-[#0f1112]/95 text-white">
            <div className="mx-auto max-w-6xl px-4 pt-4 pb-6 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  Navigation
                </p>
                <button
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/15 transition"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/85 hover:text-white hover:bg-white/10 transition"
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href={BOOKSY_URL}
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/15 transition"
                >
                  Book now
                </a>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                Tap outside to close · ESC closes too
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}