import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "The professional barber | Barbería Málaga",
  description:
    "Bienvenido a theprofessionalbarber en Málaga: barbería de lujo con cortes de pelo, afeitado y reservas online.",
};

export default function HomePage() {
  return <HomeClient />;
}
