"use client";

import { motion } from "framer-motion";

const BOOKSY_URL = "https://booksy.com/es-es/160739_the-professional-barber_barberia_29260_marbella#ba_s=sh_1";

function FadeUp({
  children,
  delay = 0,
  amount = 0.4,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

const serviceCards = [
  {
    kicker: "Corte · Barba",
    title: "Corte y Barba",
    description:
      "Servicio completo: corte personalizado con diagnóstico facial y diseño de barba adaptado a tu morfología.",
    href: "/corte-y-barba-premium-marbella",
    available: true,
  },
  {
    kicker: "Corte de Cabello",
    title: "Corte de Cabello",
    description:
      "Diagnóstico capilar, visagismo y asesoría personalizada. Cada corte diseñado para tu imagen.",
    href: "/corte-de-pelo-hombre-marbella",
    available: true,
  },
  {
    kicker: "Barba",
    title: "Barba",
    description:
      "Perfilado, diseño y acabado profesional de barba. Técnicas precisas para definir tu estilo.",
    href: "/arreglo-de-barba-marbella",
    available: true,
  },
  {
    kicker: "Tratamiento Facial",
    title: "Tratamiento Facial",
    description:
      "Cuidado de la piel masculina con diagnóstico personalizado. Hidratación, limpieza y antiedad.",
    href: "/tratamiento-facial-hombre-marbella",
    available: true,
  },
  {
    kicker: "Tratamiento Capilar",
    title: "Tratamientos Capilares",
    description:
      "Diagnóstico capilar avanzado y protocolos personalizados para trabajar la causa real de cada problema: caída, densidad, cuero cabelludo y más.",
    href: "/tratamiento-capilar-hombre-marbella",
    available: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0A0A0A]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute -top-24 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-white" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <FadeUp delay={0}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Servicios Esenciales
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[56px] lg:text-[72px]">
                EXPERIENCIAS
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <p className="max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-white/60">
              El detalle y la atención personalizada hace la diferencia. Descúbrelo. Reserva tu cita ahora.
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {serviceCards.map((card, i) =>
            card.available ? (
              <FadeUp key={card.title} delay={i * 0.06} amount={0.2}>
                <a
                  href={card.href!}
                  className="group flex h-full items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                      {card.kicker}
                    </p>
                    <h3 className="mt-2 text-[22px] font-semibold uppercase leading-tight tracking-tight text-white sm:text-[28px]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-white/60">
                      {card.description}
                    </p>
                    <a
                      href={BOOKSY_URL}
                      target="_blank"
                      rel="noreferrer"
                      data-cta="booksy-servicios"
                      data-page="servicios"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-reserva mt-6 inline-flex text-[10px] uppercase tracking-[0.22em]"
                    >
                      Solicitar asesoría
                    </a>
                  </div>
                  <span className="shrink-0 text-[22px] text-white/30 transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </FadeUp>
            ) : (
              <FadeUp key={card.title} delay={i * 0.06} amount={0.2}>
                <div className="flex h-full items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur opacity-60">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                      {card.kicker}
                    </p>
                    <h3 className="mt-2 text-[22px] font-semibold uppercase leading-tight tracking-tight text-white sm:text-[28px]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-white/60">
                      {card.description}
                    </p>
                    <span className="mt-6 inline-block rounded-full border border-white/20 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      Próximamente
                    </span>
                  </div>
                </div>
              </FadeUp>
            )
          )}
        </div>
      </div>
    </section>
  );
}
