import type { Metadata } from "next";
import ServicesSection from "../services_section";

export const metadata: Metadata = {
  title: "Servicios | Barbería Málaga",
  description:
    "Descubre nuestros servicios de barbería en Málaga: cortes de pelo, arreglo de barba y afeitado profesional, con opciones VIP.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#ece8de]">
      <div className="pt-20">
        <ServicesSection />
      </div>
    </main>
  );
}
