"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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
  kicker = "CUIDADO & BIENESTAR",
  title = "LA FAMILIA",
  blurb = "Juan Carlos Teran Tenorio – Fundador de Alpha. Barbero desde los 18 años, comencé mi camino en Cali, Colombia, aprendiendo de manera autodidacta y perfeccionando cada técnica. Mi pasión me llevó a Chile, donde me formé con los mejores profesionales del país, y en 2019 viajé a Málaga, España, para entrenar en la prestigiosa escuela Antonio Eloy, aprendiendo de Fran Aranda e Ismael de Mora, quienes me brindaron una mirada vanguardista sobre el cuidado y estilo masculino. De esta experiencia nace Alpha, un concepto que se materializó en Chile y que sigue funcionando bajo los estándares de calidad y profesionalismo que definí desde el inicio. Más que una barbería, Alpha es un espacio donde el cuidado, la imagen y el estilo del hombre son la prioridad.Hoy regreso a Málaga con la misma pasión, iniciando desde cero, con el objetivo de crear la mejor barbería, más allá de un corte: una experiencia completa de cuidado masculino. Mi historia no estaría completa sin mi madre, Digna Nubia Tenorio Ortiz, quien me regaló mi primera máquina de cortar cabello y me apoyó en cada paso de mi camino profesional. Gracias, madre.",
  name,
  role = "PROPIETARIO - BARBERO MAESTRO",
  cta = "RESERVAR AHORA",
  imageSrc,
}: TeamSpotlightProps) {
  return (
    <section id="team" className="relative overflow-hidden bg-[#7f949b] text-black">
      <div className="mx-auto min-h-[100svh] max-w-6xl px-6 py-16 lg:py-20">
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
            className="pointer-events-none absolute left-1/2 top-0 w-[320px] -translate-x-1/2 text-center sm:w-[480px] lg:w-[1200px]"
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
            className="relative mt-32 w-[260px] sm:w-[280px] lg:mt-56 lg:w-[300px]"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            custom={4}
          >
            <div className="relative aspect-[3/4.6] w-full shadow-[0_24px_55px_rgba(0,0,0,0.18)]">
              <Image
                src={"/images/JuanCarlos1.jpeg"}
                alt={name}
                fill
                className="object-cover"
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
            href="https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga?do=invite&_branch_match_id=1556921415801310876&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVj8jyCMxMT%2FbJi0yyrytKTUstKsrMS49PKsovL04tsnVNSU8FAOg7uKI6AAAA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 inline-flex h-12 items-center justify-center rounded-full border border-black/45 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/85 hover:bg-black/5"
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