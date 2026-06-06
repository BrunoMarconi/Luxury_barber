"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buildWaUrl } from "@/lib/cta";

type PremiumSubItem = { label: string; href: string };

type ExperienciaItem = {
  label: string;
  href: string;
  special?: boolean;
  subNav?: PremiumSubItem[];
};

type NavItem = {
  label: string;
  href: string;
  experiencias?: ExperienciaItem[];
};

const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Equipo", href: "/#team" },
  { label: "Galería", href: "/#gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contact" },
  {
    label: "Experiencias",
    href: "#",
    experiencias: [
      {
        label: "Black Access",
        href: "/black-access-marbella",
        special: true,
      },
      {
        label: "Servicios Premium",
        href: "#",
        subNav: [
          { label: "Corte Premium", href: "/corte-de-pelo-hombre-marbella" },
          { label: "Barba Premium", href: "/arreglo-de-barba-marbella" },
          { label: "Corte + Barba Premium", href: "/corte-y-barba-premium-marbella" },
        ],
      },
      { label: "Esenciales", href: "/barberia-hombre-marbella" },
      { label: "Tratamientos Faciales", href: "/tratamiento-facial-hombre-marbella" },
      { label: "Tratamientos Capilares", href: "/tratamiento-capilar-hombre-marbella" },
    ],
  },
];

