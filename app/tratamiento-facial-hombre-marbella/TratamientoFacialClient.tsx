"use client";

import Image from "next/image";
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

const TREATMENTS = [
  {
    condition: "Si tu piel está seca, tirante o sin vida…",
    name: "Hidratación profunda",
    steps: ["Limpieza + preparación", "Tecnología Foreo", "Mascarilla hidratante", "Sellado con frío"],
    result: "Piel con mayor elasticidad, mejor textura y apariencia saludable.",
  },
  {
    condition: "Si tienes ojeras, mirada cansada o signos de fatiga…",
    name: "Tratamiento ocular",
    steps: ["Parches hidratantes", "Tecnología Foreo + LED", "Estimulación de microcirculación"],
    result: "Mirada más descansada, menos hinchazón y mejor tono.",
  },
  {
    condition: "Si tienes piel grasa o con impurezas…",
    name: "Purificante",
    steps: ["Limpieza profunda", "Control de grasa", "Eliminación de impurezas", "Mascarilla purificante"],
    result: "Piel más limpia, poros menos visibles y mejor equilibrio.",
  },
  {
    condition: "Si notas líneas de expresión o pérdida de firmeza…",
    name: "Antiedad",
    steps: ["Estimulación con tecnología", "Mascarilla reafirmante", "Activación celular"],
    result: "Piel con mejor firmeza y aspecto más joven.",
  },
  {
    condition: "Si tienes piel sensible o irritada…",
    name: "Calmante",
    steps: ["Limpieza suave", "Activos calmantes", "Reducción de inflamación"],
    result: "Piel equilibrada, sin rojeces ni molestias.",
  },
  {
    condition: "Si tu piel está apagada o sin luminosidad…",
    name: "Iluminador",
    steps: ["Limpieza + exfoliación ligera", "Activación de la piel", "Mascarilla revitalizante"],
    result: "Piel más uniforme, luminosa y revitalizada.",
  },
];

const FAQ = [
  {
    q: "¿Qué tratamiento facial necesito?",
    a: "Analizamos tu piel antes de comenzar y aplicamos el protocolo exacto que necesita tu rostro. No se trata de elegir un menú, sino de diagnosticar y actuar con criterio.",
  },
  {
    q: "¿Cuánto cuesta un tratamiento facial para hombre en Marbella?",
    a: "Depende del diagnóstico y la tecnología aplicada. Trabajamos con protocolos personalizados, por lo que el valor del servicio se adapta a las necesidades reales de tu piel.",
  },
  {
    q: "¿Cada cuánto debería hacerme un tratamiento facial?",
    a: "Lo recomendable es cada 3 a 4 semanas para mantener los resultados y mejorar progresivamente el estado de la piel.",
  },
  {
    q: "¿Se puede combinar con corte o barba?",
    a: "Sí, es un complemento ideal. La mayoría de clientes lo combinan con el servicio de corte o barba para potenciar el resultado final y mejorar la imagen global.",
  },
];

