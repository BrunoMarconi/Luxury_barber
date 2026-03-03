"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, LINES, type Product } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";

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

/** --- EXTRA CARD (la lámina horizontal) --- */
type BoardCard = {
  type: "board";
  id: string;
  title: string;
  subtitle?: string;
  image: string; // ruta en /public
};

type GridItem = Product | BoardCard;

function isBoard(item: GridItem): item is BoardCard {
  return (item as BoardCard).type === "board";
}

export default function CatalogPage() {
  const [q, setQ] = useState("");
  const [line, setLine] = useState<string>("ALL");
  const [active, setActive] = useState<Product | null>(null);

  // modal para la lámina
  const [boardOpen, setBoardOpen] = useState(false);

  // 👉 Pon tu imagen en: /public/catalog/purifying-board.png
  const board: BoardCard = useMemo(
    () => ({
      type: "board",
      id: "purifying-board",
      title: "Tratamiento Purificante",
      subtitle: "Lámina de presentación",
      image: "/images/Producto2.jpeg",
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

  // Mezclamos la lámina como un item más del grid
  const gridItems: GridItem[] = useMemo(() => {
    // La ponemos siempre primera, aunque haya filtros/búsqueda
    // Si quieres que SOLO aparezca en una línea concreta, dímelo y lo ajusto.
    return [board, ...filtered];
  }, [board, filtered]);

  return (
    <main className="min-h-screen bg-[#ece8de] text-black">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <FadeUp>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
                Catalogue
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[56px] lg:text-[72px]">
                Products
              </h1>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <p className="max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-black/65">
              Experiencia tipo e-commerce: explora por líneas, busca productos y abre cada ficha para ver
              tamaños y detalles. Sin compra: solo selección y presentación.
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
                line === "ALL" ? "border-black/35 bg-black/5" : "border-black/15 bg-white/40 hover:border-black/25",
              ].join(" ")}
            >
              All
            </button>

            {LINES.map((l: string) => (
              <button
                key={l}
                onClick={() => setLine(l)}
                className={[
                  "rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition",
                  line === l ? "border-black/35 bg-black/5" : "border-black/15 bg-white/40 hover:border-black/25",
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
              placeholder="Search (shampoo, blonde, repair...)"
              className="h-12 w-full sm:w-[320px] rounded-full border border-black/15 bg-white/60 px-5 text-[12px] tracking-[0.06em] outline-none placeholder:text-black/45 focus:border-black/30"
            />
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-black/50 sm:block">
              {filtered.length} items
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridItems.map((item: GridItem, i: number) => {
            // --- CARD: BOARD (lámina) ---
            if (isBoard(item)) {
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setBoardOpen(true)}
                  className="group text-left"
                  initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: i * 0.02, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                    <div className="relative h-[360px] w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        placeholder="empty"
                        className="object-cover transition duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
                    </div>

                    <div className="p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                        Presentation · Board
                      </p>
                      <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-black">
                        {item.title}
                      </p>
                      {item.subtitle ? (
                        <p className="mt-3 text-[12px] leading-6 tracking-[0.06em] text-black/60">
                          {item.subtitle}
                        </p>
                      ) : null}

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-black/15 bg-white/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/70">
                          View full board
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            }

            // --- CARD: PRODUCT (normal) ---
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
                      placeholder="empty"
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

      {/* Quick View Modal (PRODUCT) */}
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

      {/* Modal (BOARD / LÁMINA) */}
      <AnimatePresence>
        {boardOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center bg-black/65 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBoardOpen(false)}
          >
            <motion.div
              className="w-full max-w-6xl overflow-hidden rounded-3xl border border-black/10 bg-[#ece8de] shadow-[0_40px_90px_rgba(0,0,0,0.35)]"
              initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                    Presentation
                  </p>
                  <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.12em] text-black">
                    Tratamiento Purificante
                  </p>
                </div>

                <button
                  onClick={() => setBoardOpen(false)}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-black/15 bg-white/50 px-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/75 hover:text-black hover:border-black/25 transition"
                >
                  Close
                </button>
              </div>

              {/* Contenedor scrolleable para la imagen grande */}
              <div className="max-h-[78vh] overflow-auto p-4 sm:p-6">
                <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white/40">
                  {/* 
                    - Usamos un aspect ratio ancho para que se vea “tipo lámina”.
                    - Si tu imagen tiene otra proporción, cambia aspect-[21/9] por el ratio que te convenga.
                  */}
                  <div className="relative w-full aspect-[9/16]">
                    <Image
                      src={board.image}
                      alt="Tratamiento Purificante board"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 1200px"
                      priority
                    />
                  </div>
                </div>

                <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black/50">
                  Tip: puedes hacer scroll si tu pantalla es pequeña.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}