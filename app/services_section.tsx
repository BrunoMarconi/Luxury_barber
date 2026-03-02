"use client";

import { motion } from "framer-motion";

type ServiceItem = {
  name: string;
  description?: string;
  duration?: string;
  price: string;
  tag?: string;
};

const servicesLeft: ServiceItem[] = [
  { name: "Haircut", description: "Precision cut tailored to your face shape.", duration: "45 min", price: "€25", tag: "POPULAR" },
  { name: "Skin Fade", description: "Clean fade with sharp finishing details.", duration: "50 min", price: "€28" },
  { name: "Beard Trim", description: "Line-up + shaping + hot towel finish.", duration: "30 min", price: "€18" },
  { name: "Haircut + Beard", description: "Full refresh. Cut + beard sculpting.", duration: "70 min", price: "€40" },
];

const servicesRight: ServiceItem[] = [
  { name: "Grooming & Wellness", description: "A reset ritual: towel, massage, finish.", duration: "45 min", price: "€35" },
  { name: "Manicure", description: "Clean hands, minimal, polished.", duration: "35 min", price: "€20" },
  { name: "Pedicure", description: "Foot care + hydration treatment.", duration: "45 min", price: "€25" },
  { name: "Kids Cut", description: "Calm, friendly, and sharp results.", duration: "30 min", price: "€18" },
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
      className="flex items-start justify-between gap-6 py-6"
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, delay: idx * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <h3 className="truncate text-[12px] font-semibold uppercase tracking-[0.22em] text-black">
            {s.name}
          </h3>
          {s.tag ? (
            <span className="rounded-full border border-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/80">
              {s.tag}
            </span>
          ) : null}
        </div>

        {s.description ? (
          <p className="mt-2 max-w-[52ch] text-[12px] leading-5 tracking-[0.06em] text-black/65">
            {s.description}
          </p>
        ) : null}

        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
          {s.duration ?? "—"}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-black">
          {s.price}
        </p>
      </div>
    </motion.div>
  );
}

function ServiceList({ list }: { list: ServiceItem[] }) {
  return (
    <div className="divide-y divide-black/10">
      {list.map((s, idx) => (
        <ServiceRow key={s.name} s={s} idx={idx} />
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#ece8de]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <FadeUp delay={0}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
                Tailor made services
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-[56px] lg:text-[72px]">
                Services
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <p className="max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-black/65">
              Clean, detailed work. Everything is designed to feel calm, premium, and precise.
              Choose a service and book in seconds.
            </p>
          </FadeUp>
        </div>

        {/* Body */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <FadeUp delay={0.05} amount={0.25} className="rounded-3xl border border-black/10 bg-white/35 p-8 backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
              Barbering
            </p>
            <div className="mt-4">
              <ServiceList list={servicesLeft} />
            </div>
          </FadeUp>

          <FadeUp delay={0.1} amount={0.25} className="rounded-3xl border border-black/10 bg-white/35 p-8 backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
              Grooming & Care
            </p>
            <div className="mt-4">
              <ServiceList list={servicesRight} />
            </div>
          </FadeUp>
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <FadeUp delay={0.05} amount={0.35}>
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black/60 sm:text-left">
              Prices may vary depending on hair length and complexity.
            </p>
          </FadeUp>

          <FadeUp delay={0.12} amount={0.35}>
            <a
              href="https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga?do=invite&_branch_match_id=1556921415801310876&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVj8jyCMxMT%2FbJi0yyrytKTUstKsrMS49PKsovL04tsnVNSU8FAOg7uKI6AAAA"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/30 bg-black/5 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-black hover:bg-black/10 transition"
            >
              Book now
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}