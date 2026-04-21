import type { Metadata } from "next";
import CorteClient from "./CorteClient";

export const metadata: Metadata = {
  title: "Corte de Cabello en Marbella | Asesoría Personalizada Premium | Reserva Online",
  description:
    "Corte de cabello en Marbella con asesoría personalizada, diagnóstico capilar y visagismo. Servicio premium para hombres. Reserva tu cita ahora.",
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
    title: "Corte de Cabello en Marbella con Asesoría Personalizada Premium",
    description:
      "Corte de cabello en Marbella con diagnóstico capilar, visagismo y servicio premium. Reserva online.",
    images: ["/images/Foto1_1.jpeg"],
  },
};

export default function CorteDePeloPage() {
  return <CorteClient />;
}
