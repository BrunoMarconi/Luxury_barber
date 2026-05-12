"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";

const BOOKSY_URL = buildWaUrl("diagnostico-capilar");

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
    text: "No tenía idea de lo que le pasaba a mi cuero cabelludo hasta que me lo explicaron. Por fin entiendo qué necesito.",
  },
  {
    id: "r2",
    name: "Sergio V.",
    rating: 5,
    date: "Feb 2026",
    text: "Después del diagnóstico, todo cambió en cómo me cuido el cabello. Nada de productos al azar, ahora sé exactamente qué uso.",
  },
  {
    id: "r3",
    name: "Francisco",
    rating: 5,
    date: "Ene 2026",
    text: "Se nota que aquí no improvisan. Da mucha tranquilidad ponerse en manos de alguien que realmente sabe lo que hace.",
  },
  {
    id: "r4",
    name: "Manu",
    rating: 5,
    date: "Ene 2026",
    text: "Me aconsejó sobre mi tipo de cabello y cómo cuidarlo. Salí con un plan claro para mantener el resultado. Repetiré.",
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
    q: "¿En qué consiste el diagnóstico capilar?",
    a: "Es un análisis profesional del cuero cabelludo y el cabello utilizando herramientas de diagnóstico especializadas. Evaluamos densidad, nivel de grasa, estado del folículo, posibles problemas como caspa o caída, y las características del crecimiento.",
  },
  {
    q: "¿El diagnóstico capilar es un servicio independiente?",
    a: "Puede realizarse de forma independiente o como parte de cualquier servicio de corte o tratamiento. En ambos casos, el análisis es el punto de partida para tomar decisiones con criterio.",
  },
  {
    q: "¿Qué pasa después del diagnóstico?",
    a: "Recibirás una recomendación personalizada sobre el servicio más adecuado, los productos que deberías usar en casa y el protocolo de mantenimiento para mejorar el estado de tu cabello.",
  },
  {
    q: "¿El diagnóstico sirve también para problemas de caída?",
    a: "Sí. Podemos detectar señales tempranas de debilidad capilar, exceso de grasa o inflamación del cuero cabelludo que afectan al crecimiento, y orientarte hacia el tratamiento más adecuado.",
  },
];

