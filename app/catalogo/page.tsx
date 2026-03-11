import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo | Barbería Málaga",
  description:
    "Explora nuestro catálogo de productos profesionales para el cuidado masculino disponibles en Málaga.",
};

export default function CatalogPage() {
  return <CatalogClient />;
}
