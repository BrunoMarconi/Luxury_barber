import type { Metadata } from "next";
import BarbaClient from "./BarbaClient";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Arreglo de Barba en Marbella | Diseño Facial y Cuidado de Piel",
  description:
    "Arreglo de barba en Marbella con diseño personalizado según tu estructura facial. Perfilado técnico, cuidado de la piel y tecnología Foreo para un resultado que dura.",
  keywords: [
    "arreglo de barba Marbella",
    "diseño de barba Marbella",
    "barbero barba Marbella",
    "perfilado barba Marbella",
    "cuidado barba Marbella",
  ],
};

export default async function BarbaPage() {
  const googleReviews = await fetchGoogleReviews();
  return <BarbaClient googleReviews={googleReviews} />;
}
