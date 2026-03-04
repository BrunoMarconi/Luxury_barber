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
                Barbería de autor: experiencia calmada, líneas limpias y detalle real. Reserva en segundos
                o escríbenos y te respondemos rápido.
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
                      C. Eugenio Gross, Bailén-Miraflores, 29001 Málaga
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        Teléfono
                      </p>
                      <a
                        href="tel:+34000000000"
                        className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-white"
                      >
                        +34 629 35 73 44
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/34629357344"
                        className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-white"
                      >
                        Mensaje
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        Instagram
                      </p>
                      <a
                        href="https://www.instagram.com/juank.alpha.es?igsh=eXZvb3V2MDBwOHls"
                        className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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