import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getPosts, type PostDetail } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogImage } from "../BlogImage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return {};
  }
  const url = `https://your-domain.com/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      locale: "es_ES",
      images: [
        {
          url: post.cover || "/images/og-image.jpg",
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover || "/images/og-image.jpg"],
    },
  };
}

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: PostDetail | null = getPost(slug);

  if (!post) return notFound();

  const relatedBySlug: Record<string, string[]> = {
    "bienvenida": [
      "visagismo",
      "como-pedir-corte-pelo-barberia-guia-masculina",
      "cabello-masculino-cuidado-rutina",
    ],
    "visagismo": [
      "como-pedir-corte-pelo-barberia-guia-masculina",
      "tendencias-cortes-pelo-masculino-2026",
      "barba-masculina-guia-cuidado-estilo",
    ],
    "como-pedir-corte-pelo-barberia-guia-masculina": [
      "visagismo",
      "cada-cuanto-cortarse-pelo-hombre-guia",
      "cabello-masculino-cuidado-rutina",
    ],
    "cabello-masculino-cuidado-rutina": [
      "producto-cabello-guia-masculina",
      "como-mantener-peinado-todo-el-dia",
      "cada-cuanto-cortarse-pelo-hombre-guia",
    ],
    "cada-cuanto-cortarse-pelo-hombre-guia": [
      "cabello-masculino-cuidado-rutina",
      "como-pedir-corte-pelo-barberia-guia-masculina",
      "tendencias-cortes-pelo-masculino-2026",
    ],
    "como-mantener-peinado-todo-el-dia": [
      "producto-cabello-guia-masculina",
      "peinados-faciles-hombres-ocupados",
      "cabello-masculino-cuidado-rutina",
    ],
    "producto-cabello-guia-masculina": [
      "como-mantener-peinado-todo-el-dia",
      "cabello-masculino-cuidado-rutina",
      "tendencias-cortes-pelo-masculino-2026",
    ],
    "peinados-faciles-hombres-ocupados": [
      "como-mantener-peinado-todo-el-dia",
      "cabello-masculino-cuidado-rutina",
      "tendencias-cortes-pelo-masculino-2026",
    ],
    "tendencias-cortes-pelo-masculino-2026": [
      "visagismo",
      "como-pedir-corte-pelo-barberia-guia-masculina",
      "producto-cabello-guia-masculina",
    ],
    "barba-masculina-guia-cuidado-estilo": [
      "visagismo",
      "como-pedir-corte-pelo-barberia-guia-masculina",
      "tendencias-cortes-pelo-masculino-2026",
    ],
    "uppercut-peinado-cabello-sano": [
      "como-mantener-peinado-todo-el-dia",
      "producto-cabello-guia-masculina",
      "cabello-masculino-cuidado-rutina",
    ],
    "errores-comunes-pomada-polvo-spray": [
      "uppercut-peinado-cabello-sano",
      "como-mantener-peinado-todo-el-dia",
      "producto-cabello-guia-masculina",
    ],
  };

  const relatedSlugs = relatedBySlug[slug] || getPosts().map((p) => p.slug).filter((s) => s !== slug).slice(0, 3);
  const relatedPosts = getPosts().filter((p) => relatedSlugs.includes(p.slug));

  return (
    <main className="min-h-screen bg-[#ece8de] text-black">
      <article className="mx-auto max-w-3xl px-6 pt-28 pb-24">

        <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black/75">
          <Link href="/blog" className="text-blue-700 underline hover:text-blue-900">
            ← Volver al blog completo
          </Link>
        </div>

        <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-black/60">
          {post.category}
        </p>

        <h1 className="mt-3 text-[46px] font-semibold uppercase leading-[1]">
          {post.title}
        </h1>

        {relatedPosts.length > 0 && (
          <div className="mt-6 rounded-xl border border-slate-300/40 bg-white/80 p-4 text-sm">
            <p className="font-semibold uppercase tracking-[0.14em] text-slate-700">Artículos relacionados</p>
            <ul className="mt-2 list-disc pl-5 text-slate-900">
              {relatedPosts.map((rp) => (
                <li key={rp.slug}>
                  <a href={`/blog/${rp.slug}`} className="text-blue-700 underline hover:text-blue-900">
                    {rp.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 article-content prose prose-neutral prose-a:text-blue-700 prose-a:underline prose-a:decoration-sky-500/40 prose-a:decoration-2 max-w-none">
          <MDXRemote 
            source={post.content} 
            components={{ BlogImage }}
          />
        </div>

      </article>
    </main>
  );
}