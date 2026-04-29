"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buildWaUrl } from "@/lib/cta";

const nav = [
  { label: "Equipo", href: "/#team" },
  { label: "Servicios", href: "/servicios", subNav: [
    { label: "Corte y Barba", href: "/barberia-marbella-corte-barba" },
    { label: "Corte de Cabello", href: "/corte-de-pelo-hombre-marbella" },
    { label: "Barba", href: "/arreglo-de-barba-marbella" },
    { label: "Tratamiento Facial", href: "/tratamiento-facial-hombre-marbella" },
    { label: "Diagnóstico Capilar", href: "/diagnostico-capilar-marbella" },
    { label: "Tratamiento Capilar", href: "/tratamiento-capilar-hombre-marbella" },
    { label: "Barbería Marbella", href: "/barberia-marbella" },
  ] },
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

      <div className="relative mx-auto flex h-16 max-w-7xl items-center px-4 sm:h-20 sm:px-6">
        <Link
          href="/"
          className="pointer-events-auto select-none text-lg font-semibold tracking-[0.22em] text-white"
          aria-label="Home"
        >
          The Professional Barber in Marbella <br />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-5 md:flex ml-auto bg-black/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10">
          {nav.map((item) => (
            item.subNav ? (
              <div
                key={item.href}
                className="relative"
                data-dropdown
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                  className="pointer-events-auto flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.22em] text-white/85 hover:text-white transition cursor-pointer"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-3 h-3 opacity-60 transition-transform duration-200 ${dropdownOpen === item.label ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {dropdownOpen === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 rounded-2xl bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.6)] backdrop-blur-md">
                    <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rotate-45 bg-[#0A0A0A] border-l border-t border-white/10" />
                    <div className="py-1.5">
                      {item.subNav.map((subItem, idx) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setDropdownOpen(null)}
                          className={`flex items-center gap-3 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 hover:text-white hover:bg-white/5 transition-colors${idx !== 0 ? " border-t border-white/5" : ""}`}
                        >
                          <span className="h-[3px] w-[3px] rounded-full bg-white/30 shrink-0" />
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
            className="btn-reserva text-xs uppercase tracking-[0.22em] ml-4"
          >
            Reservar ahora
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="pointer-events-auto md:hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur"
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
          <div className="border-b border-white/10 bg-[#0A0A0A]/95 text-white">
            <div className="mx-auto max-w-6xl px-4 pt-4 pb-6 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  Navegación
                </p>
                <button
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/15 transition"
                  type="button"
                  onClick={() => { setOpen(false); setMobileSubOpen(null); }}
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                {nav.map((item) => (
                  item.subNav ? (
                    <div key={item.href}>
                      <button
                        onClick={() => setMobileSubOpen(mobileSubOpen === item.label ? null : item.label)}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/85 hover:text-white hover:bg-white/10 transition flex justify-between items-center"
                      >
                        {item.label}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`w-4 h-4 opacity-60 transition-transform duration-300 ${mobileSubOpen === item.label ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {mobileSubOpen === item.label && (
                        <div className="mt-1 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                          {item.subNav.map((subItem, idx) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-center gap-3 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/5 transition ${idx !== 0 ? 'border-t border-white/[0.06]' : ''}`}
                            >
                              <span className="h-1 w-1 rounded-full bg-white/30 shrink-0" />
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
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/85 hover:text-white hover:bg-white/10 transition"
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
                  className="btn-reserva text-[10px] uppercase tracking-[0.22em] w-full sm:w-auto"
                >
                  Reservar ahora
                </a>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                Toca fuera para cerrar · ESC también cierra
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}