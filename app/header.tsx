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
        <nav className="hidden items-center gap-8 md:flex ml-16 bg-black/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10">
          {nav.map((item) => (
            item.subNav ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <div className="pointer-events-auto text-xs font-medium uppercase tracking-[0.22em] text-white/85 hover:text-white transition cursor-pointer">
                  {item.label}
                </div>
                {dropdownOpen === item.label && (
                  <div className="absolute top-full mt-2 bg-black/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 min-w-50">
                    {item.subNav.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block text-xs font-medium uppercase tracking-[0.22em] text-white/85 hover:text-white transition py-1"
                      >
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
          <div className="border-b border-white/10 bg-[#0f1112]/95 text-white">
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
                        <span className={`transition-transform ${mobileSubOpen === item.label ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobileSubOpen === item.label && (
                        <div className="mt-2 ml-4 grid gap-2">
                          {item.subNav.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setOpen(false)}
                              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 hover:text-white hover:bg-white/10 transition"
                            >
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