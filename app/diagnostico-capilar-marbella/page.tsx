import type { Metadata } from "next";
import DiagnosticoClient from "./DiagnosticoClient";

export const metadata: Metadata = {
  title: "Diagnóstico Capilar en Marbella | Análisis Profesional del Cuero Cabelludo",
  description:
    "Diagnóstico capilar profesional en Marbella. Analizamos el estado de tu cuero cabelludo, crecimiento y posibles problemas para darte una solución real y personalizada.",
  keywords: [
    "diagnóstico capilar Marbella",
    "análisis capilar Marbella",
    "caída de cabello Marbella",
    "cuero cabelludo Marbella",
    "tratamiento capilar Marbella",
  ],
};

export default function DiagnosticoPage() {
  return <DiagnosticoClient />;
}
