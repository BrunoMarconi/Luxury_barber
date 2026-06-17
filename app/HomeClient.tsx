"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import TeamSpotlight from "./TeamSpotlight";
import GallerySection from "./GallerySection";
import { buildWaUrl } from "@/lib/cta";
import type { GoogleReview } from "@/lib/google-reviews";

const BOOKSY_URL = buildWaUrl("home");

type HeroSplitProps = {
  leftImageSrc: string;
  rightCardImageSrc: string;
};

type GalleryPhoto = {
  _id: string;
  src: string;
  alt: string;
  size?: "tall" | "wide" | "square";
};

// panel that appears to the right of the hero on desktop, duplicated below services on mobile
function RightPanel({ className }: { className?: string }) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.9 }}
      className={`relative bg-[#F5F5F5] lg:min-h-[100svh] ${className ?? ""}`}
    >
      <div className="mx-auto flex h-full max-w-md flex-col px-6 pt-24 pb-24 lg:pt-28">
        <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-[14px] font-semibold uppercase tracking-[0.08em] text-black"
          >
            Productos para el cuidado masculino.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-6 w-[220px] sm:w-[260px] lg:w-[280px]"
          >
            <div className="relative aspect-[3/4] w-full shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
              <Image
                src={'/Catálogo.jpeg'}
                alt="Product promo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 280px"
              />
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            href="/catalogo"
            className="mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-black/85 hover:text-black transition"
          >
            Más información
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-8 space-y-4"
          >
            <p className="text-[12px] leading-6 text-black/55">
              La diferencia no está solo en el corte.<br />
              <span className="font-semibold text-black/80">Está en todo lo que hay detrás.</span>
            </p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noreferrer"
              data-cta="whatsapp-rightpanel"
              data-page="home"
              className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
            >
              Ver experiencia premium
            </a>
          </motion.div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="marquee">
          <div className="marquee-track">
            <div className="flex">
              <span className="whitespace-nowrap px-6 text-[44px] font-semibold uppercase tracking-[0.12em] text-black/90 sm:text-[56px] lg:text-[64px]">
                No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp; No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp;
               No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp; No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp;
              </span>
            </div>
            <div className="flex" aria-hidden="true">
              <span className="whitespace-nowrap px-6 text-[44px] font-semibold uppercase tracking-[0.12em] text-black/90 sm:text-[56px] lg:text-[64px]">
                No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp; No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp;
                No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp; No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp;
                No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp; No es solo un corte de pelo. Es cómo proyectas tu imagen en Marbella. &nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

const HOME_REVIEWS = [
  {
    id: "r1",
    name: "Alex",
    rating: 5,
    date: "Mar 2026",
    text: "Servicio completamente distinto a todo lo que había probado. Diagnóstico real, resultado real. 100% recomendable.",
  },
  {
    id: "r2",
    name: "Yeray",
    rating: 5,
    date: "Feb 2026",
    text: "En más de 20 años de experiencia se nota. La precisión y el criterio en cada decisión marcan la diferencia.",
  },
  {
    id: "r3",
    name: "Francisco",
    rating: 5,
    date: "Ene 2026",
    text: "Vine de visita a Marbella y acabé encontrando el mejor barbero que he tenido. El resultado habla solo.",
  },
  {
    id: "r4",
    name: "Manu",
    rating: 5,
    date: "Ene 2026",
    text: "Lo que más me sorprendió fue el diagnóstico antes de empezar. Ahora entiendo por qué antes el resultado no me terminaba de convencer.",
  },
];

function HomeStars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-[#FBBC04] tracking-tight text-sm">{"★".repeat(n)}</span>
  );
}

function HomeGoogleG({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const differentiationCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: "Diagnóstico capilar y facial",
    text: "Analizamos el cuero cabelludo, la piel y la estructura del rostro utilizando herramientas de diagnóstico profesional.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a7 7 0 1 0 0 14A7 7 0 0 0 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
        <path d="M5 20c2-2 4-3 7-3s5 1 7 3" />
      </svg>
    ),
    title: "Diseño basado en visagismo",
    text: "Creamos un diseño personalizado adaptado a tu rostro, estilo de vida y objetivos de imagen.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M6 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" />
        <path d="M18 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" />
        <path d="M9 12l6-6" />
        <path d="M9 6l6 6" />
      </svg>
    ),
    title: "Corte de alta precisión",
    text: "Aplicamos técnicas avanzadas para lograr un resultado limpio, equilibrado y duradero.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v3" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: "Tecnología y tratamiento profesional",
    text: "Trabajamos con tecnología facial FOREO y productos italianos Previa para mejorar el estado del cabello y la piel.",
  },
];

