"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const BOOKSY_URL = "https://wa.me/34672516317";

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
    title: "Corte de Pelo",
    description:
      "Corte adaptado al estilo del cliente, trabajado con precisión y atención al detalle.",
    cta: "Reservar corte",
    href: "/corte-de-pelo-hombre-marbella",
  },
  {
    kicker: "Arreglo de barba",
    title: "Arreglo de Barba",
    description:
      "Perfilado y arreglo de barba para mantener una imagen limpia y cuidada.",
    cta: "Reservar barba",
    href: "/arreglo-de-barba-marbella",
  },
  {
    kicker: "Servicio combinado",
    title: "Corte + Barba",
    description:
      "Servicio combinado para trabajar el conjunto de la imagen de forma equilibrada.",
    cta: "Reservar corte + barba",
    href: "/barberia-marbella-corte-barba",
  },
];

export default function BarberiaMarbellaClient() {
  return (
    <main className="min-h-screen bg-[#ece8de] text-black">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0f1112] pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#f8aa00]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/25 to-transparent" />

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
                className="inline-flex items-center justify-center rounded-full bg-[#f8aa00] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-[#e69300]"
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
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
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
              <FadeUp key={s.title} delay={i * 0.08} className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]/70">
                  {s.kicker}
                </p>
                <h3 className="mt-3 text-[22px] font-semibold uppercase leading-tight tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[12px] leading-6 tracking-[0.04em] text-white/55">
                  {s.description}
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-full bg-[#f8aa00] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-[#e69300]"
                  >
                    {s.cta}
                  </a>
                  <Link
                    href={s.href}
                    className="flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 transition hover:border-white/30 hover:text-white/80"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSICIÓN PREMIUM ── */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-28 text-center">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
            Más allá del mantenimiento
          </p>
        </FadeUp>
        <FadeUp delay={0.06}>
          <h2 className="mt-4 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[44px] lg:text-[52px]">
            Una forma más completa de trabajar tu imagen
          </h2>
        </FadeUp>
        <FadeUp delay={0.12}>
          <p className="mx-auto mt-7 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-black/60">
            Si buscas algo más que un mantenimiento, trabajamos servicios premium donde cada detalle se analiza y se diseña en función de tu rostro, tu cabello y tu piel.
          </p>
          <p className="mx-auto mt-4 max-w-[52ch] text-[13px] leading-7 tracking-[0.04em] text-black/60">
            No se trata solo de cortar o perfilar. Se trata de entender qué te favorece y cómo mejorar tu imagen de forma real.
          </p>
        </FadeUp>
        <FadeUp delay={0.18}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-black/20 bg-black/5 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-black/10 hover:border-black/35"
            >
              Ver servicios premium →
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[#0a0c0d] py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/50 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f8aa00]/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f8aa00]">
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
                className="w-full rounded-full bg-[#f8aa00] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-[#e69300] sm:w-auto"
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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/50 to-transparent" />
      </section>

    </main>
  );
}
