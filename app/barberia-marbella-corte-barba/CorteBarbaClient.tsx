"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BOOKSY_URL = "https://wa.me/34672516317";

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

const FAQ = [
  {
    q: "¿Qué tipo de barba me favorece según mi rostro?",
    a: "La barba adecuada depende de múltiples factores como la forma del rostro, la proyección del mentón, la definición de la mandíbula, el perfil facial (recto, convexo o cóncavo) y la densidad del vello. Con toda esta información, se diseña una barba personalizada que equilibre el rostro y mejore la imagen.",
  },
  {
    q: "¿Qué incluye el servicio de corte de cabello y barba en Marbella?",
    a: "Incluye diagnóstico capilar y facial, corte de cabello, diseño de barba personalizado, lavado con tratamiento adaptado, uso de tecnología profesional y cuidado de la piel.",
  },
  {
    q: "¿Cada cuánto debería hacerme corte de cabello y barba en Marbella?",
    a: "Lo recomendable es cada 4 a 5 semanas. Entre medias, el mantenimiento de la barba ayuda a mantener una imagen cuidada.",
  },
  {
    q: "¿Qué diferencia este servicio de otros en Marbella?",
    a: "Aquí no se trabaja con patrones estándar. Cada cliente recibe un diseño adaptado a su rostro, combinando técnica, diagnóstico y tecnología para lograr un resultado superior.",
  },
];

