"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BOOKSY_URL =
  "https://wa.me/34672516317";

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

const REVIEWS = [
  {
    id: "r1",
    name: "Alex",
    rating: 5,
    date: "Ene 2026",
    text: "Excelente servicio y gran profesionalidad, me hizo el corte a tijera como quería. No había encontrado aún quien me hiciera el corte como pedía. Volveré sin duda.",
  },
  {
    id: "r2",
    name: "Yeray",
    rating: 5,
    date: "Ene 2026",
    text: "Como peluquero es muy profesional, no se limita solo a cortar el pelo, sino que cuida cada detalle y es muy meticuloso. Como persona, además, es muy agradable. Muy recomendable, repetiré sin duda.",
  },
  {
    id: "r3",
    name: "Francisco",
    rating: 5,
    date: "Ene 2026",
    text: "Es un gran profesional, da mucha tranquilidad ponerse en manos de alguien que realmente sabe lo que hace, el resultado siempre supera las expectativas.",
  },
  {
    id: "r4",
    name: "Manu",
    rating: 5,
    date: "Ene 2026",
    text: "Ha sido la primera vez y he salido encantado. Juan Carlos es un gran profesional, el corte genial y me aconsejó sobre mi peinado. Repetiré.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-[#f8aa00] tracking-tight text-sm">
      {"★".repeat(n)}
    </span>
  );
}

