'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buildWaUrl } from '@/lib/cta';

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

export default function TratamientoFacialClient() {
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
            <p className="mt-10 max-w-[65ch] text-[14px] leading-7 tracking-[0.02em] text-white/75">
              No tratamos la piel de forma general. Analizamos y trabajamos según lo que realmente necesitas.
            </p>
          </FadeUp>
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
                  Potencia el resultado de tu visita
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 text-[13px] leading-7 tracking-[0.04em] text-black/60">
                  La mayoría de clientes que reservan un{' '}
                  <Link href="/corte-de-pelo-hombre-marbella" className="text-black/70 underline underline-offset-2 hover:text-black transition">
                    corte de cabello en Marbella
                  </Link>
                  {' '}o un servicio de{' '}
                  <Link href="/corte-y-barba-premium-marbella" className="text-black/70 underline underline-offset-2 hover:text-black transition">
                    corte y barba
                  </Link>
                  {' '}complementan su cita con este tratamiento.
                </p>
                <p className="mt-4 text-[13px] leading-7 tracking-[0.04em] text-black/60">
                  Esto permite potenciar el resultado final y mejorar la imagen global en una sola visita.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="grid grid-cols-1 gap-4">
              {[
                { icon: '◎', title: 'Corte + Facial', desc: 'La combinación más completa. Cabello y piel trabajados en la misma sesión.' },
                { icon: '◈', title: 'Barba + Facial', desc: 'Preparación de la piel antes del diseño de barba para un resultado superior.' },
                { icon: '◉', title: 'Servicio completo', desc: 'Corte + barba + tratamiento facial. La imagen más cuidada de la Costa del Sol.' },
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

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-28 lg:py-36">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              Tu piel también comunica
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-[34px] font-extralight leading-[1.05] tracking-[0.04em] text-white sm:text-[46px] lg:text-[58px]">
              La diferencia está en decidir si quieres tratarla de forma genérica o trabajarla mediante análisis, tecnología y personalización avanzada.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 text-[13px] leading-7 tracking-[0.03em] text-white/55">
              Solicita tu protocolo facial masculino en Marbella.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
