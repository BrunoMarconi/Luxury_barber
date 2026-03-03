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
    name: "Beard Oil",
    description: "Premium beard oil for grooming",
    category: "Beard Care",
    line: "BEARD",
    image: "/images/Producto1.jpeg",
    price: 29.99,
    slug: "beard-oil",
    tags: ["beard", "oil", "grooming"],
    sizes: ["30ml", "50ml", "100ml"],
  },
  {
    id: "2",
    name: "Hair Pomade",
    description: "Strong hold pomade for styling",
    category: "Hair Styling",
    line: "HAIR",
    image: "/images/Producto4.webp",
    price: 24.99,
    slug: "hair-pomade",
    tags: ["hair", "pomade", "styling"],
    sizes: ["75ml", "150ml"],
  },
  {
    id: "3",
    name: "Face Wash",
    description: "Gentle facial cleanser",
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
    name: "Beard Balm",
    description: "Nourishing balm to shape and soften the beard",
    category: "Beard Care",
    line: "BEARD",
    image: "/images/Producto5.jpg",
    price: 21.5,
    slug: "beard-balm",
    tags: ["beard", "balm", "style"],
    sizes: ["50ml", "100ml"],
  },
  {
    id: "5",
    name: "Matte Hair Clay",
    description: "Low-shine clay for flexible hold",
    category: "Hair Styling",
    line: "HAIR",
    image: "/images/Producto6.jpg",
    price: 26.0,
    slug: "matte-hair-clay",
    tags: ["hair", "clay", "matte"],
    sizes: ["60ml", "120ml"],
  }
];
