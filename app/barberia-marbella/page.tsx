import type { Metadata } from "next";
import BarberiaMarbellaClient from "./BarberiaMarbellaClient";

export const metadata: Metadata = {
  title: "Barbería en Marbella | Corte, Barba y Servicios Esenciales",
  description:
    "Servicios de barbería en Marbella con técnica, precisión y atención al detalle. Corte de pelo, arreglo de barba y servicio combinado. Reserva online.",
  keywords: [
    "barbería Marbella",
    "corte de pelo Marbella",
    "arreglo de barba Marbella",
    "barbero Marbella",
    "servicios barbería Marbella",
  ],
};

export default function BarberiaMarbellaPag() {
  return <BarberiaMarbellaClient />;
}
