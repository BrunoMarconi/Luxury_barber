'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BOOKSY_URL = 'https://www.booksy.com/en-es/301892-the-professional-barber-marbella/services';

const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const fadeUpVariants = undefined; // Removed unused variants

export default function BlackAccessClient() {
  return (
    <main className="overflow-hidden bg-[#0A0A0A]">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[95vh] w-full overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-black-access.jpg"
            alt="Black Access Experience"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-[calc(95vh-6rem)] max-w-6xl items-center px-6 py-12">
          <div className="w-full max-w-2xl space-y-8">
            {/* H1 */}
            <FadeUp delay={0}>
              <h1 className="text-[56px] font-light uppercase leading-[0.95] tracking-[0.12em] text-white sm:text-[72px] lg:text-[88px]">
                BLACK
                <br />
                ACCESS
              </h1>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={0.1}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/60">
                La versión más privada de Alpha Signature
              </p>
            </FadeUp>

            {/* Main Text */}
            <FadeUp delay={0.15}>
              <p className="max-w-[55ch] text-[14px] leading-7 tracking-[0.02em] text-white/80">
                Un único turno privado reservado para trabajar tu imagen de forma completamente personalizada.
              </p>
            </FadeUp>

            {/* Secondary Text */}
            <FadeUp delay={0.2}>
              <p className="max-w-[60ch] text-[12px] leading-[1.8] tracking-[0.03em] text-white/50">
                Una experiencia diseñada para hombres que entienden que el tiempo, la atención y el cuidado también forman parte del lujo.
              </p>
            </FadeUp>

            {/* Small Text */}
            <FadeUp delay={0.25}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Reserva anticipada con preparación personalizada previa.
              </p>
            </FadeUp>

            {/* CTA */}
            <FadeUp delay={0.3}>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="black-access-hero"
                data-page="black-access"
                className="inline-flex items-center gap-2 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
              >
                Solicitar Black Access ↗
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: NO TRABAJAMOS POR PARTES ── */}
      <section className="relative bg-[#0A0A0A] py-28 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-24">
            {/* Title & Text */}
            <div>
              <FadeUp>
                <h2 className="text-[42px] font-light uppercase leading-[1.1] tracking-[0.06em] text-white sm:text-[56px]">
                  No trabajamos por partes.
                  <br />
                  Trabajamos tu imagen como un todo.
                </h2>
              </FadeUp>

              <FadeUp delay={0.08}>
                <div className="mt-12 max-w-[62ch] space-y-6">
                  <p className="text-[13px] leading-7 tracking-[0.02em] text-white/70">
                    Cada sesión comienza entendiendo qué necesita realmente tu cabello, piel y estructura facial antes de intervenir.
                  </p>
                  <p className="text-[13px] leading-7 tracking-[0.02em] text-white/70">
                    Diagnóstico, precisión y cuidado masculino avanzado integrados dentro de una experiencia completamente personalizada.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Price Block */}
            <FadeUp delay={0.12}>
              <div className="max-w-xs space-y-6">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.24em] text-white/50">
                    Black Access
                  </p>
                  <p className="mt-2 text-[12px] tracking-[0.02em] text-white/60">
                    Experiencia privada de imagen masculina
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-[48px] font-light leading-none tracking-tight text-white">
                    450€
                  </p>
                  <p className="max-w-[50ch] text-[11px] leading-6 tracking-[0.02em] text-white/50">
                    Incluye sesión privada, diagnóstico facial y capilar, barbería de precisión, cuidado avanzado masculino y continuidad personalizada posterior a la experiencia.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: NO ESTÁ DISEÑADO PARA ATENDER MÁS PERSONAS ── */}
      <section className="relative bg-[#0A0A0A] py-28 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="text-[42px] font-light uppercase leading-[1.1] tracking-[0.06em] text-white sm:text-[56px]">
              No está diseñado para atender más personas.
              <br />
              Está diseñado para atenderte mejor.
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-16 max-w-[62ch] space-y-6">
              <p className="text-[13px] leading-7 tracking-[0.02em] text-white/70">
                Black Access es una experiencia privada de imagen masculina diseñada para trabajar cabello, barba, piel y cuidado posterior como una sola dirección visual.
              </p>
              <p className="text-[13px] leading-7 tracking-[0.02em] text-white/70">
                No se trata de hacer más. Se trata de hacerlo con más atención, más calma y más dedicación.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── DIFFERENTIAL BLOCK ── */}
      <section className="relative bg-[#0A0A0A] py-28 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/50">
              Una experiencia privada
            </p>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h2 className="mt-4 text-[42px] font-light uppercase leading-[1.1] tracking-[0.06em] text-white sm:text-[52px]">
              Un solo turno.
              <br />
              Toda la atención.
            </h2>
          </FadeUp>

          {/* 4 Elements Grid */}
          <div className="mt-20 grid gap-16 lg:grid-cols-2">
            {/* Element 1 */}
            <FadeUp delay={0.1}>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Sesión privada los domingos
                </p>
                <p className="max-w-[45ch] text-[13px] leading-7 tracking-[0.02em] text-white/70">
                  Un único turno reservado para vivir la experiencia sin atención simultánea a otros clientes.
                </p>
              </div>
            </FadeUp>

            {/* Element 2 */}
            <FadeUp delay={0.14}>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Diagnóstico facial y capilar
                </p>
                <p className="max-w-[45ch] text-[13px] leading-7 tracking-[0.02em] text-white/70">
                  Evaluación personalizada de rostro, cuero cabelludo, piel y necesidades reales antes de comenzar la sesión.
                </p>
              </div>
            </FadeUp>

            {/* Element 3 */}
            <FadeUp delay={0.18}>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Tecnología aplicada con precisión
                </p>
                <p className="max-w-[45ch] text-[13px] leading-7 tracking-[0.02em] text-white/70">
                  La experiencia incorpora tecnología especializada integrada elegantemente dentro del diagnóstico y la personalización de cada sesión.
                </p>
              </div>
            </FadeUp>

            {/* Element 4 */}
            <FadeUp delay={0.22}>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Continuidad personalizada
                </p>
                <p className="max-w-[45ch] text-[13px] leading-7 tracking-[0.02em] text-white/70">
                  Al finalizar, cada cliente recibe una selección personalizada de productos profesionales preparada según las necesidades detectadas durante la experiencia.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CENTRAL VISUAL BLOCK ── */}
      <section className="relative bg-[#0A0A0A] py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-16">
            <FadeUp>
              <h2 className="text-[48px] font-light uppercase leading-[1.05] tracking-[0.06em] text-white sm:text-[64px]">
                No es mantenimiento.
                <br />
                Es tiempo dedicado a ti.
              </h2>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p className="max-w-[58ch] text-[13px] leading-7 tracking-[0.02em] text-white/70">
                Cabello, barba, piel y cuidado posterior trabajados como una sola experiencia masculina.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE BLOCK ── */}
      <section className="relative bg-[#0A0A0A] py-28 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="text-[42px] font-light uppercase leading-[1.1] tracking-[0.06em] text-white sm:text-[56px]">
              Preparado antes de que llegues.
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-12 max-w-[62ch] space-y-6">
              <p className="text-[13px] leading-7 tracking-[0.02em] text-white/70">
                Black Access requiere preparación previa para personalizar completamente la experiencia antes de la visita.
              </p>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/50">
                Reserva anticipada mínima: 3 días
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTINUITY BLOCK ── */}
      <section className="relative bg-[#0A0A0A] py-28 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="text-[42px] font-light uppercase leading-[1.1] tracking-[0.06em] text-white sm:text-[56px]">
              El cuidado continúa después de la experiencia.
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="mt-12 max-w-[62ch] text-[13px] leading-7 tracking-[0.02em] text-white/70">
              La experiencia incluye una selección personalizada de productos profesionales preparada según las necesidades detectadas durante la sesión.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── AVAILABILITY BLOCK ── */}
      <section className="relative bg-[#0A0A0A] py-28 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="text-[42px] font-light uppercase leading-[1.1] tracking-[0.06em] text-white sm:text-[56px]">
              Disponible únicamente los domingos.
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-12 max-w-[62ch] space-y-6">
              <p className="text-[13px] leading-7 tracking-[0.02em] text-white/70">
                Black Access está disponible en un solo turno privado los domingos.
              </p>
              <p className="text-[13px] leading-7 tracking-[0.02em] text-white/70">
                No es una cita más dentro del horario habitual. Es una experiencia reservada para trabajar con calma, privacidad y atención completa.
              </p>
              <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.24em] text-white/50">
                Un solo turno por domingo
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL BLOCK ── */}
      <section className="relative bg-[#0A0A0A] py-28 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            <FadeUp>
              <h2 className="text-[48px] font-light uppercase leading-[1.1] tracking-[0.06em] text-white sm:text-[64px]">
                Tu imagen merece tiempo.
              </h2>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="max-w-[62ch] space-y-5">
                <p className="text-[13px] leading-7 tracking-[0.02em] text-white/70">
                  Black Access está diseñado para hombres que entienden que cuidarse no es vanidad.
                </p>
                <p className="text-[13px] font-light leading-7 tracking-[0.02em] text-white/60 italic">
                  Es presencia. Es intención. Es respeto por la forma en que se presentan al mundo.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.14}>
              <div className="pt-8">
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="black-access-final"
                  data-page="black-access"
                  className="inline-flex items-center gap-2 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
                >
                  Solicitar Black Access ↗
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Experiencia privada · Domingo · Reserva anticipada
              </p>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
