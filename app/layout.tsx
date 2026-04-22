import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    default: "Barbería en Marbella | Corte de Pelo Hombre Premium | Reserva Online",
    template: "%s | Barbería en Marbella",
  },
  description:
    "Barbería en Marbella especializada en corte de pelo hombre premium. Barbero profesional con más de 10 años de experiencia y especialización en visagismo. Reserva tu cita online.",
  keywords: [
    "barbería Marbella",
    "barbero Marbella",
    "corte de pelo hombre Marbella",
    "barbero profesional Marbella",
    "barbería de lujo Marbella",
    "visagismo Marbella",
    "barbería premium Marbella",
    "corte masculino Marbella",
  ],
  metadataBase: new URL("https://theprofessionalbarber.es"),
  openGraph: {
    title: "Barbería en Marbella | El Barbero Profesional",
    description:
      "Reserva tu cita en la barbería más exclusiva de Marbella. Corte de pelo hombre premium, afeitado y visagismo con barbero profesional.",
    url: "https://theprofessionalbarber.es",
    siteName: "El Barbero Profesional",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barbería El Barbero Profesional en Marbella",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbería en Marbella | El Barbero Profesional",
    description:
      "Reservas abiertas en la barbería más selecta de Marbella. Corte de pelo hombre premium y visagismo.",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W0JW367P9G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W0JW367P9G');
          `}
        </Script>
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
              url: "https://theprofessionalbarber.es",
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
