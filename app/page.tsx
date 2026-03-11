"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import TeamSpotlight from "./TeamSpotlight";
import ServicesSection from "./services_section";
import GallerySection from "./GallerySection";
import ReviewsSection from "./reseñas";


// external booking link used in header/footer; reused here for mobile CTA
const BOOKSY_URL =
  "https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga?do=invite&_branch_match_id=1556921415801310876&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVj8jyCMxMT%2FbJi0yyrytKTUstKsrMS49PKsovL04tsnVNSU8FAOg7uKI6AAAA";

type HeroSplitProps = {
  leftImageSrc: string;
  rightCardImageSrc: string;
};

// panel that appears to the right of the hero on desktop, duplicated below services on mobile
function RightPanel({ className }: { className?: string }) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.9 }}
      className={`relative bg-[#ece8de] lg:min-h-[100svh] ${className ?? ""}`}
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
        </div>
      </div>

      {/* MARQUEE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="marquee">
          <div className="marquee-track">
            <div className="flex">
              <span className="whitespace-nowrap px-6 text-[44px] font-semibold uppercase tracking-[0.12em] text-black/90 sm:text-[56px] lg:text-[64px]">
                ¿Estás listo para ver tu mejor versión? &nbsp; ¿Estás listo para ver tu mejor versión? &nbsp;
               ¿Estás listo para ver tu mejor versión? &nbsp; ¿Estás listo para ver tu mejor versión? &nbsp;
              </span>
            </div>
            <div className="flex" aria-hidden="true">
              <span className="whitespace-nowrap px-6 text-[44px] font-semibold uppercase tracking-[0.12em] text-black/90 sm:text-[56px] lg:text-[64px]">
                ¿Estás listo para ver tu mejor versión? &nbsp; ¿Estás listo para ver tu mejor versión? &nbsp;
                ¿Estás listo para ver tu mejor versión? &nbsp; ¿Estás listo para ver tu mejor versión? &nbsp;
                ¿Estás listo para ver tu mejor versión? &nbsp; ¿Estás listo para ver tu mejor versión? &nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

function HeroSplit({
  leftImageSrc,
  rightCardImageSrc,
}: HeroSplitProps) {
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
          animation: marquee-left 32s linear infinite;
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
            src={"/images/page.jpeg"}
            alt="Interior de la barbería El Barbero Profesional en Málaga"
            fill
            priority
            className="object-cover scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/65 to-transparent" />

          <div className="absolute left-6 bottom-8 right-6 lg:left-10 lg:bottom-12 lg:right-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85"
            >
              Servicios personalizado.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-3 max-w-[18ch] text-white"
            >
              <span className="block text-[44px] leading-[0.95] tracking-tight sm:text-[64px] lg:text-[86px] xl:text-[96px]">
                Servicio personalizado para el cuidado masculino
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* RIGHT PANEL (desktop only) */}
        <RightPanel className="hidden md:block" />
      </div>
    </section>
  );
}

// HomePage: composes hero + all page sections

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Barbería en Málaga – servicios de corte, afeitado y estilo de alta calidad con reservas online.",
  keywords: [
    "inicio barbería Málaga",
    "barbero profesional Málaga",
    "corte de pelo masculino Málaga",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSplit
        leftImageSrc="https://images.unsplash.com/photo-1769082863369-227f68991d07?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        rightCardImageSrc="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      {/* mobile-only booking CTA */}
      <div className="mt-6 mb-6 flex justify-center md:hidden">
        <a
          href={BOOKSY_URL}
          className="inline-flex h-12 items-center justify-center rounded-full border border-black/35 bg-black/80 px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-black/90 transition"
        >
          Reservar ahora
        </a>
      </div>
      {/* container used to reorder on mobile */}
      <div className="flex flex-col">
        <div className="order-2 md:order-1">
          <TeamSpotlight name="Juan Carlos" imageSrc="/team/don.jpg" />
        </div>
        <div className="order-1 md:order-2">
          <ServicesSection />
        </div>
        <div className="order-3">
          <RightPanel className="block md:hidden" />
        </div>
      </div>
      <GallerySection />
      <ReviewsSection />
    </>
  );
}
