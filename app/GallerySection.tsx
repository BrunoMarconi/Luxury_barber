"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

type Photo = {
  src: string;
  alt: string;
  size?: "tall" | "wide" | "square";
};

const PHOTOS: Photo[] = [
  { src: "/images/Foto1_1.jpeg", alt: "Barbero cortando cabello", size: "tall" },
  { src: "/images/Foto2.jpeg", alt: "Arreglo de barba", size: "square" },
  { src: "/images/Foto3.jpeg", alt: "Interior de la tienda", size: "wide" },
  { src: "/images/Foto4.jpeg", alt: "Detalle de corte de cabello", size: "tall" },
  { src: "/images/Foto5.jpeg", alt: "Herramientas en la estación", size: "square" },
  { src: "/images/Foto6.jpeg", alt: "Silla de barbero", size: "wide" },
  { src: "/images/Foto7.jpeg", alt: "Detalle de recorte de barba", size: "tall" },
  { src: "/images/Foto8.jpeg", alt: "Tijeras y peine", size: "square" },
];

function FadeUp({
  children,
  delay = 0,
  amount = 0.35,
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
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

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
    <motion.figure
      initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: idx * 0.03, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className={[
        "group relative shrink-0 overflow-hidden rounded-3xl border border-black/10 bg-white/35",
        "shadow-[0_18px_45px_rgba(0,0,0,0.12)]",
        "transition-shadow duration-300",
        sizeClasses(p.size),
      ].join(" ")}
    >
      <div className="relative h-full w-full">
        <Image
          src={p.src}
          alt={p.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 90vw, 520px"
        />

        {/* overlay súper fino para “look premium” */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-black/10" />
        </div>

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
    </motion.figure>
  );
}

export default function GalleryScrollRail() {
  const photos = useMemo(() => PHOTOS, []);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#7A7676] text-black">
      {/* CSS marquee + mask edges */}
      <style>{`
        .rail-wrap { overflow: hidden; }
        .rail-track {
          display: flex;
          width: max-content;
          gap: 40px;
          will-change: transform;
          animation: rail-left 32s linear infinite;
        }
        .rail-wrap:hover .rail-track { animation-play-state: paused; }

        @keyframes rail-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .rail-track { animation: none !important; transform: translateX(0) !important; }
        }

        /* mask para bordes (más elegante que los gradients) */
        .rail-mask {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>

      {/* Fondo suave (sin cambiar color base) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.10),rgba(0,0,0,0)_60%)] opacity-[0.25]" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-black/10 blur-3xl" />
        <div className="absolute -bottom-52 left-20 h-[520px] w-[520px] rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <FadeUp delay={0}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                Galería
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[56px] lg:text-[72px]">
                Momentos y detalles
              </h2>
            </FadeUp>
          </div>

          <div className="lg:pl-6">
            <FadeUp delay={0.08}>
              <p className="max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-white/85">
                El rail se mueve todo el rato hacia la izquierda. Si pasas el ratón, se pausa.
              </p>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-[2px] w-52 overflow-hidden rounded-full bg-black/15">
                  <motion.div
                    className="h-full w-full bg-black/60"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                    style={{ transformOrigin: "0% 50%" }}
                  />
                </div>

                <span className="rounded-full border border-black/20 bg-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70">
                  Continuo
                </span>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Rail */}
        <FadeUp delay={0.08} amount={0.2} className="mt-12">
          <div className="rail-wrap rail-mask relative">
            <div className="rail-track py-6">
              {/* Bloque 1 */}
              {photos.map((p, idx) => (
                <Tile key={`a-${p.src}`} p={p} idx={idx} total={photos.length} />
              ))}
              {/* Bloque 2 duplicado */}
              {photos.map((p, idx) => (
                <Tile key={`b-${p.src}`} p={p} idx={idx} total={photos.length} />
              ))}
            </div>
          </div>
        </FadeUp>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <FadeUp delay={0.05} amount={0.35}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
              Selección curada — sin ruido.
            </p>
          </FadeUp>

          <FadeUp delay={0.12} amount={0.35}>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/25 bg-black/5 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-black hover:bg-black/10 transition"
            >
              Contacto
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}