import type { Metadata } from "next";
import ServicesSection from "../services_section";
import { client } from "@/lib/sanity.client";
import { servicesQuery } from "@/lib/sanity.queries";

export const metadata: Metadata = {
  title: "Servicios | Barbería Málaga",
  description:
    "Descubre nuestros servicios de barbería en Málaga: cortes de pelo, arreglo de barba y afeitado profesional, con opciones VIP.",
};

export default async function ServiciosPage() {
  let services = [];
  try {
    services = await client.fetch(servicesQuery);
  } catch {
    // si falla Sanity, ServicesSection usa los fallbacks hardcodeados
  }

  return (
    <main className="min-h-screen bg-[#ece8de]">
      <div className="pt-20">
        <ServicesSection services={services} />
      </div>
    </main>
  );
}
