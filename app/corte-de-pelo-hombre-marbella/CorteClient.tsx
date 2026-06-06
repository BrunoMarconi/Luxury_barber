"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";
import type { GoogleReview } from "@/lib/google-reviews";

const BOOKSY_URL = buildWaUrl("corte-de-pelo");

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
    name: "Alex",
    rating: 5,
    date: "Ene 2026",
    text: "No había encontrado a nadie que me hiciera el corte exactamente como quería hasta ahora. Volveré sin duda.",
  },
  {
    id: "r2",
    name: "Yeray",
    rating: 5,
    date: "Ene 2026",
    text: "No es solo un corte, se nota que hay un análisis detrás de cada decisión. Muy meticuloso y muy recomendable.",
  },
  {
    id: "r3",
    name: "Francisco",
    rating: 5,
    date: "Ene 2026",
    text: "El nivel de detalle y la precisión es algo que no había visto antes. El resultado siempre supera las expectativas.",
  },
  {
    id: "r4",
    name: "Manu",
    rating: 5,
    date: "Ene 2026",
    text: "Da tranquilidad ponerse en manos de alguien que realmente sabe lo que está haciendo. Repetiré.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-[#0F2A44] tracking-tight text-sm">
      {"★".repeat(n)}
    </span>
  );
}

const FAQ = [
  {
    q: "¿Qué corte de cabello me favorece según mi rostro?",
    a: "Depende de la forma de tu rostro. Si es cuadrado, favorecen cortes estructurados o fade con textura. Si es redondo, buscamos volumen superior para alargar. Si es ovalado, es más versátil. Además, analizamos ojos, orejas, crecimiento del cabello y estilo personal para diseñar un resultado totalmente personalizado.",
  },
  {
    q: "¿Cada cuánto debería cortarme el cabello?",
    a: "Cada 2 a 3 semanas para mantener la estructura y la imagen cuidada. En la recomendación final del servicio te indicamos el intervalo ideal según tu tipo de corte.",
  },
  {
    q: "¿Qué diferencia este corte de otros en Marbella?",
    a: "El nivel de personalización. No es un corte genérico, sino un servicio donde se analiza cada detalle para lograr un resultado coherente, limpio y bien trabajado. Todo parte de un diagnóstico real.",
  },
];

