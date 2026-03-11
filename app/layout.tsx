import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// default metadata used across all pages; individual pages can override/extend
export const metadata: Metadata = {
  title: {
    default: "El Barbero Profesional",
    template: "%s | Barbería Málaga",
  },
  description:
    "Barbería en Málaga – servicios de corte, afeitado y estilo de alta calidad con reservas online.",
  keywords: [
    "barbería Málaga",
    "barbero Málaga",
    "corte de pelo Málaga",
    "barbershop Málaga",
    "barbero profesional",
    "barbería de lujo",
  ],
  metadataBase: new URL("https://theprofessionalbarber.es"),
  openGraph: {
    title: "El Barbero Profesional – Barbería en Málaga",
    description:
      "Reserva tu cita en la barbería más exclusiva de Málaga. Cortes, afeitados y tratamientos con estilo personalizado.",
    url: "https://theprofessionalbarber.es",
    siteName: "El Barbero Profesional",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barbería El Barbero Profesional en Málaga",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Barbero Profesional – Barbería en Málaga",
    description:
      "Reservas abiertas en la barbería más selecta de Málaga. Descubre nuestros servicios.",
    images: ["/images/og-image.jpg"],
    creator: "@juank.alpha.es",
  },
  authors: [{ name: "El Barbero Profesional" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Header />
        {children}
        {/* page-specific sections will be rendered by each page component */}
        <Footer />
        <SpeedInsights />
        {/* structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              name: "El Barbero Profesional",
              url: "https://your-domain.com",
              telephone: "+34 672 516 317",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C. Eugenio Gross 43",
                addressLocality: "Málaga",
                addressRegion: "Andalucía",
                postalCode: "29001",
                addressCountry: "ES",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "10:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