const BOOKSY_URL = buildWaUrl("header");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [mobileExpOpen, setMobileExpOpen] = useState(false);
  const [mobilePremiumOpen, setMobilePremiumOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!expOpen) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as Element).closest("[data-exp-dropdown]")) {
        setExpOpen(false);
        setPremiumOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [expOpen]);

  useEffect(() => {
    setOpen(false);
    setMobileExpOpen(false);
    setMobilePremiumOpen(false);
    setExpOpen(false);
    setPremiumOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function closeAll() {
    setExpOpen(false);
    setPremiumOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
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

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-6 md:flex ml-auto mr-6 lg:mr-12 bg-black/30 backdrop-blur-md rounded-full px-8 py-3 border border-white/20 shadow-lg">
          {nav.map((item) =>
            item.experiencias ? (
              /* EXPERIENCIAS dropdown */
              <div key="experiencias" className="relative" data-exp-dropdown>
                <button
                  type="button"
                  onClick={() => { setExpOpen(!expOpen); setPremiumOpen(false); }}
                  className="pointer-events-auto flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/90 hover:text-white transition-all duration-200 cursor-pointer px-2 py-1 rounded-md hover:bg-white/10"
                >
                  {item.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`w-3 h-3 opacity-70 transition-transform duration-200 ${expOpen ? "rotate-180" : ""}`}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {expOpen && (
                  <div className="absolute right-0 top-full mt-4 w-72 rounded-2xl bg-black/95 border border-white/20 overflow-visible shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    <div className="absolute -top-2 right-8 h-3 w-3 rotate-45 bg-black/95 border-l border-t border-white/20" />
                    <div className="py-2">
                      {item.experiencias.map((exp, idx) => {
                        /* BLACK ACCESS — tratamiento especial */
                        if (exp.special) {
                          return (
                            <Link
                              key={exp.label}
                              href={exp.href}
                              onClick={closeAll}
                              className="flex items-center gap-4 px-6 py-4 text-xs font-bold uppercase tracking-[0.28em] text-amber-300 hover:text-amber-100 hover:bg-amber-900/20 transition-all duration-200 border-b border-white/15"
                            >
                              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)] shrink-0" />
                              {exp.label}
                            </Link>
                          );
                        }

                        /* SERVICIOS PREMIUM — segundo nivel */
                        if (exp.subNav) {
                          return (
                            <div key={exp.label} data-exp-dropdown>
                              <button
                                type="button"
                                onClick={() => setPremiumOpen(!premiumOpen)}
                                className={`w-full flex items-center justify-between gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200 border-t border-white/10 ${premiumOpen ? "bg-white/5 text-white" : ""}`}
                              >
                                <span className="flex items-center gap-4">
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                                  {exp.label}
                                </span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                  className={`w-3 h-3 opacity-70 transition-transform duration-200 ${premiumOpen ? "-rotate-90" : "-rotate-90 opacity-40"}`}>
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </button>
                              {premiumOpen && (
                                <div className="bg-white/5 border-t border-b border-white/10">
                                  {exp.subNav.map((sub, pIdx) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={closeAll}
                                      className={`flex items-center gap-4 pl-12 pr-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200${pIdx !== 0 ? " border-t border-white/5" : ""}`}
                                    >
                                      <span className="h-1 w-1 rounded-full bg-white/30 shrink-0" />
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        /* Resto de opciones directas */
                        return (
                          <Link
                            key={exp.label}
                            href={exp.href}
                            onClick={closeAll}
                            className="flex items-center gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200 border-t border-white/10"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                            {exp.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Links simples */
              <Link
                key={item.href}
                href={item.href}
                className="pointer-events-auto text-xs font-medium uppercase tracking-[0.22em] text-white/85 hover:text-white transition"
              >
                {item.label}
              </Link>
            )
          )}

          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-asesoria"
            data-page="header"
            className="btn-reserva text-xs uppercase tracking-[0.22em] ml-6 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Solicitar asesoría
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

      {/* ── Mobile drawer ── */}
      <div
        className={["md:hidden", open ? "pointer-events-auto" : "pointer-events-none"].join(" ")}
        aria-hidden={!open}
      >
        <div
          className={["fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity", open ? "opacity-100" : "opacity-0"].join(" ")}
          onClick={() => { setOpen(false); setMobileExpOpen(false); setMobilePremiumOpen(false); }}
        />

        <div
          className={["fixed inset-x-0 top-0 origin-top transition-transform duration-300 ease-out", open ? "translate-y-0" : "-translate-y-full"].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="border-b border-white/20 bg-black/95 text-white shadow-2xl">
            <div className="mx-auto max-w-6xl px-4 pt-6 pb-8 sm:px-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Navegación</p>
                <button
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/20 transition-all duration-200"
                  type="button"
                  onClick={() => { setOpen(false); setMobileExpOpen(false); setMobilePremiumOpen(false); }}
                >
                  Cerrar
                </button>
              </div>

              <div className="mt-6 grid gap-4">
                {nav.map((item) =>
                  item.experiencias ? (
                    /* EXPERIENCIAS accordion mobile */
                    <div key="experiencias-mobile">
                      <button
                        onClick={() => { setMobileExpOpen(!mobileExpOpen); if (mobileExpOpen) setMobilePremiumOpen(false); }}
                        className="w-full rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 flex justify-between items-center shadow-sm"
                      >
                        {item.label}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className={`w-5 h-5 opacity-70 transition-transform duration-300 ${mobileExpOpen ? "rotate-180" : ""}`}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      {mobileExpOpen && (
                        <div className="mt-2 rounded-2xl border border-white/20 bg-white/5 overflow-hidden shadow-inner">
                          {item.experiencias.map((exp) => {
                            /* BLACK ACCESS */
                            if (exp.special) {
                              return (
                                <Link
                                  key={exp.label}
                                  href={exp.href}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-4 px-6 py-5 text-sm font-bold uppercase tracking-[0.25em] text-amber-300 hover:text-amber-100 hover:bg-amber-900/20 transition-all duration-200 border-b border-white/15"
                                >
                                  <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)] shrink-0" />
                                  {exp.label}
                                </Link>
                              );
                            }

                            /* SERVICIOS PREMIUM */
                            if (exp.subNav) {
                              return (
                                <div key={exp.label} className="border-t border-white/10">
                                  <button
                                    onClick={() => setMobilePremiumOpen(!mobilePremiumOpen)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200"
                                  >
                                    <span className="flex items-center gap-4">
                                      <span className="h-2 w-2 rounded-full bg-white/40 shrink-0" />
                                      {exp.label}
                                    </span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                      className={`w-4 h-4 opacity-70 transition-transform duration-300 ${mobilePremiumOpen ? "rotate-180" : ""}`}>
                                      <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                  </button>
                                  {mobilePremiumOpen && (
                                    <div className="bg-white/5 border-t border-white/10">
                                      {exp.subNav.map((sub, pIdx) => (
                                        <Link
                                          key={sub.label}
                                          href={sub.href}
                                          onClick={() => setOpen(false)}
                                          className={`flex items-center gap-4 pl-12 pr-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200${pIdx !== 0 ? " border-t border-white/5" : ""}`}
                                        >
                                          <span className="h-1.5 w-1.5 rounded-full bg-white/30 shrink-0" />
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            /* Links directos */
                            return (
                              <Link
                                key={exp.label}
                                href={exp.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-4 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200${idx !== 0 ? " border-t border-white/10" : ""}`}
                              >
                                <span className="h-2 w-2 rounded-full bg-white/40 shrink-0" />
                                {exp.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Links simples mobile */
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 shadow-sm"
                    >
                      {item.label}
                    </Link>
                  )
                )}

                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="header"
                  className="btn-reserva text-sm uppercase tracking-[0.22em] w-full py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Solicitar asesoría
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
