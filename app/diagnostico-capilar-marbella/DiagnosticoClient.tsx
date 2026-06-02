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
    <span className="text-white/80 tracking-tight text-sm">
      {"★".repeat(n)}
    </span>
  );
}

const FAQ = [
  {
    q: "¿En qué consiste el diagnóstico capilar?",
    a: "Un análisis profesional de cuero cabelludo, cabello, piel y estructura facial para definir recomendaciones personalizadas de corte, barba y cuidado.",
  },
  {
    q: "¿Qué pasa después del diagnóstico?",
    a: "Recibirás una recomendación concreta sobre el enfoque más adecuado, los productos y el protocolo de mantenimiento para tu caso.",
  },
  {
    q: "¿El diagnóstico sirve también para problemas de caída?",
    a: "Sí. Detectamos señales y orientamos sobre medidas y tratamientos que ayudan a frenar o corregir problemas tempranos.",
  },
  {
    q: "¿Se puede combinar con otros servicios?",
    a: "Sí. El diagnóstico se integra con cortes, diseño de barba y tratamientos faciales para ofrecer un resultado coherente y duradero.",
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
            className="mt-6 max-w-[24ch] text-[28px] font-extralight uppercase leading-[0.95] tracking-[0.28em] text-white sm:text-[36px] lg:text-[48px]"
          >
            Diagnóstico capilar y facial masculino en Marbella
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[56ch] text-[13px] leading-7 tracking-[0.06em] text-white/80"
          >
            Antes de cortar o diseñar, analizamos. Porque cuando no existe diagnóstico, todo termina siendo improvisación.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6 }}
            className="mt-4 max-w-[56ch] text-[12px] leading-6 tracking-[0.06em] text-white/60"
          >
            Evaluamos cuero cabelludo, cabello, piel y estructura facial para entender qué necesita realmente tu imagen antes de intervenir.
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

      {/* ── TECNOLOGÍA ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            Tecnología aplicada con precisión
          </p>
        </FadeUp>
        <FadeUp delay={0.04}>
          <h3 className="mt-3 text-[22px] font-extralight leading-[1.05] tracking-[0.06em]">
            La tecnología no reemplaza la lectura profesional. La complementa.
          </h3>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className="mt-4 max-w-[64ch] text-[13px] leading-7 text-black/65">
            Cada herramienta se utiliza para analizar, personalizar y trabajar la experiencia con mayor precisión y coherencia visual.
          </p>
        </FadeUp>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[
            "Diagnóstico facial masculino",
            "Tecnología Foreo",
            "Tecnología galvánica NuSkin",
            "Vaporizador caliente y frío",
            "LED terapéutico",
            "Crioterapia facial",
            "Activos premium",
          ].map((t, i) => (
            <FadeUp key={t} delay={i * 0.04} className="p-3">
              <p className="text-[12px] font-semibold tracking-[0.14em] text-black/70 uppercase">{t}</p>
            </FadeUp>
          ))}
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
              <h2 className="mt-3 text-[30px] font-extralight leading-[1.05] tracking-[0.12em] sm:text-[36px]">
                La mayoría de personas nunca ha recibido un análisis real de su cabello, su piel o su estructura facial.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Por eso repiten cortes que no les favorecen, productos incorrectos o decisiones tomadas sin análisis real.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                No es falta de estilo.
                <span className="font-semibold"> Es falta de diagnóstico.</span>
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
            { num: "5★", label: "Valoración media", desc: "Reseñas verificadas de clientes reales en Google." },
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
                <h2 className="mt-3 text-[30px] font-extralight leading-[1.05] tracking-[0.12em] text-white sm:text-[36px]">
                    Aquí todo comienza entendiendo antes de intervenir.
                  </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Analizamos cuero cabelludo, densidad, crecimiento, piel y estructura facial utilizando observación profesional y tecnología especializada aplicada al cuidado masculino premium.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  A partir del análisis, definimos qué enfoque tiene más sentido para tu imagen, tu cabello y tus necesidades reales.
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "01", title: "Cuero cabelludo", desc: "Estado general, densidad, sensibilidad y señales visibles que afectan la salud capilar." },
            { n: "02", title: "Tipo y comportamiento del cabello", desc: "Textura, densidad y características que determinan qué técnica y productos funcionan mejor." },
            { n: "03", title: "Dirección de crecimiento", desc: "Patrones naturales de crecimiento que afectan estructura, caída y comportamiento del corte." },
            { n: "04", title: "Estructura facial", desc: "Mandíbula, pómulos, perfil y proporciones analizadas para construir coherencia visual." },
            { n: "05", title: "Proporciones y equilibrio", desc: "Identificamos zonas a potenciar, equilibrar o suavizar mediante diseño de imagen masculina." },
            { n: "06", title: "Estado de la piel", desc: "Evaluamos necesidades visibles de la piel para orientar correctamente protocolos faciales y cuidado posterior." },
          ].map((step, i) => (
            <FadeUp key={step.n} delay={i * 0.07} className="p-8 bg-transparent">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-black/50">{step.n}</p>
              <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-black">
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
                <h2 className="mt-3 text-[30px] font-extralight leading-[1.05] tracking-[0.06em] text-white sm:text-[36px]">
                  La mayoría empieza cortando. Aquí empezamos entendiendo.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Porque un mejor resultado no depende solamente de técnica. Depende de tomar mejores decisiones desde el inicio.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-10 space-y-6">
                  {[
                    { title: "DECISIONES PERSONALIZADAS", desc: "Cada recomendación parte del análisis y no de tendencias genéricas." },
                    { title: "RESULTADOS MÁS PRECISOS", desc: "Cuando el diagnóstico es correcto, el resultado se adapta mejor a la persona." },
                    { title: "PREVENCIÓN Y MANTENIMIENTO", desc: "Detectar antes permite corregir mejor y mantener resultados durante más tiempo." },
                    { title: "BASE DEL ECOSISTEMA ALPHA", desc: "El diagnóstico conecta corte, barba, tratamientos faciales y cuidado posterior como una sola dirección de imagen." },
                  ].map((b, i) => (
                    <FadeUp key={b.title} delay={i * 0.06}>
                      <div className="flex gap-4">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
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
              <h2 className="mt-3 text-[30px] font-extralight leading-[1.05] tracking-[0.06em] sm:text-[36px]">
                Cuando se trabaja con diagnóstico, todo cambia.
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="grid grid-cols-1 gap-4">
            {[
              { num: "01", text: "El corte se adapta mejor a tu estructura facial y tipo de cabello." },
              { num: "02", text: "La barba se diseña con mayor coherencia y equilibrio visual." },
              { num: "03", text: "La piel responde mejor cuando el protocolo parte de necesidades reales." },
              { num: "04", text: "El resultado dura más porque fue construido específicamente para ti." },
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
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
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
            {REVIEWS.slice(0,4).map((r, i) => (
              <FadeUp key={r.id} delay={i * 0.06} className="rounded-3xl bg-transparent p-6">
                <Stars n={r.rating} />
                <p className="mt-4 text-[12px] leading-6 tracking-[0.04em] text-white/70">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    {r.name}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
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
              El primer paso
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-extralight leading-[1.05] tracking-[0.04em] text-white sm:text-[46px] lg:text-[58px]">
              El primer paso para trabajar tu imagen con dirección.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 text-[13px] leading-7 tracking-[0.03em] text-white/55">
              Cuando entiendes realmente tu cabello, tu piel y tu estructura facial, las decisiones dejan de ser improvisación.
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
