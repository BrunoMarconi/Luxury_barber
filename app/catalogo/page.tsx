import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo | Barbería Marbella",
  description:
    "Explora nuestro catálogo de productos profesionales para el cuidado masculino en Marbella.",
};

export default function CatalogPage() {
  return <CatalogClient />;
}
