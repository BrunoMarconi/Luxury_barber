"use client";

import { motion } from "framer-motion";

function FadeUp({
  children,
  delay = 0,
  amount = 0.35,
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

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#7f949b] text-white">
      {/* fondo sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div className="absolute -top-24 left-10 h-[520px] w-[520px] rounded-full bg-white" />
        <div className="absolute -bottom-40 right-0 h-[620px] w-[620px] rounded-full bg-white" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        {/* Header editorial */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <FadeUp delay={0}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Contact
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[56px] lg:text-[72px]">
                Let&apos;s book your next visit
              </h1>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <p className="max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-white/60">
              Escríbenos con lo que necesitas y te respondemos rápido. Si lo prefieres,
              reserva directamente por teléfono o WhatsApp.
            </p>
          </FadeUp>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: info cards */}
          <div className="space-y-6">
            <FadeUp delay={0.05} amount={0.25}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Quick info
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      Phone
                    </p>
                    <a
                      href="tel:+34000000000"
                      className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-white/90 hover:text-white"
                    >
                      +34 000 000 000
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/34000000000"
                      className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-white/90 hover:text-white"
                    >
                      Message us
                    </a>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      Address
                    </p>
                    <p className="mt-2 text-[12px] leading-6 tracking-[0.06em] text-white/70">
                      Calle Ejemplo 12, 28000 Madrid, España
                    </p>
                    <a
                      href="https://www.google.com/maps"
                      className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 hover:text-white"
                    >
                      Open in maps →
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1} amount={0.25}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Opening hours
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    ["Mon – Fri", "10:00 – 20:00"],
                    ["Saturday", "10:00 – 18:00"],
                    ["Sunday", "Closed"],
                  ].map(([d, h]) => (
                    <div key={d} className="flex items-center justify-between gap-6">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/80">
                        {d}
                      </p>
                      <p className="text-[12px] tracking-[0.08em] text-white/60">
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} amount={0.25}>
              <a
                href="https://booksy.com/es-es/160739_the-professional-barber_barberia_29485_malaga?do=invite&_branch_match_id=1556921415801310876&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVj8jyCMxMT%2FbJi0yyrytKTUstKsrMS49PKsovL04tsnVNSU8FAOg7uKI6AAAA"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/15 transition"
              >
                Book now
              </a>
            </FadeUp>
          </div>

          {/* Right: form */}
          <FadeUp delay={0.08} amount={0.25}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Send a message
              </p>

              <form
                className="mt-6 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Aquí luego lo conectas con tu backend/email service
                  alert("Message sent (demo).");
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                      Name
                    </span>
                    <input
                      className="h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-[12px] tracking-[0.06em] text-white placeholder:text-white/35 outline-none focus:border-white/25"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                      Phone
                    </span>
                    <input
                      className="h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-[12px] tracking-[0.06em] text-white placeholder:text-white/35 outline-none focus:border-white/25"
                      placeholder="+34..."
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                    Email
                  </span>
                  <input
                    type="email"
                    className="h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-[12px] tracking-[0.06em] text-white placeholder:text-white/35 outline-none focus:border-white/25"
                    placeholder="you@email.com"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                    Message
                  </span>
                  <textarea
                    className="min-h-[140px] resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-[12px] leading-6 tracking-[0.06em] text-white placeholder:text-white/35 outline-none focus:border-white/25"
                    placeholder="Tell us what you want to book..."
                    required
                  />
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    We respond within 24h
                  </p>

                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/15 transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}