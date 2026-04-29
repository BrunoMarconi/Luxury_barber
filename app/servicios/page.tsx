import type { Metadata } from "next";
import ServicesSection from "../services_section";

export const metadata: Metadata = {
  title: "Servicios | Barbería Marbella",
  description:
    "Descubre nuestros servicios de barbería en Marbella: corte de cabello, diseño de barba y tratamiento facial con asesoría personalizada.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <div className="pt-20">
        <ServicesSection />
      </div>
    </main>
  );
}
