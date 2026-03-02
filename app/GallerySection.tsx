"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Photo = {
  src: string;
  alt: string;
  label?: string;
};

const PHOTOS: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80",
    alt: "Barber cutting hair",
    label: "HAIRCUT",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=2000&q=80",
    alt: "Beard grooming",
    label: "BEARD",
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=2000&q=80",
    alt: "Tools on the station",
    label: "DETAILS",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2000&q=80",
    alt: "Shop interior",
    label: "ATMOSPHERE",
  },
  {
    src: "https://images.unsplash.com/photo-1520975869018-0c8f6b5e7c84?auto=format&fit=crop&w=2000&q=80",
    alt: "Haircut close-up",
    label: "FINISH",
  },
  {
    src: "https://images.unsplash.com/photo-1520975958225-9c5c8c814d3b?auto=format&fit=crop&w=2000&q=80",
    alt: "Barber chair",
    label: "SPACE",
  },
  {
    src: "https://images.unsplash.com/photo-1536520002442-39764a41e987?auto=format&fit=crop&w=2000&q=80",
    alt: "Beard trim detail",
    label: "LINES",
  },
  {
    src: "https://images.unsplash.com/photo-1520975682030-4f9a39d14f0c?auto=format&fit=crop&w=2000&q=80",
    alt: "Scissors and comb",
    label: "CRAFT",
  },
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

export default function GallerySection() {
  const photos = useMemo(() => PHOTOS, []);
  const [active, setActive] = useState(0);

  const bookUrl =
    "https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga?do=invite&_branch_match_id=1556921415801310876&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVj8jyCMxMT%2FbJi0yyrytKTUstKsrMS49PKsovL04tsnVNSU8FAOg7uKI6AAAA";

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#0f1112] text-white">
      {/* fondo sutil: viñeta */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(255,255,255,0)_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
        {/* Split top */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* LEFT: editorial copy */}
          <div>
            <FadeUp delay={0}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Gallery
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[56px] lg:text-[72px]">
                Crafted.
                <br />
                Clean.
                <br />
                Detailed.
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-5 max-w-[60ch] text-[12px] leading-6 tracking-[0.06em] text-white/60">
                Una galería curada: el trabajo real, los acabados y el ambiente. Selecciona una foto y
                recorre el detalle como si estuvieras dentro.
              </p>
            </FadeUp>

            <FadeUp delay={0.14}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={bookUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/15 transition"
                >
                  Book now
                </a>
                <a
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-transparent px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 hover:text-white hover:border-white/25 transition"
                >
                  View services
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  Selected
                </p>
                <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
                  {photos[active].label ?? "FEATURE"}
                </p>
                <p className="mt-2 text-[12px] leading-6 tracking-[0.06em] text-white/60">
                  {photos[active].alt}
                </p>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  {String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </p>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: big image */}
          <FadeUp delay={0.08} amount={0.25}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative h-[440px] w-full sm:h-[520px] lg:h-[620px]">
                <Image
                  key={photos[active].src}
                  src={photos[active].src}
                  alt={photos[active].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* top-right label */}
                <div className="absolute right-5 top-5">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                    {photos[active].label ?? "PHOTO"}
                  </span>
                </div>

                {/* bottom caption */}
                <div className="absolute left-6 bottom-6 right-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
                    {photos[active].alt}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Filmstrip */}
        <FadeUp delay={0.12} amount={0.25}>
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Filmstrip
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                Click to change
              </p>
            </div>

            <div className="mt-4 relative">
              {/* fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0f1112] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0f1112] to-transparent" />

              <div className="flex gap-4 overflow-x-auto pb-2 pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {photos.map((p, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={p.src}
                      type="button"
                      onClick={() => setActive(idx)}
                      className={[
                        "group relative shrink-0 overflow-hidden rounded-2xl border transition",
                        isActive ? "border-white/45" : "border-white/10 hover:border-white/30",
                      ].join(" ")}
                      aria-label={`Select ${p.alt}`}
                    >
                      <div className="relative h-[110px] w-[160px] sm:h-[120px] sm:w-[190px]">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          className={[
                            "object-cover transition duration-500",
                            isActive ? "scale-[1.03]" : "group-hover:scale-[1.04]",
                          ].join(" ")}
                          sizes="190px"
                        />
                        <div
                          className={[
                            "absolute inset-0 transition",
                            isActive ? "bg-black/15" : "bg-black/0 group-hover:bg-black/10",
                          ].join(" ")}
                        />
                      </div>

                      <div className="px-3 py-3 text-left">
                        <p className="truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                          {p.label ?? "PHOTO"}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}