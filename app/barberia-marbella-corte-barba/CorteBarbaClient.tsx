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
    text: "Se nota que hay un criterio detrás, no es solo recortar. Analizan tu rostro y diseñan en función de eso.",
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
    q: "¿Qué tipo de barba me favorece según mi rostro?",
    a: "Depende de la forma del rostro, la proyección del mentón, la definición de la mandíbula y el perfil facial. Con este análisis, diseñamos una barba personalizada que equilibre el conjunto y mejore la imagen general.",
  },
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
    a: "Aquí no se trabaja con plantillas. Cada cliente recibe un diseño completo —cabello y barba— adaptado a su rostro, combinando técnica, diagnóstico y tecnología para un resultado superior.",
  },
];

export default function CorteBarbaClient() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/barba1.jpeg"
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
            Corte de pelo y barba en Marbella
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[52ch] text-[13px] leading-6 tracking-[0.04em] text-white/75"
          >
            Un servicio completo para hombres que buscan un resultado preciso, equilibrado y coherente en su imagen.
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
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
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
                Un buen corte sin una barba bien trabajada no está completo.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Y una barba sin diseño rompe completamente la armonía del rostro.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                La mayoría de servicios trabajan cada parte por separado, sin tener en cuenta el conjunto. El resultado es correcto por partes, pero no tiene coherencia visual como un todo.
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
            { num: "5★", label: "Valoración media", desc: "Reseñas verificadas de clientes reales en Booksy." },
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
                  Analizamos tu rostro, el crecimiento del cabello y la densidad de la barba para diseñar un resultado equilibrado.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Cada línea, cada volumen y cada transición tiene una intención clara. Todo parte de un{" "}
                  <Link href="/diagnostico-capilar-marbella" className="underline underline-offset-2 text-white/80 hover:text-white transition">
                    diagnóstico capilar y facial
                  </Link>{" "}
                  que nos permite tomar decisiones con criterio.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="corte-barba"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/visagismopelo.jpeg"
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
            Qué incluye la experiencia
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden">
          {[
            { n: "01", title: "Diagnóstico capilar y facial", desc: "Analizamos cuero cabelludo, piel y estructura del rostro antes de empezar." },
            { n: "02", title: "Diseño completo basado en visagismo", desc: "Diseñamos cabello y barba como un conjunto, adaptado a tu rostro y estilo de vida." },
            { n: "03", title: "Corte de alta precisión", desc: "Técnicas avanzadas para un resultado limpio, equilibrado y duradero." },
            { n: "04", title: "Perfilado y diseño de barba", desc: "Cada línea de la barba se diseña para equilibrar el rostro y reforzar el conjunto." },
            { n: "05", title: "Lavado con productos Previa", desc: "Productos profesionales seleccionados según el análisis para mejorar el estado capilar." },
            { n: "06", title: "Tecnología Foreo + acabado", desc: "Aplicación de tecnología facial según necesidad y recomendación personalizada final." },
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
                  Esto no es un corte con barba
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Es un servicio completo donde cada detalle está pensado para que todo encaje.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  El resultado no solo se ve mejor. Se siente mejor.
                </p>
              </FadeUp>
              <FadeUp delay={0.17}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/55">
                  Si lo que buscas es trabajar solo el cabello, descubre el{" "}
                  <Link href="/corte-de-pelo-hombre-marbella" className="underline underline-offset-2 text-white/75 hover:text-white transition">
                    servicio de corte de cabello
                  </Link>
                  . Para mejorar el resultado final, puedes complementar cualquier visita con{" "}
                  <Link href="/tratamiento-facial-hombre-marbella" className="underline underline-offset-2 text-white/75 hover:text-white transition">
                    tratamientos faciales
                  </Link>
                  .
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-10 space-y-6">
                  {[
                    { title: "Diseño de conjunto", desc: "Cabello y barba diseñados juntos, con coherencia visual entre ambos." },
                    { title: "Análisis facial completo", desc: "Mandíbula, pómulos, perfil y proporciones, todo tiene en cuenta antes de empezar." },
                    { title: "20+ años de experiencia", desc: "Formado internacionalmente. Técnica y criterio en cada visita." },
                    { title: "Tecnología + precisión", desc: "Vaporizador, Foreo y navaja profesional para un resultado superior." },
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
      </section>

      {/* ── RESEÑAS ── */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
              Reseñas verificadas · Booksy
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

      {/* ── TESTIMONIOS ── */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
              Clientes reales
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
              Lo que dicen clientes que ya lo han probado
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Nunca me habían explicado qué tipo de corte me favorecía según mi cara.",
              "Se nota que aquí no improvisan, todo tiene un porqué.",
              "Después de este servicio, mi imagen cambió completamente.",
              "La barba me dura más y se ve mucho más trabajada.",
              "No es un corte más, es otra forma de trabajar la imagen.",
            ].map((quote, i) => (
              <FadeUp key={i} delay={i * 0.05} className="rounded-3xl border border-black/10 bg-white/60 p-7">
                <p className="text-[13px] leading-7 tracking-[0.04em] text-black/70 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-5 h-px bg-black/10" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/35">
                  Cliente · Marbella
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANTES DE RESERVAR ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Resuelve tus dudas
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Antes de reservar
            </h2>
          </FadeUp>

          <div className="mt-12 space-y-0">
            {[
              { q: "¿Qué incluye exactamente el servicio?", a: "Incluye diagnóstico, diseño personalizado, ejecución técnica y recomendación final adaptada a cada cliente." },
              { q: "¿Cuánto dura el servicio?", a: "Depende del servicio, pero en general entre 45 minutos y 1 hora y media, ya que no es un servicio rápido, sino trabajado." },
              { q: "¿Este servicio es para cualquier persona?", a: "Sí, pero especialmente para quienes buscan mejorar su imagen y no quieren un resultado genérico." },
              { q: "¿Por qué no se muestra el precio en la web?", a: "Porque cada servicio está pensado como una experiencia completa. Puedes ver todos los detalles y seleccionar tu servicio directamente en la reserva online." },
              { q: "¿Puedo añadir tratamientos?", a: "Sí, puedes complementar tu servicio con tratamientos faciales para mejorar el resultado final." },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.05} className="border-b border-white/10 py-8">
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
              Cuando todo encaja, se nota.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 text-[13px] leading-7 tracking-[0.03em] text-white/55">
              Si buscas un resultado completo, coherente y bien trabajado, este servicio es para ti.
            </p>
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
