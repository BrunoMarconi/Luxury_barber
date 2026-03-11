import type { Metadata } from "next";
import type { Metadata } from "next";
import ContactSection from "../ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con El Barbero Profesional en Málaga. Reserva tu cita o haznos una consulta por WhatsApp o Instagram.",
  keywords: ["contacto barbería Málaga", "barbero Málaga contacto"],
};

export default function ContactPage() {
  return <ContactSection />;
}
