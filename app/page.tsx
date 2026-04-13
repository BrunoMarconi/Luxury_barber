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
  { _id: "4", src: "/images/Foto4_1.jpeg", alt: "Detalle de corte de cabello", size: "tall" },
  { _id: "5", src: "/images/Foto5_1.jpeg", alt: "Herramientas en la estación", size: "square" },
  { _id: "6", src: "/images/Foto6_1.jpeg", alt: "Silla de barbero", size: "tall" },
  { _id: "7", src: "/images/Foto7.jpeg", alt: "Detalle de recorte de barba", size: "tall" },
  { _id: "8", src: "/images/Foto8_1.jpeg", alt: "Tijeras y peine", size: "square" },
  { _id: "9", src: "/images/Foto9.jpeg", alt: "Tijeras y peine", size: "tall" },
  { _id: "10", src: "/images/Foto10.jpeg", alt: "Tijeras y peine", size: "wide" },
  { _id: "11", src: "/images/Foto11.jpeg", alt: "Tijeras y peine", size: "tall" },
  { _id: "12", src: "/images/Foto12.jpeg", alt: "Tijeras y peine", size: "square" },
  { _id: "13", src: "/images/Foto13.jpeg", alt: "Tijeras y peine", size: "tall" },
  { _id: "14", src: "/images/Foto14.jpeg", alt: "Corte de cabello profesional", size: "square" },
  { _id: "15", src: "/images/Foto15.jpeg", alt: "Estilo masculino moderno", size: "tall" },
  { _id: "16", src: "/images/Foto16.jpeg", alt: "Barbería en acción", size: "wide" },
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