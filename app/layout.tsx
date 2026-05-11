import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Header from "./header";
import Footer from "./Footer";
import Analytics from "@/components/Analytics";
import { SpeedInsights } from "@vercel/speed-insights/next"


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
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
  verification: {
    google: "_Q840UH0Q123EINVdWheQidpFbrY4Pj4kv96QtoT8zQ",
  },
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
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9C5HQB6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9C5HQB6');`}
        </Script>
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
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Header />
        {children}
        {/* page-specific sections will be rendered by each page component */}
        <Footer />
        <SpeedInsights />
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/34617853179?text=Hola,%20quiero%20reservar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F2A44] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-[#1a3d5c] hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
        >
          <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        {/* structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              name: "El Barbero Profesional",
              url: "https://theprofessionalbarber.es",
              telephone: "+34 617 853 179",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C. Padre Enrique Cantos, 2",
                addressLocality: "Marbella",
                addressRegion: "Málaga",
                postalCode: "29602",
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
