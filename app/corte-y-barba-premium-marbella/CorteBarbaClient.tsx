"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";

const BOOKSY_URL = buildWaUrl("corte-barba");

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
    name: "Carlos M.",
    rating: 5,
    date: "Mar 2026",
    text: "El cambio es total cuando trabajan cabello y barba como un conjunto. Nunca había salido tan satisfecho de una barbería.",
  },
  {
    id: "r2",
    name: "David R.",
    rating: 5,
    date: "Feb 2026",
    text: "Nunca me habían diseñado la barba de forma tan precisa. Se nota que hay un proceso detrás, no improvisan nada.",
  },
  {
    id: "r3",
    name: "Marcos T.",
    rating: 5,
    date: "Ene 2026",
    text: "Se nota que cada decisión tiene un porqué, no es solo recortar. Analizan tu rostro y diseñan en función de eso.",
  },
  {
    id: "r4",
    name: "Yeray",
    rating: 5,
    date: "Ene 2026",
    text: "Como peluquero es muy profesional, no se limita solo a cortar el pelo, sino que cuida cada detalle y es muy meticuloso. Muy recomendable, repetiré sin duda.",
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
    q: "¿Qué incluye el servicio de corte de cabello y barba en Marbella?",
    a: "Incluye diagnóstico capilar y facial, corte de cabello, diseño de barba personalizado basado en visagismo, lavado con productos Previa, tecnología Foreo y acabado con recomendación personalizada.",
  },
  {
    q: "¿Cada cuánto debería hacerme corte y barba?",
    a: "Lo recomendable es cada 4 a 5 semanas para mantener la estructura del corte y el diseño de la barba en óptimas condiciones.",
  },
  {
    q: "¿Qué diferencia este servicio de otros en Marbella?",
    a: "Aquí no se trabaja con plantillas. Cada cliente recibe un diseño completo —cabello y barba— adaptado a su rostro, combinando técnica, diagnóstico y tecnología para un resultado más coherente y trabajado.",
  },
];

