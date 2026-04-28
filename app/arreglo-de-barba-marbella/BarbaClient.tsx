"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";

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
    <span className="text-[#f8aa00] tracking-tight text-sm">
      {"★".repeat(n)}
    </span>
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

export default function BarbaClient() {
  return (
    <main className="min-h-screen bg-[#ece8de] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/barba1.jpeg"
          alt="arreglo de barba en Marbella"
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
            Arreglo de barba en Marbella
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[52ch] text-[13px] leading-6 tracking-[0.04em] text-white/75"
          >
            No es solo perfilar la barba. Es diseñarla según tu rostro y cuidarla para que se vea mejor y dure más.
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
                data-page="arreglo-de-barba"
                className="inline-flex items-center justify-center rounded-full bg-[#f8aa00] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-[#e69300]"
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
                La mayoría de barbas están mal por falta de diseño, no de pelo
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                La mayoría de barbas no están mal por falta de pelo.
              </p>
            </FadeUp>
            <FadeUp delay={0.13}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Están mal por falta de diseño.
              </p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Líneas mal definidas, volúmenes desordenados y formas que no encajan con el rostro hacen que la barba no favorezca.
              </p>
            </FadeUp>
            <FadeUp delay={0.19}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Y además, duran poco, pican o se ven iguales en todas partes.
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
            { num: "5★", label: "Valoración media", desc: "Reseñas verificadas de clientes reales en Booksy." },
          ].map((stat, i) => (
            <FadeUp key={stat.num} delay={i * 0.07} className="bg-[#ece8de] px-8 py-12 flex flex-col justify-between">
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
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
                  El método
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
                  Aquí no hacemos un copy-paste
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Cada barba se trabaja según la estructura del rostro, el crecimiento del vello y las proporciones faciales.
                  Analizamos tu cara y diseñamos una barba que realmente encaje contigo.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Además, no solo trabajamos la barba. También cuidamos la piel para que el resultado se vea mejor y dure más. Todo parte de un{" "}
                  <Link href="/diagnostico-capilar-marbella" className="underline underline-offset-2 text-white/75 hover:text-white transition">
                    análisis facial y capilar previo
                  </Link>
                  {" "}que define el diseño más adecuado para tu rostro.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/55">
                  Si buscas trabajar cabello y barba en la misma visita, descubre el{" "}
                  <Link href="/barberia-marbella-corte-barba" className="underline underline-offset-2 text-white/75 hover:text-white transition">
                    servicio completo de corte y barba
                  </Link>
                  .
                </p>
              </FadeUp>
              <FadeUp delay={0.24}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="arreglo-de-barba"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#f8aa00] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f8aa00] transition hover:bg-[#f8aa00] hover:text-black"
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
            { n: "01", title: "Diagnóstico facial", desc: "Analizamos estructura del rostro, proporciones y crecimiento del vello antes de empezar." },
            { n: "02", title: "Diseño según tu rostro", desc: "Definimos las líneas, volúmenes y forma de la barba adaptados a tu morfología." },
            { n: "03", title: "Corrección de asimetrías", desc: "Identificamos y corregimos desequilibrios para un resultado visualmente armonioso." },
            { n: "04", title: "Perfilado técnico", desc: "Marcado de líneas con precisión usando navaja y tijera profesional." },
            { n: "05", title: "Trabajo de volúmenes", desc: "Ajuste del volumen en cada zona para que la barba equilibre el conjunto del rostro." },
            { n: "06", title: "Vapor ozono", desc: "Apertura de poros y preparación de la piel para una mejor limpieza y absorción." },
            { n: "07", title: "Limpieza facial Foreo", desc: "Tecnología de limpieza facial para mejorar el estado de la piel bajo la barba." },
            { n: "08", title: "Hidratación y aceite de barba", desc: "Aplicación de productos específicos para suavizar, nutrir e hidratar el vello y la piel." },
            { n: "09", title: "Acabado y recomendación", desc: "Resultado final y pauta personalizada de mantenimiento para casa." },
          ].map((step, i) => (
            <FadeUp key={step.n} delay={i * 0.05} className="bg-[#ece8de] p-8">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#f8aa00]">{step.n}</p>
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
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
                  La diferencia
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
                  Aquí cada barba se diseña desde cero
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  La mayoría de barberías con la barba hacen un copy-paste. Aquí cada barba se diseña desde cero según el rostro de cada cliente.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Y además, no solo se trabaja el vello. Se cuida la piel para mejorar el resultado y la duración.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-10 space-y-6">
                  {[
                    { title: "Diseño personalizado", desc: "Cada barba parte de un análisis facial. Sin plantillas, sin copy-paste." },
                    { title: "Cuidado de la piel", desc: "Vapor, Foreo y productos específicos para que la piel quede en óptimas condiciones." },
                    { title: "20+ años de experiencia", desc: "Formado internacionalmente. Técnica y criterio en cada visita." },
                    { title: "Resultado que dura", desc: "La combinación de diseño, técnica y cuidado prolonga el resultado entre visitas." },
                  ].map((b, i) => (
                    <FadeUp key={b.title} delay={i * 0.06}>
                      <div className="flex gap-4">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f8aa00]" />
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
      </section>

      {/* ── RESEÑAS ── */}
      <section className="bg-[#ece8de] py-20 lg:py-28">
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
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
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
      <section className="bg-[#ece8de] py-20 lg:py-28">
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
              "Nunca me habían explicado qué tipo de barba me favorecía según mi cara.",
              "Se nota que aquí no improvisan, todo tiene un porqué.",
              "Después de este servicio, mi imagen cambió completamente.",
              "La barba me dura más y se ve mucho más trabajada.",
              "No es un arreglo más, es otra forma de trabajar la imagen.",
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
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
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
      <section className="relative overflow-hidden bg-[#0a0c0d] py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/50 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f8aa00]/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f8aa00]">
              Reserva tu servicio
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[46px] lg:text-[58px]">
              Una barba bien trabajada cambia completamente la expresión del rostro.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 text-[13px] leading-7 tracking-[0.03em] text-white/55">
              Si quieres dejar de llevar una barba genérica y empezar a llevar una que realmente te favorezca, este servicio es para ti.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="arreglo-de-barba"
                className="w-full rounded-full bg-[#f8aa00] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-[#e69300] sm:w-auto"
              >
                Solicitar asesoría personalizada
              </a>
              <Link
                href="/barberia-marbella-corte-barba"
                className="w-full rounded-full border border-white/25 bg-transparent px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white sm:w-auto"
              >
                Ver corte y barba
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#f8aa00]/50 to-transparent" />
      </section>

    </main>
  );
}