export default function DiagnosticoClient() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/visagismopelo.jpeg"
          alt="diagnóstico capilar profesional en Marbella"
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
            Diagnóstico capilar en Marbella
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[52ch] text-[13px] leading-6 tracking-[0.04em] text-white/75"
          >
            Antes de cortar o diseñar, analizamos. Porque sin diagnóstico, todo es al azar.
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
                data-page="diagnostico-capilar"
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
                La mayoría nunca ha recibido un análisis real
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                La mayoría de personas nunca ha recibido un análisis real de su cabello o su piel.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Por eso llevan cortes que no les favorecen, barbas mal estructuradas o problemas en el cuero cabelludo que nunca se corrigen.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                No es falta de estilo. Es falta de diagnóstico.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative aspect-3/4 overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/cortepelo2.jpeg"
              alt="diagnóstico capilar cuero cabelludo Marbella"
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
            { num: "+20", label: "Años de experiencia", desc: "Más de dos décadas analizando y trabajando el cabello masculino." },
            { num: "100%", label: "Personalizado", desc: "Cada diagnóstico es único. Adaptado a tu cabello, tu piel y tus objetivos." },
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
                  Aquí todo comienza con un análisis.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Evaluamos el estado del cuero cabelludo, la calidad del cabello y la estructura del rostro. Utilizamos herramientas de diagnóstico y observación profesional para entender qué necesitas realmente.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  A partir de ahí, definimos qué servicio es el adecuado para ti: un{" "}
                  <Link href="/corte-de-pelo-hombre-marbella" className="underline underline-offset-2 text-white/80 hover:text-white transition">
                    corte de cabello
                  </Link>
                  , el{" "}
                  <Link href="/arreglo-de-barba-marbella" className="underline underline-offset-2 text-white/80 hover:text-white transition">
                    diseño de barba
                  </Link>
                  , un{" "}
                  <Link href="/tratamiento-facial-hombre-marbella" className="underline underline-offset-2 text-white/80 hover:text-white transition">
                    tratamiento facial
                  </Link>
                  {" "}o una combinación de todos ellos.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="diagnostico-capilar"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/diagnostico-capilar-masculino-marbella.jpeg"
                alt="análisis capilar profesional Marbella"
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
            Qué analizamos
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden">
          {[
            { n: "01", title: "Estado del cuero cabelludo", desc: "Densidad, nivel de grasa, estado del folículo y posibles señales de inflamación o debilidad." },
            { n: "02", title: "Tipo de cabello y densidad", desc: "Clasificamos el tipo de cabello para definir qué técnica y productos son los más adecuados." },
            { n: "03", title: "Dirección de crecimiento", desc: "Analizamos la dirección, velocidad y patrón de crecimiento para detectar anomalías y adaptar el corte." },
            { n: "04", title: "Estructura del rostro", desc: "Mandíbula, pómulos, frente y perfil: analizamos las proporciones para diseñar con criterio." },
            { n: "05", title: "Proporciones faciales", desc: "Identificamos desequilibrios y zonas a potenciar o compensar a través del corte o la barba." },
            { n: "06", title: "Estado de la piel", desc: "Evaluamos la piel del rostro para orientar hacia el tratamiento facial más adecuado si es necesario." },
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
                  La mayoría empieza cortando. Aquí empezamos entendiendo.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  La mayoría de servicios empiezan directamente cortando. Aquí empezamos entendiendo.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Porque un buen resultado no depende solo de la técnica. Depende de tomar decisiones correctas desde el inicio.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-10 space-y-6">
                  {[
                    { title: "Decisiones con criterio", desc: "No se elige el producto o el servicio al azar. Se elige en función del análisis." },
                    { title: "Resultados reales", desc: "Un diagnóstico correcto es el primer paso para un resultado que dure." },
                    { title: "Prevención antes que corrección", desc: "Detectamos problemas en fases tempranas antes de que se vuelvan más difíciles de tratar." },
                    { title: "Base para el servicio completo", desc: "El diagnóstico se integra con el corte, la barba o el tratamiento para un resultado superior." },
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/cortepelo3.jpeg", alt: "análisis capilar cuero cabelludo Marbella" },
                { src: "/images/cortepelo4.jpeg", alt: "diagnóstico capilar profesional Marbella" },
                { src: "/images/cortepelo5.jpeg", alt: "barbero profesional Marbella diagnóstico" },
                { src: "/images/cortepelo6.jpeg", alt: "cuidado capilar Marbella premium" },
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

      {/* ── RESULTADO ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                El resultado
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Cuando se trabaja con diagnóstico
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                El análisis previo no es un paso adicional. Es lo que hace que todo lo demás funcione mejor.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="grid grid-cols-1 gap-4">
            {[
              { num: "01", text: "El corte se adapta mejor a tu rostro y a tu tipo de cabello." },
              { num: "02", text: "La barba encaja con la estructura y proporciones reales de tu cara." },
              { num: "03", text: "La piel mejora su aspecto cuando el tratamiento parte de un diagnóstico." },
              { num: "04", text: "El resultado dura más porque está diseñado para ti específicamente." },
            ].map((item, i) => (
              <FadeUp key={item.num} delay={i * 0.06} className="flex items-start gap-5 rounded-2xl border border-black/10 bg-white/60 px-6 py-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/30 shrink-0 mt-0.5">{item.num}</span>
                <p className="text-[13px] leading-6 tracking-[0.04em] text-black/70">{item.text}</p>
              </FadeUp>
            ))}
          </FadeUp>
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
              El primer paso
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[46px] lg:text-[58px]">
              El primer paso para trabajar tu imagen con criterio.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 text-[13px] leading-7 tracking-[0.03em] text-white/55">
              Si quieres dejar de improvisar con tu imagen y empezar a trabajarla con criterio, este es el primer paso.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="diagnostico-capilar"
                className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
              >
                Solicitar asesoría personalizada
              </a>
              <Link
                href="/corte-de-pelo-hombre-marbella"
                className="w-full rounded-full border border-white/25 bg-transparent px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white sm:w-auto"
              >
                Ver servicio de corte
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </section>

    </main>
  );
}
