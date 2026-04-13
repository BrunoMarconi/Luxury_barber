import type { Metadata } from "next";
import CorteClient from "./CorteClient";

export const metadata: Metadata = {
  title: "Barbería en Marbella | Corte de Pelo Hombre Premium | Reserva Online",
  description:
    "Corte de pelo hombre en Marbella con asesoría personalizada, diagnóstico capilar y servicio premium. Reserva tu cita ahora.",
  keywords: [
    "corte de pelo hombre Marbella",
    "barbería Marbella",
    "barbero profesional Marbella",
    "corte masculino Marbella",
    "diagnóstico capilar Marbella",
    "visagismo Marbella",
  ],
  openGraph: {
    title: "Corte de Pelo Hombre en Marbella | Asesoría Premium",
    description:
      "Corte de pelo hombre en Marbella con diagnóstico capilar, visagismo y servicio premium. Reserva online.",
    images: ["/images/Foto1_1.jpeg"],
  },
};

export default function CorteDePeloPage() {
  return <CorteClient />;
}
