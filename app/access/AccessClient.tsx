import Image from "next/image";
import Link from "next/link";

const WA_PRIVATE =
  "https://wa.me/34617853179?text=Hola,%20quiero%20solicitar%20acceso%20privado%20Black%20Access";

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
            src="/images/experiencia-barberia-lujo-marbella.jpeg"
            alt="The Professional Barber — Marbella"
            fill
            className="object-cover object-center scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[#080808]" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
          <p className="au au-1 text-[#C9A96E] tracking-[0.55em] text-[9px] uppercase font-light mb-8">
            Marbella · Costa del Sol
          </p>
          <h1 className="au au-2 text-[#F0EBE1] font-light tracking-[0.22em] text-[28px] md:text-[36px] uppercase leading-[1.25] mb-6">
            The Professional<br />Barber
          </h1>
          <p className="au au-3 text-[#C9A96E]/70 tracking-[0.45em] text-[9px] uppercase font-light mb-10">
            Precision&nbsp;&nbsp;·&nbsp;&nbsp;Presence&nbsp;&nbsp;·&nbsp;&nbsp;Image
          </p>
          <div className="au au-4 w-8 h-px bg-[#C9A96E]/40 mx-auto mb-10" />
          <p className="au au-4 text-[#F0EBE1]/40 text-[10px] tracking-[0.18em] font-light mb-14 leading-[2]">
            Private grooming experiences focused on<br />
            masculine image, visual perception<br />
            and advanced care.
          </p>
          <a
            href="#experiences"
            className="au au-5 inline-flex items-center gap-5 text-[#F0EBE1]/60 text-[9px] tracking-[0.45em] uppercase font-light border-b border-[#F0EBE1]/15 pb-1 hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-all duration-700"
          >
            Enter Experience <span>→</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-[#F0EBE1]/25 to-transparent" />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 px-6 text-center">
        <p className="text-[#F0EBE1]/22 text-[10px] tracking-[0.38em] uppercase font-light max-w-[28ch] mx-auto leading-[2.2]">
          Some men get a haircut.<br />
          Others build a presence.
        </p>
      </section>

      {/* ── EXPERIENCES ── */}
      <div id="experiences" className="px-5 md:px-10 max-w-5xl mx-auto pb-40 space-y-3">

        {/* BLACK ACCESS */}
        <div className="group relative overflow-hidden">
          <div className="relative h-[80vh] min-h-[540px] overflow-hidden">
            <Image
              src="/images/barberia-premium-hombre-marbella.jpeg"
              alt="Black Access — The Professional Barber Marbella"
              fill
              className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/35 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <p className="text-[#C9A96E]/80 tracking-[0.55em] text-[8px] uppercase font-light mb-6">
                Private Sunday Experience
              </p>
              <h2 className="text-[#F0EBE1] font-light tracking-[0.25em] text-[38px] md:text-[58px] uppercase leading-[1.05] mb-8">
                Black<br />Access
              </h2>
              <p className="text-[#F0EBE1]/40 text-[10px] tracking-[0.12em] font-light max-w-[42ch] leading-[1.9] mb-12">
                A private Sunday experience designed for men who expect precision, discretion, advanced care and complete personal attention.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <Link
                  href="/black-access-marbella"
                  className="inline-flex items-center gap-4 text-[#C9A96E] text-[9px] tracking-[0.45em] uppercase font-light border-b border-[#C9A96E]/30 pb-1 hover:border-[#C9A96E]/80 transition-all duration-700"
                >
                  Discover Black Access <span>→</span>
                </Link>
                <a
                  href={WA_PRIVATE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 text-[#F0EBE1]/40 text-[9px] tracking-[0.45em] uppercase font-light border-b border-[#F0EBE1]/12 pb-1 hover:text-[#F0EBE1]/70 hover:border-[#F0EBE1]/30 transition-all duration-700"
                >
                  Request Private Access <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PREMIUM EXPERIENCE */}
        <div className="group relative overflow-hidden">
          <div className="relative h-[58vh] min-h-[380px] overflow-hidden">
            <Image
              src="/images/servicio-premium-masculino-marbella.jpeg"
              alt="Premium Experience — The Professional Barber Marbella"
              fill
              className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/30 to-black/5" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
              <p className="text-[#C9A96E]/65 tracking-[0.55em] text-[8px] uppercase font-light mb-5">
                Image&nbsp;&nbsp;·&nbsp;&nbsp;Structure&nbsp;&nbsp;·&nbsp;&nbsp;Precision
              </p>
              <h2 className="text-[#F0EBE1] font-light tracking-[0.2em] text-[28px] md:text-[40px] uppercase leading-[1.1] mb-6">
                Premium<br />Experience
              </h2>
              <p className="text-[#F0EBE1]/38 text-[10px] tracking-[0.1em] font-light max-w-[40ch] leading-[1.9] mb-10">
                A complete grooming experience focused on facial structure, hair design, skin care and masculine presence.
              </p>

              <Link
                href="/corte-y-barba-premium-marbella"
                className="inline-flex items-center gap-4 text-[#F0EBE1]/55 text-[9px] tracking-[0.42em] uppercase font-light border-b border-[#F0EBE1]/15 pb-1 mb-10 hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-all duration-700 w-fit"
              >
                Explore Premium Experience <span>→</span>
              </Link>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <Link
                  href="/corte-de-pelo-hombre-marbella"
                  className="text-[#F0EBE1]/25 text-[8px] tracking-[0.4em] uppercase font-light hover:text-[#F0EBE1]/55 transition-all duration-500"
                >
                  Corte Premium →
                </Link>
                <Link
                  href="/arreglo-de-barba-marbella"
                  className="text-[#F0EBE1]/25 text-[8px] tracking-[0.4em] uppercase font-light hover:text-[#F0EBE1]/55 transition-all duration-500"
                >
                  Barba Premium →
                </Link>
                <Link
                  href="/corte-y-barba-premium-marbella"
                  className="text-[#F0EBE1]/25 text-[8px] tracking-[0.4em] uppercase font-light hover:text-[#F0EBE1]/55 transition-all duration-500"
                >
                  Corte + Barba Premium →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ESSENTIAL SERVICES */}
        <div className="pt-16 pb-4">
          <p className="text-[#F0EBE1]/18 tracking-[0.55em] text-[8px] uppercase font-light mb-10 px-1">
            Essential Services
          </p>
          <div className="space-y-0">
            <Link
              href="/corte-de-pelo-hombre-marbella"
              className="group/row flex items-center justify-between px-1 py-5 border-t border-[#F0EBE1]/6 hover:border-[#F0EBE1]/10 transition-all duration-500"
            >
              <span className="text-[#F0EBE1]/30 text-[10px] tracking-[0.28em] uppercase font-light group-hover/row:text-[#F0EBE1]/55 transition-all duration-500">
                Corte Essential
              </span>
              <span className="text-[#F0EBE1]/15 group-hover/row:text-[#F0EBE1]/35 transition-all duration-500 text-xs">→</span>
            </Link>
            <Link
              href="/arreglo-de-barba-marbella"
              className="group/row flex items-center justify-between px-1 py-5 border-t border-[#F0EBE1]/6 hover:border-[#F0EBE1]/10 transition-all duration-500"
            >
              <span className="text-[#F0EBE1]/30 text-[10px] tracking-[0.28em] uppercase font-light group-hover/row:text-[#F0EBE1]/55 transition-all duration-500">
                Barba Essential
              </span>
              <span className="text-[#F0EBE1]/15 group-hover/row:text-[#F0EBE1]/35 transition-all duration-500 text-xs">→</span>
            </Link>
            <Link
              href="/corte-y-barba-premium-marbella"
              className="group/row flex items-center justify-between px-1 py-5 border-t border-b border-[#F0EBE1]/6 hover:border-[#F0EBE1]/10 transition-all duration-500"
            >
              <span className="text-[#F0EBE1]/30 text-[10px] tracking-[0.28em] uppercase font-light group-hover/row:text-[#F0EBE1]/55 transition-all duration-500">
                Corte + Barba Essential
              </span>
              <span className="text-[#F0EBE1]/15 group-hover/row:text-[#F0EBE1]/35 transition-all duration-500 text-xs">→</span>
            </Link>
          </div>
        </div>

      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#F0EBE1]/5 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/theprofessionalbarber.marbella/"
              target="_blank"
              rel="noreferrer"
              className="text-[#F0EBE1]/28 text-[8px] tracking-[0.45em] uppercase font-light hover:text-[#F0EBE1]/60 transition-all duration-500"
            >
              Instagram
            </a>
            <span className="text-[#F0EBE1]/10 text-[8px]">·</span>
            <a
              href="https://g.page/r/theprofessionalbarber-marbella/review"
              target="_blank"
              rel="noreferrer"
              className="text-[#F0EBE1]/28 text-[8px] tracking-[0.45em] uppercase font-light hover:text-[#F0EBE1]/60 transition-all duration-500"
            >
              Google Reviews
            </a>
            <span className="text-[#F0EBE1]/10 text-[8px]">·</span>
            <a
              href="https://booksy.com/es-es/find/business/_/barber-shop/_/marbella"
              target="_blank"
              rel="noreferrer"
              className="text-[#F0EBE1]/28 text-[8px] tracking-[0.45em] uppercase font-light hover:text-[#F0EBE1]/60 transition-all duration-500"
            >
              Booksy Reviews
            </a>
          </div>

          <p className="text-[#F0EBE1]/12 text-[8px] tracking-[0.45em] uppercase font-light">
            Marbella&nbsp;&nbsp;·&nbsp;&nbsp;Costa del Sol
          </p>

        </div>
      </footer>

    </main>
  );
}
