import type { Metadata } from "next";
import ContactSection from "../ContactSection";

export const metadata: Metadata = {
  title: "Contacto | Barbería Marbella",
  description:
    "Ponte en contacto con El Barbero Profesional en Marbella. Reserva tu cita o haznos una consulta por WhatsApp o Instagram.",
  keywords: ["contacto barbería Marbella", "barbero Marbella contacto"],
};

export default function ContactPage() {
  return <ContactSection />;
}
