import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import { BlogCard } from "./BlogCard";

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