function DifferentiationBlock() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-start">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              El método
            </p>
            <h2 className="mt-4 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[42px] lg:text-[52px]">
              No trabajamos por plantillas. Cada cliente tiene un diseño.
            </h2>
            <div className="mt-8 space-y-5 text-[13px] leading-7 tracking-[0.03em] text-white/60">
              <p>
                Cada servicio comienza con un análisis real: estructura del rostro, estado del cuero cabelludo y estilo de vida.
              </p>
              <p>
                A partir de ahí diseñamos un resultado adaptado a cada persona, sin plantillas ni atajos.
              </p>
              <p className="font-semibold text-white/85">Nada es al azar. Cada paso tiene un porqué.</p>
            </div>
          </motion.div>

          {/* Right: 4 cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {differentiationCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2A44]/30 bg-[#0F2A44]/10 text-white/70">
                  {card.icon}
                </span>
                <h3 className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] leading-6 tracking-[0.03em] text-white/55">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const experienceSteps = [
  {
    n: "01",
    title: "Evaluación inicial",
    text: "Analizamos tu cabello, cuero cabelludo y rostro para entender tu punto de partida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Diagnóstico capilar y facial",
    text: "Utilizamos herramientas profesionales para detectar necesidades reales de la piel y el cabello.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Diseño personalizado",
    text: "Definimos el estilo más adecuado según tu rostro, crecimiento del cabello y estilo de vida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Corte de alta precisión",
    text: "Ejecutamos el corte con técnicas avanzadas, cuidando cada ángulo y cada detalle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Tratamiento y acabado",
    text: "Aplicamos productos profesionales Previa y tecnología facial FOREO para mejorar el estado del cabello y la piel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Recomendación personalizada",
    text: "Te explicamos cómo mantener el resultado y qué productos utilizar en tu día a día.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

function ExperienceBlock() {
  return (
    <section className="bg-[#F5F5F5] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/55"
            >
              El proceso
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-[38px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[50px] lg:text-[60px]"
            >
              Qué incluye la experiencia
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[56ch] text-[13px] leading-7 tracking-[0.04em] text-black/60"
          >
            Cada paso está pensado para que el resultado no solo se vea bien el día del corte, sino que comunique algo de ti cada día.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="mt-16 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden">
          {experienceSteps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="bg-[#F5F5F5] p-8"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 text-[11px] font-bold tracking-[0.2em] text-white/70">
                  {step.n}
                </span>
                <span className="mt-0.5 shrink-0 text-black/40">
                  {step.icon}
                </span>
              </div>
              <h3 className="mt-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-[12px] leading-6 tracking-[0.03em] text-black/60">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-[13px] leading-7 text-black/60 max-w-[52ch]">
            No trabajamos con cortes estándar.<br />
            <span className="font-semibold text-black/80">Cada servicio es un proceso diseñado exclusivamente para ti.</span>
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
            data-cta="whatsapp-experience"
            data-page="home"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c]"
          >
            Solicitar asesoría personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AuthorityBlock() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-center">

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              El especialista
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[42px] lg:text-[52px]"
            >
              Detrás de cada resultado hay experiencia, criterio y formación
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-8 space-y-5 text-[13px] leading-7 tracking-[0.03em] text-white/60"
            >
              <p>
                Soy Juan Carlos Terán, especialista en imagen masculina con más de 20 años de experiencia formado en Colombia, Chile y la academia Antonio Eloy en España.
              </p>
              <p>
                Cada decisión —desde el diagnóstico hasta el acabado— tiene una base técnica y un objetivo claro: mejorar tu imagen de forma real y coherente contigo.
              </p>
              <p className="font-semibold text-white/85">
                Este servicio está pensado para hombres que valoran el detalle, el criterio y el resultado.
              </p>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              href={BOOKSY_URL}
              target="_blank"
              rel="noreferrer"
              data-cta="whatsapp-asesoria"
              data-page="home"
              className="mt-10 inline-flex items-center justify-center rounded-full border border-[#0F2A44] bg-transparent px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:bg-[#0F2A44] hover:text-white"
            >
              Solicitar asesoría personalizada
            </motion.a>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[380px] lg:mx-0"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/especialista_juancarlos.jpeg"
                alt="Juan Carlos Terán — Especialista en imagen masculina en Marbella"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Juan Carlos Terán
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                Especialista en imagen masculina
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32 lg:py-40">
      {/* gold line top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

      {/* subtle radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70"
        >
          Reserva tu experiencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.06 }}
          className="mt-6 text-[34px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[46px] lg:text-[58px]"
        >
          Si has llegado hasta aquí, es porque sabes que puedes verte mejor.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.14 }}
          className="mt-8 space-y-3 text-[14px] leading-7 tracking-[0.03em] text-white/55"
        >
          <p>
            No se trata de cambiar tu estilo.
          </p>
          <p>
            Se trata de elevarlo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
            data-cta="whatsapp-asesoria"
            data-page="home"
            className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
          >
            Solicitar asesoría personalizada
          </a>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
            data-cta="whatsapp-asesoria"
            data-page="home"
            className="w-full rounded-full border border-white/25 bg-transparent px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/50 hover:text-white sm:w-auto"
          >
            Consultar disponibilidad
          </a>
        </motion.div>
      </div>

      {/* gold line bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}

function HeroSplit(_props: HeroSplitProps) {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* CSS marquee */}
      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          /* slower movement */
          animation: marquee-left 60s linear infinite;
        }
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-[1.55fr_1fr]">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-[70svh] lg:min-h-[100svh]"
        >
          <Image
            src={'/images/Hero_juancarlos.jpeg'}
            alt="Interior de la barbería El Barbero Profesional en Marbella"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-black/80 to-transparent" />

          <div className="absolute left-6 bottom-8 right-6 lg:left-10 lg:bottom-12 lg:right-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70"
            >
              Grooming masculino · Marbella
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-3 max-w-[20ch] text-white"
            >
              <span className="block text-[18px] leading-[1.05] tracking-tight sm:text-[50px] lg:text-[66px] xl:text-[76px]">
                Corte de pelo premium para hombre en Marbella.<br />No es solo un corte.<br />Es cómo el mundo te percibe.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-4 max-w-[52ch] text-[13px] leading-6 tracking-[0.04em] text-white/75 lg:text-[14px]"
            >
              Asesoría personalizada en imagen masculina, visagismo y cuidado capilar para hombres que entienden que su presencia también comunica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="home"
                className="inline-flex items-center justify-center rounded-full bg-[#0F2A44] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#1a3d5c]"
              >
                Solicitar asesoría personalizada
              </a>
              <a
                href="/corte-de-pelo-hombre-marbella"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver la experiencia completa
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT PANEL (desktop only) */}
        <RightPanel className="hidden md:block" />
      </div>
    </section>
  );
}


