import type { Metadata } from "next";
import GallerySection from "../GallerySection";

export const metadata: Metadata = {
  title: "Galería | Barbería Marbella",
  description:
    "Explora nuestra galería de cortes y estilos en Marbella. Inspírate con los resultados reales de El Barbero Profesional.",
};

export default function GaleriaPage() {
  return <GallerySection />;
}