export default function CorteClient({ googleReviews = [] }: { googleReviews?: GoogleReview[] }) {
  const reviews = googleReviews.length ? googleReviews : REVIEWS;
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/corte-de-pelo-hombre-premium-marbella.jpeg"
          alt="corte de pelo hombre en Marbella"
          fill
          priority
          className="object-cover scale-[1.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

        <div className="relative mx-auto flex h-full min-h-[92svh] max-w-6xl flex-col justify-end px-6 pb-16 lg:pb-24 pt-20 lg:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75"
          >
            Barbería premium · Marbella
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="mt-4 max-w-[18ch] text-[40px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[58px] lg:text-[76px]"
          >
            Corte de pelo premium para hombre en Marbella
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[52ch] text-[13px] leading-7 tracking-[0.04em] text-white/75"
          >
            Tu corte no debería depender de la suerte.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65 }}
            className="mt-4 max-w-[52ch] text-[13px] leading-7 tracking-[0.04em] text-white/55"
          >
            Diseñamos cortes personalizados basados en visagismo, estructura facial y estilo de vida para hombres que entienden que su imagen también comunica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="corte-de-pelo"
                className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
              >
                Reservar corte premium
              </a>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Reserva online en menos de 1 minuto
              </p>
            </div>
            <Link
              href="/barberia-hombre-marbella"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STRIP POST-HERO ── */}
      <section className="relative bg-[#0F2A44] py-10">
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-[15px] font-semibold leading-7 text-white">
              No todos los cortes funcionan para todos.
            </p>
            <p className="mt-1 text-[12px] leading-6 text-white/55">
              Aquí diseñamos el tuyo.
            </p>
          </div>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-strip"
            data-page="corte-de-pelo"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F2A44] transition hover:bg-white/90"
          >
            Descubrir mi corte ideal
          </a>
        </div>
      </section>

      {/* ── AUTORIDAD ── */}
      <section className="bg-[#F5F5F5] py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[15px] font-semibold leading-8 text-black">
              Más de 20 años de experiencia respaldan nuestro trabajo.<br />
              Cada corte se diseña de forma personalizada, no se replica.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-5 text-[13px] leading-7 tracking-[0.04em] text-black/60">
              Aquí no vienes solo a cortarte el pelo.
            </p>
            <p className="mt-1 text-[13px] font-semibold tracking-[0.04em] text-black">
              Vienes a construir una imagen.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                El problema
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                El problema no es tu cabello. Son los cortes genéricos.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Muchos hombres llevan años confiando su imagen a servicios que cortan cabello, pero no trabajan percepción.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                El resultado: cortes genéricos, sin adaptación facial, sin intención, y sin armonía con su estilo.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65 font-semibold">
                Aquí cada decisión tiene un propósito.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative aspect-3/4 overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/cortepelo2.jpeg"
              alt="corte de cabello personalizado Marbella"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
        <div className="grid gap-px bg-black/10 sm:grid-cols-3 rounded-3xl overflow-hidden">
          {[
            { num: "+20", label: "Años de experiencia", desc: "Formación internacional y técnica refinada en cada visita." },
            { num: "100%", label: "Personalizado", desc: "Ningún corte es igual. Cada resultado se diseña para tu rostro y estilo." },
            { num: "—", label: "Reseñas verificadas", desc: "" },
          ].map((stat, i) => (
            <FadeUp key={stat.num} delay={i * 0.07} className="bg-[#F5F5F5] px-8 py-12 flex flex-col justify-between">
              <p className="text-[56px] font-semibold leading-none tracking-tight text-black">
                {stat.num}
              </p>
              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70">
                  {stat.label}
                </p>
                <p className="mt-2 text-[12px] leading-6 tracking-[0.04em] text-black/50">
                  {stat.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── MÉTODO ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  El método
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
                  Aquí no trabajamos por plantillas
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Cada servicio comienza con un{" "}
                  <Link href="/diagnostico-capilar-marbella" className="underline underline-offset-2 text-white/80 hover:text-white transition">
                    diagnóstico capilar y facial
                  </Link>
                  , donde analizamos cómo crece tu cabello, la estructura de tu rostro y qué estilo realmente te favorece.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  A partir de ahí, diseñamos un corte personalizado basado en visagismo y lo ejecutamos con alta precisión.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60 italic">
                  Cada decisión responde a una intención concreta.
                </p>
              </FadeUp>
              <FadeUp delay={0.24}>
                <p className="mt-8 text-[13px] leading-7 tracking-[0.04em] text-white/70 font-semibold">
                  El objetivo no es que te guste hoy.<br />
                  <span className="text-white">Es que te favorezca siempre.</span>
                </p>
                <p className="mt-4 text-[12px] leading-6 tracking-[0.04em] text-white/50 italic">
                  Un corte correcto empieza antes de usar la máquina o la tijera.
                </p>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-metodo"
                  data-page="corte-de-pelo"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Quiero un diagnóstico personalizado
                </a>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/diagnostico-capilar-masculino-marbella.jpeg"
                alt="diagnóstico capilar y visagismo Marbella"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            El proceso completo
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
            Cómo trabajamos tu imagen
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden">
          {[
            { n: "01", title: "Análisis inicial", desc: "Analizamos el estado del cuero cabelludo, la estructura del rostro y el patrón de crecimiento antes de empezar." },
            { n: "02", title: "Diseño basado en visagismo", desc: "Definimos el estilo más adecuado para tu rostro, crecimiento y estilo de vida." },
            { n: "03", title: "Corte de alta precisión", desc: "Trabajamos cada ángulo y transición buscando equilibrio, estructura y naturalidad en el resultado." },
            { n: "04", title: "Lavado con productos Previa", desc: "Productos profesionales seleccionados según el diagnóstico para mejorar el equilibrio del cuero cabelludo y el estado general del cabello." },
            { n: "05", title: "Tecnología y personalización", desc: "Aplicamos herramientas de diagnóstico, productos profesionales y tecnología especializada cuando el análisis lo requiere para mejorar el estado del cuero cabelludo, la piel y el resultado final." },
            { n: "06", title: "Acabado y recomendación", desc: "Styling final con herramientas profesionales y pauta personalizada para mantener el resultado." },
          ].map((step, i) => (
            <FadeUp key={step.n} delay={i * 0.07} className="bg-[#F5F5F5] p-8">
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/70">{step.n}</p>
              <h3 className="mt-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-[12px] leading-6 tracking-[0.03em] text-black/60">
                {step.desc}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-[13px] leading-7 text-black/65 max-w-[48ch]">
            Aquí no seguimos tendencias.<br />Diseñamos resultados.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-proceso"
            data-page="corte-de-pelo"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
          >
            Empezar diagnóstico de imagen
          </a>
        </FadeUp>
      </section>

      {/* ── DIFERENCIA ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  La diferencia
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
                  Esto no es un servicio rápido
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Es un proceso pensado para hombres que valoran su imagen y quieren un resultado coherente, duradero y bien trabajado.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60 italic">
                  Aquí no se improvisa. Cada detalle responde a una intención concreta.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/55">
                  Si también quieres trabajar cabello y barba como un conjunto, descubre el{" "}
                  <Link href="/corte-y-barba-premium-marbella" className="underline underline-offset-2 text-white/75 hover:text-white transition">
                    servicio completo de corte y barba premium en Marbella
                  </Link>
                  . Si el objetivo incluye mejorar el estado del cuero cabelludo, también disponemos de{" "}
                  <Link href="/tratamiento-capilar-hombre-marbella" className="underline underline-offset-2 text-white/75 hover:text-white transition">
                    tratamiento capilar para hombre en Marbella
                  </Link>
                  .
                </p>
              </FadeUp>

              <FadeUp delay={0.24}>
                <div className="mt-10 space-y-6">
                  {[
                    { title: "Diagnóstico facial y capilar", desc: "Antes de cortar, estudiamos rostro, densidad, tipo de cabello y patrón de crecimiento para diseñar un resultado coherente. El análisis puede incorporar herramientas de diagnóstico capilar y observación profesional para detectar factores que influyen directamente en el resultado." },
                    { title: "Diseño basado en visagismo", desc: "Aplicamos técnicas de visagismo para definir el estilo que más favorece a tu estructura facial." },
                    { title: "Ejecución de alta precisión", desc: "Cada ángulo, transición y detalle se trabaja con exigencia técnica para lograr un resultado limpio, natural y duradero." },
                    { title: "Acabado con asesoría personalizada", desc: "Al finalizar, recibes una pauta concreta para mantener el resultado en el tiempo. Una recomendación adaptada a tu cabello, tu estilo y tu rutina real." },
                  ].map((b, i) => (
                    <FadeUp key={b.title} delay={i * 0.06}>
                      <div className="flex gap-4">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F2A44]" />
                        <div>
                          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
                            {b.title}
                          </p>
                          <p className="mt-1.5 text-[12px] leading-6 tracking-[0.04em] text-white/55">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.32} className="mt-10 flex flex-col gap-3">
                <p className="text-[13px] leading-7 text-white/70">
                  La diferencia no está solo en cómo se corta.<br />
                  <span className="font-semibold text-white">Está en cómo se piensa el resultado.</span>
                </p>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-diferenciacion"
                  data-page="corte-de-pelo"
                  className="self-start inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#0F2A44] hover:border-[#0F2A44]"
                >
                  Acceder a experiencia premium
                </a>
              </FadeUp>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/cortepelo3.jpeg", alt: "corte de pelo hombre Marbella resultado" },
                { src: "/images/cortepelo4.jpeg", alt: "corte de cabello hombre Marbella profesional" },
                { src: "/images/cortepelo5.jpeg", alt: "barbería premium Marbella corte" },
                { src: "/images/cortepelo6.jpeg", alt: "corte masculino Marbella personalizado" },
              ].map((img, i) => (
                <FadeUp key={img.src} delay={i * 0.07} className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        <FadeUp delay={0.15} className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] font-semibold leading-7 text-white">
            Esto no es un corte bien hecho.<br />
            <span className="text-white/60 font-normal text-[13px]">Es un corte bien pensado.</span>
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-resultado"
            data-page="corte-de-pelo"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
          >
            Quiero este resultado
          </a>
        </FadeUp>
      </section>

      {/* ── RESEÑAS ── */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
              Reseñas verificadas en Google
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
              Lo que dicen los clientes
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <FadeUp key={r.id} delay={i * 0.06} className="rounded-3xl border border-black/10 bg-white/40 p-6 backdrop-blur">
                <Stars n={r.rating} />
                <p className="mt-4 text-[12px] leading-6 tracking-[0.04em] text-black/65">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
                    {r.name}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {r.date}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Preguntas frecuentes
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Todo lo que necesitas saber
            </h2>
          </FadeUp>

          <div className="mt-12 space-y-0">
            {FAQ.map((item, idx) => (
              <FadeUp key={idx} delay={idx * 0.06} className="border-b border-white/10 py-8">
                <p className="text-[14px] font-semibold uppercase tracking-widest text-white">
                  {item.q}
                </p>
                <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  {item.a}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>


      {/* ── FILTRO DE CLIENTE ── */}
      <section className="bg-[#F5F5F5] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[14px] font-semibold leading-8 tracking-[0.03em] text-black/70 max-w-[52ch] mx-auto">
              Diseñado para hombres que entienden que su imagen también forma parte de su presencia.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              El siguiente paso
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[46px] lg:text-[58px]">
              Tu imagen habla antes que tú.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mt-8 space-y-3 text-[14px] leading-7 tracking-[0.03em] text-white/55">
              <p>La diferencia es decidir si quieres confiarla al azar o trabajarla mediante diagnóstico, técnica y criterio profesional.</p>
              <p>Reserva tu corte premium en Marbella y trabajaremos tu imagen con análisis, técnica y visión personalizada.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="corte-de-pelo"
                className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
              >
                Reservar mi corte premium en Marbella
              </a>
              <Link
                href="/corte-y-barba-premium-marbella"
                className="w-full rounded-full border border-white/25 bg-transparent px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white sm:w-auto"
              >
                Ver corte y barba
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </section>

    </main>
  );
}