export default function CorteClient() {
  return (
    <main className="min-h-screen bg-[#ece8de] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/Foto1_1.jpeg"
          alt="corte de pelo hombre Marbella"
          fill
          priority
          className="object-cover scale-[1.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />

        <div className="relative mx-auto flex h-full min-h-[92svh] max-w-6xl flex-col justify-end px-6 pb-16 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75"
          >
            Barbería premium · Marbella
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="mt-4 max-w-[18ch] text-[40px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[58px] lg:text-[76px]"
          >
            Corte de pelo hombre en Marbella con asesoría personalizada premium
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-6 max-w-[52ch] text-[13px] leading-6 tracking-[0.06em] text-white/70"
          >
            Nada es al azar. Cada paso del proceso tiene un porqué.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="btn-reserva px-8 py-4 text-[11px]">
              Reserva tu cita ahora
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── EXPLICACIÓN DEL SERVICIO ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                El servicio
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Un corte diseñado para ti, no para todos
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                En Marbella hay muchas barberías. Pero no todas entienden que un corte de pelo hombre no empieza con las tijeras — empieza con una conversación. Analizamos tu tipo de cabello, tu morfología facial y tu estilo de vida antes de tomar ninguna decisión. El resultado: un corte que se ve bien el día uno y sigue viéndose bien semanas después.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Nada es al azar. Cada paso del proceso tiene un porqué.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/Foto4_1.jpeg"
              alt="corte de pelo hombre Marbella personalizado"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── DIAGNÓSTICO ── */}
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f8aa00]/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeUp delay={0.05} className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/Visagismo.jpeg"
                alt="diagnóstico facial y capilar Marbella"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeUp>

            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
                  Diagnóstico personalizado
                </p>
              </FadeUp>
              <FadeUp delay={0.06}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
                  Análisis capilar y facial antes del corte
                </h2>
              </FadeUp>
              <FadeUp delay={0.12}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Antes de cortar, evaluamos tu morfología facial para determinar qué estilo potencia más tu imagen. Analizamos también el estado de tu cuero cabelludo y el patrón de crecimiento de tu cabello. Con esa información, tomamos decisiones técnicas — no decisiones de moda.
                </p>
              </FadeUp>

              <FadeUp delay={0.18}>
                <ul className="mt-8 space-y-4">
                  {[
                    "Análisis de morfología facial (visagismo)",
                    "Diagnóstico del tipo y densidad capilar",
                    "Asesoría sobre el estilo más adecuado para ti",
                    "Recomendaciones de mantenimiento en casa",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/70">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f8aa00]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#f8aa00] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f8aa00] transition hover:bg-[#f8aa00] hover:text-black"
                >
                  Reservar por WhatsApp
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESO PASO A PASO ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            El proceso
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 max-w-[20ch] text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
            Cada detalle tiene un porqué
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden">
          {[
            { num: "01", title: "Diagnóstico", desc: "Análisis facial y capilar. Hablamos de tu estilo y tu rutina." },
            { num: "02", title: "Diseño", desc: "Definimos la silueta y el corte que mejor encaja con tu fisonomía." },
            { num: "03", title: "Ejecución", desc: "Técnica precisa: tijera, máquina y navaja según lo que requiera tu corte." },
            { num: "04", title: "Acabado", desc: "Styling y producto para que salgas como tienes que salir." },
          ].map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.06} className="bg-[#ece8de] p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
                {step.num}
              </p>
              <h3 className="mt-3 text-[18px] font-semibold uppercase tracking-tight text-black">
                {step.title}
              </h3>
              <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-black/60">
                {step.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="bg-white/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                  Por qué elegirnos
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                  La diferencia que notas desde el primer corte
                </h2>
              </FadeUp>

              <div className="mt-10 space-y-6">
                {[
                  { title: "Personalización total", desc: "No hay dos cortes iguales. Cada cliente recibe una propuesta diseñada para su cara y su estilo." },
                  { title: "10+ años de experiencia", desc: "Formado en Colombia, Chile y la Academia Antonio Eloy de Málaga. El oficio se nota." },
                  { title: "Especialista en visagismo", desc: "Saber qué corte sienta bien a cada cara es una técnica. Aquí la aplicamos en cada visita." },
                  { title: "Servicio premium en Marbella", desc: "Un espacio donde el hombre aprende a cuidarse y a proyectar su mejor versión." },
                ].map((b, i) => (
                  <FadeUp key={b.title} delay={i * 0.06}>
                    <div className="flex gap-4">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-black/60" />
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
                          {b.title}
                        </p>
                        <p className="mt-1.5 text-[12px] leading-6 tracking-[0.04em] text-black/60">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/Foto5_1.jpeg", alt: "antes y después corte de cabello Marbella" },
                { src: "/images/Foto6_1.jpeg", alt: "corte de pelo hombre Marbella profesional" },
                { src: "/images/Foto7.jpeg", alt: "barbería premium Marbella" },
                { src: "/images/Foto8_1.jpeg", alt: "corte personalizado Marbella" },
              ].map((img, i) => (
                <FadeUp key={img.src} delay={i * 0.07} className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERÍA ANTES/DESPUÉS ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            Resultados
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
            El trabajo habla por sí solo
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/images/Foto9.jpeg", alt: "corte de pelo hombre Marbella resultado" },
            { src: "/images/Foto10.jpeg", alt: "antes y después corte de cabello Marbella" },
            { src: "/images/Foto11.jpeg", alt: "corte masculino premium Marbella" },
            { src: "/images/Foto12.jpeg", alt: "barbería profesional Marbella" },
            { src: "/images/Foto2_1.jpeg", alt: "arreglo barba Marbella" },
            { src: "/images/Foto3.jpeg", alt: "interior barbería Marbella" },
          ].map((img, i) => (
            <FadeUp key={img.src} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.1)]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
              Reseñas verificadas
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
              Lo que dice la gente
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r, i) => (
              <FadeUp key={r.id} delay={i * 0.06} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <Stars n={r.rating} />
                <p className="mt-4 text-[12px] leading-6 tracking-[0.04em] text-white/65">
                  "{r.text}"
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    {r.name}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {r.date}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTORIDAD ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp delay={0.05} className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/JuanCarlos1.jpeg"
              alt="Juan Carlos barbero profesional Marbella"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>

          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Tu barbero en Marbella
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Juan Carlos Terán
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Más de 10 años de experiencia. Formado en Colombia, Chile y la Academia Antonio Eloy de Málaga — donde trabajó junto a referentes como Fran Aranda e Ismael de Mora. Especialista en visagismo y cuidado masculino integral.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Hoy en Marbella, con un objetivo claro: construir la experiencia de barbería masculina más completa y personalizada de la Costa del Sol.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["10+ años de experiencia", "Visagismo", "Formación internacional", "Servicio premium"].map((tag) => (
                  <span key={tag} className="rounded-full border border-black/15 bg-black/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/70">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-black/50">
                <Link href="/" className="hover:text-black transition">← Inicio</Link>
                <Link href="/servicios" className="hover:text-black transition">Todos los servicios</Link>
                <span className="text-black/25">Próximamente: Barba · VIP</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-[#f8aa00] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
              Reserva online · Sin esperas
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[52px]">
              ¿Listo para tu mejor corte en Marbella?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 text-[13px] leading-7 tracking-[0.04em] text-black/65">
              Reserva tu cita ahora y experimenta un corte de pelo hombre en Marbella diseñado desde el diagnóstico hasta el acabado final.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-black px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-black/80 hover:-translate-y-0.5"
              >
                Reserva tu cita ahora
              </a>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black/10 hover:-translate-y-0.5"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
