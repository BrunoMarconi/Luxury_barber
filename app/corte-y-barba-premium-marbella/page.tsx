import type { Metadata } from "next";
import CorteBarbaClient from "./CorteBarbaClient";

export const metadata: Metadata = {
  title: "Barbería en Marbella | Corte y Barba Premium | Reserva Online",
  description:
    "Corte de cabello y barba en Marbella con diagnóstico, diseño personalizado y tecnología profesional. Reserva tu cita ahora.",
  keywords: [
    "corte de cabello y barba Marbella",
    "barbería en Marbella",
    "corte y barba Marbella",
    "diseño de barba Marbella",
    "barbero profesional Marbella",
    "barbería premium Marbella",
    "barba personalizada Marbella",
    "visagismo barba Marbella",
    "diagnóstico capilar Marbella",
  ],
  openGraph: {
    title: "Barbería en Marbella | Corte y Barba Premium",
    description:
      "Corte de cabello y barba en Marbella con diagnóstico personalizado, visagismo y tecnología profesional. Reserva online.",
    images: ["/images/Foto1_1.jpeg"],
  },
};

export default function CorteBarbaPage() {
  return <CorteBarbaClient />;
}
