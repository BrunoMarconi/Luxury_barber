export const runtime = "edge";

export async function GET() {
  const sitemapUrl = "https://theprofessionalbarber.es/sitemap.xml";
  const txt = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;
  return new Response(txt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
