import HomeClient from "./HomeClient";
import { client } from "@/lib/sanity.client";
import { galleryQuery } from "@/lib/sanity.queries";
import { fetchGoogleReviews } from "@/lib/google-reviews";

type DefaultGalleryPhoto = {
  _id: string;
  src: string;
  alt: string;
  size: "tall" | "wide" | "square";
};

const defaultGallery: DefaultGalleryPhoto[] = [
  { _id: "g9", src: "/images/gallery9.jpeg", alt: "Corte masculino profesional", size: "tall" },
  { _id: "g3", src: "/images/gallery3.jpeg", alt: "Estilo masculino premium", size: "square" },
  { _id: "g12", src: "/images/gallery12.jpeg", alt: "Experiencia barbería Marbella", size: "tall" },
  { _id: "g1", src: "/images/gallery1.jpeg", alt: "Corte de pelo premium Marbella", size: "wide" },
  { _id: "g14", src: "/images/gallery14.jpeg", alt: "Diseño de barba profesional", size: "square" },
  { _id: "g6", src: "/images/gallery6.jpeg", alt: "Imagen masculina premium", size: "tall" },
  { _id: "g10", src: "/images/gallery10.jpeg", alt: "Barbería de lujo Marbella", size: "wide" },
  { _id: "g4", src: "/images/gallery4.jpeg", alt: "Resultado corte de pelo hombre", size: "square" },
  { _id: "g8", src: "/images/gallery8.jpeg", alt: "Cuidado masculino avanzado", size: "tall" },
  { _id: "g2", src: "/images/gallery2.jpeg", alt: "Detalle de barbería premium", size: "square" },
  { _id: "g13", src: "/images/gallery13.jpeg", alt: "Estilo y precisión masculina", size: "wide" },
  { _id: "g11", src: "/images/gallery11.jpeg", alt: "Trabajo de barbería profesional", size: "tall" },
];

export default async function Page() {
  const googleReviews = await fetchGoogleReviews();
  try {
    const gallery = await client.fetch(galleryQuery);
    return (
      <HomeClient
        gallery={gallery?.length ? gallery : defaultGallery}
        googleReviews={googleReviews}
      />
    );
  } catch (error) {
    console.error("Sanity fetch failed", error);
    return <HomeClient gallery={defaultGallery} googleReviews={googleReviews} />;
  }
}