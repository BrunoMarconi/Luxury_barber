import type { Metadata } from "next";
import BlackAccessClient from "./BlackAccessClient";

export const metadata: Metadata = {
  title: "Black Access Marbella | Experiencia Privada de Imagen Masculina",
  description:
    "Black Access es una experiencia privada de imagen masculina en Marbella. Un único turno privado los domingos para trabajar cabello, barba y piel como una sola dirección. Alpha Signature Marbella.",
  keywords: [
    "Black Access Marbella",
    "experiencia privada masculina Marbella",
    "barbería premium Marbella",
    "imagen masculina Marbella",
    "cuidado masculino premium",
    "Alpha Signature Marbella",
  ],
  alternates: {
    canonical: "https://www.theprofessionalbarber.es/black-access-marbella",
  },
  openGraph: {
    title: "Black Access | The Professional Barber Marbella",
    description:
      "Una experiencia privada de imagen masculina. Un solo turno. Toda la atención.",
    url: "https://www.theprofessionalbarber.es/black-access-marbella",
    images: [{ url: "/images/access2.jpeg" }],
    locale: "es_ES",
    type: "website",
  },
};

export default function BlackAccessPage() {
  return <BlackAccessClient />;
}
