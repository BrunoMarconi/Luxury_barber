import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import { BlogCard } from "./BlogCard";

export const metadata: Metadata = {
  title: "Blog | Barbería Málaga",
  description:
    "Artículos y consejos sobre estilo masculino, cuidado del cabello y barbería en Málaga.",
  keywords: ["blog barbería Málaga", "consejos barbero"],
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-[#ece8de] text-black">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70">
              Blog
            </p>

            <h1 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[56px] lg:text-[72px]">
              Consejos y estilo
            </h1>
          </div>

          <p className="text-[12px] leading-6 tracking-[0.06em] text-black/65] max-w-[62ch]">
            Aprende a cuidar tu cabello, descubre tendencias y conoce
            los productos profesionales que utilizamos en barbería.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-[14px] text-black/60">No hay posts disponibles aún.</p>
          </div>
        )}

      </div>
    </main>
  );
}