export default function TratamientoFacialClient() {
  return (
    <main className="min-h-screen bg-[#ece8de] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/Foto5_1.jpeg"
          alt="tratamiento facial hombre Marbella"
          fill
          priority
          className="object-cover scale-[1.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />

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
            Tratamiento facial para hombre en Marbella
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[52ch] space-y-2"
          >
            <p className="text-[15px] font-semibold leading-6 tracking-[0.04em] text-white/90">
              Mejora visible en tu piel desde la primera sesión.
            </p>
            <p className="text-[13px] leading-6 tracking-[0.06em] text-white/65">
              Tu piel habla de ti antes de que tú lo hagas.
              No trabajamos con protocolos genéricos. Cada piel necesita un enfoque diferente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="btn-reserva px-8 py-4 text-[11px]">
              Reserva tu tratamiento
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Cuidado de la piel hombre Marbella
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Este servicio comienza entendiendo tu piel
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Este servicio no comienza con productos… comienza entendiendo tu piel.
              </p>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Antes de aplicar cualquier tratamiento, analizamos el estado real de tu rostro para determinar qué necesita exactamente. Porque no todas las pieles requieren lo mismo.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Si buscas un{" "}
                <Link href="/" className="underline underline-offset-2 hover:text-black transition">
                  servicio facial en Marbella
                </Link>
                {" "}donde el resultado sea real y no genérico, este servicio está diseñado para ti.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/Foto2_1.jpeg"
              alt="limpieza facial hombre Marbella"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── BLOQUE SEO PRECIO ── */}
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
                  Lo que necesitas saber
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
                  Tratamiento facial hombre Marbella precio
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  El precio de un tratamiento facial masculino en Marbella puede variar dependiendo del diagnóstico y la tecnología utilizada.
                </p>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  En este caso, trabajamos con protocolos personalizados, por lo que el valor del servicio se adapta a las necesidades reales de tu piel.
                </p>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/80 font-semibold">
                  No pagas por un tratamiento estándar, pagas por uno diseñado para ti.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#f8aa00] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f8aa00] transition hover:bg-[#f8aa00] hover:text-black"
                >
                  Consulta tu cita
                </a>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="grid grid-cols-1 gap-px bg-white/5 rounded-3xl overflow-hidden">
              {[
                { num: "01", label: "Diagnóstico previo", desc: "Analizamos el estado real de tu piel antes de decidir qué protocolo aplicar." },
                { num: "02", label: "Protocolo personalizado", desc: "El tratamiento se define según lo que tu piel necesita, no según un menú estándar." },
                { num: "03", label: "Resultado medible", desc: "Mejora visible desde la primera sesión con resultados progresivos en el tiempo." },
              ].map((item, i) => (
                <FadeUp key={item.num} delay={i * 0.06} className="bg-white/5 px-7 py-6 flex gap-5 items-start">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f8aa00] mt-0.5 shrink-0">{item.num}</span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">{item.label}</p>
                    <p className="mt-1 text-[12px] leading-6 tracking-[0.04em] text-white/55">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DIAGNÓSTICO ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Análisis facial
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Diagnóstico antes de cualquier tratamiento
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Realizamos un análisis facial para entender el estado real de tu piel. Este análisis forma parte de un enfoque profesional en el cuidado de la piel masculina en Marbella.
              </p>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Con esta información definimos el tratamiento exacto.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <ul className="mt-8 space-y-3">
                {[
                  "Nivel de hidratación",
                  "Exceso de grasa o impurezas",
                  "Sensibilidad",
                  "Signos de fatiga o envejecimiento",
                  "Estado general de la piel",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-black/70">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-black/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="rounded-3xl bg-[#0f1112] px-10 py-14 flex flex-col justify-between min-h-[400px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
              Análisis piel Marbella
            </p>
            <p className="mt-6 text-[64px] font-semibold uppercase leading-none tracking-tight text-white/8 select-none">
              SKIN
            </p>
            <div className="mt-auto space-y-4">
              {[
                { icon: "◎", text: "Tecnología de análisis profesional" },
                { icon: "◈", text: "Evaluación de 5 factores clave" },
                { icon: "◉", text: "Protocolo definido antes de empezar" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-[#f8aa00] text-[16px] leading-none shrink-0">{item.icon}</span>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TECNOLOGÍA ── */}
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
              Tecnología profesional
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 max-w-[22ch] text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Foreo + vaporizador: tecnología que mejora la piel
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 max-w-[60ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Trabajamos con tecnología profesional como Foreo, que permite mejorar la limpieza profunda, estimular la piel y potenciar la absorción de activos.
            </p>
            <p className="mt-4 max-w-[60ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Todo el proceso está diseñado para mejorar la calidad real de la piel. Esto no solo mejora el aspecto, mejora la piel con el tiempo.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden">
            {[
              { num: "01", title: "Vaporizador caliente", desc: "Abre poros para una limpieza profunda y mejor penetración de activos." },
              { num: "02", title: "Limpieza Foreo", desc: "Limpieza profunda, estimulación y activación de la piel con tecnología profesional." },
              { num: "03", title: "Tecnología LED", desc: "Tratamiento lumínico adaptado al diagnóstico para potenciar el resultado." },
              { num: "04", title: "Cierre con frío", desc: "Vaporizador frío para cerrar poros, equilibrar la piel y alargar el resultado." },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.06} className="bg-white/5 p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]/60">
                  {step.num}
                </p>
                <h3 className="mt-3 text-[18px] font-semibold uppercase tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-white/55">
                  {step.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRATAMIENTOS POR IDENTIFICACIÓN ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            Identifica tu piel
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 max-w-[24ch] text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
            ¿Qué necesita tu piel hoy?
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-black/65">
            Cada protocolo se diseña según lo que observamos en el diagnóstico. Aquí puedes identificarte para entender qué tipo de resultado esperar.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.05} className="rounded-3xl border border-black/10 bg-white/60 p-7 flex flex-col">
              <p className="text-[11px] leading-5 tracking-[0.04em] text-black/50 italic">
                {t.condition}
              </p>
              <h3 className="mt-4 text-[16px] font-semibold uppercase tracking-tight text-black">
                {t.name}
              </h3>
              <ul className="mt-4 space-y-1.5 flex-1">
                {t.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-[11px] leading-5 tracking-[0.04em] text-black/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#f8aa00]" />
                    {step}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-black/8 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/40 mb-1">Resultado</p>
                <p className="text-[12px] leading-5 tracking-[0.04em] text-black/65">{t.result}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CONEXIÓN CON SERVICIOS ── */}
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
                  Complemento ideal
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
                  Potencia el resultado de tu visita
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  La mayoría de clientes que reservan un{" "}
                  <Link href="/corte-de-pelo-hombre-marbella" className="text-[#f8aa00] underline underline-offset-2 hover:text-[#f8aa00]/80 transition">
                    corte de cabello en Marbella
                  </Link>
                  {" "}o un servicio de{" "}
                  <Link href="/barberia-marbella-corte-barba" className="text-[#f8aa00] underline underline-offset-2 hover:text-[#f8aa00]/80 transition">
                    corte y barba
                  </Link>
                  {" "}complementan su cita con este tratamiento.
                </p>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Esto permite potenciar el resultado final y mejorar la imagen global en una sola visita.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="grid grid-cols-1 gap-4">
              {[
                { icon: "◎", title: "Corte + Facial", desc: "La combinación más completa. Cabello y piel trabajados en la misma sesión." },
                { icon: "◈", title: "Barba + Facial", desc: "Preparación de la piel antes del diseño de barba para un resultado superior." },
                { icon: "◉", title: "Servicio completo", desc: "Corte + barba + tratamiento facial. La imagen más cuidada de la Costa del Sol." },
              ].map((feat) => (
                <div key={feat.title} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 flex gap-4 items-start">
                  <span className="text-[#f8aa00] text-[20px] leading-none mt-0.5 shrink-0">{feat.icon}</span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">{feat.title}</p>
                    <p className="mt-1 text-[12px] leading-6 tracking-[0.04em] text-white/55">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIACIÓN ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Por qué elegirnos
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Nada aquí es genérico
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                La mayoría de tratamientos faciales siguen el mismo protocolo para todos. Aquí no.
              </p>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Nada aquí es genérico. Cada paso tiene un porqué y un objetivo claro.
              </p>
            </FadeUp>

            <div className="mt-10 space-y-6">
              {[
                { title: "Diagnóstico real", desc: "Analizamos antes de actuar. Cada protocolo parte de lo que observamos en tu piel." },
                { title: "Tecnología profesional", desc: "Foreo, vaporizador y LED seleccionados según el estado de tu piel ese día." },
                { title: "Sin protocolos estándar", desc: "No existe un tratamiento igual para dos personas. Todo se adapta." },
                { title: "Resultado progresivo", desc: "Cada sesión mejora la calidad de la piel de forma acumulativa y visible." },
              ].map((b, i) => (
                <FadeUp key={b.title} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-black/60" />
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black">{b.title}</p>
                      <p className="mt-1.5 text-[12px] leading-6 tracking-[0.04em] text-black/60">{b.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/images/Foto17.jpeg", alt: "tratamiento facial hombre Marbella resultado" },
              { src: "/images/Foto18.jpeg", alt: "cuidado piel hombre Marbella" },
              { src: "/images/Foto19.jpeg", alt: "barbería premium Marbella facial" },
              { src: "/images/Foto20.jpeg", alt: "limpieza facial hombre Marbella" },
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
      </section>

      {/* ── PRUEBA SOCIAL ── */}
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
              Clientes reales
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-8 text-[22px] sm:text-[28px] font-semibold leading-[1.3] tracking-tight text-white max-w-[36ch] mx-auto">
              &ldquo;Pensaba que todos los tratamientos faciales eran iguales… hasta que probé este.
              Se nota la diferencia desde la primera sesión.&rdquo;
            </p>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
              Cliente · Marbella
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Próximamente: reseñas en audio
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            Preguntas frecuentes
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
            Todo lo que necesitas saber
          </h2>
        </FadeUp>

        <div className="mt-12 space-y-0">
          {FAQ.map((item, i) => (
            <FadeUp key={i} delay={i * 0.06} className="border-b border-black/10 py-8">
              <p className="text-[14px] font-semibold uppercase tracking-[0.1em] text-black">
                {item.q}
              </p>
              <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-black/60">
                {item.a}
              </p>
            </FadeUp>
          ))}
        </div>

        {/* H2 SEO secundarios */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { h: "Tratamiento facial hombre Marbella", desc: "Protocolo personalizado según diagnóstico y tecnología aplicada." },
            { h: "Limpieza facial hombre Marbella", desc: "Limpieza profunda con vaporizador y Foreo para resultados reales." },
            { h: "Cuidado de la piel hombre Marbella", desc: "Skincare masculino con criterio profesional y tecnología de última generación." },
          ].map((item) => (
            <FadeUp key={item.h} className="rounded-2xl border border-black/10 bg-white/60 p-6">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-black">
                {item.h}
              </h2>
              <p className="mt-2 text-[12px] leading-6 tracking-[0.04em] text-black/55">
                {item.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── AUTORIDAD ── */}
      <section className="bg-white/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeUp delay={0.05} className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/JuanCarlos1.jpeg"
                alt="Juan Carlos barbero profesional Marbella"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeUp>

            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                  Tu especialista en Marbella
                </p>
              </FadeUp>
              <FadeUp delay={0.06}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                  Juan Carlos Terán
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                  Este servicio está pensado para hombres que valoran su imagen y entienden que un buen resultado no es casualidad, sino el resultado de técnica, diagnóstico y experiencia.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                  Con más de 20 años de experiencia y formación internacional en técnica y cuidado de la piel masculina.
                </p>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Foreo certificado", "Visagismo", "20+ años de experiencia", "Servicio premium"].map((tag) => (
                    <span key={tag} className="rounded-full border border-black/15 bg-black/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <div className="mt-8 flex flex-wrap gap-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-black/50">
                  <Link href="/" className="hover:text-black transition">← Inicio</Link>
                  <Link href="/corte-de-pelo-hombre-marbella" className="hover:text-black transition">Corte de cabello</Link>
                  <Link href="/barberia-marbella-corte-barba" className="hover:text-black transition">Corte y barba</Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-[#f8aa00] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
              Reserva online · Sin esperas
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[52px]">
              Reserva tu tratamiento y empieza a ver tu piel con otro nivel de cuidado
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 text-[13px] leading-7 tracking-[0.04em] text-black/65">
              Diagnóstico + tecnología + protocolo personalizado.
            </p>
            <p className="mt-2 text-[13px] leading-7 tracking-[0.04em] text-black/65">
              Mejora visible desde la primera sesión.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-black px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-black/80 hover:-translate-y-0.5"
              >
                Reserva tu tratamiento
              </a>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black/10 hover:-translate-y-0.5"
              >
                Reservar en Booksy
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
