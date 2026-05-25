import type { Metadata } from "next";
import AccessClient from "./AccessClient";

export const metadata: Metadata = {
  title: "Private Access | The Professional Barber Marbella",
  description:
    "Experiencias privadas de imagen masculina premium en Marbella. Visagismo, análisis facial y construcción sofisticada de presencia masculina.",
  openGraph: {
    title: "Private Access | The Professional Barber Marbella",
    description:
      "Experiencias privadas de imagen masculina premium en Marbella.",
    url: "https://www.theprofessionalbarber.es/access",
    images: [{ url: "/images/experiencia-barberia-lujo-marbella.jpeg" }],
  },
};

export default function AccessPage() {
  return <AccessClient />;
}
