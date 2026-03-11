import { getPosts } from "@/lib/posts";

// use node runtime so getPosts (fs) works
export const runtime = "nodejs";

export async function GET(request: Request) {
  const host = request.headers.get("host") || "theprofessionalbarber.es";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
  const posts = getPosts();

  const staticUrls = ["", "contact", "catalogo", "blog"];

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
