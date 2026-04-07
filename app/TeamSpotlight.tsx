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
  kicker = "Conoce un poco más",
  title = "Conoce un poco más sobre mí",
  blurb = "Soy Juan Carlos Teran Tenorio, barbero profesional y fundador de alpha mens salon.\nComencé en Cali, Colombia, a los 18 años, aprendiendo de forma autodidacta y perfeccionando cada técnica con disciplina y obsesión por el detalle. Con el tiempo, mi camino me llevó a Chile, donde me formé con algunos de los mejores profesionales del país, elevando mi nivel técnico y visión del oficio.\nEn 2019 viajé a Málaga, España, para entrenar en la prestigiosa academia Antonio Eloy, donde tuve la oportunidad de aprender de referentes como Fran Aranda e Ismael de Mora. Fue ahí donde desarrollé una visión más vanguardista del cuidado masculino, entendiendo que un buen corte va mucho más allá de lo estético: es identidad, presencia y seguridad.\nDe esa experiencia nace alpha mens salon.\nUn concepto que llevé a Chile y que hoy sigue funcionando bajo los estándares de calidad, profesionalismo y atención al detalle que definí desde el primer día.\nHoy, como barbero en Málaga, inicio una nueva etapa con el objetivo de posicionar un concepto diferente dentro del mundo de la barbería en Málaga, elevando el estándar del servicio y ofreciendo una experiencia completamente enfocada en el cuidado masculino.\nEl concepto de alpha mens salon no es una barbería.\nEs más que una barbería.\nEs un concepto que estoy empezando a dar a conocer en esta hermosa ciudad de Málaga.\nEs un espacio donde el hombre aprende a cuidarse, a entender su imagen y a proyectar su mejor versión.\nMi enfoque se basa en combinar técnicas racionalizadas con los conocimientos tradicionales del corte de cabello en tendencia en Málaga, adaptando cada estilo a la identidad de cada persona y dando especial importancia al cuidado capilar, de la piel y del rostro.\nHoy vuelvo a Málaga para comenzar desde cero, con un objetivo claro: construir la barbería masculina más prestigiosa de Europa.\nPorque para mí, esto nunca ha sido solo un corte de cabello.\nEs una experiencia completa de transformación y cuidado masculino.\nY si hay algo que ha sido clave en todo este camino, es mi madre, Digna Nubia Tenorio Ortiz.\nElla fue quien me regaló mi primera máquina de cortar cabello y quien creyó en mí desde el inicio.\nGracias a ella, todo comenzó.",
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