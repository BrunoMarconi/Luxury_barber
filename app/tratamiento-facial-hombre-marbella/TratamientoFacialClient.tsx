'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buildWaUrl } from '@/lib/cta';
import type { GoogleReview } from '@/lib/google-reviews';

const BOOKSY_URL = buildWaUrl('tratamiento-facial');

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
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
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
    name: "Carlos M.",
    rating: 5,
    date: "Mar 2026",
    text: "La piel ha mejorado muchísimo después de solo dos sesiones. Se nota que hay un diagnóstico real detrás de cada decisión.",
  },
  {
    id: "r2",
    name: "David R.",
    rating: 5,
    date: "Feb 2026",
    text: "Nunca había hecho un tratamiento facial y la diferencia es considerable. La tecnología que usan marca la diferencia.",
  },
  {
    id: "r3",
    name: "Marcos T.",
    rating: 5,
    date: "Ene 2026",
    text: "Después del tratamiento facial mi piel está mucho más hidratada y tiene mejor aspecto. Un resultado que no esperaba tan rápido.",
  },
  {
    id: "r4",
    name: "Yeray",
    rating: 5,
    date: "Ene 2026",
    text: "Combiné el corte con el tratamiento facial y la diferencia es total. Salí con una imagen completamente renovada.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-[#FBBC04] tracking-tight text-sm">{"★".repeat(n)}</span>
  );
}

