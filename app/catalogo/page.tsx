"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, LINES, type Product } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------- helpers ----------------------------- */

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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

/* ----------------------------- types ----------------------------- */

type TreatmentHeader = {
  type: "treatment-header";
  id: string;
  title: string;
  subtitle?: string;
  line?: string;
};

type TreatmentProduct = {
  type: "treatment-product";
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  line: string;
  image: string;
  sizes?: string[];
};

type GridItem = Product | TreatmentHeader | TreatmentProduct;

function isHeader(item: GridItem): item is TreatmentHeader {
  return (item as TreatmentHeader).type === "treatment-header";
}
function isTreatmentProduct(item: GridItem): item is TreatmentProduct {
  return (item as TreatmentProduct).type === "treatment-product";
}

/* ----------------------------- UI: product card ----------------------------- */

function ProductCard({
  titleTop,
  name,
  description,
  image,
  chips,
  onClick,
  contain = false,
  delay = 0,
}: {
  titleTop: string;
  name: string;
  description: string;
  image: string;
  chips?: string[];
  onClick?: () => void;
  contain?: boolean;
  delay?: number;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="group text-left"
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.8, 0.2, 1] }}
      type="button"
    >
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
        {/* Stage consistente para packshots (contain) */}
        <div
          className={[
            "relative w-full",
            // altura responsive para que en móvil no “se coma” el texto
            "h-[260px] sm:h-[300px] lg:h-[320px]",
            contain
              ? "bg-[linear-gradient(to_bottom,#fbfaf7,#f1efe8)]"
              : "bg-white/55",
          ].join(" ")}
        >
          {/* “canvas” interno para controlar escala sin cortes */}
          <div className={contain ? "absolute inset-0 p-7 sm:p-8" : "absolute inset-0"}>
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={[
                contain ? "object-contain" : "object-cover",
                "transition duration-700 group-hover:scale-[1.02]",
                contain
                  ? "drop-shadow-[0_26px_26px_rgba(0,0,0,0.16)]"
                  : "",
              ].join(" ")}
            />
          </div>

          {/* brillo suave (no tapa el producto) */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.55),rgba(255,255,255,0)_55%)]" />

          {/* micro borde inferior para “separar” mejor */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/10" />
        </div>

        <div className="p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
            {titleTop}
          </p>

          <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-black">
            {name}
          </p>

          <p className="mt-3 text-[12px] leading-6 tracking-[0.06em] text-black/60">
            {description}
          </p>

          {chips?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.slice(0, 3).map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-black/15 bg-white/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70"
                >
                  {c}
                </span>
              ))}
              {chips.length > 3 && (
                <span className="rounded-full border border-black/15 bg-white/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
                  +{chips.length - 3}
                </span>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </motion.button>
  );
}

/* ----------------------------- page ----------------------------- */

