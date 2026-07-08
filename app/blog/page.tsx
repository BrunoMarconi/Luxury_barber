import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import { BlogCard } from "./BlogCard";
import { BOOKSY_URL, buildWaUrl } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Blog | Barbería Marbella",
  description:
    "Artículos y consejos sobre estilo masculino, cuidado del cabello y barbería en Marbella.",
  keywords: ["blog barbería Marbella", "consejos barbero Marbella"],
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">

        {/* CAMBIO 01 + 02: New H1 and intro block */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Blog
            </p>
            <h1 className="mt-3 text-[44px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[56px] lg:text-[72px]">
              Empieza Aquí: Construye una Imagen Masculina con Criterio, No con Tendencias
            </h1>
          </div>

          <div className="max-w-[62ch] space-y-4">
            <p className="text-[13px] font-semibold leading-6 tracking-[0.04em] text-white/80">
              Bienvenido al lugar donde la imagen masculina deja de ser improvisación
            </p>
            <p className="text-[12px] leading-6 tracking-[0.06em] text-white/60">
              La mayoría de los hombres nunca aprendió realmente por qué un corte de cabello les favorece, cómo influye la barba en la percepción del rostro o por qué algunos pequeños cambios pueden transformar por completo la imagen que proyectan.
            </p>
            <p className="text-[12px] leading-6 tracking-[0.06em] text-white/60">
              Por eso terminan tomando decisiones basadas en tendencias, fotografías de internet o recomendaciones genéricas que no siempre se adaptan a su rostro, a su cabello o a su estilo de vida.
            </p>
            <p className="text-[12px] leading-6 tracking-[0.06em] text-white/60">
              El resultado suele ser el mismo: una imagen que no refleja todo su potencial.
            </p>
            <p className="text-[12px] leading-6 tracking-[0.06em] text-white/60">
              En Marbella, donde la imagen forma parte de la vida social, profesional y personal de muchas personas, comprender estos principios puede marcar una diferencia mucho mayor de lo que parece.
            </p>
            <p className="text-[12px] leading-6 tracking-[0.06em] text-white/60">
              Este espacio fue creado para ayudarte a entender cómo construir una imagen masculina más sólida, elegante y coherente utilizando principios de visagismo masculino, análisis facial, cuidado capilar y presencia personal.
            </p>
            <p className="text-[12px] leading-6 tracking-[0.06em] text-white/60">
              Aquí no encontrarás fórmulas milagrosas.
            </p>
            <p className="text-[12px] leading-6 tracking-[0.06em] text-white/60">
              Encontrarás criterio profesional para ayudarte a tomar mejores decisiones sobre tu imagen.
            </p>
          </div>
        </div>

        {/* CAMBIO 03 + 04 + 05: ¿Qué necesitas mejorar hoy? section with cards */}
        <section className="mt-20">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Empieza por aquí
            </p>
            <h2 className="mt-3 text-[32px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[40px] lg:text-[52px]">
              ¿Qué necesitas mejorar hoy?
            </h2>
            <p className="mt-4 max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-white/60">
              Cada hombre tiene un punto de partida diferente. Por eso este blog no está pensado para que leas todos los artículos en orden. Está diseñado para ayudarte a identificar primero el aspecto que más impacto puede tener en tu imagen. Empieza por la situación que mejor describa tu caso.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* CAMBIO 04: Card — corte de cabello */}
            <div className="flex h-full flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Visagismo · Corte
                </p>
                <h3 className="mt-2 text-[22px] font-semibold uppercase leading-tight tracking-tight text-white sm:text-[26px]">
                  No sé qué corte de cabello me favorece
                </h3>
                <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-white/60">
                  Elegir un corte porque está de moda o porque le queda bien a otra persona suele ser uno de los errores más comunes. Un buen corte depende de la forma del rostro, la dirección del crecimiento del cabello, la densidad, las proporciones faciales y el estilo de vida. Cuando entiendes estos factores, dejas de elegir por intuición y empiezas a tomar decisiones con criterio.
                </p>
              </div>
              <a
                href="/blog/visagismo"
                className="btn-reserva inline-flex text-[10px] uppercase tracking-[0.22em]"
              >
                Descubrir Visagismo Masculino →
              </a>
            </div>

            {/* CAMBIO 05: Card — diagnóstico capilar */}
            <div className="flex h-full flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Cabello · Diagnóstico
                </p>
                <h3 className="mt-2 text-[22px] font-semibold uppercase leading-tight tracking-tight text-white sm:text-[26px]">
                  Siento que mi cabello ya no proyecta la imagen que quiero
                </h3>
                <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-white/60">
                  Con el paso del tiempo cambian el cabello, los hábitos y las necesidades del cuero cabelludo. En muchas ocasiones el problema no está únicamente en el corte, sino en comprender qué necesita realmente tu cabello y cómo cuidarlo correctamente. Aprender a identificar esos cambios puede ayudarte a mantener una imagen más limpia, saludable y consistente.
                </p>
              </div>
              <a
                href="/tratamiento-capilar-hombre-marbella"
                className="btn-reserva inline-flex text-[10px] uppercase tracking-[0.22em]"
              >
                Conocer el Diagnóstico Capilar →
              </a>
            </div>

            {/* CAMBIO 06: Card — imagen masculina */}
            <div className="flex h-full flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Imagen · Presencia
                </p>
                <h3 className="mt-2 text-[22px] font-semibold uppercase leading-tight tracking-tight text-white sm:text-[26px]">
                  Me visto bien, pero sigo sintiendo que algo no termina de encajar
                </h3>
                <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-white/60">
                  Vestir bien es importante. Pero una imagen masculina sólida no depende únicamente de la ropa. El cabello, la barba, las proporciones del rostro y la forma en la que todos esos elementos trabajan juntos influyen mucho más de lo que la mayoría de los hombres imagina. Muchas veces el problema no es la ropa que llevas. Es que tu imagen carece de armonía. Cuando cada elemento está pensado para favorecer tu rostro y tu estilo de vida, la percepción cambia de forma natural. No necesitas exagerar. Necesitas coherencia.
                </p>
              </div>
              <a
                href="/blog/como-verse-mas-elegante-hombre-marbella"
                className="btn-reserva inline-flex text-[10px] uppercase tracking-[0.22em]"
              >
                Explorar Imagen Masculina Premium →
              </a>
            </div>

            {/* CAMBIO 07: Card — barba y visagismo */}
            <div className="flex h-full flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Barba · Visagismo
                </p>
                <h3 className="mt-2 text-[22px] font-semibold uppercase leading-tight tracking-tight text-white sm:text-[26px]">
                  Tengo barba, pero no sé si realmente favorece mi rostro
                </h3>
                <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-white/60">
                  La barba puede convertirse en uno de los elementos que más favorecen la imagen masculina. Pero también puede producir el efecto contrario cuando no respeta la estructura del rostro. No todas las barbas favorecen a todos los hombres. Su longitud, densidad, líneas y proporciones deben adaptarse a cada rostro para conseguir equilibrio visual. Comprender estos principios puede ayudarte a proyectar una imagen mucho más limpia, masculina y sofisticada.
                </p>
              </div>
              <a
                href="/blog/barba-masculina-guia-cuidado-estilo"
                className="btn-reserva inline-flex text-[10px] uppercase tracking-[0.22em]"
              >
                Descubrir Diseño de Barba →
              </a>
            </div>

            {/* CAMBIO 08: Card — productos masculinos */}
            <div className="flex h-full flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Productos · Rutina
                </p>
                <h3 className="mt-2 text-[22px] font-semibold uppercase leading-tight tracking-tight text-white sm:text-[26px]">
                  Compro productos, pero nunca sé cuáles necesito
                </h3>
                <p className="mt-3 text-[12px] leading-6 tracking-[0.04em] text-white/60">
                  Uno de los errores más habituales consiste en comprar productos porque alguien los recomienda o porque están de moda. Sin embargo, un buen producto solo tiene valor cuando responde a una necesidad concreta. Antes de comprar, conviene entender qué necesita realmente tu cabello, tu barba y tu cuero cabelludo. Una rutina sencilla, bien diseñada y adaptada a ti suele ofrecer mejores resultados que utilizar muchos productos sin un criterio claro.
                </p>
              </div>
              <a
                href="/blog/producto-para-cabello-guia"
                className="btn-reserva inline-flex text-[10px] uppercase tracking-[0.22em]"
              >
                Descubrir Productos Masculinos →
              </a>
            </div>
          </div>

          {/* CAMBIO 09: Bloque destacado — valoración personalizada */}
          <div className="mt-8 rounded-3xl border border-white/20 bg-white/[0.07] p-8 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Valoración personalizada
            </p>
            <h3 className="mt-3 text-[28px] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-[36px]">
              ¿No sabes por dónde empezar?
            </h3>
            <p className="mt-4 max-w-[62ch] text-[12px] leading-6 tracking-[0.06em] text-white/60">
              No todos los hombres necesitan el mismo servicio. Antes de cambiar tu corte, dejarte barba o invertir en nuevos productos, lo más importante es entender qué necesita realmente tu imagen. Una valoración personalizada permite analizar tu rostro, tu cabello, tus hábitos y el resultado que deseas conseguir para recomendarte el camino más adecuado.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noreferrer"
                data-cta="booksy-blog-valoracion"
                className="btn-reserva inline-flex text-[10px] uppercase tracking-[0.22em]"
              >
                Reservar Valoración Personalizada →
              </a>
              <a
                href={buildWaUrl("blog")}
                target="_blank"
                rel="noreferrer"
                data-cta="whatsapp-blog-especialista"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/60 hover:text-white"
              >
                Hablar con un Especialista →
              </a>
            </div>
          </div>
        </section>

        {/* Blog posts grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-[14px] text-white/60">No hay posts disponibles aún.</p>
          </div>
        )}

      </div>
    </main>
  );
}
