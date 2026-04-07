"use client";

import { motion } from "framer-motion";

type SanityService = {
  _id: string;
  title: string;
  description: string;
  price: string;
  duration?: string;
  isVip?: boolean;
};

type ServiceItem = {
  name: string;
  description?: string;
  duration?: string;
  price: string;
};

const BOOKSY_URL =
  "https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga#ba_s=sh_1";

const servicesRight: ServiceItem[] = [
  {
    name: "VIP · Haircut / Corte de Cabello",
    description: "Experiencia premium: cada detalle cuenta.",
    duration: "1 h 15 min",
    price: "30,00 €",
  },
  {
    name: "VIP · Haircut + Beard / Corte + Barba",
    description: "Experiencia premium completa: corte + barba.",
    duration: "1 h 45 min",
    price: "45,00 €",
  },
];

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

function ServiceRow({ s, idx }: { s: ServiceItem; idx: number }) {
  return (
    <motion.div
      className="py-6"
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, delay: idx * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <h3 className="truncate text-[12px] font-semibold uppercase tracking-[0.22em] text-black">
            {s.name}
          </h3>

          {s.description ? (
            <p className="mt-2 max-w-[52ch] text-[12px] leading-5 tracking-[0.06em] text-black/65">
              {s.description}
            </p>
          ) : null}

          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
            {s.duration ?? "Consultar"}
          </p>
        </div>

        <div className="shrink-0 sm:text-right">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-black">
            {s.price}
          </p>

          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-reserva mt-3 h-10 w-full text-[10px] uppercase tracking-[0.22em] sm:w-auto"
          >
            Reservar ahora
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ServiceList({ list }: { list: ServiceItem[] }) {
  return (
    <div className="divide-y divide-black/10">
      {list.map((s, idx) => (
        <ServiceRow key={`${s.name}-${idx}`} s={s} idx={idx} />
      ))}
    </div>
  );
}

export default function ServicesSection({
  services,
}: {
  services?: SanityService[];
}) {
  const vipServices: ServiceItem[] = (services ?? [])
    .filter((service) => service.isVip)
    .map((service) => ({
      name: service.title,
      description: service.description,
      duration: service.duration,
      price: service.price,
    }));

  const standardServices: ServiceItem[] = (services ?? [])
    .filter((service) => !service.isVip)
    .map((service) => ({
      name: service.title,
      description: service.description,
      duration: service.duration,
      price: service.price,
    }));

  const vipList = vipServices.length > 0 ? vipServices : servicesRight;
  const standardList = standardServices.length > 0 ? standardServices : [];

  return (
    <section id="services" className="relative overflow-hidden bg-[#ece8de]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <FadeUp delay={0}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
                Servicios personalizados
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[56px] lg:text-[72px]">
                Servicios y Precios
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <p className="max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-black/65">
              El detalle y la atención personalizada hace la diferencia. Descúbrelo. Reserva tu cita ahora.
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <FadeUp
            delay={0.05}
            amount={0.25}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white/35 p-8 backdrop-blur"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
              VIP
            </p>
            <div className="mt-4">
              <ServiceList list={vipList} />
            </div>
          </FadeUp>

          <FadeUp
            delay={0.1}
            amount={0.25}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white/35 p-8 backdrop-blur"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
              Servicios estándar
            </p>
            <div className="mt-4">
              <ServiceList list={standardList} />
            </div>
          </FadeUp>
        </div>

        <div className="mt-12">
          <FadeUp delay={0.05} amount={0.35}>
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black/60">
              Conoce todos los servicios que hay disponibles para ti.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}