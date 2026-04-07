"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/lib/posts";

export function BlogCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link href={`/blog/${post.slug}`} className="group">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
          <div className="p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
              {post.category}
            </p>

            <h2 className="mt-3 text-[16px] font-semibold uppercase leading-[1.1] tracking-tight text-black group-hover:text-black/80 transition">
              {post.title}
            </h2>

            <p className="mt-3 text-[12px] leading-6 tracking-[0.06em] text-black/65">
              {post.excerpt}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/50">
                {new Date(post.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70 group-hover:text-black transition">
                Leer →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
