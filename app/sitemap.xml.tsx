import { getPosts } from "@/lib/posts";

export const runtime = "edge";

export async function GET() {
  // prefer an env var so it works in dev and production
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://theprofessionalbarber.com";
  const posts = getPosts();

  // paths without leading slash – we'll concatenate later
  const staticUrls = [
    "",
    "contact",
    "catalogo",
    "blog",
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  staticUrls.forEach((path) => {
    const loc = `${baseUrl}/${path}`.replace(/\/+$/g, "");
    xml += `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
  </url>
`;
  });

  posts.forEach((post) => {
    xml += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
  </url>
`;
  });

  xml += "</urlset>";

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
