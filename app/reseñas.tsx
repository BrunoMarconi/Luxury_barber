"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type ReviewSource = "Google" | "Booksy" | "Instagram" | "Other";

type Review = {
  id: string;
  name: string;
  text: string;
  source: ReviewSource;
  rating?: 1 | 2 | 3 | 4 | 5;
  date?: string; // "2025-01-18" o "Ene 2025"
  service?: string; // opcional: "Corte + Barba"
  url?: string; // link a la reseña original si lo tienes
};

/** ✅ SOLO EDITA ESTO: pega nuevas reseñas aquí */
const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Alex",
    source: "Booksy",
    rating: 5,
    date: "Ene 2026",
    text: "Excelente servicio y gran profesionalidad, me hizo el corte a tijera como quería. No había encontrado aún quien me hiciera el corte como pedía. Volveré sin duda.",
    service: "Corte de cabello",
  },
  {
    id: "r2",
    name: "Yeray",
    source: "Booksy",
    rating: 5,
    date: "Ene 2026",
    text: "Como peluquero es muy profesional, no se limita solo a cortar el pelo, sino que cuida cada detalle y es muy meticuloso. Como persona, además, es muy agradable, y el tiempo que duró el corte de pelo se me pasó volando. Muy recomendable, repetiré sin duda.",
    service: "Corte de cabello",
  },
  {
    id: "r3",
    name: "Francisco",
    source: "Booksy",
    rating: 5,
    date: "Ene 2026",
    text: "Es un gran profesional, da mucha tranquilidad ponerse en manos de alguien que realmente sabe lo que hace, el resultado siempre supera las expectativas.",
    service: "Corte de cabello",
  },
  {
    id: "r4",
    name: "Manu",
    source: "Booksy",
    rating: 5,
    date: "Ene 2026",
    text: "Ha sido la primera vez y he salido encantado. Juan Carlos es un gran profesional, el corte genial y me aconsejó sobre mi peinado. Repetiré.",
  },
];

function FadeUp({
  children,
  delay = 0,
  amount = 0.25,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Stars({ rating = 5 }: { rating?: number }) {
  const r = Math.max(0, Math.min(5, rating));
  return (
    <div className="flex items-center gap-1" aria-label={`${r} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < r ? "text-black/80" : "text-black/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

function SourcePill({ s }: { s: ReviewSource }) {
  return (
    <span className="rounded-full border border-black/15 bg-white/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70">
      {s}
    </span>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/35 p-7 backdrop-blur shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
            {r.name}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <SourcePill s={r.source} />
            {typeof r.rating === "number" ? (
              <span className="rounded-full border border-black/15 bg-white/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/60">
                <Stars rating={r.rating} />
              </span>
            ) : null}
            {r.service ? (
              <span className="rounded-full border border-black/15 bg-white/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/60">
                {r.service}
              </span>
            ) : null}
          </div>
        </div>

        {r.date ? (
          <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
            {r.date}
          </p>
        ) : null}
      </div>

      <p className="mt-5 text-[12px] leading-6 tracking-[0.06em] text-black/65">
        “{r.text}”
      </p>

      {r.url ? (
        <a
          href={r.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55 hover:text-black"
        >
          Ver original →
        </a>
      ) : null}
    </div>
  );
}

export default function ReviewsSection() {
  const [source, setSource] = useState<ReviewSource | "ALL">("ALL");
  const [expanded, setExpanded] = useState(false);

  const sources = useMemo(() => {
    const set = new Set<ReviewSource>();
    REVIEWS.forEach((r) => set.add(r.source));
    return ["ALL" as const, ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const list = source === "ALL" ? REVIEWS : REVIEWS.filter((r) => r.source === source);
    return list;
  }, [source]);

  const shown = useMemo(() => {
    if (expanded) return filtered;
    return filtered.slice(0, 6);
  }, [filtered, expanded]);

  return (
    <section id="reviews" className="relative overflow-hidden bg-[#ece8de] text-black">
      {/* detalle de fondo sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
                Reseñas
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[56px] lg:text-[72px]">
                Lo que dice la gente
              </h2>
            </FadeUp>
          </div>

          
        </div>

        {/* Controls */}
        <FadeUp delay={0.12}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {sources.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSource(s)}
                  className={[
                    "rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition",
                    source === s
                      ? "border-black/35 bg-black/5"
                      : "border-black/15 bg-white/40 hover:border-black/25",
                  ].join(" ")}
                >
                  {s === "ALL" ? "Todas" : s}
                </button>
              ))}
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/50">
              {filtered.length} reseñas
            </p>
          </div>
        </FadeUp>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r, i) => (
            <FadeUp key={r.id} delay={i * 0.03} amount={0.15}>
              <ReviewCard r={r} />
            </FadeUp>
          ))}
        </div>

        {/* Expand */}
        {filtered.length > 6 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/25 bg-black/5 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-black hover:bg-black/10 transition"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}