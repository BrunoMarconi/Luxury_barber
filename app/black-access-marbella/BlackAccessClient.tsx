"use client";

import Image from "next/image";

const WA_URL = `https://wa.me/34617853179?text=${encodeURIComponent("Hola Juan Carlos. He estado viendo la experiencia Black Access y me gustaría recibir orientación para saber si esta experiencia privada es la adecuada para mí y conocer cómo funciona el proceso antes de reservar.")}`;

type Differential = {
  title: string;
  text?: string;
  lines?: string[];
};

const DIFFERENTIALS: Differential[] = [
  {
    title: "Sesión privada los domingos",
    text: "Un único turno reservado para vivir la experiencia sin atención simultánea a otros clientes.",
  },
  {
    title: "Diagnóstico facial y capilar",
    text: "Evaluación personalizada de rostro, cuero cabelludo, piel y necesidades reales antes de comenzar la sesión.",
  },
  {
    title: "Tecnología aplicada con precisión",
    lines: [
      "La experiencia integra herramientas de diagnóstico y cuidado avanzado como tecnología FOREO, tecnología galvánica NuSkin, LED terapéutico, crioterapia y activos profesionales seleccionados según las necesidades detectadas durante la sesión.",
      "La tecnología no es protagonista.",
      "Es la herramienta que permite personalizar cada detalle con mayor precisión.",
    ],
  },
  {
    title: "Continuidad personalizada",
    text: "Al finalizar, cada cliente recibe una selección personalizada de productos profesionales preparada según las necesidades detectadas durante la experiencia.",
  },
];

