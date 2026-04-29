"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";

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
    name: "Carlos M.",
    text: "Servicio impecable, el corte dura semanas perfecto.",
  },
  {
    name: "Javier R.",
    text: "Por fin encontré un barbero que entiende lo que quiero.",
  },
  {
    name: "Luis G.",
    text: "Profesionalismo y detalle desde que entras hasta que sales.",
  },
];

function Stars() {
  return (
    <span className="text-[#0F2A44] tracking-tight text-sm">★★★★★</span>
  );
}

export default function BarberiaMarbellaClient() {
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
            className="mt-4 max-w-[16ch] text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[60px] lg:text-[80px]"
          >
            Barbería en Marbella
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="mt-6 max-w-[50ch] text-[14px] leading-7 tracking-[0.04em] text-white/65"
          >
            Servicios de barbería con técnica, precisión y atención al detalle.
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
                Reservar servicio
              </a>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Reserva online en menos de 1 minuto
              </p>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
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

      {/* ── RESEÑAS ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
            Lo que dicen nuestros clientes
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[40px]">
            Opiniones reales
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.07} className="flex flex-col rounded-3xl border border-black/10 bg-white/40 p-7">
              <Stars />
              <p className="mt-4 flex-1 text-[13px] leading-6 tracking-[0.03em] text-black/70 italic">
                "{r.text}"
              </p>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/50">
                {r.name}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── TRANSICIÓN PREMIUM ── */}
      <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/20 to-transparent" />
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
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:bg-white/10 hover:border-white/35 hover:text-white"
              >
                Ver servicios premium →
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/20 to-transparent" />
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
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="barberia-marbella"
                className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
              >
                Reservar cita
              </a>
              <Link
                href="/servicios"
                className="w-full rounded-full border border-white/25 bg-transparent px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white sm:w-auto"
              >
                Ver servicios premium
              </Link>
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Reserva online en menos de 1 minuto
            </p>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </section>

    </main>
  );
}
