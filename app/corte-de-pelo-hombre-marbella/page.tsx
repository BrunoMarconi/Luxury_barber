import type { Metadata } from "next";
import CorteClient from "./CorteClient";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Corte de pelo premium para hombre en Marbella | The Professional Barber",
  description:
    "Corte de pelo premium para hombre en Marbella. Diagnóstico facial, diseño personalizado y ejecución de alta precisión. Reserva tu cita.",
  keywords: [
    "corte de cabello en Marbella",
    "corte de pelo hombre Marbella",
    "barbería en Marbella",
    "barbero en Marbella",
    "corte masculino en Marbella",
    "barbería premium en Marbella",
    "barbero profesional Marbella",
    "diagnóstico capilar Marbella",
    "visagismo Marbella",
    "lavado capilar Marbella",
  ],
  openGraph: {
    title: "Corte de pelo premium para hombre en Marbella",
    description:
      "Corte de pelo premium para hombre en Marbella. Diagnóstico facial, visagismo y precisión técnica. Reserva online.",
    images: ["/images/Foto1_1.jpeg"],
  },
};

export default async function CorteDePeloPage() {
  const googleReviews = await fetchGoogleReviews();
  return <CorteClient googleReviews={googleReviews} />;
}
