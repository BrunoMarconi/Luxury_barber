import Image from "next/image";
import Link from "next/link";

const WA_PRIVATE =
  "https://wa.me/34617853179?text=Hola,%20quiero%20solicitar%20acceso%20privado%20Black%20Access";

const BLUE = "#4A90D9";

export default function AccessClient() {
  return (
    <main className="bg-[#080808] min-h-screen">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .au { animation: fade-up 1.1s cubic-bezier(0.22,1,0.36,1) both; }
        .au-1 { animation-delay: 0.2s; }
        .au-2 { animation-delay: 0.45s; }
        .au-3 { animation-delay: 0.65s; }
        .au-4 { animation-delay: 0.85s; }
        .au-5 { animation-delay: 1.05s; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[640px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/access.jpeg"
            alt="The Professional Barber — Marbella"
            fill
            className="object-cover object-center scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[#080808]" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
          <p className="au au-1 tracking-[0.55em] text-[9px] uppercase font-light mb-8" style={{color: BLUE}}>
            Marbella · Costa del Sol
          </p>
          <h1 className="au au-2 text-[#F0EBE1] font-light tracking-[0.22em] text-[28px] md:text-[36px] uppercase leading-[1.25] mb-6">
            The Professional<br />Barber
          </h1>
          <p className="au au-3 tracking-[0.45em] text-[9px] uppercase font-light mb-10" style={{color: `${BLUE}aa`}}>
            Precisión&nbsp;&nbsp;·&nbsp;&nbsp;Presencia&nbsp;&nbsp;·&nbsp;&nbsp;Imagen
          </p>
          <div className="au au-4 w-8 h-px mx-auto mb-10" style={{background: `${BLUE}55`}} />
          <p className="au au-4 text-[#F0EBE1]/70 text-[10px] tracking-[0.18em] font-light mb-14 leading-[2]">
            Experiencias privadas centradas en<br />
            imagen masculina, percepción visual<br />
            y cuidado avanzado.
          </p>
          <a
            href="#experiences"
            className="au au-5 inline-flex items-center gap-5 text-[#F0EBE1]/60 text-[9px] tracking-[0.45em] uppercase font-light border-b border-[#F0EBE1]/15 pb-1 hover:text-[#F0EBE1] hover:border-[#F0EBE1]/40 transition-all duration-700"
          >
            Descubrir <span>→</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-[#F0EBE1]/25 to-transparent" />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 px-6 text-center">
        <p className="text-[#F0EBE1]/40 text-[10px] tracking-[0.38em] uppercase font-light max-w-[28ch] mx-auto leading-[2.2]">
          Algunos hombres se cortan el pelo.<br />
          Otros construyen una presencia.
        </p>
      </section>

      {/* ── EXPERIENCES ── */}
      <div id="experiences" className="px-5 md:px-10 max-w-5xl mx-auto pb-40 space-y-3">

        {/* BLACK ACCESS */}
        <div className="group relative overflow-hidden">
          <div className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
            <Image
              src="/images/black-access-corte-premium-hombre-marbella.jpeg"
              alt="Black Access — The Professional Barber Marbella"
              fill
              className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/97 via-black/20 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

            {/* Label + Title — arriba */}
            <div className="absolute top-0 left-0 right-0 p-8 md:p-16">
              <p className="tracking-[0.55em] text-[8px] uppercase font-light mb-5" style={{color: `${BLUE}cc`}}>
                Experiencia Privada · Domingos
              </p>
              <h2 className="text-[#F0EBE1] font-light tracking-[0.25em] text-[38px] md:text-[58px] uppercase leading-[1.05]">
                Black<br />Access
              </h2>
            </div>

            {/* Descripción + CTAs — abajo */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <p className="text-[#F0EBE1]/75 text-[10px] tracking-[0.12em] font-light max-w-[42ch] leading-[1.9] mb-10">
                Una experiencia privada los domingos diseñada para hombres que exigen precisión, discreción, cuidado avanzado y atención completamente personalizada.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <Link
                  href="/black-access-marbella"
                  className="inline-flex items-center gap-4 text-[9px] tracking-[0.45em] uppercase font-light border-b pb-1 transition-all duration-700"
                  style={{color: BLUE, borderColor: `${BLUE}55`}}
                >
                  Descubrir Black Access <span>→</span>
                </Link>
                <a
                  href={WA_PRIVATE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 text-[#F0EBE1]/60 text-[9px] tracking-[0.45em] uppercase font-light border-b border-[#F0EBE1]/20 pb-1 hover:text-[#F0EBE1] hover:border-[#F0EBE1]/40 transition-all duration-700"
                >
                  Solicitar Acceso Privado <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PREMIUM EXPERIENCE */}
        <div className="group relative overflow-hidden">
          <div className="relative min-h-[500px] md:min-h-[560px] overflow-hidden">
            <Image
              src="/images/access3.jpeg"
              alt="Premium Experience — The Professional Barber Marbella"
              fill
              className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/97 via-black/20 to-black/45" />

            {/* Label + Title — arriba */}
            <div className="absolute top-0 left-0 right-0 p-8 md:p-14">
              <p className="tracking-[0.55em] text-[8px] uppercase font-light mb-4" style={{color: `${BLUE}bb`}}>
                Imagen&nbsp;&nbsp;·&nbsp;&nbsp;Estructura&nbsp;&nbsp;·&nbsp;&nbsp;Precisión
              </p>
              <h2 className="text-[#F0EBE1] font-light tracking-[0.2em] text-[28px] md:text-[40px] uppercase leading-[1.1]">
                Premium<br />Experience
              </h2>
            </div>

            {/* Descripción + CTAs — abajo */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <a
                href="#premium-services"
                className="inline-flex items-center gap-4 text-[9px] tracking-[0.42em] uppercase font-light border-b pb-1 mb-8 transition-all duration-700 w-fit hover:text-[#F0EBE1] hover:border-[#F0EBE1]/40"
                style={{color: BLUE, borderColor: `${BLUE}44`}}
              >
                Explorar Premium Experience <span>→</span>
              </a>

              <div id="premium-services" className="flex flex-wrap gap-x-8 gap-y-3">
                <Link
                  href="/corte-de-pelo-hombre-marbella"
                  className="text-[#F0EBE1]/45 text-[8px] tracking-[0.4em] uppercase font-light hover:text-[#F0EBE1]/75 transition-all duration-500"
                >
                  Corte Premium →
                </Link>
                <Link
                  href="/arreglo-de-barba-marbella"
                  className="text-[#F0EBE1]/45 text-[8px] tracking-[0.4em] uppercase font-light hover:text-[#F0EBE1]/75 transition-all duration-500"
                >
                  Barba Premium →
                </Link>
                <Link
                  href="/corte-y-barba-premium-marbella"
                  className="text-[#F0EBE1]/45 text-[8px] tracking-[0.4em] uppercase font-light hover:text-[#F0EBE1]/75 transition-all duration-500"
                >
                  Corte + Barba Premium →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ESSENTIAL SERVICES */}
        <div className="pt-16 pb-4">
          <p className="text-[#F0EBE1]/30 tracking-[0.55em] text-[8px] uppercase font-light mb-10 px-1">
            Servicios Esenciales
          </p>
          <div className="space-y-0">
            <Link
              href="/corte-esencial-marbella"
              className="group/row flex items-center justify-between px-1 py-5 border-t border-[#F0EBE1]/8 hover:border-[#F0EBE1]/15 transition-all duration-500"
            >
              <span className="text-[#F0EBE1]/45 text-[10px] tracking-[0.28em] uppercase font-light group-hover/row:text-[#F0EBE1]/70 transition-all duration-500">
                Corte Essential
              </span>
              <span className="text-[#F0EBE1]/20 group-hover/row:text-[#F0EBE1]/45 transition-all duration-500 text-xs">→</span>
            </Link>
            <Link
              href="/barba-esencial-marbella"
              className="group/row flex items-center justify-between px-1 py-5 border-t border-[#F0EBE1]/8 hover:border-[#F0EBE1]/15 transition-all duration-500"
            >
              <span className="text-[#F0EBE1]/45 text-[10px] tracking-[0.28em] uppercase font-light group-hover/row:text-[#F0EBE1]/70 transition-all duration-500">
                Barba Essential
              </span>
              <span className="text-[#F0EBE1]/20 group-hover/row:text-[#F0EBE1]/45 transition-all duration-500 text-xs">→</span>
            </Link>
            <Link
              href="/corte-y-barba-esencial-marbella"
              className="group/row flex items-center justify-between px-1 py-5 border-t border-b border-[#F0EBE1]/8 hover:border-[#F0EBE1]/15 transition-all duration-500"
            >
              <span className="text-[#F0EBE1]/45 text-[10px] tracking-[0.28em] uppercase font-light group-hover/row:text-[#F0EBE1]/70 transition-all duration-500">
                Corte + Barba Essential
              </span>
              <span className="text-[#F0EBE1]/20 group-hover/row:text-[#F0EBE1]/45 transition-all duration-500 text-xs">→</span>
            </Link>
          </div>
        </div>

      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#F0EBE1]/5 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/theprofessionalbarber.es/"
              target="_blank"
              rel="noreferrer"
              className="text-[#F0EBE1]/40 text-[8px] tracking-[0.45em] uppercase font-light hover:text-[#F0EBE1]/70 transition-all duration-500"
            >
              Instagram
            </a>
            <span className="text-[#F0EBE1]/15 text-[8px]">·</span>
            <a
              href="https://g.page/r/theprofessionalbarber-marbella/review"
              target="_blank"
              rel="noreferrer"
              className="text-[#F0EBE1]/40 text-[8px] tracking-[0.45em] uppercase font-light hover:text-[#F0EBE1]/70 transition-all duration-500"
            >
              Google Reviews
            </a>
            <span className="text-[#F0EBE1]/15 text-[8px]">·</span>
            <a
              href="https://booksy.com/es-es/find/business/_/barber-shop/_/marbella"
              target="_blank"
              rel="noreferrer"
              className="text-[#F0EBE1]/40 text-[8px] tracking-[0.45em] uppercase font-light hover:text-[#F0EBE1]/70 transition-all duration-500"
            >
              Booksy Reviews
            </a>
          </div>

          <p className="text-[#F0EBE1]/20 text-[8px] tracking-[0.45em] uppercase font-light">
            Marbella&nbsp;&nbsp;·&nbsp;&nbsp;Costa del Sol
          </p>

        </div>
      </footer>

    </main>
  );
}