export default function BlackAccessClient() {
  return (
    <main className="bg-[#080808] min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes ba-reveal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ba-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .ba-rv  { animation: ba-reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .ba-rv1 { animation-delay: 0.05s; }
        .ba-rv2 { animation-delay: 0.35s; }
        .ba-rv3 { animation-delay: 0.62s; }
        .ba-rv4 { animation-delay: 0.88s; }
        .ba-rv5 { animation-delay: 1.12s; }
        .ba-fd  { animation: ba-fade 2s ease both; animation-delay: 0.05s; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex flex-col justify-between overflow-hidden">

        <div className="absolute inset-0 ba-fd">
          <Image
            src="/images/black-access-corte-premium-hombre-marbella.jpeg"
            alt="Black Access — Corte premium hombre Marbella — Experiencia privada de imagen masculina"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#080808]/70 via-transparent to-[#080808]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-transparent" />
        </div>

        {/* Top: label + title */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-16 md:pt-20">
          <p className="ba-rv ba-rv1 text-[#F0EBE1]/40 text-[8px] tracking-[0.65em] uppercase font-light mb-4 md:mb-6">
            The Professional Barber&nbsp;&nbsp;·&nbsp;&nbsp;Marbella
          </p>

          <h1
            className="ba-rv ba-rv2 text-[#F0EBE1] font-light uppercase leading-[0.92]"
            style={{
              fontSize: "clamp(26px, 7vw, 90px)",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Black<br />Access
          </h1>
          <p className="ba-rv ba-rv3 mt-4 text-[#F0EBE1]/28 text-[8px] tracking-[0.55em] uppercase font-light">
            Un único turno disponible cada domingo.
          </p>
        </div>

        {/* Bottom: description + CTAs */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-20 md:pb-32">
          <p className="ba-rv ba-rv3 text-[#F0EBE1]/58 text-[10px] md:text-[11px] tracking-[0.2em] font-light mb-5 max-w-[38ch]">
            La versión más privada de Alpha Signature.
          </p>

          <p className="ba-rv ba-rv4 text-[#F0EBE1]/38 text-[10px] tracking-[0.06em] font-light leading-[2.2] max-w-[46ch] mb-10">
            Un único turno privado reservado para trabajar tu imagen de forma completamente personalizada.
          </p>

          <div className="ba-rv ba-rv5 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-5 text-[#F0EBE1]/80 text-[9px] tracking-[0.45em] uppercase font-light border-b border-[#F0EBE1]/30 pb-1 hover:text-[#F0EBE1] hover:border-[#F0EBE1]/60 transition-all duration-700"
            >
              Solicitar Black Access
            </a>
            <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.2em] font-light">
              Reserva anticipada con preparación personalizada previa
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 right-8 md:right-16 z-10">
          <div className="w-px h-14 bg-gradient-to-b from-[#F0EBE1]/12 to-transparent" />
        </div>
      </section>

      {/* ── SEPARADOR ── */}
      <div className="px-6 md:px-16 lg:px-24 py-8">
        <div className="w-full h-px bg-[#F0EBE1]/5" />
      </div>

      {/* ── BLOQUE 1: No trabajamos por partes ── */}
      <section className="px-6 md:px-16 lg:px-24 pt-28 pb-36 md:pt-36 md:pb-48">
        <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.58em] uppercase font-light mb-16 md:mb-20">
          La sesión
        </p>
        <h2
          className="text-[#F0EBE1] font-light tracking-[0.05em] leading-[1.42] mb-14 max-w-[24ch]"
          style={{
            fontSize: "clamp(22px, 3.2vw, 38px)",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          No trabajamos por partes.<br />Trabajamos tu imagen como un todo.
        </h2>
        <div className="max-w-[52ch] space-y-6">
          <p className="text-[#F0EBE1]/58 text-[11px] tracking-[0.05em] font-light leading-[2.2]">
            Cada sesión comienza entendiendo qué necesita realmente tu cabello, piel y estructura facial antes de intervenir.
          </p>
          <p className="text-[#F0EBE1]/38 text-[11px] tracking-[0.05em] font-light leading-[2.2]">
            Diagnóstico, precisión y cuidado masculino avanzado integrados dentro de una experiencia completamente personalizada.
          </p>
        </div>
      </section>

      {/* ── PRECIO ── */}
      <section className="px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-5xl">

          {/* Microfrase de exclusividad */}
          <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.58em] uppercase font-light mb-10">
            Un único turno privado por domingo.
          </p>

          <div className="w-full h-px bg-[#F0EBE1]/7" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 py-20 md:py-28">
            <div>
              <p className="text-[#F0EBE1]/30 text-[8px] tracking-[0.58em] uppercase font-light mb-5">
                Black Access
              </p>
              <p className="text-[#F0EBE1]/48 text-[10px] tracking-[0.22em] font-light mb-12 max-w-[34ch]">
                Experiencia privada de imagen masculina, diagnóstico avanzado y cuidado personalizado.
              </p>
              <p
                className="text-[#F0EBE1]/85 font-light"
                style={{
                  fontSize: "clamp(44px, 7vw, 80px)",
                  letterSpacing: "0.06em",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                450€
              </p>
            </div>
            <p className="text-[#F0EBE1]/36 text-[9px] tracking-[0.06em] font-light leading-[2.4] max-w-[42ch] md:text-right">
              Incluye sesión privada, diagnóstico facial y capilar avanzado, análisis de imagen masculina, barbería de precisión, tecnología especializada aplicada al cuidado masculino y continuidad personalizada posterior a la experiencia.
            </p>
          </div>
          <div className="w-full h-px bg-[#F0EBE1]/7" />
        </div>
      </section>

      {/* ── BLOQUE 2 ── */}
      <section className="px-6 md:px-16 lg:px-24 pt-28 pb-36 md:pt-36 md:pb-48">
        <div className="max-w-5xl md:ml-auto">
          <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.58em] uppercase font-light mb-16 md:mb-20 md:text-right">
            La diferencia
          </p>
          <h2
            className="text-[#F0EBE1] font-light tracking-[0.04em] leading-[1.45] mb-14 max-w-[30ch] md:ml-auto md:text-right"
            style={{
              fontSize: "clamp(20px, 2.8vw, 34px)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            No está diseñado para atender más personas.<br />Está diseñado para atenderte mejor.
          </h2>
          <div className="max-w-[52ch] md:ml-auto space-y-6">
            <p className="text-[#F0EBE1]/52 text-[11px] tracking-[0.05em] font-light leading-[2.2] md:text-right">
              Black Access es una experiencia privada de imagen masculina diseñada para trabajar cabello, barba, piel y cuidado posterior como una sola dirección visual.
            </p>
            <p className="text-[#F0EBE1]/36 text-[11px] tracking-[0.05em] font-light leading-[2.2] md:text-right">
              No se trata de hacer más.<br />
              Se trata de hacerlo con más atención, más calma y más dedicación.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAL: 4 elementos ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.55em] uppercase font-light mb-16 md:mb-20">
            Una experiencia privada&nbsp;&nbsp;·&nbsp;&nbsp;Un solo turno&nbsp;&nbsp;·&nbsp;&nbsp;Toda la atención
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {DIFFERENTIALS.map((item, i) => (
              <div
                key={i}
                className="border-t border-[#F0EBE1]/7 pt-10 pb-14 md:pt-12 md:pb-18 md:pr-20"
              >
                <p className="text-[#F0EBE1]/72 text-[9px] tracking-[0.22em] uppercase font-light mb-6">
                  {item.title}
                </p>
                {item.lines ? (
                  <div className="space-y-5">
                    {item.lines.map((line, li) => (
                      <p key={li} className="text-[#F0EBE1]/36 text-[10px] tracking-[0.04em] font-light leading-[2.3] max-w-[40ch]">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#F0EBE1]/36 text-[10px] tracking-[0.04em] font-light leading-[2.3] max-w-[40ch]">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL STRIP ── */}
      <section className="grid grid-cols-2 gap-0.5 mt-0.5">
        <div className="relative" style={{ aspectRatio: "4/5" }}>
          <Image
            src="/images/1.jpeg"
            alt="Corte texturizado hombre premium — Black Access Marbella"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/8" />
        </div>
        <div className="relative" style={{ aspectRatio: "4/5" }}>
          <Image
            src="/images/2.jpeg"
            alt="Visagismo masculino premium — Black Access Marbella"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/8" />
        </div>
      </section>

      {/* ── BLOQUE CENTRAL VISUAL ── */}
      <section className="relative overflow-hidden mt-0.5">
        <div className="relative h-[68vh] min-h-[480px] max-h-[780px]">
          <Image
            src="/images/3.jpeg"
            alt="Barba premium hombre — Black Access Marbella — cuidado masculino privado"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/45 to-[#080808]/18" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-36 px-6 text-center">
            <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.58em] uppercase font-light mb-6">
              Black Access&nbsp;&nbsp;·&nbsp;&nbsp;Marbella
            </p>
            <h2
              className="text-[#F0EBE1] font-light tracking-[0.06em] leading-[1.38] max-w-[18ch] mb-6"
              style={{
                fontSize: "clamp(13px, 4.5vw, 52px)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              No es mantenimiento.<br />Es tiempo dedicado a ti.
            </h2>
            <p className="text-[#F0EBE1]/43 text-[10px] tracking-[0.1em] font-light max-w-[44ch] leading-[2.2]">
              Cabello, barba, piel y cuidado posterior trabajados como una sola experiencia masculina.
            </p>
          </div>
        </div>
      </section>

      {/* ── BLOQUE EXPERIENCIA ── */}
      <section className="px-6 md:px-16 lg:px-24 pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl">
          <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.58em] uppercase font-light mb-16 md:mb-20">
            Antes de la visita
          </p>
          <h2
            className="text-[#F0EBE1] font-light tracking-[0.05em] leading-[1.42] mb-12 max-w-[22ch]"
            style={{
              fontSize: "clamp(22px, 3.2vw, 38px)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Preparado antes de que llegues.
          </h2>
          <p className="text-[#F0EBE1]/46 text-[11px] tracking-[0.05em] font-light leading-[2.3] max-w-[50ch] mb-14">
            Black Access requiere preparación previa para personalizar completamente la experiencia antes de la visita.
          </p>
          <div className="border-l border-[#F0EBE1]/10 pl-7 md:pl-10">
            <p className="text-[#F0EBE1]/50 text-[9px] tracking-[0.28em] font-light uppercase">
              Reserva anticipada mínima: 3 días.
            </p>
          </div>
        </div>
      </section>

      {/* ── BLOQUE CONTINUIDAD ── */}
      <section className="px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-5xl">
          <div className="w-full h-px bg-[#F0EBE1]/6 mb-20 md:mb-28" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24">
            <div>
              <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.58em] uppercase font-light mb-14">
                Después de la sesión
              </p>
              <h2
                className="text-[#F0EBE1] font-light tracking-[0.04em] leading-[1.45] max-w-[22ch]"
                style={{
                  fontSize: "clamp(20px, 2.8vw, 34px)",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                El cuidado continúa después de la experiencia.
              </h2>
            </div>
            <div className="md:pt-20">
              <p className="text-[#F0EBE1]/40 text-[11px] tracking-[0.05em] font-light leading-[2.4]">
                La experiencia incluye una selección personalizada de productos profesionales preparada según las necesidades detectadas durante la sesión.
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-[#F0EBE1]/6 mt-20 md:mt-28" />
        </div>
      </section>

      {/* ── DISPONIBILIDAD ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-44">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.58em] uppercase font-light mb-14 md:mb-18">
            Acceso
          </p>
          <h2
            className="text-[#F0EBE1] font-light tracking-[0.05em] leading-[1.42] mb-12 max-w-[26ch] mx-auto"
            style={{
              fontSize: "clamp(22px, 3.2vw, 38px)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Disponible únicamente los domingos.
          </h2>
          <p className="text-[#F0EBE1]/40 text-[11px] tracking-[0.05em] font-light leading-[2.4] max-w-[48ch] mx-auto mb-8">
            Black Access está disponible en un solo turno privado los domingos. No es una cita más dentro del horario habitual. Es una experiencia reservada para trabajar con calma, privacidad y atención completa.
          </p>
          <p className="text-[#F0EBE1]/26 text-[10px] tracking-[0.1em] font-light leading-[2.4] max-w-[38ch] mx-auto mb-14">
            Cuando ese turno está reservado, Black Access no está disponible hasta el domingo siguiente.
          </p>
          <span className="inline-block border-b border-[#F0EBE1]/12 pb-1">
            <p className="text-[#F0EBE1]/48 text-[9px] tracking-[0.42em] uppercase font-light">
              Un solo turno por domingo.
            </p>
          </span>
        </div>
      </section>

      {/* ── BLOQUE FINAL CTA ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-28 md:pb-40">
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-px bg-[#F0EBE1]/6 mb-24 md:mb-36" />
          <div className="text-center">
            <p className="text-[#F0EBE1]/26 text-[8px] tracking-[0.58em] uppercase font-light mb-14 md:mb-18">
              Solicitar acceso
            </p>
            <h2
              className="text-[#F0EBE1] font-light tracking-[0.06em] leading-[1.32] mb-12 max-w-[22ch] mx-auto"
              style={{
                fontSize: "clamp(30px, 4.5vw, 56px)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Tu imagen merece tiempo.
            </h2>
            <p className="text-[#F0EBE1]/46 text-[11px] tracking-[0.06em] font-light leading-[2.4] max-w-[48ch] mx-auto mb-6">
              Black Access está diseñado para hombres que entienden que cuidarse no es vanidad.
            </p>
            <p className="text-[#F0EBE1]/28 text-[11px] tracking-[0.05em] font-light leading-[2.6] mb-20 md:mb-24">
              Es presencia.<br />Es intención.<br />Es respeto por la forma en que se presentan al mundo.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-5 text-[#F0EBE1]/78 text-[9px] tracking-[0.48em] uppercase font-light border-b border-[#F0EBE1]/26 pb-1 hover:text-[#F0EBE1] hover:border-[#F0EBE1]/52 transition-all duration-700"
              >
                Solicitar Black Access
              </a>
              <p className="text-[#F0EBE1]/24 text-[8px] tracking-[0.38em] uppercase font-light">
                Experiencia privada&nbsp;&nbsp;·&nbsp;&nbsp;Domingo&nbsp;&nbsp;·&nbsp;&nbsp;Reserva anticipada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#F0EBE1]/5 py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-7">
          <p className="text-[#F0EBE1]/24 text-[8px] tracking-[0.55em] uppercase font-light">
            The Professional Barber
          </p>
          <div className="flex items-center gap-7">
            <a
              href="https://www.instagram.com/theprofessionalbarber.es/"
              target="_blank"
              rel="noreferrer"
              className="text-[#F0EBE1]/32 text-[8px] tracking-[0.42em] uppercase font-light hover:text-[#F0EBE1]/58 transition-all duration-500"
            >
              Instagram
            </a>
            <span className="text-[#F0EBE1]/14 text-[8px]">·</span>
            <a
              href="/access"
              className="text-[#F0EBE1]/32 text-[8px] tracking-[0.42em] uppercase font-light hover:text-[#F0EBE1]/58 transition-all duration-500"
            >
              Private Access
            </a>
          </div>
          <p className="text-[#F0EBE1]/16 text-[7px] tracking-[0.48em] uppercase font-light">
            Marbella&nbsp;&nbsp;·&nbsp;&nbsp;Costa del Sol
          </p>
        </div>
      </footer>

      {/* ── CAPA SEMÁNTICA ALPHA – BLACK ACCESS v1 ── */}
      <section aria-label="Información sobre Black Access — experiencia privada de imagen masculina en Marbella" className="sr-only">
        <h2>Black Access — Experiencia privada de imagen masculina en Marbella</h2>
        <p>
          Black Access representa la experiencia más exclusiva de The Professional Barber y está diseñada para hombres que entienden que la imagen personal forma parte de su identidad. Más que una sesión de barbería, es un espacio privado donde el diagnóstico facial, el análisis capilar, el diseño de imagen masculina y el cuidado avanzado trabajan como un único proceso. Cada experiencia comienza mucho antes de la cita, con una preparación personalizada que permite adaptar cada decisión a las características del cliente y a los objetivos que desea conseguir.
        </p>
        <p>
          Black Access está pensado para empresarios, ejecutivos, profesionales, residentes y visitantes que buscan privacidad, tranquilidad y un servicio completamente personalizado en Marbella. La experiencia integra barbería de precisión, diseño de barba, diagnóstico profesional, tecnología aplicada al cuidado masculino y productos seleccionados según las necesidades detectadas durante la sesión. El objetivo no consiste únicamente en mejorar el cabello o la barba, sino en fortalecer la presencia personal, la confianza y la imagen que cada hombre proyecta en su entorno profesional y social.
        </p>
        <p>
          Disponible exclusivamente mediante reserva anticipada, Black Access ofrece un único turno privado cada domingo, garantizando tiempo, atención y dedicación absoluta. También representa una alternativa para quienes desean regalar una experiencia exclusiva a un esposo, pareja, empresario o profesional que valore el cuidado masculino como parte de su estilo de vida. Desde Marbella, Puerto Banús, Nueva Andalucía, San Pedro de Alcántara, la Milla de Oro y la Costa del Sol, The Professional Barber desarrolla un concepto diferente donde la barbería deja de ser un servicio aislado para convertirse en una experiencia integral de imagen masculina.
        </p>
      </section>

    </main>
  );
}
