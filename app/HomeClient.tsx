"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TeamSpotlight from "./TeamSpotlight";
import GallerySection from "./GallerySection";
import ReviewsSection from "./reseñas";

// external booking link used in header/footer; reused here for mobile CTA
const BOOKSY_URL =
  "https://wa.me/34672516317";

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
            src={'/images/page.jpeg'}
            alt="Interior de la barbería El Barbero Profesional en Marbella"
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
              Barbero profesional en Marbella
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-3 max-w-[18ch] text-white"
            >
              <span className="block text-[44px] leading-[0.95] tracking-tight sm:text-[64px] lg:text-[86px] xl:text-[96px]">
                Barbería en Marbella especializada en corte masculino personalizado
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


export default function HomePage({ gallery }: { gallery?: GalleryPhoto[] }) {
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

      {/* Strategic Text Section */}
      <section className="py-20 bg-[#ece8de] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[32px] font-semibold uppercase tracking-[0.08em] text-black mb-8"
          >
            Barbería en Marbella: Tu Destino para el Mejor Corte de Pelo Hombre
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[16px] font-medium text-black/85 mb-6 leading-relaxed"
          >
            En nuestra barbería en Marbella, nos especializamos en cortes de pelo hombre personalizados que realzan tu estilo único. Como barbero profesional en Marbella, ofrezco servicios de alta calidad con atención al detalle, utilizando técnicas tradicionales y modernas para lograr resultados excepcionales.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[16px] font-medium text-black/85 leading-relaxed"
          >
            Descubre por qué somos la referencia en corte de pelo hombre en Marbella. Reserva tu cita hoy y experimenta la diferencia de un servicio premium.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              href="/corte-de-pelo-hombre-marbella"
              className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
            >
              Ver servicio de corte →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* mobile-only booking CTA */}
      <div className="mt-6 mb-6 flex justify-center md:hidden">
        <a
          href={BOOKSY_URL}
          className="btn-reserva text-white bg-[#f8aa00] hover:bg-[#e69300] border-transparent"
        >
          Reserva tu cita ahora
        </a>
      </div>

      {/* container used to reorder on mobile: services first, then team, then product promo */}
      <div className="flex flex-col">
        <div className="order-2 md:order-1">
          <TeamSpotlight name="Juan Carlos" imageSrc="/team/don.jpg" />
        </div>

        {/* Authority Block */}
        <section className="relative overflow-hidden bg-[#0f1112] py-24 lg:py-32">
          {/* subtle gold glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f8aa00]/40 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 bottom-0 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f8aa00]/40 to-transparent" />

          <div className="mx-auto max-w-6xl px-6">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f8aa00]"
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
                <span className="mb-4 text-[80px] font-bold leading-none tracking-tighter text-[#f8aa00] sm:text-[100px]">
                  10+
                </span>
                <h3 className="mb-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white">
                  Años de experiencia
                </h3>
                <p className="max-w-[22ch] text-[13px] leading-6 text-white/50">
                  Más de una década perfeccionando el arte del corte masculino. Cada detalle cuenta.
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
                  <span className="text-[60px] leading-none sm:text-[72px]">🌍</span>
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
                  <span className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#f8aa00]/40 bg-[#f8aa00]/10 sm:h-[88px] sm:w-[88px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8aa00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 sm:h-10 sm:w-10">
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
              className="mt-16 flex justify-center"
            >
              <a
                href={BOOKSY_URL}
                className="inline-flex items-center justify-center rounded-full border border-[#f8aa00] bg-transparent px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#f8aa00] transition-all duration-300 hover:bg-[#f8aa00] hover:text-black"
              >
                Reserva tu cita ahora
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f8aa00] text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[32px] font-semibold uppercase tracking-[0.08em] text-white mb-6"
            >
              ¿Listo para tu transformación en Marbella?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] font-medium text-white/90 mb-10 leading-relaxed"
            >
              Agenda tu cita ahora y descubre el mejor servicio de barbería en Marbella.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a
                href={BOOKSY_URL}
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-black px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-gray-900 hover:-translate-y-0.5"
              >
                Reserva tu cita ahora
              </a>
              <a
                href={BOOKSY_URL}
                className="inline-flex items-center justify-center rounded-full border border-black bg-white px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.15em] text-black shadow-lg shadow-black/20 transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5"
              >
                Agenda por WhatsApp
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
      <ReviewsSection />
    </>
  );
}
