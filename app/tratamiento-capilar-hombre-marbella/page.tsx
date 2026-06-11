import type { Metadata } from "next";
import TratamientoCapilarClient from "./TratamientoCapilarClient";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Tratamiento Capilar Hombre en Marbella | Diagnóstico y Cuidado Profesional",
  description:
    "Tratamiento capilar para hombre en Marbella con diagnóstico personalizado. Soluciones para caída, grasa, caspa y cabello dañado. Reserva tu cita.",
  keywords: [
    "tratamiento capilar hombre Marbella",
    "tratamiento capilar Marbella",
    "cuidado capilar hombre Marbella",
    "caída del cabello Marbella",
    "cuero cabelludo Marbella",
    "diagnóstico capilar Marbella",
  ],
};

export default async function TratamientoCapilarPage() {
  const googleReviews = await fetchGoogleReviews();
  return <TratamientoCapilarClient googleReviews={googleReviews} />;
}
