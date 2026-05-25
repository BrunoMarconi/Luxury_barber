import Image from "next/image";
import Link from "next/link";

export default function AccessClient() {
  return (
    <main className="bg-[#080808] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/experiencia-barberia-lujo-marbella.jpeg"
            alt="The Professional Barber — Marbella"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#080808]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
          <p className="text-[#C9A96E] tracking-[0.45em] text-[10px] uppercase font-light mb-10">
            The Professional Barber · Marbella
          </p>
          <h1 className="text-[#F0EBE1] font-light tracking-[0.18em] text-4xl md:text-5xl uppercase leading-[1.3] mb-10">
            Precision<br />Presence<br />Image
          </h1>
          <div className="w-10 h-px bg-[#C9A96E] mx-auto mb-10" />
          <p className="text-[#F0EBE1]/45 text-[11px] tracking-[0.2em] uppercase font-light mb-14 leading-loose">
            Private grooming experiences focused on<br />
            masculine image, structure and visual perception.
          </p>
          <a
            href="#experiences"
            className="inline-flex items-center gap-4 border border-[#F0EBE1]/20 text-[#F0EBE1]/65 text-[10px] tracking-[0.38em] uppercase px-10 py-4 hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-all duration-700 font-light"
          >
            Enter Experience <span className="text-xs">→</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
          <div className="w-px h-14 bg-[#F0EBE1] animate-pulse mx-auto" />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-28 px-6 text-center">
        <p className="text-[#F0EBE1]/35 text-[11px] tracking-[0.35em] uppercase font-light max-w-xs mx-auto leading-loose">
          Algunos hombres se cortan el cabello.<br />
          Otros construyen presencia.
        </p>
      </section>

      {/* ── EXPERIENCES ── */}
      <section id="experiences" className="px-5 md:px-10 pb-32 max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-[#C9A96E] tracking-[0.45em] text-[10px] uppercase font-light mb-5">
            Experiencias
          </p>
          <div className="w-8 h-px bg-[#C9A96E]/30 mx-auto" />
        </div>

        {/* BLACK ACCESS */}
        <Link href="/diagnostico-capilar-marbella" className="block mb-3 group">
          <div className="relative h-[72vh] min-h-[480px] overflow-hidden">
            <Image
              src="/images/barberia-premium-hombre-marbella.jpeg"
              alt="Black Access — The Professional Barber"
              fill
              className="object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <p className="text-[#C9A96E] tracking-[0.45em] text-[9px] uppercase font-light mb-4">
                Experiencia Definitiva
              </p>
              <h2 className="text-[#F0EBE1] font-light tracking-[0.18em] text-3xl md:text-5xl uppercase mb-5 leading-tight">
                Black Access
              </h2>
              <p className="text-[#F0EBE1]/55 text-[11px] tracking-[0.12em] font-light max-w-sm leading-relaxed mb-8">
                Análisis facial completo, diseño estratégico de imagen y construcción sofisticada de presencia masculina.
              </p>
              <span className="inline-flex items-center gap-3 text-[#C9A96E] text-[10px] tracking-[0.32em] uppercase font-light border-b border-[#C9A96E]/25 pb-1 group-hover:border-[#C9A96E]/70 transition-all duration-600">
                Descubrir <span className="text-xs">→</span>
              </span>
            </div>
          </div>
        </Link>

        {/* PREMIUM */}
        <Link href="/corte-de-pelo-hombre-marbella" className="block mb-2 group">
          <div className="relative h-[52vh] min-h-[340px] overflow-hidden">
            <Image
              src="/images/servicio-premium-masculino-marbella.jpeg"
              alt="Premium Experience — The Professional Barber"
              fill
              className="object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="text-[#C9A96E] tracking-[0.45em] text-[9px] uppercase font-light mb-3">
                Experiencia Premium
              </p>
              <h2 className="text-[#F0EBE1] font-light tracking-[0.15em] text-2xl md:text-3xl uppercase mb-3 leading-tight">
                Premium Experience
              </h2>
              <p className="text-[#F0EBE1]/45 text-[11px] tracking-[0.1em] font-light max-w-xs leading-relaxed mb-7">
                Corte de precisión con visagismo y diseño estratégico personalizado.
              </p>
              <span className="inline-flex items-center gap-3 text-[#F0EBE1]/50 text-[10px] tracking-[0.3em] uppercase font-light border-b border-[#F0EBE1]/15 pb-1 group-hover:text-[#C9A96E] group-hover:border-[#C9A96E]/35 transition-all duration-600">
                Explorar <span className="text-xs">→</span>
              </span>
            </div>
          </div>
        </Link>

        {/* ESSENTIAL */}
        <Link href="/corte-y-barba-premium-marbella" className="block group">
          <div className="border-t border-[#F0EBE1]/6 py-7 flex items-center justify-between px-1 group-hover:border-[#F0EBE1]/12 transition-all duration-500">
            <div>
              <p className="text-[#F0EBE1]/25 text-[9px] tracking-[0.4em] uppercase font-light mb-1">
                Essential
              </p>
              <p className="text-[#F0EBE1]/45 text-sm tracking-[0.12em] font-light">
                Corte & Barba
              </p>
            </div>
            <span className="text-[#F0EBE1]/18 group-hover:text-[#F0EBE1]/38 transition-all duration-500 text-sm">
              →
            </span>
          </div>
        </Link>
      </section>

      {/* ── IMAGE & PRESENCE ── */}
      <section className="border-t border-[#F0EBE1]/5 py-32 px-5 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="text-[#C9A96E] tracking-[0.45em] text-[9px] uppercase font-light mb-10">
              Image & Presence
            </p>
            <h2 className="text-[#F0EBE1] font-light tracking-[0.1em] text-2xl md:text-3xl uppercase leading-[1.4] mb-10">
              La imagen masculina<br />no se improvisa.<br />Se construye.
            </h2>
            <div className="w-8 h-px bg-[#C9A96E]/35 mb-10" />
            <p className="text-[#F0EBE1]/35 text-[11px] leading-loose tracking-[0.05em] font-light mb-12 max-w-sm">
              Estructura facial, proporciones, diseño de barba, percepción visual. Pequeños detalles que cambian completamente cómo un hombre es percibido. Especialmente en Marbella y la Costa del Sol.
            </p>
            <Link
              href="/diagnostico-capilar-marbella"
              className="inline-flex items-center gap-3 text-[#F0EBE1]/35 text-[10px] tracking-[0.32em] uppercase font-light hover:text-[#C9A96E] transition-all duration-600 border-b border-[#F0EBE1]/10 pb-1 hover:border-[#C9A96E]/30"
            >
              Diagnóstico Capilar <span className="text-xs">→</span>
            </Link>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/visagismo-masculino-y-construccion-de-presencia.jpeg"
              alt="Visagismo masculino — The Professional Barber"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      </section>

      {/* ── BARBER PORTRAIT ── */}
      <section className="px-5 md:px-10 pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/barbero-profesional-premium-marbella.jpeg"
              alt="Barbero profesional premium — Marbella"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/corte-de-pelo-hombre-premium-marbella.jpeg"
              alt="Corte de pelo premium — Marbella"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* ── PRIVATE ACCESS ── */}
      <section className="bg-[#050505] border-t border-[#F0EBE1]/5 py-36 px-6 text-center">
        <p className="text-[#C9A96E] tracking-[0.45em] text-[10px] uppercase font-light mb-12">
          Acceso Privado
        </p>
        <h2 className="text-[#F0EBE1] font-light tracking-[0.12em] text-2xl md:text-3xl uppercase mb-10 max-w-md mx-auto leading-[1.5]">
          Reservado para quienes<br />entienden que la imagen<br />se construye con precisión.
        </h2>
        <div className="w-8 h-px bg-[#C9A96E]/30 mx-auto mb-12" />
        <p className="text-[#F0EBE1]/25 text-[11px] tracking-[0.15em] font-light mb-16 max-w-xs mx-auto leading-loose">
          Las valoraciones se realizan de forma limitada para mantener un nivel de atención completamente personalizado.
        </p>
        <a
          href="https://wa.me/34617853179?text=Hola,%20quiero%20solicitar%20acceso%20privado%20a%20una%20valoración%20de%20imagen"
          className="inline-flex items-center gap-5 border border-[#C9A96E]/28 text-[#C9A96E] text-[10px] tracking-[0.38em] uppercase px-12 py-5 hover:border-[#C9A96E]/70 hover:bg-[#C9A96E]/4 transition-all duration-700 font-light"
        >
          Solicitar Acceso Privado
        </a>
      </section>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#F0EBE1]/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F0EBE1]/12 text-[9px] tracking-[0.35em] uppercase font-light">
            © The Professional Barber · Marbella
          </p>
          <Link
            href="/"
            className="text-[#F0EBE1]/12 text-[9px] tracking-[0.35em] uppercase font-light hover:text-[#F0EBE1]/28 transition-all duration-500"
          >
            Volver al sitio principal
          </Link>
        </div>
      </footer>

    </main>
  );
}
