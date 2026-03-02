"use client";

import Image from "next/image";
import TeamSpotlight from "./TeamSpotlight";
import ServicesSection from "./services_section";
import GallerySection from "./GallerySection";

type HeroSplitProps = {
  leftImageSrc: string;
  rightCardImageSrc: string;
};

function HeroSplit({
  leftImageSrc,
  rightCardImageSrc,
}: HeroSplitProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* CSS REAL (funciona sí o sí) */}
      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-left 16s linear infinite;
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
        <div className="relative min-h-[70svh] lg:min-h-[100svh]">
          <Image
            src={"https://images.unsplash.com/photo-1769082863369-227f68991d07?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="Barbershop interior"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/55 to-transparent" />

          <div className="absolute left-6 bottom-8 right-6 lg:left-10 lg:bottom-12 lg:right-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85">
              Tailor made services
            </p>

            <h1 className="mt-3 max-w-[18ch] text-white">
              <span className="block text-[44px] leading-[0.95] tracking-tight sm:text-[64px] lg:text-[86px] xl:text-[96px]">
                BARBERING
              </span>
              <span className="block text-[44px] leading-[0.95] tracking-tight sm:text-[64px] lg:text-[86px] xl:text-[96px]">
                DETAILED PRICELIST
              </span>
              <span className="block text-[44px] leading-[0.95] tracking-tight sm:text-[64px] lg:text-[86px] xl:text-[96px]">
                GROOMING &amp; WELLNESS
              </span>
              <span className="block text-[44px] leading-[0.95] tracking-tight sm:text-[64px] lg:text-[86px] xl:text-[96px]">
                MANICURE &amp; PEDICURE
              </span>
            </h1>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="relative bg-[#ece8de] lg:min-h-[100svh]">
          <div className="mx-auto flex h-full max-w-md flex-col px-6 pt-24 pb-24 lg:pt-28">
            <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-black">
                Don Humanhood <br /> Products for men
              </p>

              <div className="mt-6 w-[220px] sm:w-[260px] lg:w-[280px]">
                <div className="relative aspect-[3/4] w-full shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <Image
                    src={"https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt="Product promo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 280px"
                  />
                </div>
              </div>

              <a
                href="#learn-more"
                className="mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-black/85 hover:text-black"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* ✅ MARQUEE (SE MUEVE) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0">
            <div className="marquee">
              <div className="marquee-track">
                {/* bloque 1 */}
                <div className="flex">
                  <span className="whitespace-nowrap px-6 text-[44px] font-semibold uppercase tracking-[0.12em] text-black/90 sm:text-[56px] lg:text-[64px]">
                    WELCOME TO DON&apos;S WORLD &nbsp; WELCOME TO DON&apos;S WORLD
                    &nbsp; WELCOME TO DON&apos;S WORLD &nbsp; WELCOME TO DON&apos;S WORLD &nbsp;
                  </span>
                </div>

                {/* bloque 2 duplicado */}
                <div className="flex" aria-hidden="true">
                  <span className="whitespace-nowrap px-6 text-[44px] font-semibold uppercase tracking-[0.12em] text-black/90 sm:text-[56px] lg:text-[64px]">
                    WELCOME TO DON&apos;S WORLD &nbsp; WELCOME TO DON&apos;S WORLD
                    &nbsp; WELCOME TO DON&apos;S WORLD &nbsp; WELCOME TO DON&apos;S WORLD &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
// page component composed of hero and sections on home path
export default function HomePage() {
  return (
    <>
      <HeroSplit
        leftImageSrc="https://images.unsplash.com/photo-1769082863369-227f68991d07?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        rightCardImageSrc="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TeamSpotlight name="Juan Carlos" imageSrc="/team/don.jpg" />
      <ServicesSection />
      <GallerySection />
      {/* ContactSection now lives on its own page */}
    </>
  );
}