export default function CorteBarbaClient() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/experiencia-barberia-lujo-marbella.jpeg"
          alt="corte de pelo y barba en Marbella"
          fill
          priority
          className="object-cover scale-[1.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/30 to-black/75" />

        <div className="relative mx-auto flex h-full min-h-[92svh] max-w-6xl flex-col justify-end px-6 pb-16 lg:pb-24">
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
            No es un corte ni una barba.<br />Es tu imagen completa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[52ch] text-[13px] leading-7 tracking-[0.04em] text-white/75"
          >
            Cabello y barba diseñados como un conjunto para construir una imagen más sólida, equilibrada y coherente contigo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65 }}
            className="mt-4 max-w-[52ch] text-[13px] leading-7 tracking-[0.04em] text-white/55"
          >
            Cada decisión parte del análisis facial, el crecimiento natural y la forma en que quieres proyectarte.
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
                data-page="corte-barba"
                className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
              >
                Solicitar asesoría personalizada
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
              La mayoría de los hombres se corta el cabello y se arregla la barba.
            </p>
            <p className="mt-1 text-[12px] leading-6 text-white/55">
              Aquí todo se diseña para que tu imagen tenga armonía.
            </p>
          </div>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-strip"
            data-page="corte-barba"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F2A44] transition hover:bg-white/90"
          >
            Descubrir mi mejor versión
          </a>
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
                Un buen corte sin una buena barba no está completo
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Un buen corte sin una barba diseñada correctamente nunca termina de verse completo.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                La mayoría de servicios trabaja cabello y barba por separado. El resultado puede verse correcto individualmente, pero pierde armonía cuando se observa el conjunto.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65 font-semibold">
                Aquí todo se diseña como una sola estructura visual.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative aspect-3/4 overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/barba2.jpeg"
              alt="corte de pelo y barba hombre Marbella"
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
            { num: "100%", label: "Personalizado", desc: "Ningún corte ni barba es igual. Cada resultado se diseña para tu rostro." },
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
                  Aquí trabajamos la imagen como un todo
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Analizamos proporciones faciales, crecimiento del cabello y densidad de barba para construir un resultado equilibrado y coherente.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Cada línea, transición y volumen responde a una intención visual clara.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mt-8 text-[13px] leading-7 tracking-[0.04em] text-white/70 font-semibold">
                  No trabajamos cabello y barba por separado.<br />
                  <span className="text-white">Trabajamos tu imagen como una sola construcción visual.</span>
                </p>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-metodo"
                  data-page="corte-barba"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/diagnostico-capilar-masculino-marbella.jpeg"
                alt="diseño de barba según estructura facial Marbella"
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
            { n: "01", title: "Diagnóstico capilar y facial", desc: "Analizamos cuero cabelludo, piel y estructura del rostro antes de empezar." },
            { n: "02", title: "Diseño completo basado en visagismo", desc: "Diseñamos cabello y barba como una sola estructura adaptada a tu rostro y estilo de vida." },
            { n: "03", title: "Corte de alta precisión", desc: "Técnicas de precisión trabajadas para mantener armonía, estructura y duración en el resultado." },
            { n: "04", title: "Perfilado y diseño de barba", desc: "Cada línea de la barba se diseña para equilibrar el rostro y reforzar la armonía del conjunto." },
            { n: "05", title: "Cuidado capilar y facial", desc: "Productos profesionales, tecnología facial Foreo, vapor ozono y herramientas especializadas aplicadas según las necesidades del cabello, la barba y la piel para mejorar acabado, textura y duración del resultado." },
            { n: "06", title: "Acabado y recomendación", desc: "Resultado final y recomendación personalizada para mantener diseño, textura y duración." },
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
          <p className="text-[13px] leading-7 text-black/65 max-w-[52ch]">
            Cada decisión en tu corte y barba está pensada para potenciar tu rostro.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-proceso"
            data-page="corte-barba"
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
                  Esto no es trabajar cabello y barba por separado.<br />Es construcción completa de imagen masculina.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-8 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Cabello, barba, proporciones y estructura facial trabajados como una sola dirección visual para lograr una imagen más sólida, coherente y equilibrada.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-10 space-y-6">
                  {[
                    { title: "Diseño de conjunto", desc: "Cabello y barba diseñados juntos para crear coherencia visual y equilibrio facial." },
                    { title: "Análisis facial completo", desc: "Mandíbula, pómulos, perfil y proporciones analizados antes de diseñar el resultado." },
                    { title: "20+ años de experiencia", desc: "Formado internacionalmente. Técnica, precisión y atención al detalle en cada visita." },
                    { title: "Tecnología + precisión", desc: "Foreo, vapor ozono y herramientas profesionales aplicadas para mejorar acabado, piel y duración del resultado." },
                  ].map((b, i) => (
                    <div key={b.title} className="flex gap-4">
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
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.28} className="mt-10 flex flex-col gap-3">
                <p className="text-[13px] leading-7 text-white/70">
                  Cuando corte y barba trabajan juntos, el resultado cambia por completo.
                </p>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-diferenciacion"
                  data-page="corte-barba"
                  className="self-start inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#0F2A44] hover:border-[#0F2A44]"
                >
                  Acceder a experiencia premium
                </a>
              </FadeUp>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/barba3.jpeg", alt: "corte y barba Marbella resultado" },
                { src: "/images/barba4.jpeg", alt: "perfilado de barba profesional Marbella" },
                { src: "/images/barba5.jpeg", alt: "diseño barba Marbella" },
                { src: "/images/barba6.jpeg", alt: "detalle barba precisión Marbella" },
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
            Esto no es mantenimiento.<br />
            <span className="text-white/60 font-normal text-[13px]">Es construcción de imagen.</span>
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-resultado"
            data-page="corte-barba"
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
              Lo que dice la gente
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r, i) => (
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


      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              Reserva tu experiencia
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[46px] lg:text-[58px]">
              Tu imagen funciona como una sola estructura.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mt-8 space-y-3 text-[14px] leading-7 tracking-[0.03em] text-white/55">
              <p>Cuando cabello y barba trabajan en armonía, la percepción cambia por completo.</p>
              <p>Reserva tu experiencia personalizada en Marbella.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="corte-barba"
                className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
              >
                Solicitar asesoría personalizada
              </a>
              <Link
                href="/corte-de-pelo-hombre-marbella"
                className="w-full rounded-full border border-white/25 bg-transparent px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white sm:w-auto"
              >
                Ver solo corte de cabello
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </section>

    </main>
  );
}