export default function CorteBarbaClient() {
  return (
    <main className="min-h-screen bg-[#ece8de] text-black">

      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/barba1.jpeg"
          alt="corte de cabello y barba hombre Marbella"
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
            Barbería en Marbella | Corte de cabello y barba con asesoría personalizada
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
              Reserva tu cita en Marbella
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

      {/* ── INTRO ── */}
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
                Una imagen completa, diseñada para ti
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Este servicio de corte de cabello y barba en Marbella está diseñado para hombres que buscan una imagen completa, teniendo en cuenta la estructura del rostro, el estilo personal y el crecimiento natural del cabello y la barba.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                En nuestra{" "}
                <Link href="/" className="underline underline-offset-2 hover:text-black transition">
                  barbería en Marbella
                </Link>
                , no se trata solo de cortar o perfilar, sino de crear un resultado equilibrado y adaptado a cada persona.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative aspect-3/4 overflow-hidden rounded-3xl shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/barba2.jpeg"
              alt="corte de cabello y barba hombre Marbella"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── RESULTADO ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
        <div className="grid gap-px bg-black/10 sm:grid-cols-3 rounded-3xl overflow-hidden">
          {[
            { num: "+20", label: "Años de experiencia", desc: "Formación internacional y técnica refinada en cada visita." },
            { num: "100%", label: "Personalizado", desc: "Ningún corte ni barba es igual. Cada resultado se diseña para tu rostro." },
            { num: "5★", label: "Valoración media", desc: "Reseñas verificadas de clientes reales en Booksy." },
          ].map((stat, i) => (
            <FadeUp key={stat.num} delay={i * 0.07} className="bg-[#ece8de] px-8 py-12 flex flex-col justify-between">
              <p className="text-[56px] font-semibold leading-none tracking-tight text-black">
                {stat.num}
              </p>
              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70">
                  {stat.label}
                </p>
                <p className="mt-2 text-[12px] leading-6 tracking-[0.04em] text-black/50">
                  {stat.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCIA ── */}
      <section className="bg-white/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                  La experiencia
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                  Una experiencia diferente desde el primer momento
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                  Desde que llegas, buscamos que la experiencia sea diferente. Te recibimos, entendemos lo que buscas y te asesoramos. Durante el servicio trabajamos con técnicas profesionales en cabello y barba, lavado adaptado y finalizamos con un styling cuidado al detalle.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="flex flex-col justify-center gap-6">
              {[
                { step: "01", title: "Llegada y bienvenida", desc: "Te recibimos y escuchamos exactamente qué buscas, tanto en cabello como en barba." },
                { step: "02", title: "Diagnóstico y diseño", desc: "Analizamos tu rostro, mandíbula y proporciones para diseñar el resultado antes de empezar." },
                { step: "03", title: "Servicio completo", desc: "Corte, diseño de barba, lavado adaptado y styling final con herramientas profesionales." },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <span className="shrink-0 w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-[11px] font-semibold uppercase tracking-[0.18em] text-black/50">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-6 tracking-[0.04em] text-black/55">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
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
                alt="diseño de barba según rostro Marbella"
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
                  Diseño de barba basado en tu estructura facial
                </h2>
              </FadeUp>
              <FadeUp delay={0.12}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Antes de comenzar, realizamos un análisis personalizado donde evaluamos la forma del rostro, la proyección del mentón, la definición de la mandíbula, el perfil facial (recto, convexo o cóncavo) y la densidad de la barba.
                </p>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  Este servicio está basado en formación internacional y en un enfoque técnico donde cada decisión tiene una justificación estética y estructural.
                </p>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="mt-8 space-y-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 mb-3">
                      Evaluamos en profundidad:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Forma del rostro y proporciones",
                        "Proyección del mentón",
                        "Definición de mandíbula y pómulos",
                        "Perfil facial (recto, convexo o cóncavo)",
                        "Densidad y dirección del vello",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[12px] leading-6 tracking-[0.04em] text-white/70">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f8aa00]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-[12px] leading-6 tracking-[0.04em] text-white/50 italic pt-2">
                    Nada es al azar. Cada paso del proceso tiene un porqué.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#f8aa00] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f8aa00] transition hover:bg-[#f8aa00] hover:text-black"
                >
                  Reserva tu cita en Marbella
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECNOLOGÍA ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            Tecnología avanzada
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 max-w-[22ch] text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
            Tecnología profesional al servicio de tu piel
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-[60ch] text-[13px] leading-7 tracking-[0.04em] text-black/65">
            Trabajamos con tecnología profesional para mejorar tanto el resultado como la salud de la piel. Utilizamos dispositivos de Foreo para la limpieza, estimulación y tratamiento facial, junto con vaporizador profesional que permite abrir los poros, limpiar profundamente la piel y mejorar la absorción de los tratamientos.
          </p>
          <p className="mt-4 max-w-[60ch] text-[13px] leading-7 tracking-[0.04em] text-black/65">
            Posteriormente, se realiza un proceso de cierre y calma para un acabado más limpio y duradero.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden">
          {[
            { num: "01", title: "Vaporizador", desc: "Apertura de poros y limpieza profunda para preparar la piel antes del servicio de barba." },
            { num: "02", title: "Foreo facial", desc: "Limpieza, estimulación y tratamiento con tecnología LED adaptada al tipo de piel." },
            { num: "03", title: "Tratamiento capilar", desc: "Productos Previa seleccionados según el análisis para cabello y cuero cabelludo." },
            { num: "04", title: "Cierre y calma", desc: "Protocolo de cierre para calmar la piel tras el servicio y conseguir un acabado duradero." },
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

      {/* ── LAVADO ── */}
      <section className="bg-[#0f1112] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
                  Lavado capilar premium
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
                  El lavado también forma parte del resultado
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-white/60">
                  El lavado capilar forma parte del resultado final. Trabajamos con productos profesionales de Previa, seleccionados según el estado del cabello y cuero cabelludo, asegurando limpieza, tratamiento y preparación para un mejor acabado del corte.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#f8aa00] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f8aa00] transition hover:bg-[#f8aa00] hover:text-black"
                >
                  Reserva tu cita en Marbella
                </a>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="grid grid-cols-1 gap-4">
              {[
                { icon: "◎", title: "Diagnóstico previo", desc: "Evaluamos el estado del cuero cabelludo antes de elegir el tratamiento adecuado." },
                { icon: "◈", title: "Productos Previa", desc: "Línea profesional seleccionada según tu tipo de cabello y análisis realizado." },
                { icon: "◉", title: "Resultado visible", desc: "No solo limpio, sino con mejor salud capilar y base ideal para el corte." },
              ].map((feat) => (
                <div key={feat.title} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 flex gap-4 items-start">
                  <span className="text-[#f8aa00] text-[20px] leading-none mt-0.5">{feat.icon}</span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      {feat.title}
                    </p>
                    <p className="mt-1 text-[12px] leading-6 tracking-[0.04em] text-white/55">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── STYLING / ACABADO ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp delay={0.05} className="rounded-3xl bg-[#0f1112] px-10 py-14 flex flex-col justify-between min-h-[340px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8aa00]">
              El acabado final
            </p>
            <p className="mt-6 text-[72px] font-semibold uppercase leading-none tracking-tight text-white/10 select-none">
              BEARD
            </p>
            <div className="mt-auto space-y-3">
              {["Navaja y tijera profesional", "Perfilado de precisión", "Acabado limpio y duradero"].map((tag) => (
                <div key={tag} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f8aa00]" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">{tag}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                El acabado final
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
                Styling y perfilado de precisión
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                Finalizamos el servicio con un peinado y perfilado adaptados a tu estilo, utilizando navaja y herramientas profesionales para conseguir líneas limpias, precisas y un acabado natural y duradero.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIACIÓN ── */}
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
                  No es una barba estándar
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                  La mayoría de barberías trabajan la barba de forma estándar, aplicando el mismo diseño a todos los clientes. En esta barbería en Marbella, cada barba se diseña en función del rostro, teniendo en cuenta mandíbula, pómulos, proporciones y crecimiento del vello.
                </p>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                  No se trata de perfilar, sino de crear una barba que realmente encaje con cada persona.
                </p>
              </FadeUp>

              <div className="mt-10 space-y-6">
                {[
                  { title: "Diseño personalizado", desc: "Cada barba se diseña según el rostro, no según una plantilla." },
                  { title: "20+ años de experiencia", desc: "Formado internacionalmente. Técnica y criterio en cada visita." },
                  { title: "Tecnología + técnica", desc: "Vaporizador, Foreo y navaja profesional para un resultado superior." },
                  { title: "Barbería premium en Marbella", desc: "Un espacio donde el detalle y la personalización marcan la diferencia." },
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
                { src: "/images/barba3.jpeg", alt: "antes y después corte y barba Marbella" },
                { src: "/images/barba4.jpeg", alt: "perfilado de barba profesional Marbella" },
                { src: "/images/barba5.jpeg", alt: "barbería premium Marbella" },
                { src: "/images/barba6.jpeg", alt: "detalle barba precisión Marbella" },
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

      {/* ── GALERÍA ── */}
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
            { src: "/images/barba1.jpeg", alt: "corte de cabello y barba Marbella resultado" },
            { src: "/images/barba2.jpeg", alt: "antes y después corte y barba Marbella" },
            { src: "/images/barba3.jpeg", alt: "barba personalizada Marbella premium" },
            { src: "/images/barba4.jpeg", alt: "barbero en Marbella profesional" },
            { src: "/images/barba5.jpeg", alt: "barbería en Marbella corte y barba" },
            { src: "/images/barba6.jpeg", alt: "interior barbería premium Marbella" },
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
              Reseñas verificadas · Booksy
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
                  &ldquo;{r.text}&rdquo;
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

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
            Preguntas frecuentes
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
            Todo lo que necesitas saber
          </h2>
        </FadeUp>

        <div className="mt-12 space-y-0">
          {FAQ.map((item, i) => (
            <FadeUp key={i} delay={i * 0.06} className="border-b border-black/10 py-8">
              <p className="text-[14px] font-semibold uppercase tracking-[0.1em] text-black">
                {item.q}
              </p>
              <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-black/60">
                {item.a}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── AUTORIDAD ── */}
      <section className="bg-white/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
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
                  Este servicio está pensado para hombres que valoran su imagen y entienden que un buen resultado no es casualidad, sino el resultado de técnica, diagnóstico y experiencia.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/65">
                  Con más de 20 años de experiencia y formación internacional, hoy en Marbella con un objetivo claro: construir la experiencia de barbería masculina más completa y personalizada de la Costa del Sol.
                </p>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["20+ años de experiencia", "Visagismo", "Formación internacional", "Servicio premium"].map((tag) => (
                    <span key={tag} className="rounded-full border border-black/15 bg-black/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <div className="mt-8 flex flex-wrap gap-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-black/50">
                  <Link href="/" className="hover:text-black transition">← Inicio</Link>
                  <Link href="/corte-de-pelo-hombre-marbella" className="hover:text-black transition">Solo corte</Link>
                  <Link href="/servicios" className="hover:text-black transition">Todos los servicios</Link>
                </div>
              </FadeUp>
            </div>
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
              ¿Listo para tu mejor imagen en Marbella?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 text-[13px] leading-7 tracking-[0.04em] text-black/65">
              Este servicio de corte de cabello y barba en Marbella está pensado para hombres que valoran el detalle, la precisión y una imagen bien trabajada.
            </p>
            <p className="mt-3 text-[13px] leading-7 tracking-[0.04em] text-black/65">
              No es un corte rápido.<br />
              Es un trabajo bien hecho.
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
                Reserva tu cita en Marbella
              </a>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black/10 hover:-translate-y-0.5"
              >
                Reservar en Booksy
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
