"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";
import type { GoogleReview } from "@/lib/google-reviews";

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

const REVIEWS = [
  {
    id: "r1",
    name: "Alberto F.",
    rating: 5,
    date: "Mar 2026",
    text: "Después de meses con el cuero cabelludo irritado, por fin encontré un tratamiento que de verdad funciona. Resultados visibles desde la primera sesión.",
  },
  {
    id: "r2",
    name: "Sergio V.",
    rating: 5,
    date: "Feb 2026",
    text: "Me diagnosticaron y me explicaron exactamente qué necesitaba. Nada de productos genéricos, todo personalizado. El cambio es real.",
  },
  {
    id: "r3",
    name: "Francisco",
    rating: 5,
    date: "Ene 2026",
    text: "La diferencia antes y después es muy clara. El cabello tiene más cuerpo y el cuero cabelludo está mucho más equilibrado.",
  },
  {
    id: "r4",
    name: "Manu",
    rating: 5,
    date: "Ene 2026",
    text: "Creía que la caída de cabello era inevitable. Después del análisis y el tratamiento, la mejoría es real y visible.",
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

const STEPS = [
  "Diagnóstico capilar personalizado",
  "Selección del tratamiento adecuado",
  "Aplicación con productos profesionales",
  "Activación mediante técnica y masaje",
  "Resultado visible inmediato",
];

const RESULTS = [
  "Cabello con mejor aspecto y textura",
  "Cuero cabelludo más equilibrado",
  "Mejor respuesta a tratamientos posteriores",
  "Mayor duración del resultado estético",
  "Sensación de cabello más fuerte y saludable",
];

const PROBLEMS = [
  "Caída del cabello",
  "Exceso de grasa en el cuero cabelludo",
  "Caspa o descamación",
  "Cabello seco, dañado o sin vida",
  "Falta de definición en cabellos rizados",
  "Cuero cabelludo sensible",
  "Picor o irritación frecuente",
  "Cabello debilitado",
  "Pérdida de densidad",
];

export default function TratamientoCapilarClient({ googleReviews = [] }: { googleReviews?: GoogleReview[] }) {
  const reviews = googleReviews.length ? googleReviews : REVIEWS;
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
            Tu cabello no se está cayendo por casualidad.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="mt-6 max-w-[52ch] text-[15px] font-semibold leading-6 tracking-[0.03em] text-white/90"
          >
            Detrás de cada problema capilar hay una causa. Aquí la analizamos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-4 max-w-[58ch] text-[13px] leading-7 tracking-[0.03em] text-white/55"
          >
            Diagnóstico capilar avanzado, tecnología especializada y protocolos personalizados diseñados para trabajar la causa y no únicamente los síntomas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
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
                Solicitar diagnóstico capilar
              </a>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Reserva online en menos de 1 minuto
              </p>
            </div>
            <Link
              href="/barberia-hombre-marbella"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── POST-HERO STRIP ── */}
      <section className="relative bg-[#0F2A44] py-10">
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-[15px] font-semibold leading-7 text-white">No todos los problemas capilares son iguales.</p>
            <p className="mt-1 text-[12px] leading-6 text-white/55">Por eso no todos los tratamientos funcionan.</p>
          </div>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-asesoria"
            data-page="tratamiento-capilar"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F2A44] transition hover:bg-white/90"
          >
            Analizar mi caso
          </a>
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

      {/* ── GALERÍA ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
        {[
          {
            src: "/images/diagnostico-capilar-hombre-premium-marbella.jpeg",
            alt: "Diagnóstico capilar hombre premium Marbella",
          },
          {
            src: "/images/tratamiento-capilar-masculino-marbella.jpeg",
            alt: "Tratamiento capilar masculino Marbella",
          },
          {
            src: "/images/analisis-cuero-cabelludo-premium-marbella.jpeg",
            alt: "Análisis cuero cabelludo premium Marbella",
          },
          {
            src: "/images/asesoria-capilar-premium-hombre-marbella.jpeg",
            alt: "Asesoría capilar premium hombre Marbella",
          },
        ].map((img) => (
          <div key={img.src} className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </section>

      {/* ── AUTORIDAD / NUESTRO ENFOQUE ── */}
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
                  Primero entendemos la causa. Después diseñamos el tratamiento.
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
                  El diagnóstico puede incluir análisis capilar profesional, observación del cuero cabelludo, evaluación del estado del folículo y detección de factores que afectan directamente la calidad del cabello.
                </p>
                <p>
                  No trabajamos con protocolos genéricos. Cada tratamiento se adapta a ti para lograr un resultado real y visible desde la primera sesión.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
        <FadeUp delay={0.18} className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-[15px] font-semibold text-white/80">No tratamos el cabello. Tratamos la causa.</p>
          <p className="text-[12px] leading-6 text-white/45">Un diagnóstico real antes de cualquier aplicación.</p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-asesoria"
            data-page="tratamiento-capilar"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
          >
            Analizar mi caso
          </a>
        </FadeUp>
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
          <FadeUp delay={0.46} className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-[15px] font-semibold text-white/80">Cada paso tiene un propósito. Ninguno es aleatorio.</p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-asesoria"
              data-page="tratamiento-capilar"
              className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
            >
              Empezar diagnóstico capilar
            </a>
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

      {/* ── TECNOLOGÍA ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
                Herramientas de precisión
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[44px]">
                Tecnología aplicada con criterio.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <div className="space-y-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
              <p>
                Utilizamos diagnóstico capilar profesional, masaje estimulante, protocolos específicos y productos seleccionados según las necesidades detectadas durante el análisis.
              </p>
              <p className="text-black/50">La tecnología no sustituye el criterio.</p>
              <p className="text-black/50">Permite tomar mejores decisiones.</p>
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {RESULTS.map((r, i) => (
              <FadeUp key={r} delay={i * 0.07} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                  {r}
                </p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.38}>
            <p className="mt-8 text-[13px] leading-6 tracking-[0.04em] text-white/45">
              Especialmente cuando se combina con{" "}
              <Link href="/corte-y-barba-premium-marbella" className="text-white/70 underline underline-offset-2 hover:text-white">
                corte y barba
              </Link>
              .
            </p>
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
              <span className="text-[11px] text-black/40 uppercase tracking-widest">en Google</span>
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
                <div className="mt-4 pt-4 border-t border-black/8 flex items-center gap-1.5">
                  <GoogleG className="w-3 h-3 shrink-0" />
                  <span className="text-[10px] tracking-[0.12em] uppercase text-black/35">Reseña verificada</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MICRO CONVERSIÓN ── */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:py-32 text-center">
        <FadeUp>
          <p className="mx-auto max-w-[52ch] text-[18px] font-semibold leading-7 tracking-tight text-black sm:text-[22px]">
            Cuando entiendes la causa, el tratamiento deja de ser una prueba y empieza a convertirse en una estrategia.
          </p>
          <p className="mt-4 text-[14px] font-semibold uppercase tracking-[0.1em] text-black/50">
            Tu cabello merece algo más que productos al azar.
          </p>
        </FadeUp>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-32 lg:py-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              Diagnóstico capilar · Marbella
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[46px] lg:text-[52px]">
              Solicita tu diagnóstico capilar personalizado.
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
                Solicitar diagnóstico personalizado
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
