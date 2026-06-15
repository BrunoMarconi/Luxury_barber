"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { buildWaUrl } from "@/lib/cta";

type TeamSpotlightProps = {
  kicker?: string;
  title?: string;
  blurb?: string;
  name: string;
  role?: string;
  cta?: string;
  imageSrc: string;
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1] as any, // <- fix TS
      delay: i * 0.08,
    },
  }),
};

export default function TeamSpotlight({
  kicker = "Conoce un poco más",
  title = "Conoce un poco más sobre mí",
  blurb = "Más de 20 años perfeccionando el corte masculino en Colombia, Chile y España. Formado en la academia Antonio Eloy de Málaga, con una visión del cuidado masculino que va más allá de lo estético: es identidad, presencia y criterio.\n\nHoy en Marbella, con un objetivo claro: ofrecer la experiencia de barbería masculina más precisa y personalizada de la Costa del Sol.",
  name,
  role = "PROPIETARIO - BARBERO MAESTRO",
  cta = "RESERVAR AHORA",
  imageSrc,
}: TeamSpotlightProps) {
  return (
    <section id="team" className="relative overflow-hidden bg-[#0A0A0A] text-white">
      <div className="mx-auto min-h-svh max-w-6xl px-6 py-16 lg:py-20">
        {/* TOP MICROCOPY */}
        <div className="mx-auto max-w-xl text-center">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
          >
            {kicker}
          </motion.p>

          <motion.h2
            className="mt-3 text-[16px] font-semibold uppercase tracking-[0.22em] text-white sm:text-[20px] lg:text-[28px]"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
          >
            {title}
          </motion.h2>

          <motion.p
            className="mt-3 text-[10px] leading-5 tracking-[0.08em] text-white"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={2}
          >
            {blurb}
          </motion.p>
        </div>

        {/* MAIN STACK */}
        <div className="relative mt-12 flex flex-col items-center">
          {/* BIG NAME BEHIND */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-0 w-[320px] -translate-x-1/2 text-center sm:w-120 lg:w-300"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={3}
          >
            <div className="select-none text-[36px] font-semibold uppercase leading-[0.9] tracking-[-0.02em] text-white sm:text-[60px] lg:text-[132px]">
              {name.split(" ").slice(0, 1).join(" ")}
              <br />
              {name.split(" ").slice(1).join(" ")}
            </div>
          </motion.div>

          {/* PHOTO */}
          <motion.div
            className="relative mt-32 w-65 sm:w-70 lg:mt-56 lg:w-75"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            custom={4}
          >
            <div className="relative aspect-4/3 w-full shadow-[0_24px_55px_rgba(0,0,0,0.18)]">
              <Image
                src={"/images/equipo_juancarlos.jpeg"}
                alt={name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 260px, 300px"
              />
            </div>

            <motion.p
              className="mt-6 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={5}
            >
              {role}
            </motion.p>
          </motion.div>

          {/* CTA BUTTON */}
          <motion.a
            href={buildWaUrl("team")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-asesoria"
            data-page="team"
            className="btn-reserva mt-16 text-[11px] uppercase tracking-[0.22em]"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={6}
          >
            {cta}
          </motion.a>
        </div>
      </div>
    </section>
  );
}