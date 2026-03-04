import { getPost, getPosts, type PostDetail } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogImage } from "../BlogImage";

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

  return (
    <main className="min-h-screen bg-[#ece8de] text-black">
      <article className="mx-auto max-w-3xl px-6 pt-28 pb-24">

        <p className="text-[10px] uppercase tracking-[0.28em] text-black/60">
          {post.category}
        </p>

        <h1 className="mt-3 text-[46px] font-semibold uppercase leading-[1]">
          {post.title}
        </h1>

        <div className="mt-10 prose prose-neutral max-w-none">
          <MDXRemote 
            source={post.content} 
            components={{ BlogImage }}
          />
        </div>

      </article>
    </main>
  );
}