export default function CatalogPage() {
  const [q, setQ] = useState("");
  const [line, setLine] = useState<string>("ALL");

  // Modal unificado (para productos normales + treatment products)
  const [active, setActive] = useState<
    | (Product & { __mode?: "normal" })
    | (TreatmentProduct & { __mode?: "treatment" })
    | null
  >(null);

  /* ----------------------------- treatments ----------------------------- */

  const treatments: GridItem[] = useMemo(() => {
    const purifyingHeader: TreatmentHeader = {
      type: "treatment-header",
      id: "treat-purifying",
      title: "Tratamiento Purificante",
      subtitle: "Rutina completa (4 productos)",
      line: "EXTRA LIFE",
    };

    const purifyingProducts: TreatmentProduct[] = [
      {
        type: "treatment-product",
        id: "treat-purifying-1",
        slug: "purifying-shampoo",
        name: "Purifying Shampoo",
        description: "Champú purificante para limpieza profunda del cuero cabelludo.",
        category: "Treatment",
        line: "EXTRA LIFE",
        image: "/images/producto7.jpg",
        sizes: ["250 ml", "500 ml"],
      },
      {
        type: "treatment-product",
        id: "treat-purifying-2",
        slug: "purifying-treatment",
        name: "Purifying Treatment",
        description: "Tratamiento intensivo para equilibrar y purificar.",
        category: "Treatment",
        line: "EXTRA LIFE",
        image: "/images/producto8_1.webp",
        sizes: ["200 ml"],
      },
      {
        type: "treatment-product",
        id: "treat-purifying-3",
        slug: "scalp-cleanser",
        name: "Scalp Cleanser",
        description: "Limpieza específica de cuero cabelludo para sensación fresca.",
        category: "Treatment",
        line: "EXTRA LIFE",
        image: "/images/producto9.jpg",
        sizes: ["150 ml"],
      },
      {
        type: "treatment-product",
        id: "treat-purifying-4",
        slug: "purifying-leave-in",
        name: "Purifying Leave-in Lotion",
        description: "Loción sin aclarado para mantener el cuero cabelludo equilibrado.",
        category: "Treatment",
        line: "EXTRA LIFE",
        image: "/images/producto10.jpeg",
        sizes: ["100 ml"],
      },
    ];

    const blondeHeader: TreatmentHeader = {
      type: "treatment-header",
      id: "treat-blonde",
      title: "Tratamiento para cabellos rubios",
      subtitle: "Rutina completa (3 productos)",
      line: "EXTRA LIFE",
    };

    const blondeProducts: TreatmentProduct[] = [
      {
        type: "treatment-product",
        id: "treat-blonde-1",
        slug: "hydrating-shampoo",
        name: "Hydrating Shampoo",
        description: "Champú hidratante para mantener brillo y suavidad.",
        category: "Treatment",
        line: "EXTRA LIFE",
        image: "/images/producto11.jpeg",
        sizes: ["250 ml"],
      },
      {
        type: "treatment-product",
        id: "treat-blonde-2",
        slug: "hydrating-mask",
        name: "Hydrating Mask",
        description: "Mascarilla hidratante para reparar y proteger el color.",
        category: "Treatment",
        line: "EXTRA LIFE",
        image: "/images/producto12.jpeg",
        sizes: ["200 ml"],
      },
      {
        type: "treatment-product",
        id: "treat-blonde-3",
        slug: "hydrating-leave-in",
        name: "Hydrating Leave-in",
        description: "Leave-in para control, hidratación y acabado premium.",
        category: "Treatment",
        line: "EXTRA LIFE",
        image: "/images/producto13.jpeg",
        sizes: ["100 ml"],
      },
    ];

    return [purifyingHeader, ...purifyingProducts, blondeHeader, ...blondeProducts];
  }, []);

  /* ----------------------------- products filter ----------------------------- */

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
    // Si NO quieres que salgan tratamientos cuando filtras otra cosa:
    // if (line !== "ALL" && line !== "EXTRA LIFE") return filtered;

    // Si estás buscando, suele ser mejor ocultar headers (opcional):
    // if (q.trim()) return filtered;

    return [...treatments, ...filtered];
  }, [treatments, filtered /*, line, q */]);

  const firstNormalProductIndex = useMemo(() => {
    return gridItems.findIndex((it) => !isHeader(it) && !isTreatmentProduct(it));
  }, [gridItems]);

  /* ----------------------------- render ----------------------------- */

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
              type="button"
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
                type="button"
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
          {gridItems.map((item, i) => {
            // Separador antes de productos normales
            if (i === firstNormalProductIndex) {
              return (
                <motion.div
                  key={`sep-${i}`}
                  className="sm:col-span-2 lg:col-span-3"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="mt-2 mb-2 flex items-center justify-between rounded-2xl border-t border-black/10 pt-6">
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/70">
                      Productos individuales
                    </h3>
                    <p className="hidden text-[11px] text-black/50 sm:block">
                      Tratamientos arriba · resto del catálogo abajo
                    </p>
                  </div>
                </motion.div>
              );
            }

            // Header de tratamiento
            if (isHeader(item)) {
              return (
                <motion.div
                  key={item.id}
                  className="sm:col-span-2 lg:col-span-3"
                  initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.01, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="rounded-3xl border border-black/10 bg-white/35 px-6 py-6 sm:px-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/55">
                      {item.line ? `${item.line} · ` : ""}Tratamiento
                    </p>

                    <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <p className="text-[22px] font-semibold uppercase tracking-[0.10em] text-black">
                        {item.title}
                      </p>
                      {item.subtitle ? (
                        <p className="text-[12px] leading-6 tracking-[0.06em] text-black/60">
                          {item.subtitle}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Treatment product (packshot contain)
            if (isTreatmentProduct(item)) {
              return (
                <ProductCard
                  key={item.id}
                  titleTop={`${item.line} · ${item.category}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  chips={item.sizes}
                  contain
                  delay={i * 0.02}
                  onClick={() => setActive({ ...item, __mode: "treatment" })}
                />
              );
            }

            // Normal product
            const p = item as Product;
            return (
              <ProductCard
                key={p.id}
                titleTop={`${p.line} · ${p.category}`}
                name={p.name}
                description={p.description}
                image={p.image}
                chips={p.sizes}
                contain={false}
                delay={i * 0.02}
                onClick={() => setActive({ ...p, __mode: "normal" })}
              />
            );
          })}
        </div>
      </div>

      {/* ----------------------------- MODAL (unificado) ----------------------------- */}
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
                <div
                  className={[
                    "relative h-[280px] sm:h-full",
                    active.__mode === "treatment" ? "bg-white/70" : "",
                  ].join(" ")}
                >
                  <Image
                    src={(active as any).image}
                    alt={(active as any).name}
                    fill
                    className={[
                      active.__mode === "treatment"
                        ? "object-contain p-10 drop-shadow-[0_26px_26px_rgba(0,0,0,0.16)]"
                        : "object-cover",
                    ].join(" ")}
                  />
                </div>

                <div className="p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                    {(active as any).line} · {(active as any).category}
                  </p>

                  <h3 className="mt-3 text-[22px] font-semibold uppercase tracking-[0.10em] text-black">
                    {(active as any).name}
                  </h3>

                  <p className="mt-4 text-[12px] leading-6 tracking-[0.06em] text-black/65">
                    {(active as any).description}
                  </p>

                  {(active as any).sizes?.length ? (
                    <div className="mt-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
                        Sizes
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(active as any).sizes.map((s: string) => (
                          <span
                            key={s}
                            className="rounded-full border border-black/15 bg-white/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {/* Solo para productos normales (si tienes ruta /producto/[slug]) */}
                    {active.__mode === "normal" ? (
                      <Link
                        href={`/producto/${(active as any).slug}`}
                        className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-black/25 bg-black/5 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-black hover:bg-black/10 transition"
                      >
                        View product
                      </Link>
                    ) : null}

                    <button
                      onClick={() => setActive(null)}
                      className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-black/15 bg-white/50 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/75 hover:text-black hover:border-black/25 transition"
                      type="button"
                    >
                      Close
                    </button>
                  </div>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
                    Disponible en barbería · Sin compra online
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}