export default function HomePage({ gallery, googleReviews = [] }: { gallery?: GalleryPhoto[]; googleReviews?: GoogleReview[] }) {
  const reviews = googleReviews.length ? googleReviews : HOME_REVIEWS;
  return (
    <>
      <Head>
        <title>Barbería en Marbella | Corte de Pelo Hombre Premium | Reserva Online</title>
        <meta
          name="description"
          content="Barbería en Marbella especializada en corte de pelo hombre premium. Reserva tu cita online y descubre servicios de alta calidad con barbero profesional en Marbella."
        />
      </Head>
      <HeroSplit
        leftImageSrc="https://images.unsplash.com/photo-1769082863369-227f68991d07?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        rightCardImageSrc="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Conversion Strip */}
      <section className="relative bg-[#0F2A44] py-10">
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-[15px] font-semibold leading-7 text-white">
              Tu imagen no debería depender de la suerte.
            </p>
            <p className="mt-1 text-[12px] leading-6 text-white/55">
              Trabajamos con criterio técnico y visagismo para diseñar el corte que realmente te favorece.
            </p>
          </div>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
            data-cta="whatsapp-strip"
            data-page="home"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F2A44] transition hover:bg-white/90"
          >
            Empezar diagnóstico de imagen
          </a>
        </div>
      </section>

      <DifferentiationBlock />
      <ExperienceBlock />
      <AuthorityBlock />
      <ClosingCTA />

      {/* container used to reorder on mobile: services first, then team, then product promo */}
      <div className="flex flex-col">
        <div className="order-2 md:order-1">
          <TeamSpotlight name="Juan Carlos" imageSrc="/team/don.jpg" />
        </div>

        {/* Authority Block */}
        <section className="relative overflow-hidden bg-[#0A0A0A] py-24 lg:py-32">
          {/* subtle gold glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0F2A44]/40 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 bottom-0 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0F2A44]/40 to-transparent" />

          <div className="mx-auto max-w-6xl px-6">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              Por qué elegirnos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mb-16 text-center text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[44px] lg:text-[56px]"
            >
              Experiencia y Especialización en Marbella
            </motion.h2>

            <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex flex-col items-center px-8 py-12 text-center md:py-0"
              >
                <span className="mb-4 text-[80px] font-bold leading-none tracking-tighter text-white/70 sm:text-[100px]">
                  20+
                </span>
                <h3 className="mb-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white">
                  Años de experiencia
                </h3>
                <p className="max-w-[22ch] text-[13px] leading-6 text-white/50">
                  Más de dos décadas perfeccionando el arte del corte masculino con criterio y precisión.
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col items-center px-8 py-12 text-center md:py-0"
              >
                <div className="mb-4 flex h-[80px] items-center sm:h-[100px]">
                  <span className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#0F2A44]/40 bg-[#0F2A44]/10 sm:h-[88px] sm:w-[88px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 sm:h-10 sm:w-10">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </span>
                </div>
                <h3 className="mb-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white">
                  Formación Internacional
                </h3>
                <p className="max-w-[22ch] text-[13px] leading-6 text-white/50">
                  Técnicas avanzadas aprendidas en Colombia, Chile y la academia Antonio Eloy de Málaga.
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col items-center px-8 py-12 text-center md:py-0"
              >
                <div className="mb-4 flex h-[80px] items-center sm:h-[100px]">
                  <span className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#0F2A44]/40 bg-[#0F2A44]/10 sm:h-[88px] sm:w-[88px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 sm:h-10 sm:w-10">
                      <circle cx="12" cy="8" r="5"/>
                      <path d="M3 21c0-4.418 4.03-8 9-8s9 3.582 9 8"/>
                      <path d="M9 8h.01M15 8h.01"/>
                      <path d="M9 11s1 1 3 1 3-1 3-1"/>
                    </svg>
                  </span>
                </div>
                <h3 className="mb-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white">
                  Especialista en Visagismo
                </h3>
                <p className="max-w-[22ch] text-[13px] leading-6 text-white/50">
                  Análisis facial profesional para diseñar el corte que mejor complementa tu fisionomía única.
                </p>
              </motion.div>
            </div>

            {/* CTA bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-16 flex flex-col items-center gap-5 text-center"
            >
              <p className="text-[13px] leading-7 text-white/60 max-w-[48ch]">
                Lo que ves aquí no es estética. Es intención.<br />
                <span className="font-semibold text-white/80">Cada resultado tiene un proceso detrás.</span>
              </p>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noreferrer"
                data-cta="whatsapp-stats"
                data-page="home"
                className="inline-flex items-center justify-center rounded-full border border-[#0F2A44] bg-transparent px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:bg-[#0F2A44] hover:text-white"
              >
                Solicitar asesoría personalizada
              </a>
            </motion.div>
          </div>
        </section>

        <div className="order-3">
          <RightPanel className="block md:hidden" />
        </div>
      </div>

      {/* products promo on desktop is handled by RightPanel in hero; below we show gallery and reviews */}
      <GallerySection photos={gallery} />

      {/* ── RESEÑAS ── */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5">
              <HomeGoogleG className="w-4 h-4 shrink-0" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Reseñas verificadas en Google
              </p>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]"
          >
            Lo que dicen los clientes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-5 py-2.5">
              <HomeGoogleG className="w-4 h-4 shrink-0" />
              <span className="text-[#FBBC04] text-sm leading-none">★★★★★</span>
              <span className="text-[12px] font-semibold text-black">5.0</span>
              <span className="text-[11px] text-black/40 uppercase tracking-widest">en Google</span>
            </div>
          </motion.div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className="rounded-3xl border border-black/10 bg-white p-6 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <HomeStars n={r.rating} />
                  <HomeGoogleG className="w-4 h-4 shrink-0 mt-0.5" />
                </div>
                <p className="mt-4 flex-1 text-[12px] leading-6 tracking-[0.04em] text-black/65">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">{r.name}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">{r.date}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-black/8 flex items-center gap-1.5">
                  <HomeGoogleG className="w-3 h-3 shrink-0" />
                  <span className="text-[10px] tracking-[0.12em] uppercase text-black/35">Reseña verificada</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
