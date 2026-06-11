"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";
import type { GoogleReview } from "@/lib/google-reviews";

const BOOKSY_URL = buildWaUrl("barberia-marbella");

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

const SERVICES = [
  {
    kicker: "Corte de pelo",
    h2: "Corte de pelo en Marbella",
    description:
      "Corte de pelo para hombre en Marbella adaptado a tu tipo de cabello, forma del rostro y estilo personal. Trabajamos con precisión para lograr un resultado limpio, natural y fácil de mantener.",
    cta: "Reservar corte",
    microText: "¿Quieres mejorar también la salud de tu cabello?",
    microLabel: "Ver diagnóstico capilar →",
    microHref: "/diagnostico-capilar-marbella",
    waPage: "barberia-marbella-corte",
  },
  {
    kicker: "Arreglo de barba",
    h2: "Arreglo de barba en Marbella",
    description:
      "Perfilado y arreglo de barba en Marbella con técnicas de precisión para definir líneas, equilibrar proporciones y mejorar tu imagen de forma natural.",
    cta: "Reservar barba",
    microText: "¿Buscas un cuidado más completo para tu piel?",
    microLabel: "Ver tratamiento facial →",
    microHref: "/tratamiento-facial-hombre-marbella",
    waPage: "barberia-marbella-barba",
  },
  {
    kicker: "Servicio combinado",
    h2: "Corte y barba en Marbella",
    description:
      "Servicio completo de corte de pelo y barba en Marbella diseñado para conseguir una imagen equilibrada, limpia y adaptada a tu estilo. Precisión en cada detalle para un resultado profesional.",
    cta: "Reservar servicio completo",
    microText: "Lleva tu imagen al siguiente nivel",
    microLabel: "Ver tratamientos premium →",
    microHref: "/tratamiento-facial-hombre-marbella",
    waPage: "barberia-marbella-corte-barba",
  },
];

const REVIEWS = [
  {
    id: "r1",
    name: "Carlos M.",
    rating: 5,
    date: "Mar 2026",
    text: "Vine sin saber muy bien qué quería y salí con un corte que realmente me favorece. La diferencia con otros sitios es notable.",
  },
  {
    id: "r2",
    name: "Javier R.",
    rating: 5,
    date: "Feb 2026",
    text: "El trato y la atención al detalle son de otro nivel. Cada vez que voy salgo mejor que la anterior.",
  },
  {
    id: "r3",
    name: "Luis G.",
    rating: 5,
    date: "Ene 2026",
    text: "Nunca había ido a un sitio donde explicaran tan bien el porqué de cada decisión. Profesionalismo total.",
  },
  {
    id: "r4",
    name: "Marcos T.",
    rating: 5,
    date: "Ene 2026",
    text: "El corte y el arreglo de barba combinados cambian completamente la imagen. Lo recomiendo sin dudarlo.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-[#FBBC04] tracking-tight text-sm">{"★".repeat(n)}</span>
  );
}

