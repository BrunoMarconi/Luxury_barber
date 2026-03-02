"use client";

import Link from "next/link";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/#team" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
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
            href="https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga?do=invite&_branch_match_id=1556921415801310876&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVj8jyCMxMT%2FbJi0yyrytKTUstKsrMS49PKsovL04tsnVNSU8FAOg7uKI6AAAA"
            className="pointer-events-auto rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur hover:bg-white/15 transition"
          >
            Book now
          </a>
        </nav>

        {/* Mobile: botón simple tipo menú */}
        <button
          className="pointer-events-auto md:hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur"
          aria-label="Open menu"
          type="button"
          onClick={() => {
            // luego lo conectamos con un drawer
            console.log("open menu");
          }}
        >
          Menu
        </button>
      </div>
    </header>
  );
}