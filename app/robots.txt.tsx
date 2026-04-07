export const runtime = "edge";

export async function GET(request: Request) {
  // construct base URL from host header so we work in dev and prod
  const host = request.headers.get("host") || "theprofessionalbarber.es";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const base = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
  const sitemapUrl = `${base}/sitemap.xml`;
  const txt = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;
  return new Response(txt, {
    headers: { "Content-Type": "text/plain" },
  });
}
