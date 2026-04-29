"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buildWaUrl } from "@/lib/cta";

const nav = [
  { label: "Equipo", href: "/#team" },
  {
    label: "EXPERIENCIAS",
    href: "/servicios",
    subNav: [
      { label: "Corte y Barba", href: "/barberia-marbella-corte-barba" },
      { label: "Corte de Cabello", href: "/corte-de-pelo-hombre-marbella" },
      { label: "Barba", href: "/arreglo-de-barba-marbella" },
    ],
  },
  {
    label: "TRATAMIENTOS",
    href: "/servicios",
    subNav: [
      { label: "Tratamiento Facial", href: "/tratamiento-facial-hombre-marbella" },
      { label: "Diagnóstico Capilar", href: "/diagnostico-capilar-marbella" },
    ],
  },
  {
    label: "ESENCIALES",
    href: "/servicios",
    subNav: [
      { label: "Corte Esencial", href: "/servicios" },
      { label: "Corte + Barba Esencial", href: "/servicios" },
      { label: "Barba Esencial", href: "/servicios" },
    ],
  },
  { label: "Galería", href: "/#gallery" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contact" },
];

const BOOKSY_URL = buildWaUrl("header");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const pathname = usePathname();

  // Cierra el dropdown al hacer click fuera
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as Element).closest("[data-dropdown]")) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
    setMobileSubOpen(null);
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
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/45 via-black/10 to-transparent" />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="pointer-events-auto select-none text-base sm:text-xl lg:text-2xl font-semibold tracking-[0.15em] text-white leading-relaxed"
          aria-label="Home"
        >
          <span className="block sm:inline">The Professional Barber</span>
          <span className="block sm:inline sm:ml-3">in Marbella</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex ml-auto mr-6 lg:mr-12 bg-black/30 backdrop-blur-md rounded-full px-8 py-3 border border-white/20 shadow-lg">
          {nav.map((item) => (
            item.subNav ? (
              <div
                key={item.label}
                className="relative"
                data-dropdown
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                  className="pointer-events-auto flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/90 hover:text-white transition-all duration-200 cursor-pointer px-2 py-1 rounded-md hover:bg-white/10"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-3 h-3 opacity-70 transition-transform duration-200 ${dropdownOpen === item.label ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {dropdownOpen === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 rounded-2xl bg-black/95 border border-white/20 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-black/95 border-l border-t border-white/20" />
                    <div className="py-2">
                      {item.subNav.map((subItem, idx) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setDropdownOpen(null)}
                          className={`flex items-center gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200${idx !== 0 ? " border-t border-white/10" : ""}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="pointer-events-auto text-xs font-medium uppercase tracking-[0.22em] text-white/85 hover:text-white transition"
              >
                {item.label}
              </Link>
            )
          ))}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-asesoria"
            data-page="header"
            className="btn-reserva text-xs uppercase tracking-[0.22em] ml-6 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Reservar ahora
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="pointer-events-auto md:hidden rounded-full border border-white/30 bg-black/30 backdrop-blur-md px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white hover:bg-black/50 transition-all duration-200 shadow-lg mr-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menú"}
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
          onClick={() => { setOpen(false); setMobileSubOpen(null); }}
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
          <div className="border-b border-white/20 bg-black/95 text-white shadow-2xl">
            <div className="mx-auto max-w-6xl px-4 pt-6 pb-8 sm:px-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  Navegación
                </p>
                <button
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/20 transition-all duration-200"
                  type="button"
                  onClick={() => { setOpen(false); setMobileSubOpen(null); }}
                >
                  Cerrar
                </button>
              </div>

              <div className="mt-6 grid gap-4">
                {nav.map((item) => (
                  item.subNav ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileSubOpen(mobileSubOpen === item.label ? null : item.label)}
                        className="w-full rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 flex justify-between items-center shadow-sm"
                      >
                        {item.label}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`w-5 h-5 opacity-70 transition-transform duration-300 ${mobileSubOpen === item.label ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {mobileSubOpen === item.label && (
                        <div className="mt-2 rounded-2xl border border-white/20 bg-white/5 overflow-hidden shadow-inner">
                          {item.subNav.map((subItem, idx) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-center gap-4 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200 ${idx !== 0 ? 'border-t border-white/10' : ''}`}
                            >
                              <span className="h-2 w-2 rounded-full bg-white/40 shrink-0" />
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 shadow-sm"
                    >
                      {item.label}
                    </Link>
                  )
                ))}

                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="header"
                  className="btn-reserva text-sm uppercase tracking-[0.22em] w-full py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Reservar ahora
                </a>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/50 text-center">
                Toca fuera para cerrar · ESC también cierra
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}