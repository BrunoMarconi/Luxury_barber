import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
};

export function getPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fullPath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category,
      cover: data.cover,
    };
  });

  return posts.sort((a, b) => {
    // bienvenida siempre primero
    if (a.slug === "bienvenida") return -1;
    if (b.slug === "bienvenida") return 1;
    // luego por fecha descendente (más recientes primero)
    return a.date > b.date ? -1 : 1;
  });
}

export type PostDetail = Post & {
  content: string;
};

export function getPost(slug: string): PostDetail | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      category: data.category || "",
      cover: data.cover || "",
      content,
    };
  } catch (error) {
    return null;
  }
}