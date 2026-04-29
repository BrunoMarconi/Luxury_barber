"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";

const BOOKSY_URL = buildWaUrl("tratamiento-capilar");

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

const STEPS = [
  "Diagnóstico capilar personalizado",
  "Selección del tratamiento adecuado",
  "Aplicación con productos profesionales",
  "Activación mediante técnica y masaje",
  "Resultado visible inmediato",
];

const RESULTS = [
  "Cabello más sano",
  "Cuero cabelludo equilibrado",
  "Mejor base para el corte",
  "Resultado estético superior",
];

const PROBLEMS = [
  "Caída del cabello",
  "Exceso de grasa en el cuero cabelludo",
  "Caspa o descamación",
  "Cabello seco, dañado o sin vida",
  "Falta de definición en cabellos rizados",
];

export default function TratamientoCapilarClient() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute -top-40 left-1/2 h-160 w-160 -translate-x-1/2 rounded-full bg-[#0F2A44]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60"
          >
            Barbería premium · Marbella
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="mt-4 max-w-[20ch] text-[40px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[56px] lg:text-[72px]"
          >
            Tratamiento Capilar Personalizado en Marbella para Hombre
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="mt-6 max-w-[52ch] space-y-2"
          >
            <p className="text-[15px] font-semibold leading-6 tracking-[0.03em] text-white/90">
              No es un lavado más.
            </p>
            <p className="text-[13px] leading-6 tracking-[0.04em] text-white/60">
              Es un diagnóstico y tratamiento diseñado según el estado real de tu cuero cabelludo y tu cabello.
            </p>
          </motion.div>

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
                data-page="tratamiento-capilar"
                className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
              >
                Solicitar asesoría personalizada
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

      {/* ── DESEO ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
                Por qué importa
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Un cuero cabelludo sano lo cambia todo
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <p className="text-[13px] leading-7 tracking-[0.04em] text-black/65">
              Un cuero cabelludo sano cambia por completo el resultado de tu imagen. El cabello se ve mejor, el corte dura más y tu presencia mejora desde el primer momento.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── AUTORIDAD ── */}
      <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  Nuestro enfoque
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[44px]">
                  Primero analizamos, después tratamos
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <div className="space-y-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                <p>
                  Antes de aplicar cualquier producto, analizamos el estado de tu cuero cabelludo y tu tipo de cabello para determinar exactamente qué necesita. Puedes ver más sobre cómo funciona nuestro{" "}
                  <Link href="/diagnostico-capilar-marbella" className="text-white/70 underline underline-offset-2 hover:text-white">
                    diagnóstico capilar
                  </Link>
                  .
                </p>
                <p>
                  No trabajamos con protocolos genéricos. Cada tratamiento se adapta a ti para lograr un resultado real y visible desde la primera sesión.
                </p>
                <p>
                  Trabajamos con productos profesionales de alta calidad y técnicas específicas para tratar el cuero cabelludo, no solo el cabello. Cada aplicación tiene una función concreta y un resultado esperado.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ── PROBLEMAS ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
            Para quién es
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[44px]">
            ¿Reconoces alguno de estos problemas?
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-5 max-w-[60ch] text-[13px] leading-7 tracking-[0.04em] text-black/65">
            Nuestro tratamiento capilar en Marbella está diseñado para hombres que presentan:
          </p>
        </FadeUp>
        <FadeUp delay={0.14}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/40 px-5 py-4 text-[12px] leading-5 tracking-[0.04em] text-black/75"
              >
                <span className="mt-px shrink-0 text-white/70">—</span>
                {p === "Cabello seco, dañado o sin vida" ? (
                  <span>
                    <Link href="/corte-de-pelo-hombre-marbella" className="text-black underline underline-offset-2 hover:text-black/70">
                      Cabello dañado
                    </Link>{" "}
                    o sin vida
                  </span>
                ) : (
                  p
                )}
              </li>
            ))}
          </ul>
        </FadeUp>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              El proceso
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[44px]">
              Cómo funciona
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <FadeUp key={step} delay={i * 0.07} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-[28px] font-semibold tabular-nums text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-[12px] leading-5 tracking-[0.04em] text-white/70">
                  {step}
                </p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <p className="mt-10 text-[13px] leading-6 tracking-[0.04em] text-white/50">
              Este tratamiento mejora el resultado final del{" "}
              <Link href="/corte-de-pelo-hombre-marbella" className="text-white/70 underline underline-offset-2 hover:text-white">
                corte
              </Link>
              .
            </p>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ── DIFERENCIAL ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
                La diferencia
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[44px]">
                La mayoría lava.<br />Nosotros tratamos.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <div className="space-y-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
              <p>La mayoría de barberías lavan el cabello. Nosotros tratamos el cuero cabelludo.</p>
              <p>No utilizamos el mismo producto para todos. No improvisamos. Cada paso tiene un porqué.</p>
              <p>
                Este servicio puede combinarse con otros como{" "}
                <Link href="/corte-de-pelo-hombre-marbella" className="text-black underline underline-offset-2 hover:text-black/70">
                  corte
                </Link>{" "}
                o{" "}
                <Link href="/arreglo-de-barba-marbella" className="text-black underline underline-offset-2 hover:text-black/70">
                  barba
                </Link>{" "}
                para un resultado completo.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Qué consigues
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[44px]">
              Resultados visibles
            </h2>
          </FadeUp>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((r, i) => (
              <FadeUp key={r} delay={i * 0.07} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                  {r}
                </p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.32}>
            <p className="mt-8 text-[13px] leading-6 tracking-[0.04em] text-white/45">
              Especialmente cuando se combina con{" "}
              <Link href="/barberia-marbella-corte-barba" className="text-white/70 underline underline-offset-2 hover:text-white">
                corte y barba
              </Link>
              .
            </p>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ── MICRO CONVERSIÓN ── */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-24 text-center">
        <FadeUp>
          <p className="mx-auto max-w-[52ch] text-[18px] font-semibold leading-7 tracking-tight text-black sm:text-[22px]">
            Si notas caída, grasa o falta de vida en tu cabello, este tratamiento no es opcional.
          </p>
          <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.1em] text-black/50">
            Es necesario.
          </p>
        </FadeUp>
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
              Reserva tu tratamiento capilar en Marbella
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 text-[13px] leading-7 tracking-[0.03em] text-white/55">
              Un tratamiento real, adaptado a ti. No al azar.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="tratamiento-capilar"
                className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
              >
                Solicitar asesoría personalizada
              </a>
              <Link
                href="/diagnostico-capilar-marbella"
                className="w-full rounded-full border border-white/25 bg-transparent px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white sm:w-auto"
              >
                Ver diagnóstico capilar
              </Link>
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Sin compromiso · Respuesta en menos de 1 hora
            </p>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </section>

    </main>
  );
}
