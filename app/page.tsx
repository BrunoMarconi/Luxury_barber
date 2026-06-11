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
  { _id: "24", src: "/images/foto24.jpeg", alt: "Corte masculino profesional", size: "tall" },
  { _id: "25", src: "/images/foto25.jpeg", alt: "Estilo masculino premium", size: "square" },
  { _id: "26", src: "/images/foto26.jpeg", alt: "Experiencia barbería Marbella", size: "tall" },
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