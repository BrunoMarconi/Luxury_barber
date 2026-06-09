"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";
import type { GoogleReview } from "@/lib/google-reviews";

const BOOKSY_URL = buildWaUrl("arreglo-de-barba");

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
    text: "Nunca me habían explicado cómo debía llevar la barba según mi cara. Ahora entiendo por qué antes no terminaba de convencerme.",
  },
  {
    id: "r2",
    name: "Sergio V.",
    rating: 5,
    date: "Feb 2026",
    text: "Después de este servicio, la barba me dura mucho más y se ve mejor. Nada que ver con lo que había probado antes.",
  },
  {
    id: "r3",
    name: "David R.",
    rating: 5,
    date: "Ene 2026",
    text: "Se nota que no es solo perfilar, hay un trabajo real detrás. Diseñan la barba según tu rostro, no según una plantilla.",
  },
  {
    id: "r4",
    name: "Francisco",
    rating: 5,
    date: "Ene 2026",
    text: "Da mucha tranquilidad ponerse en manos de alguien que realmente sabe lo que hace. El resultado siempre supera las expectativas.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-[#FBBC04] tracking-tight text-sm">
      {"★".repeat(n)}
    </span>
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

const FAQ = [
  {
    q: "¿Qué tipo de barba me favorece según mi rostro?",
    a: "Depende de la forma del rostro, la proyección del mentón, la definición de la mandíbula y el perfil facial. Hacemos este análisis antes de cada servicio para diseñar una barba que equilibre tus rasgos y mejore tu imagen.",
  },
  {
    q: "¿Cada cuánto debería hacerme el arreglo de barba?",
    a: "Lo recomendable es cada 3 a 4 semanas para mantener el diseño y las líneas en óptimas condiciones. En la recomendación final te indicamos el intervalo según tu velocidad de crecimiento.",
  },
  {
    q: "¿Se trabaja también la piel durante el servicio?",
    a: "Sí. Incluimos un protocolo de cuidado de la piel con vapor ozono, limpieza facial con tecnología Foreo y aplicación de productos específicos para mejorar el estado de la piel bajo la barba.",
  },
  {
    q: "¿Qué diferencia este servicio de otros en Marbella?",
    a: "Aquí no se aplica el mismo diseño a todos. Cada barba se trabaja desde un análisis facial real, teniendo en cuenta estructura, proporciones y crecimiento del vello para un resultado personalizado y duradero.",
  },
];

export default function BarbaClient({ googleReviews = [] }: { googleReviews?: GoogleReview[] }) {
  const reviews = googleReviews.length ? googleReviews : REVIEWS;
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/barba-premium-hombre-marbella.jpeg"
          alt="arreglo de barba en Marbella"
          fill
          priority
          className="object-cover scale-[1.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-transparent" />

        <div className="relative mx-auto flex h-full min-h-[92svh] max-w-6xl flex-col justify-start px-6 pt-28 lg:pt-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55"
          >
            Barbería premium · Marbella
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="mt-4 max-w-[18ch] text-[40px] font-light uppercase leading-none tracking-[0.04em] text-white sm:text-[58px] lg:text-[76px]"
          >
            La barba no se recorta.<br />Se diseña.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[48ch] text-[13px] leading-7 tracking-[0.04em] text-white/60"
          >
            La forma de tu barba puede cambiar completamente cómo se ve tu rostro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-col gap-1.5"
          >
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-asesoria"
              data-page="arreglo-de-barba"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
            >
              Solicitar asesoría personalizada
            </a>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Reserva online en menos de 1 minuto
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STRIP POST-HERO ── */}
      <section className="relative bg-[#0F2A44] py-10">
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-[15px] font-semibold leading-7 text-white">
              La mayoría de las barbas no están mal hechas.
            </p>
            <p className="mt-1 text-[12px] leading-6 text-white/55">
              Están mal planteadas.
            </p>
          </div>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-strip"
            data-page="arreglo-de-barba"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F2A44] transition hover:bg-white/90"
          >
            Mejorar mi imagen
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
                La mayoría de barbas están mal por falta de diseño, no de pelo
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                La mayoría de hombres no necesita más barba. Necesita mejor diseño.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Líneas mal planteadas, volúmenes incorrectos y formas que no encajan con el rostro hacen que la barba no favorezca.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65 font-semibold">
                Aquí cada barba se diseña según proporciones, equilibrio facial y crecimiento natural del vello.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative aspect-3/4 overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/barba2.jpeg"
              alt="diseño de barba personalizado Marbella"
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
            { num: "+20", label: "Años de experiencia", desc: "Técnica refinada en diseño de barba y cuidado facial masculino." },
            { num: "100%", label: "Personalizado", desc: "Ninguna barba es igual. Cada diseño parte del análisis de tu rostro." },
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
                  Aquí cada barba se diseña según el rostro.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Cada barba se trabaja según proporciones faciales, estructura y crecimiento natural del vello.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  No buscamos copiar tendencias. Buscamos un resultado que realmente favorezca tu rostro y se vea natural en ti.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Además del diseño de barba, trabajamos también el estado de la piel para mejorar acabado, textura y duración del resultado.
                </p>
              </FadeUp>
              <FadeUp delay={0.24}>
                <p className="mt-8 text-[13px] leading-7 tracking-[0.04em] text-white/70 font-semibold">
                  No se trata de arreglar tu barba.<br />
                  <span className="text-white">Se trata de estructurarla.</span>
                </p>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-metodo"
                  data-page="arreglo-de-barba"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/barba3.jpeg"
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
      <section className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            El proceso completo
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
            Cómo trabajamos tu barba
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden">
          {[
            { n: "01", title: "Diagnóstico facial", desc: "Analizamos estructura facial, proporciones y crecimiento del vello antes de empezar." },
            { n: "02", title: "Diseño según tu rostro", desc: "Definimos líneas, volúmenes y forma de la barba adaptados a tu morfología." },
            { n: "03", title: "Corrección y perfilado técnico", desc: "Trabajamos líneas, simetrías y perfilado con precisión para lograr un resultado limpio, equilibrado y natural." },
            { n: "04", title: "Trabajo de volúmenes", desc: "Ajustamos el volumen de cada zona para equilibrar visualmente el conjunto del rostro." },
            { n: "05", title: "Cuidado facial y preparación de la piel", desc: "Incluye vapor ozono, tecnología Foreo, activos profesionales y cuidado facial personalizado para optimizar el estado de la piel y potenciar el resultado final. Según lo detectado en el diagnóstico, la experiencia puede incorporar tecnología galvánica NuSkin, LED terapéutico, crioterapia facial y activos premium seleccionados con criterio profesional." },
            { n: "06", title: "Acabado y recomendación", desc: "Resultado final y recomendación personalizada para mantener diseño, textura y duración." },
          ].map((step, i) => (
            <FadeUp key={step.n} delay={i * 0.05} className="bg-[#F5F5F5] p-8">
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
            Cada línea, cada volumen y cada ángulo tiene un propósito.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-proceso"
            data-page="arreglo-de-barba"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
          >
            Empezar diagnóstico de imagen
          </a>
        </FadeUp>
      </section>

      {/* ── DIFERENCIA ── */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  La diferencia
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  La mayoría de servicios de barba se enfocan únicamente en recortar.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Aquí trabajamos diseño, proporción y estructura como parte completa del rostro.
                </p>
              </FadeUp>
              <FadeUp delay={0.17}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Diseño, proporción, volumen, cuidado de la piel y personalización avanzada forman parte del resultado.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-10 space-y-6">
                  {[
                    { title: "Diseño personalizado", desc: "Cada barba se adapta al rostro y crecimiento natural de cada persona." },
                    { title: "Cuidado facial", desc: "Trabajamos también la piel para mejorar acabado, duración y aspecto general de la barba." },
                    { title: "20+ años de experiencia", desc: "Formado internacionalmente. Precisión, experiencia y atención al detalle en cada visita." },
                    { title: "Resultado que dura", desc: "El diseño correcto hace que la barba mantenga mejor forma y presencia entre visitas." },
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

              <FadeUp delay={0.28} className="mt-10 flex flex-col gap-3">
                <p className="text-[13px] leading-7 text-white/70">
                  La diferencia no está en el arreglo.<br />
                  <span className="font-semibold text-white">Está en el diseño.</span>
                </p>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-diferenciacion"
                  data-page="arreglo-de-barba"
                  className="self-start inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#0F2A44] hover:border-[#0F2A44]"
                >
                  Acceder a experiencia premium
                </a>
              </FadeUp>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/barba3.jpeg", alt: "diseño barba Marbella resultado" },
                { src: "/images/barba4.jpeg", alt: "perfilado barba preciso Marbella" },
                { src: "/images/barba5.jpeg", alt: "arreglo barba profesional Marbella" },
                { src: "/images/barba6.jpeg", alt: "barba bien trabajada Marbella" },
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
            Una barba bien diseñada no se nota.<br />
            <span className="text-white/60 font-normal text-[13px]">Se siente.</span>
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-resultado"
            data-page="arreglo-de-barba"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
          >
            Quiero este resultado
          </a>
        </FadeUp>
      </section>

      {/* ── RESEÑAS ── */}
      <section className="bg-[#F5F5F5] py-24 lg:py-32">
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
              Lo que dice la gente
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
                    {r.name}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {r.date}
                  </p>
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
      <section className="relative overflow-hidden bg-[#0A0A0A] py-32 lg:py-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              Reserva tu servicio
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[46px] lg:text-[58px]">
              Tu barba también comunica.
            </h2>
          </FadeUp>
          <FadeUp delay={0.09}>
            <p className="mt-5 text-[13px] leading-7 tracking-[0.04em] text-white/45">
              El diseño correcto no llama la atención.<br />Refuerza tu presencia.
            </p>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mt-8 space-y-3 text-[14px] leading-7 tracking-[0.03em] text-white/55">
              <p>La diferencia es decidir si quieres llevar cualquier diseño o uno pensado específicamente para tu rostro.</p>
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
                data-page="arreglo-de-barba"
                className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
              >
                Solicitar asesoría personalizada
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
