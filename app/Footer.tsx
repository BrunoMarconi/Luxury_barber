"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function FadeUp({
  children,
  delay = 0,
  amount = 0.35,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const bookUrl =
    "https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga?do=invite&_branch_match_id=1556921415801310876&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVj8jyCMxMT%2FbJi0yyrytKTUstKsrMS49PKsovL04tsnVNSU8FAOg7uKI6AAAA";

  return (
    <footer className="relative overflow-hidden bg-[#0f1112] text-white">
      {/* marquee keyframes local */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>

      {/* Top ticker */}
      <div className="pointer-events-none border-t border-white/10 bg-black/20">
        <div className="overflow-hidden">
          <div
            className="marquee-track flex w-max"
            style={{ animation: "marquee-left 18s linear infinite", willChange: "transform" }}
          >
            <span className="whitespace-nowrap px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.22em] text-white/70">
              EL BARBERO PROFESIONAL &nbsp; • &nbsp; TRABAJO LIMPIO &nbsp; • &nbsp; MAESTRO DEL DETALLE &nbsp; • &nbsp;
              EL BARBERO PROFESIONAL &nbsp; • &nbsp; TRABAJO LIMPIO &nbsp; • &nbsp; MAESTRO DEL DETALLE &nbsp; • &nbsp;
            </span>
            <span
              aria-hidden="true"
              className="whitespace-nowrap px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.22em] text-white/70"
            >
              EL BARBERO PROFESIONAL &nbsp; • &nbsp; TRABAJO LIMPIO &nbsp; • &nbsp; MAESTRO DEL DETALLE &nbsp; • &nbsp;
              EL BARBERO PROFESIONAL &nbsp; • &nbsp; TRABAJO LIMPIO &nbsp; • &nbsp; MAESTRO DEL DETALLE &nbsp; • &nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-20">
        {/* subtle background vignette */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
          <div className="absolute -top-24 left-10 h-[420px] w-[420px] rounded-full bg-white" />
          <div className="absolute -bottom-40 right-0 h-[560px] w-[560px] rounded-full bg-white" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Left: brand + CTA */}
          <div>
            <FadeUp delay={0}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                El Barbero Profesional
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2 className="mt-3 max-w-[18ch] text-[40px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[52px] lg:text-[64px]">
                Reserva. Llega. Sal impecable.
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-5 max-w-[70ch] text-[12px] leading-6 tracking-[0.06em] text-white/60">
                Tu estilo, nuestra precisión <br /><br />Una Barbería pensada para el hombre que valora su imagen y su tiempo. <br /><br />Reserva hoy y disfruta de la experiencia 
              </p>
            </FadeUp>

            <FadeUp delay={0.14}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={bookUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/15 transition"
                >
                  Reservar ahora
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-transparent px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 hover:text-white hover:border-white/25 transition"
                >
                  Contacto
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right: links + info */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <FadeUp delay={0.06} amount={0.25}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Páginas
                </p>

                <div className="mt-4 grid gap-3">
                  {[
                    ["Inicio", "/#home"],
                    ["Servicios", "/#services"],
                    ["Galería", "/#gallery"],
                    ["Equipo", "/#team"],
                    ["Contacto", "/contact"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1} amount={0.25}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Información
                </p>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Dirección
                    </p>
                    <a
                      href="https://maps.app.goo.gl/LBDdNF1UThQGUteD7"
                      className="mt-2 block text-[12px] leading-6 tracking-[0.06em] text-white/70 hover:underline"
                    >
                      C. Eugenio Gross 43, Bailén-Miraflores, 29001 Málaga
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/34672516317"
                        className="mt-2 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-white"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Mensaje
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        Instagram
                      </p>
                      <a
                        href="https://www.instagram.com/juank.alpha.es?igsh=eXZvb3V2MDBwOHls"
                        className="mt-2 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        @juank.alpha.es 
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Horario
                    </p>
                    <p className="mt-2 text-[12px] leading-6 tracking-[0.06em] text-white/70">
                      Lun–Vie 10:00–19:00 · Sáb 10:00–19:00 · Dom Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Bottom line */}
        <div className="relative mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              © {new Date().getFullYear()} El Barbero Profesional. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 hover:text-white/70"
              >
                Privacy
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 hover:text-white/70"
              >
                Terms
              </a>
              <a
                href={bookUrl}
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 hover:text-white/70"
              >
                Booksy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}