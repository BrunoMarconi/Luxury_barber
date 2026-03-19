import HomeClient from "./HomeClient";
import { client } from "@/lib/sanity.client";
import { servicesQuery, galleryQuery } from "@/lib/sanity.queries";

const defaultServices = [
  { _id: "1", title: "Corte clásico", description: "Corte personalizado con estilo y acabado impecable.", price: "30,00 €" },
  { _id: "2", title: "Afeitado tradicional", description: "Afeitado con navaja, toalla caliente y loción calmante.", price: "25,00 €" },
  { _id: "3", title: "Peinado + styling", description: "Peinado final para un look perfecto y duradero.", price: "20,00 €" },
];

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
    const [services, gallery] = await Promise.all([
      client.fetch(servicesQuery),
      client.fetch(galleryQuery),
    ]);

    return (
      <HomeClient
        services={services?.length ? services : defaultServices}
        gallery={gallery?.length ? gallery : defaultGallery}
      />
    );
  } catch (error) {
    console.error("Sanity fetch failed", error);
    return <HomeClient services={defaultServices} gallery={defaultGallery} />;
  }
}