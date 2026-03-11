export const runtime = "edge";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://theprofessionalbarber.es";
  const sitemapUrl = `${base}/sitemap.xml`;
  const txt = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;
  return new Response(txt, {
    headers: { "Content-Type": "text/plain" },
  });
}
