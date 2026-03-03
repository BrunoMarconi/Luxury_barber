"use client";

import Image from "next/image";
import { useMemo } from "react";

type Photo = {
  src: string;
  alt: string;
  size?: "tall" | "wide" | "square";
};

const PHOTOS: Photo[] = [
  {
    src: "/images/Foto1_1.jpeg",
    alt: "Barber cutting hair",
    size: "tall",
  },
  {
    src: "/images/Foto2.jpeg",
    alt: "Beard grooming",
    size: "square",
  },
  {
    src: "/images/Foto3.jpeg",
    alt: "Shop interior",
    size: "wide",
  },
  {
    src: "/images/Foto4.jpeg",
    alt: "Haircut close-up",
    size: "tall",
  },
  {
    src: "/images/Foto5.jpeg",
    alt: "Tools on the station",
    size: "square",
  },
  {
    src: "/images/Foto6.jpeg",
    alt: "Barber chair",
    size: "wide",
  },
  {
    src: "/images/Foto7.jpeg",
    alt: "Beard trim detail",
    size: "tall",
  },
  {
    src: "/images/Foto8.jpeg",
    alt: "Scissors and comb",
    size: "square",
  },
];

function sizeClasses(size: Photo["size"]) {
  switch (size) {
    case "wide":
      return "w-[520px] h-[320px] sm:w-[620px] sm:h-[360px]";
    case "square":
      return "w-[360px] h-[360px] sm:w-[420px] sm:h-[420px]";
    case "tall":
    default:
      return "w-[340px] h-[460px] sm:w-[380px] sm:h-[540px]";
  }
}

function Tile({ p, idx, total }: { p: Photo; idx: number; total: number }) {
  return (
    <figure
      className={[
        "group relative shrink-0 overflow-hidden rounded-3xl border border-black/10 bg-white/40",
        "shadow-[0_18px_45px_rgba(0,0,0,0.10)]",
        sizeClasses(p.size),
      ].join(" ")}
    >
      <div className="relative h-full w-full">
        <Image
          src={p.src}
          alt={p.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 90vw, 520px"
        />

        {/* caption hover */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="bg-gradient-to-t from-black/60 to-transparent px-5 pb-5 pt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
              {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              {p.alt}
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function GalleryScrollRail() {
  const photos = useMemo(() => PHOTOS, []);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#7A7676] text-black">
      {/* CSS marquee (loop infinito real) */}
      <style>{`
        .rail-wrap { overflow: hidden; }
        .rail-track {
          display: flex;
          width: max-content;
          gap: 40px;
          will-change: transform;
          animation: rail-left 32s linear infinite;
        }
        /* pausa al hover */
        .rail-wrap:hover .rail-track { animation-play-state: paused; }

        @keyframes rail-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .rail-track { animation: none !important; transform: translateX(0) !important; }
        }
      `}</style>

      {/* Fondo suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0)_55%)] opacity-[0.25]" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
              Gallery
            </p>
            <h2 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[56px] lg:text-[72px]">
              Moments & Detail
            </h2>
          </div>

          <div className="lg:pl-6">
            <p className="max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-black/65">
              El rail se mueve todo el rato hacia la izquierda. Si pasas el ratón, se pausa.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-[2px] w-52 rounded-full bg-black/15" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
                Continuous
              </p>
            </div>
          </div>
        </div>

        {/* Rail */}
        <div className="rail-wrap mt-12 relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#7A7676] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#7A7676] to-transparent" />

          <div className="rail-track py-6">
            {/* Bloque 1 */}
            {photos.map((p, idx) => (
              <Tile key={`a-${p.src}`} p={p} idx={idx} total={photos.length} />
            ))}
            {/* Bloque 2 duplicado para loop perfecto */}
            {photos.map((p, idx) => (
              <Tile key={`b-${p.src}`} p={p} idx={idx} total={photos.length} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
            Curated selection — no noise.
          </p>
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/25 bg-black/5 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-black hover:bg-black/10 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}