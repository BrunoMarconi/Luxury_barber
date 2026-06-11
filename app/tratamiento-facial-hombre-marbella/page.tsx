import type { Metadata } from "next";
import TratamientoFacialClient from "./TratamientoFacialClient";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Tratamiento Facial Hombre Marbella | Cuidado de Piel Masculino Premium",
  description:
    "Tratamiento facial para hombre en Marbella con diagnóstico personalizado, tecnología Foreo y protocolos adaptados a tu piel. Reserva tu cita ahora.",
  keywords: [
    "tratamiento facial hombre Marbella",
    "limpieza facial hombre Marbella",
    "cuidado de la piel hombre Marbella",
    "facial masculino Marbella",
    "protocolos faciales masculinos Marbella",
    "barbería facial Marbella",
    "Foreo facial Marbella",
    "skincare hombre Marbella",
  ],
  openGraph: {
    title: "Tratamiento Facial Hombre Marbella | Diagnóstico + Tecnología",
    description:
      "Tratamiento facial masculino en Marbella con diagnóstico real, tecnología Foreo y protocolos personalizados. Mejora visible desde la primera sesión.",
    images: ["/images/Foto5_1.jpeg"],
  },
};

export default async function TratamientoFacialPage() {
  const googleReviews = await fetchGoogleReviews();
  return <TratamientoFacialClient googleReviews={googleReviews} />;
}