function GoogleG({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const FAQ = [
  {
    q: '¿Qué tratamiento facial necesito?',
    a: 'Analizamos tu rostro y piel para definir el protocolo más adecuado; no usamos soluciones genéricas.',
  },
  {
    q: '¿Cada cuánto debería hacerme un protocolo facial?',
    a: 'Depende del objetivo, pero recomendamos ciclos periódicos para mantener y mejorar resultados; lo definimos tras diagnóstico.',
  },
  {
    q: '¿Se puede combinar con corte o barba?',
    a: 'Sí. El diagnóstico facial se integra con corte y diseño de barba para una imagen coherente y duradera.',
  },
  {
    q: '¿Qué diferencia este tratamiento facial de otros en Marbella?',
    a: 'Nuestro enfoque combina diagnóstico masculino, tecnología aplicada con criterio y protocolos personalizados para un resultado refinado y duradero.',
  },
];

const TECHNOLOGY = [
  'Análisis facial masculino',
  'Diagnóstico capilar avanzado',
  'Tecnología Foreo',
  'Tecnología galvánica NuSkin',
  'LED terapéutico',
  'Crioterapia facial',
  'Termoterapia controlada',
  'Activos premium profesionales',
];

export default function TratamientoFacialClient({ googleReviews = [] }: { googleReviews?: GoogleReview[] }) {
  const reviews = googleReviews.length ? googleReviews : REVIEWS;
  return (
    <main className="min-h-screen bg-white text-black">
      {/* ── HERO ── */}
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="/images/servicio-premium-masculino-marbella.jpeg"
          alt="tratamiento facial hombre Marbella"
          fill
          priority
          className="object-cover scale-[1.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/90" />

        <div className="relative mx-auto flex h-full min-h-[92svh] max-w-6xl flex-col justify-end px-6 pb-16 lg:pb-24">
          <FadeUp>
            <h1 className="text-[52px] font-light uppercase leading-[1.05] tracking-[0.08em] text-white sm:text-[72px]">
              Protocolos faciales <br /> masculinos premium
            </h1>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="mt-6 text-[13px] uppercase tracking-[0.2em] text-white/60">
              Diagnóstico. Tecnología. Rejuvenecimiento masculino.
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="mt-10 max-w-[65ch] space-y-4">
              <p className="text-[14px] leading-7 tracking-[0.02em] text-white/75">
                Cada protocolo comienza con un diagnóstico profesional para entender exactamente qué necesita tu piel.
              </p>
              <p className="text-[14px] leading-7 tracking-[0.02em] text-white/55">
                Tecnología especializada, activos premium y personalización avanzada aplicados al cuidado masculino.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── GALERÍA ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
        {[
          {
            src: "/images/tratamiento-facial-hombre-premium-marbella.jpeg",
            alt: "Tratamiento facial hombre premium Marbella",
          },
          {
            src: "/images/diagnostico-facial-masculino-marbella.jpeg",
            alt: "Diagnóstico facial masculino Marbella",
          },
          {
            src: "/images/tecnologia-facial-avanzada-hombre-marbella.jpeg",
            alt: "Tecnología facial avanzada hombre Marbella",
          },
        ].map((img) => (
          <div key={img.src} className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </section>

      {/* ── DIAGNÓSTICO Y TECNOLOGÍA ── */}
      <section className="bg-[#F7F6F4] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/50">
                  Diagnóstico profesional
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[42px]">
                  Primero entendemos.<br />Luego actuamos.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/60">
                  Cada protocolo comienza con un análisis detallado de piel, estructura facial y necesidades reales. La tecnología no define el protocolo — es la herramienta que permite personalizarlo con mayor precisión.
                </p>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/45">
                  Seleccionamos los recursos adecuados una vez comprendemos lo que realmente necesita tu piel. No antes.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.1}>
              <div className="grid grid-cols-1">
                {TECHNOLOGY.map((tech, i) => (
                  <div
                    key={tech}
                    className={`flex items-center gap-4 py-4${i !== TECHNOLOGY.length - 1 ? ' border-b border-black/8' : ''}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-black/20 shrink-0" />
                    <p className="text-[12px] tracking-[0.12em] uppercase font-light text-black/60">{tech}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION: CONEXIÓN CON SERVICIOS ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                  Complemento ideal
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[48px]">
                  Integrado dentro de una estrategia completa de imagen masculina.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/60">
                  Muchos clientes combinan los protocolos faciales con{' '}
                  <Link href="/corte-de-pelo-hombre-marbella" className="text-black/70 underline underline-offset-2 hover:text-black transition">
                    corte de cabello
                  </Link>
                  {' '}o{' '}
                  <Link href="/corte-y-barba-premium-marbella" className="text-black/70 underline underline-offset-2 hover:text-black transition">
                    diseño de barba
                  </Link>
                  {' '}para trabajar imagen, piel y presencia dentro de una misma experiencia.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="grid grid-cols-1 gap-4">
              {[
                { icon: '◎', title: 'Corte + Facial', desc: 'La combinación más completa. Cabello y piel trabajados en la misma sesión.' },
                { icon: '◈', title: 'Barba + Facial', desc: 'Preparación de la piel antes del diseño de barba para un resultado superior.' },
                { icon: '◉', title: 'Servicio completo', desc: 'Corte + barba + tratamiento facial. Una experiencia completa de imagen masculina diseñada para trabajar cabello, barba y piel como un conjunto.' },
              ].map((feat) => (
                <div key={feat.title} className="rounded-2xl border border-black/10 bg-white px-6 py-5 flex gap-4 items-start">
                  <span className="text-black/70 text-[20px] leading-none mt-0.5 shrink-0">{feat.icon}</span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">{feat.title}</p>
                    <p className="mt-1 text-[12px] leading-6 tracking-[0.04em] text-black/55">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="flex items-center gap-2.5">
              <GoogleG className="w-4 h-4 shrink-0" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60">
                Reseñas verificadas en Google
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-3 text-[36px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[48px]">
              Lo que dicen los clientes
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-5 py-2.5">
              <GoogleG className="w-4 h-4 shrink-0" />
              <span className="text-[#FBBC04] text-sm leading-none">★★★★★</span>
              <span className="text-[12px] font-semibold text-black">5.0</span>
              <span className="text-[11px] text-black/40 uppercase tracking-widest">en Google</span>
            </div>
          </FadeUp>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <FadeUp key={r.id} delay={i * 0.06} className="rounded-3xl border border-black/10 bg-white p-6 flex flex-col">
                <div className="flex items-start justify-between">
                  <Stars n={r.rating} />
                  <GoogleG className="w-4 h-4 shrink-0 mt-0.5" />
                </div>
                <p className="mt-4 flex-1 text-[12px] leading-6 tracking-[0.04em] text-black/65">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">{r.name}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">{r.date}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-black/8 flex items-center gap-1.5">
                  <GoogleG className="w-3 h-3 shrink-0" />
                  <span className="text-[10px] tracking-[0.12em] uppercase text-black/35">Reseña verificada</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
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

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-36 lg:py-48">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              La calidad de tu piel también forma parte de tu imagen.
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-extralight leading-[1.05] tracking-[0.04em] text-white sm:text-[46px] lg:text-[58px]">
              La diferencia está en decidir si quieres seguir utilizando soluciones genéricas o trabajar tu piel mediante diagnóstico profesional, tecnología especializada y protocolos diseñados específicamente para ti.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-8 text-[13px] leading-7 tracking-[0.03em] text-white/55">
              Solicita tu diagnóstico facial masculino y descubre qué protocolo necesita realmente tu piel.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-asesoria"
                data-page="tratamiento-facial"
                className="w-full rounded-full bg-[#0F2A44] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a3d5c] sm:w-auto"
              >
                Solicitar asesoría personalizada
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