function GoogleG({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function BarberiaMarbellaClient({ googleReviews = [] }: { googleReviews?: GoogleReview[] }) {
  const reviews = googleReviews.length ? googleReviews : REVIEWS;
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute -top-32 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-[#0F2A44]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60"
          >
            Barbería · Marbella
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="mt-4 max-w-[22ch] text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[60px] lg:text-[80px]"
          >
            No todos los servicios incluyen la experiencia completa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="mt-6 max-w-[50ch] text-[14px] leading-7 tracking-[0.04em] text-white/65"
          >
            Servicios funcionales para mantenimiento, sin el proceso completo de asesoría.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-start gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="barberia-marbella"
                className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
              >
                Solicitar asesoría personalizada
              </a>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Reserva online en menos de 1 minuto
              </p>
            </div>
            <a
              href={buildWaUrl("barberia-marbella-premium")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-asesoria"
              data-page="barberia-marbella-premium"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white"
            >
              Acceder a experiencia premium
            </a>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-14 lg:py-18">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:p-10">
          <p className="text-[13px] leading-7 tracking-[0.04em] text-black/70">
            Si buscas un cambio real en tu imagen, este no es el punto de partida.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={buildWaUrl("barberia-marbella-premium")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-asesoria"
              data-page="barberia-marbella-premium"
              className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
            >
              Acceder a experiencia premium
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTEXTO ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Adaptado a lo que necesitas
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Calidad sin comprometer el resultado
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <p className="text-[13px] leading-7 tracking-[0.04em] text-black/65">
              No todos los clientes buscan el mismo nivel de servicio. Por eso ofrecemos opciones más directas, manteniendo siempre la calidad del trabajo y la atención al detalle que nos define.
            </p>
          </FadeUp>
          <FadeUp delay={0.16}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="max-w-[48ch] text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Estos servicios están pensados como mantenimiento, no como transformación.
              </p>
              <a
                href={buildWaUrl("barberia-marbella")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="barberia-marbella"
                className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
              >
                Solicitar asesoría personalizada
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Servicios disponibles
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Elige tu servicio
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.h2} delay={i * 0.08} className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  {s.kicker}
                </p>
                <h3 className="mt-3 text-[20px] font-semibold uppercase leading-tight tracking-tight text-white">
                  {s.h2}
                </h3>
                <p className="mt-4 flex-1 text-[12px] leading-6 tracking-[0.04em] text-white/55">
                  {s.description}
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={buildWaUrl(s.waPage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp-asesoria"
                    data-page={s.waPage}
                    className="flex items-center justify-center rounded-full bg-[#0F2A44] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
                  >
                    {s.cta}
                  </a>
                  <div className="mt-1 border-t border-white/8 pt-4">
                    <p className="text-[10px] leading-5 tracking-[0.04em] text-white/40">
                      {s.microText}
                    </p>
                    <Link
                      href={s.microHref}
                      className="mt-1.5 inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50 transition hover:text-white/70"
                    >
                      {s.microLabel}
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="rounded-3xl border border-black/10 bg-white/80 p-8 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
            La diferencia real
          </p>
          <h2 className="mt-4 text-[28px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[32px]">
            La diferencia no está en el resultado inmediato, sino en el proceso.
          </h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="max-w-[52ch] text-[13px] leading-7 tracking-[0.04em] text-black/70">
              Aquí trabajamos mantenimiento con criterio, pero para un diseño completo hay un paso adicional que no se sustituye.
            </p>
            <a
              href={buildWaUrl("barberia-marbella-premium")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-asesoria"
              data-page="barberia-marbella-premium"
              className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
            >
              Ver experiencia completa
            </a>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Resultados y mantenimiento
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[44px] lg:text-[52px]">
              Un buen mantenimiento no sustituye un buen diseño.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mt-10 flex justify-center">
              <a
                href={buildWaUrl("barberia-marbella-premium")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="barberia-marbella-premium"
                className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
              >
                Quiero mejorar mi imagen
              </a>
            </div>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ── RESEÑAS ── */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="flex items-center gap-2.5">
              <GoogleG className="w-4 h-4 shrink-0" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Reseñas verificadas en Google
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
              Lo que dicen los clientes
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-5 py-2.5">
              <GoogleG className="w-4 h-4 shrink-0" />
              <span className="text-[#FBBC04] text-sm leading-none">★★★★★</span>
              <span className="text-[12px] font-semibold text-black">5.0</span>
              <span className="text-[11px] text-black/40 uppercase tracking-[0.1em]">en Google</span>
            </div>
          </FadeUp>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <FadeUp key={r.id} delay={i * 0.06} className="rounded-3xl border border-black/10 bg-white p-6 flex flex-col">
                <div className="flex items-start justify-between">
                  <Stars n={r.rating} />
                  <GoogleG className="w-4 h-4 shrink-0 mt-0.5" />
                </div>
                <p className="mt-4 flex-1 text-[12px] leading-6 tracking-[0.04em] text-black/65">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">{r.name}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">{r.date}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-black/[0.08] flex items-center gap-1.5">
                  <GoogleG className="w-3 h-3 shrink-0" />
                  <span className="text-[10px] tracking-[0.12em] uppercase text-black/35">Reseña verificada</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSICIÓN PREMIUM ── */}
      <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#0F2A44]/30 to-transparent" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
              Más allá del mantenimiento
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-4 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[44px] lg:text-[52px]">
              Una forma más completa de trabajar tu imagen
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mx-auto mt-7 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-white/55">
              Si buscas algo más que un mantenimiento, trabajamos servicios premium donde cada detalle se analiza y se diseña en función de tu rostro, tu cabello y tu piel.
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <div className="mt-10 flex justify-center">
              <a
                href={buildWaUrl("barberia-marbella-premium")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="barberia-marbella-premium"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:bg-white/10 hover:border-white/35 hover:text-white"
              >
                Ver servicios premium →
              </a>
            </div>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#0F2A44]/30 to-transparent" />
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              Reserva online
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[46px] lg:text-[52px]">
              Selecciona el servicio y reserva tu cita.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 text-[13px] leading-7 tracking-[0.03em] text-white/55">
              Selecciona el servicio que mejor se adapte a lo que buscas y reserva tu cita.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={buildWaUrl("barberia-marbella-premium")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="barberia-marbella-premium"
                className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
              >
                Acceder a experiencia premium
              </a>
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Si buscas algo más, sabes dónde encontrarlo.
            </p>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </section>

    </main>
  );
}
