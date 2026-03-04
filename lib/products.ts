export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  line: string;
  image: string;
  price: number;
  slug: string;
  tags?: string[];
  sizes?: string[];
};

export const LINES = ["ALL", "BEARD", "HAIR", "GROOMING"];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Man Wash",
    description: "Baño tonificante cuerpo y cabello con extracto orgánico de ajenjo y células estaminales de bayas de uva. Ideal para uso diario.",
    category: "Beard Care",
    line: "BEARD",
    image: "/images/Producto1.jpeg",
    price: 29.99,
    slug: "beard-oil",
    tags: ["beard", "oil", "grooming"],
    sizes: ["250ml", "1000ml"],
  },
  {
    id: "2",
    name: "Man Tonic",
    description: "Strong hold pomade for styling",
    category: "Previa Man Tonic Hair + Scalp 150ml - loción anticaída Loción en spray estimulante para el cuero cabelludo con extracto de ajenjo orgánico y células madre de uva. Indicado para la prevención de la caída del cabello. Uso diario.",
    line: "HAIR",
    image: "/images/Producto4.webp",
    price: 24.99,
    slug: "hair-pomade",
    tags: ["hair", "pomade", "styling"],
    sizes: ["150ml"],
  },
  {
    id: "3",
    name: "Uppercut Deluxe Matt Pomade",
    description: "La Uppercut Deluxe Matt Pomade es una pomada para el cabello soluble en agua con acabado mate y fijación media, que deja un look natural y texturizado. Fue desarrollada por barberos y sirve para todo tipo de cabello y estilos. Tiene una fragancia sutil y una buena fijación que mantiene el peinado durante todo el día. Se aplica en el cabello seco, distribuyendo una pequeña cantidad con las manos y peinando para dar forma.",
    category: "Face Care",
    line: "GROOMING",
    image: "/images/Producto3.jpg",
    price: 19.99,
    slug: "face-wash",
    tags: ["face", "wash", "cleanser"],
    sizes: ["200ml", "400ml"],
  },
  {
    id: "4",
    name: " Hair Styling Powder",
    description: "El Uppercut Deluxe Styling Powder es un polvo mate para el cabello que aporta volumen, textura y una fijación ligera y natural. Es adecuado para todo tipo de cabello, especialmente para cabellos finos. Permite reestilizar el peinado durante el día y ajustar la fijación añadiendo más producto. Es versátil y fácil de usar para crear estilos relajados con más cuerpo y textura.",
    category: "Beard Care",
    line: "BEARD",
    image: "/images/Producto5.jpg",
    price: 18,
    slug: "beard-balm",
    tags: ["beard", "balm", "style"],
    sizes: ["20g"],
  },
  {
    id: "5",
    name: "Sea Salt Spray",
    description: "El Uppercut Deluxe Sea Salt Spray es un spray de sal marina que crea textura, volumen y un acabado mate natural con fijación ligera. Puede aplicarse en cabello húmedo o seco para lograr estilos desenfadados y naturales. También funciona como pre-styler antes de usar otros productos de peinado. Su aplicador de niebla distribuye el producto de forma uniforme para un mejor resultado.",
    category: "Hair Styling",
    line: "HAIR",
    image: "/images/Producto6.jpg",
    price: 26.0,
    slug: "sea-salt-spray",
    tags: ["hair", "spray", "textured"],
    sizes: ["150ml"],
  }
];
