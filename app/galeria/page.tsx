import type { Metadata } from "next";
import GallerySection from "../GallerySection";

export const metadata: Metadata = {
  title: "Galería | Barbería Málaga",
  description:
    "Explora nuestra galería de cortes y estilos en Málaga. Inspírate con imágenes de la barbería elprofessionalbarber en acción.",
};

export default function GaleriaPage() {
  return <GallerySection />;
}
