"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";

const BOOKSY_URL = buildWaUrl("tratamiento-facial");

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
    <main className="min-h-screen bg-[#F5F5F5] text-black">

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
            No es solo cuidado facial.<br />Es cómo se ve tu piel.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[52ch] text-[13px] leading-6 tracking-[0.04em] text-white/75"
          >
            La piel también comunica. Y dice mucho de ti.
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
                data-page="tratamiento-facial"
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
              La mayoría de los hombres no cuida su piel.
            </p>
            <p className="mt-1 text-[12px] leading-6 text-white/55">
              Por eso se nota.
            </p>
          </div>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-strip"
            data-page="tratamiento-facial"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F2A44] transition hover:bg-white/90"
          >
            Mejorar mi imagen
          </a>
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

        <FadeUp delay={0.2} className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-[13px] leading-7 text-black/65 max-w-[52ch]">
            No tratamos la piel de forma general.<br />
            <span className="font-semibold text-black/80">Analizamos y trabajamos según lo que necesitas.</span>
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-intro"
            data-page="tratamiento-facial"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
          >
            Solicitar asesoría personalizada
          </a>
        </FadeUp>
      </section>

      {/* ── BLOQUE SEO PRECIO ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
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
                  data-cta="whatsapp-asesoria"
                  data-page="tratamiento-facial"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
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
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 mt-0.5 shrink-0">{item.num}</span>
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
                Con esta información definimos el tratamiento exacto. Este enfoque forma parte del mismo sistema de{" "}
                <Link href="/diagnostico-capilar-marbella" className="underline underline-offset-2 hover:text-black transition">
                  diagnóstico capilar y facial
                </Link>
                {" "}que aplicamos en todos los servicios.
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

          <FadeUp delay={0.1} className="rounded-3xl bg-[#0A0A0A] px-10 py-14 flex flex-col justify-between min-h-[400px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
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
                  <span className="text-white/70 text-[16px] leading-none shrink-0">{item.icon}</span>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TECNOLOGÍA ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70/60">
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

          <FadeUp delay={0.2} className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-[13px] leading-7 text-white/65 max-w-[52ch]">
              Cada tratamiento tiene un propósito específico según tu tipo de piel.
            </p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-tecnologia"
              data-page="tratamiento-facial"
              className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] border border-white/20 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
            >
              Empezar diagnóstico facial
            </a>
          </FadeUp>
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
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#0F2A44]" />
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

      {/* ── LIMPIEZA FACIAL PROFUNDA ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Tratamiento
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Limpieza facial profunda
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Elimina impurezas, limpia los poros y mejora la apariencia de tu piel desde la primera sesión.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">

            {/* Left: problema + método */}
            <div className="space-y-10">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El problema
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    La piel acumula grasa, suciedad y células muertas que no siempre se eliminan con el cuidado diario.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Esto provoca poros obstruidos, textura irregular y una apariencia apagada que afecta directamente a cómo se ve tu rostro.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El método
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Este tratamiento comienza con un diagnóstico facial para identificar el estado real de tu piel.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    A partir de ahí, trabajamos una limpieza profunda utilizando tecnología Foreo, que permite limpiar de forma más eficaz y respetuosa con la piel.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Se eliminan impurezas, se libera el poro y se prepara la piel para recibir hidratación.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right: qué incluye + resultado + CTA */}
            <div className="space-y-6">
              <FadeUp delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Qué incluye
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Diagnóstico facial",
                      "Limpieza profunda con tecnología Foreo",
                      "Eliminación de impurezas",
                      "Trabajo sobre poros",
                      "Hidratación posterior",
                      "Aplicación de productos específicos según el tipo de piel",
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F2A44]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="rounded-2xl border border-[#0F2A44]/20 bg-[#0F2A44]/8 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Resultado
                  </p>
                  <p className="mt-4 text-[14px] font-semibold leading-6 tracking-[0.04em] text-white">
                    Una piel más limpia, más uniforme y con mejor apariencia.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 tracking-[0.04em] text-white/60 italic">
                    No solo se ve mejor. Se siente mejor.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="tratamiento-facial"
                  className="flex w-full items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Añadir tratamiento a tu servicio
                </a>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ── HIDRATACIÓN PROFUNDA ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Tratamiento
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Hidratación profunda
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Devuelve la elasticidad, mejora la textura y da vida a una piel seca, tirante o apagada.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El problema
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    La piel masculina pierde agua con facilidad. El afeitado frecuente, la exposición al sol y la falta de rutina generan sequedad, tirantez y una apariencia cansada.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Una piel deshidratada también envejece más rápido y tiene menos resistencia a los factores externos.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El método
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Comenzamos con diagnóstico y limpieza para preparar la piel. Después, aplicamos tecnología Foreo para optimizar la absorción y potenciar los activos hidratantes.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    El tratamiento finaliza con una mascarilla hidratante y cierre con frío para fijar el resultado y mejorar la textura visible de la piel.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="space-y-6">
              <FadeUp delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Qué incluye
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Diagnóstico facial",
                      "Limpieza y preparación de la piel",
                      "Tecnología Foreo para activar la absorción",
                      "Mascarilla hidratante de alta concentración",
                      "Sellado con vaporizador frío",
                      "Activos específicos según tipo de piel",
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F2A44]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="rounded-2xl border border-[#0F2A44]/20 bg-[#0F2A44]/8 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Resultado
                  </p>
                  <p className="mt-4 text-[14px] font-semibold leading-6 tracking-[0.04em] text-white">
                    Piel con mayor elasticidad, mejor textura y apariencia saludable.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 tracking-[0.04em] text-white/60 italic">
                    Se nota diferente. Se siente diferente.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="tratamiento-facial"
                  className="flex w-full items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRATAMIENTO OCULAR ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Tratamiento
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Tratamiento ocular
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Para ojeras, hinchazón y mirada cansada. La zona periocular es la más delicada y la primera que delata el cansancio.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El problema
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    El contorno de ojos es la zona más fina y sensible del rostro. La falta de descanso, el estrés y la deshidratación se acumulan aquí primero.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Ojeras marcadas, hinchazón y mirada apagada son señales que afectan directamente a la percepción de tu imagen.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El método
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Aplicamos parches hidratantes específicos para la zona periocular. La tecnología Foreo combinada con LED estimula la microcirculación y activa el drenaje.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    El resultado es una zona más descansada, menos hinchada y con mejor tono desde la primera sesión.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="space-y-6">
              <FadeUp delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Qué incluye
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Diagnóstico de la zona periocular",
                      "Parches hidratantes específicos",
                      "Tecnología Foreo + LED",
                      "Estimulación de microcirculación",
                      "Drenaje de la zona con técnica manual",
                      "Activos despigmentantes y descongestivos",
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F2A44]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="rounded-2xl border border-[#0F2A44]/20 bg-[#0F2A44]/8 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Resultado
                  </p>
                  <p className="mt-4 text-[14px] font-semibold leading-6 tracking-[0.04em] text-white">
                    Mirada más descansada, menos hinchazón y mejor tono en el contorno.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 tracking-[0.04em] text-white/60 italic">
                    Una mirada que comunica presencia.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="tratamiento-facial"
                  className="flex w-full items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── PURIFICANTE ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Tratamiento
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Purificante
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Para piel grasa, con brillo excesivo o impurezas visibles. Limpieza profunda con control del equilibrio sebáceo.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El problema
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    El exceso de grasa obstruye los poros y favorece la aparición de impurezas, brillos y una textura irregular que es difícil de controlar solo con el cuidado diario.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Una piel grasa no tratada correctamente puede empeorar con el tiempo y afectar a la uniformidad del tono.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El método
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Realizamos una limpieza profunda con vaporizador caliente para abrir los poros y facilitar la extracción. La tecnología Foreo actúa sobre la capa superficial eliminando el exceso de sebo.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Una mascarilla purificante completa el proceso, seguida de cierre con frío para reducir los poros y equilibrar la piel.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="space-y-6">
              <FadeUp delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Qué incluye
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Diagnóstico facial y análisis sebáceo",
                      "Limpieza profunda con vaporizador caliente",
                      "Tecnología Foreo para control de grasa",
                      "Eliminación de impurezas y puntos negros",
                      "Mascarilla purificante",
                      "Cierre de poros con vaporizador frío",
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F2A44]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="rounded-2xl border border-[#0F2A44]/20 bg-[#0F2A44]/8 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Resultado
                  </p>
                  <p className="mt-4 text-[14px] font-semibold leading-6 tracking-[0.04em] text-white">
                    Piel más limpia, poros menos visibles y mejor equilibrio sebáceo.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 tracking-[0.04em] text-white/60 italic">
                    Sin brillos. Con control.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="tratamiento-facial"
                  className="flex w-full items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANTIEDAD ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Tratamiento
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Antiedad
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Para líneas de expresión, pérdida de firmeza y signos de envejecimiento prematuro. Estimulación activa con tecnología.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El problema
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    A partir de los 30, la producción de colágeno disminuye de forma progresiva. La piel pierde firmeza, aparecen las primeras líneas de expresión y el óvalo facial empieza a perder definición.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Sin un protocolo activo, estos signos se aceleran con el tiempo.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El método
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Utilizamos tecnología Foreo para estimular la producción de colágeno y mejorar la firmeza desde dentro. La combinación con LED optimiza la regeneración celular.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Una mascarilla reafirmante completa el protocolo, aportando tensión visible y mejorando la elasticidad de la piel de forma progresiva.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="space-y-6">
              <FadeUp delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Qué incluye
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Diagnóstico de signos de envejecimiento",
                      "Estimulación con tecnología Foreo",
                      "Terapia LED para regeneración celular",
                      "Mascarilla reafirmante de alta concentración",
                      "Activación celular con activos específicos",
                      "Protocolo progresivo de sesiones",
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F2A44]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="rounded-2xl border border-[#0F2A44]/20 bg-[#0F2A44]/8 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Resultado
                  </p>
                  <p className="mt-4 text-[14px] font-semibold leading-6 tracking-[0.04em] text-white">
                    Piel con mejor firmeza, menor visibilidad de líneas y aspecto más joven y descansado.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 tracking-[0.04em] text-white/60 italic">
                    El tiempo no se detiene. Pero se puede trabajar.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="tratamiento-facial"
                  className="flex w-full items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALMANTE ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Tratamiento
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Calmante
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Para pieles sensibles, con rojeces o irritación. Protocolos suaves que restauran el equilibrio de la piel sin agredir.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El problema
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    La piel sensible reacciona con facilidad: rojeces, picor, ardor o sensación de incomodidad después del afeitado o la exposición al sol son señales de una barrera cutánea debilitada.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Usar productos inadecuados o protocolos agresivos empeora la situación. Esta piel necesita delicadeza y activos específicos.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El método
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Todo el protocolo se adapta a la sensibilidad de tu piel. Limpieza suave, activos calmantes de alta tolerancia y tecnología con parámetros ajustados para no generar reacción.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    El objetivo es reducir la inflamación, restaurar la barrera cutánea y dejar la piel equilibrada y sin molestias.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="space-y-6">
              <FadeUp delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Qué incluye
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Diagnóstico de sensibilidad cutánea",
                      "Limpieza suave con productos de alta tolerancia",
                      "Activos calmantes e ingredientes antiinflamatorios",
                      "Reducción de rojeces e irritación",
                      "Restauración de la barrera hidrolipídica",
                      "Protocolo sin fragancias ni ingredientes agresivos",
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F2A44]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="rounded-2xl border border-[#0F2A44]/20 bg-[#0F2A44]/8 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Resultado
                  </p>
                  <p className="mt-4 text-[14px] font-semibold leading-6 tracking-[0.04em] text-white">
                    Piel equilibrada, sin rojeces ni molestias. Barrera cutánea reforzada.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 tracking-[0.04em] text-white/60 italic">
                    Comodidad desde la primera sesión.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="tratamiento-facial"
                  className="flex w-full items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── ILUMINADOR ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Tratamiento
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Iluminador
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-[58ch] text-[13px] leading-7 tracking-[0.04em] text-white/60">
              Para piel apagada, sin luminosidad o con tono desigual. Revitalización y uniformidad desde la primera sesión.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El problema
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    La acumulación de células muertas, la falta de renovación celular y el estrés generan una piel apagada, sin vida y con un tono irregular que resta presencia.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    No es un problema grave, pero afecta notablemente al aspecto global del rostro y a la primera impresión que das.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    El método
                  </p>
                  <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Comenzamos con una limpieza y exfoliación ligera para eliminar las células muertas que opacan la piel. La tecnología activa la renovación celular y mejora el tono.
                  </p>
                  <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-white/65">
                    Una mascarilla revitalizante con activos iluminadores completa el protocolo, aportando uniformidad y brillo saludable de forma inmediata.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="space-y-6">
              <FadeUp delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Qué incluye
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Diagnóstico de tono y luminosidad",
                      "Limpieza + exfoliación ligera",
                      "Activación de la renovación celular",
                      "Tecnología para uniformizar el tono",
                      "Mascarilla revitalizante con activos iluminadores",
                      "Hidratación de cierre para fijar el resultado",
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F2A44]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="rounded-2xl border border-[#0F2A44]/20 bg-[#0F2A44]/8 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Resultado
                  </p>
                  <p className="mt-4 text-[14px] font-semibold leading-6 tracking-[0.04em] text-white">
                    Piel más uniforme, luminosa y revitalizada. Tono equilibrado con efecto inmediato.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 tracking-[0.04em] text-white/60 italic">
                    Tu piel, en su mejor versión.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-asesoria"
                  data-page="tratamiento-facial"
                  className="flex w-full items-center justify-center rounded-full border border-[#0F2A44] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
                >
                  Solicitar asesoría personalizada
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONEXIÓN CON SERVICIOS ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
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
                  <Link href="/corte-de-pelo-hombre-marbella" className="text-white/70 underline underline-offset-2 hover:text-white/70/80 transition">
                    corte de cabello en Marbella
                  </Link>
                  {" "}o un servicio de{" "}
                  <Link href="/corte-y-barba-premium-marbella" className="text-white/70 underline underline-offset-2 hover:text-white/70/80 transition">
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
                  <span className="text-white/70 text-[20px] leading-none mt-0.5 shrink-0">{feat.icon}</span>
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

            <FadeUp delay={0.28} className="mt-10 flex flex-col gap-3">
              <p className="text-[13px] leading-7 text-black/70">
                No es un tratamiento estándar.<br />
                <span className="font-semibold text-black/85">Es un tratamiento pensado para ti.</span>
              </p>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-diferenciacion"
                data-page="tratamiento-facial"
                className="self-start inline-flex items-center justify-center rounded-full border border-black/20 bg-black/5 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/80 transition hover:bg-[#0F2A44] hover:border-[#0F2A44] hover:text-white"
              >
                Acceder a experiencia premium
              </a>
            </FadeUp>
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

        <FadeUp delay={0.15} className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] font-semibold leading-7 text-black/80">
            La diferencia no siempre es evidente.<br />
            <span className="text-black/50 font-normal text-[13px]">Pero siempre se percibe.</span>
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-resultado"
            data-page="tratamiento-facial"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
          >
            Quiero este resultado
          </a>
        </FadeUp>
      </section>

      {/* ── PRUEBA SOCIAL ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
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
                  <Link href="/corte-y-barba-premium-marbella" className="hover:text-black transition">Corte y barba</Link>
                </div>
              </FadeUp>
            </div>
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
              "Pensaba que todos los tratamientos faciales eran iguales... hasta que probé este.",
              "Se nota que aquí no improvisan, todo tiene un porqué.",
              "Después de este servicio, mi piel cambió completamente.",
              "No es un tratamiento más, es otra forma de cuidar la imagen.",
              "La diferencia con otros sitios es que aquí primero analizan, luego actúan.",
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

          <FadeUp delay={0.2} className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-[15px] font-semibold text-black/80">
              Una piel cuidada cambia cómo te perciben.
            </p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-testimonios"
              data-page="tratamiento-facial"
              className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
            >
              Solicitar asesoría personalizada
            </a>
          </FadeUp>
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
      <section className="bg-[#0F2A44] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Reserva online · Sin esperas
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[52px]">
              Tu piel habla antes que tú.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 text-[14px] leading-7 tracking-[0.04em] text-white/70 font-semibold">
              La pregunta es qué está diciendo.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-10 flex justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="tratamiento-facial"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0F2A44] transition hover:bg-white/90"
              >
                Solicitar asesoría personalizada
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
