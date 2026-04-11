import HomeClient from "./HomeClient";
import { client } from "@/lib/sanity.client";
import { galleryQuery } from "@/lib/sanity.queries";

type DefaultGalleryPhoto = {
  _id: string;
  src: string;
  alt: string;
  size: "tall" | "wide" | "square";
};

const defaultGallery: DefaultGalleryPhoto[] = [
  { _id: "1", src: "/images/Foto1_1.jpeg", alt: "Barbero cortando cabello", size: "tall" },
  { _id: "2", src: "/images/Foto2_1.jpeg", alt: "Arreglo de barba", size: "square" },
  { _id: "3", src: "/images/Foto3.jpeg", alt: "Interior de la tienda", size: "wide" },
];

export default async function Page() {
  try {
    const gallery = await client.fetch(galleryQuery);

    return (
      <HomeClient
        gallery={gallery?.length ? gallery : defaultGallery}
      />
    );
  } catch (error) {
    console.error("Sanity fetch failed", error);
    return <HomeClient gallery={defaultGallery} />;
  }
}