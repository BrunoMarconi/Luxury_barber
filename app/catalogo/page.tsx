"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, LINES, type Product } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------- helpers ----------------------------- */

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------- bundle type ----------------------------- */

type BundleCard = {
  type: "bundle";
  id: string;
  title: string;
  subtitle?: string;
  line: string;
  items: Array<{
    name: string;
    caption?: string;
    image: string; // ruta en /public
  }>;
};

type GridItem = Product | BundleCard;

function isBundle(item: GridItem): item is BundleCard {
  return (item as BundleCard).type === "bundle";
}

/* ----------------------------- UI: mini product tile ----------------------------- */

function MiniProductTile({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/55">
      {/* marco de imagen consistente */}
      <div className="relative h-[118px] w-full bg-white/70">
        <Image
          src={image}
          alt={name}
          fill
          sizes="200px"
          className={[
            // ✅ NO recorta + se centra
            "object-contain",
            // ✅ aire tipo e-commerce
            "p-3",
            // ✅ un poquito de vida
            "drop-shadow-[0_18px_18px_rgba(0,0,0,0.12)]",
            // hover sutil
            "transition duration-500 group-hover:scale-[1.02]",
          ].join(" ")}
        />
        {/* brillo suave arriba */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.55),rgba(255,255,255,0)_55%)]" />
      </div>

      <div className="px-3 py-3">
        <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-black/80">
          {name}
        </p>
      </div>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function CatalogPage() {
  const [q, setQ] = useState("");
  const [line, setLine] = useState<string>("ALL");
  const [active, setActive] = useState<Product | null>(null);
  const [activeBundle, setActiveBundle] = useState<BundleCard | null>(null);

  const purifyingBundle: BundleCard = useMemo(
    () => ({
      type: "bundle",
      id: "purifying-treatment",
      title: "Tratamiento Purificante",
      subtitle: "Rutina completa (4 productos)",
      line: "EXTRA LIFE",
      items: [
        { name: "Purifying Shampoo", image: "/images/producto7.jpg" },
        { name: "Purifying Treatment", image: "/images/producto8.jpg" },
        { name: "Scalp Cleanser", image: "/images/producto9.jpg" },
        { name: "Purifying Leave-in Lotion", image: "/images/producto10.jpeg" },
      ],
    }),
    []
  );

  const hydrationBundle: BundleCard = useMemo(
    () => ({
      type: "bundle",
      id: "hydration-treatment",
      title: "Tratamiento para cabellos rubios",
      subtitle: "Rutina completa (3 productos)",
      line: "EXTRA LIFE",
      items: [
        { name: "Hydrating Shampoo", image: "/images/producto11.jpeg" },
        { name: "Hydrating Mask", image: "/images/producto12.jpeg" },
        { name: "Hydrating Leave-in", image: "/images/producto13.jpeg" },
      ],
    }),
    []
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return PRODUCTS.filter((p: Product) => {
      const okLine = line === "ALL" ? true : p.line === line;
      const okQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.tags ?? []).some((t: string) => t.toLowerCase().includes(query));
      return okLine && okQuery;
    });
  }, [q, line]);

  const gridItems: GridItem[] = useMemo(() => {
    return [purifyingBundle, hydrationBundle, ...filtered];
  }, [purifyingBundle, hydrationBundle, filtered]);

  return (
    <main className="min-h-screen bg-[#ece8de] text-black">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
                Catálogo
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[56px] lg:text-[72px]">
                Productos
              </h1>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <p className="max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-black/65">
              Experiencia tipo e-commerce: filtra por líneas, busca productos y abre cada ficha para ver
              detalles. Sin compra: solo presentación.
            </p>
          </FadeUp>
        </div>

        {/* Toolbar */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setLine("ALL")}
              className={[
                "rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition",
                line === "ALL"
                  ? "border-black/35 bg-black/5"
                  : "border-black/15 bg-white/40 hover:border-black/25",
              ].join(" ")}
            >
              Todos
            </button>

            {LINES.map((l: string) => (
              <button
                key={l}
                onClick={() => setLine(l)}
                className={[
                  "rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition",
                  line === l
                    ? "border-black/35 bg-black/5"
                    : "border-black/15 bg-white/40 hover:border-black/25",
                ].join(" ")}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar (champú, rubio, reparación...)"
              className="h-12 w-full sm:w-[320px] rounded-full border border-black/15 bg-white/60 px-5 text-[12px] tracking-[0.06em] outline-none placeholder:text-black/45 focus:border-black/30"
            />
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-black/50 sm:block">
              {filtered.length} productos
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridItems.map((item: GridItem, i: number) => {
            /* ----------------------------- BUNDLE CARD ----------------------------- */
            if (isBundle(item)) {
              const cols = item.items.length === 3 ? "grid-cols-3" : "grid-cols-2";

              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveBundle(item)}
                  className="group text-left"
                  initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: i * 0.02, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                    <div className="p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                        {item.line} · Rutina
                      </p>

                      <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-black">
                        {item.title}
                      </p>

                      {item.subtitle ? (
                        <p className="mt-3 text-[12px] leading-6 tracking-[0.06em] text-black/60">
                          {item.subtitle}
                        </p>
                      ) : null}

                      <div className={`mt-5 grid gap-3 ${cols}`}>
                        {item.items.map((it) => (
                          <MiniProductTile key={it.name} name={it.name} image={it.image} />
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70">
                          Ver rutina
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            }

            /* ----------------------------- NORMAL PRODUCT CARD ----------------------------- */
            const p = item;

            return (
              <motion.button
                key={p.id}
                onClick={() => setActive(p)}
                className="group text-left"
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.02, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                  <div className="relative h-[360px] w-full">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                      {p.line} · {p.category}
                    </p>
                    <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-black">
                      {p.name}
                    </p>
                    <p className="mt-3 text-[12px] leading-6 tracking-[0.06em] text-black/60">
                      {p.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {(p.sizes ?? []).slice(0, 3).map((s: string) => (
                        <span
                          key={s}
                          className="rounded-full border border-black/15 bg-white/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70"
                        >
                          {s}
                        </span>
                      ))}
                      {(p.sizes?.length ?? 0) > 3 && (
                        <span className="rounded-full border border-black/15 bg-white/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
                          +{(p.sizes?.length ?? 0) - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ----------------------------- PRODUCT MODAL ----------------------------- */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-black/55 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-black/10 bg-[#ece8de] shadow-[0_40px_90px_rgba(0,0,0,0.35)]"
              initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid gap-0 sm:grid-cols-[1fr_1.05fr]">
                <div className="relative h-[280px] sm:h-full">
                  <Image src={active.image} alt={active.name} fill className="object-cover" />
                </div>

                <div className="p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                    {active.line} · {active.category}
                  </p>
                  <h3 className="mt-3 text-[22px] font-semibold uppercase tracking-[0.10em] text-black">
                    {active.name}
                  </h3>
                  <p className="mt-4 text-[12px] leading-6 tracking-[0.06em] text-black/65">
                    {active.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
                      Sizes
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(active.sizes ?? []).map((s: string) => (
                        <span
                          key={s}
                          className="rounded-full border border-black/15 bg-white/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/producto/${active.slug}`}
                      className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-black/25 bg-black/5 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-black hover:bg-black/10 transition"
                    >
                      View product
                    </Link>

                    <button
                      onClick={() => setActive(null)}
                      className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-black/15 bg-white/50 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/75 hover:text-black hover:border-black/25 transition"
                    >
                      Close
                    </button>
                  </div>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
                    Available in-store · No online checkout
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------- BUNDLE MODAL (SOLUCIÓN AQUÍ) ----------------------------- */}
      <AnimatePresence>
        {activeBundle && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center bg-black/55 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveBundle(null)}
          >
            <motion.div
              className="w-full max-w-4xl overflow-hidden rounded-3xl border border-black/10 bg-[#ece8de] shadow-[0_40px_90px_rgba(0,0,0,0.35)]"
              initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                    {activeBundle.line} · Rutina
                  </p>
                  <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.12em] text-black">
                    {activeBundle.title}
                  </p>
                </div>

                <button
                  onClick={() => setActiveBundle(null)}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/80 hover:text-black hover:border-black/25 transition"
                >
                  Close
                </button>
              </div>

              <div className="p-6">
                {activeBundle.subtitle ? (
                  <p className="text-[12px] leading-6 tracking-[0.06em] text-black/65">
                    {activeBundle.subtitle}
                  </p>
                ) : null}

                {/* ✅ grid en modal con packshot consistente */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeBundle.items.map((it) => (
                    <div
                      key={it.name}
                      className="overflow-hidden rounded-3xl border border-black/10 bg-white/45"
                    >
                      {/* ✅ marco alto + contain para NO recortar */}
                      <div className="relative h-[260px] w-full bg-white/70">
                        <Image
                          src={it.image}
                          alt={it.name}
                          fill
                          sizes="(max-width: 1024px) 50vw, 520px"
                          className="object-contain p-6 drop-shadow-[0_22px_22px_rgba(0,0,0,0.14)]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.65),rgba(255,255,255,0)_55%)]" />
                      </div>

                      <div className="p-5">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
                          {it.name}
                        </p>
                        {it.caption ? (
                          <p className="mt-2 text-[12px] leading-6 tracking-[0.06em] text-black/60">
                            {it.caption}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
                  Disponible en barbería · Sin compra online
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}