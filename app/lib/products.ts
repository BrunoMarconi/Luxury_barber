export type Product = {
  id: string;
  slug: string;
  line: string;        // RECONSTRUCT, KEEPING...
  category: string;    // Shampoo, Conditioner...
  name: string;
  description: string;
  sizes?: string[];    // ["250ml", "1000ml"]
  tags?: string[];
  image: string;       // por ahora unsplash (luego packshots)
};

export const LINES = [
  "RECONSTRUCT",
  "KEEPING",
  "BLONDE",
  "EXTRA LIFE",
  "SMOOTHING",
  "CURLFRIENDS",
  "VOLUMISING",
  "STYLE & FINISH",
  "MAN",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "reconstruct-shampoo",
    slug: "regenerating-shampoo",
    line: "RECONSTRUCT",
    category: "Shampoo",
    name: "Regenerating Shampoo",
    description: "Limpia suavemente y ayuda a regenerar la fibra capilar.",
    sizes: ["10ml", "100ml", "250ml", "1000ml"],
    tags: ["damaged hair", "repair"],
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "reconstruct-conditioner",
    slug: "regenerating-conditioner",
    line: "RECONSTRUCT",
    category: "Conditioner",
    name: "Regenerating Conditioner",
    description: "Hidrata y regenera la estructura del cabello con brillo inmediato.",
    sizes: ["250ml", "1000ml"],
    tags: ["repair", "shine"],
    image:
      "https://images.unsplash.com/photo-1620916566393-2f612d4a5d4e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "reconstruct-treatment",
    slug: "regenerating-treatment",
    line: "RECONSTRUCT",
    category: "Treatment",
    name: "Regenerating Treatment",
    description: "Tratamiento regenerador con efecto relleno y acción anti-age.",
    sizes: ["10ml", "60ml", "150ml", "1000ml"],
    tags: ["treatment", "anti-age"],
    image:
      "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "keeping-shampoo",
    slug: "after-colour-shampoo",
    line: "KEEPING",
    category: "Shampoo",
    name: "After Colour Shampoo",
    description: "Protege el color y prolonga la duración con brillo extra.",
    sizes: ["250ml", "1000ml"],
    tags: ["color care", "shine"],
    image:
      "https://images.unsplash.com/photo-1612810436541-336d6f6cc2f0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "blonde-silver-shampoo",
    slug: "silver-shampoo",
    line: "BLONDE",
    category: "Shampoo",
    name: "Silver Shampoo",
    description: "Neutraliza tonos amarillo/naranja y realza reflejos fríos.",
    sizes: ["250ml", "1000ml"],
    tags: ["blonde", "anti-yellow"],
    image:
      "https://images.unsplash.com/photo-1617952986600-802f965dcdbc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "style-sea-salt",
    slug: "sea-salt-spray",
    line: "STYLE & FINISH",
    category: "Styling",
    name: "Sea Salt Spray",
    description: "Textura efecto playa, fijación ligera y acabado mate.",
    sizes: ["200ml"],
    tags: ["texture", "matte"],
    image:
      "https://images.unsplash.com/photo-1585232350745-3f1f66f564f8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "man-pomade",
    slug: "man-pomade",
    line: "MAN",
    category: "Styling",
    name: "Man Pomade",
    description: "Brillantina de fijación extra fuerte con acabado brillante.",
    sizes: ["100ml"],
    tags: ["men", "strong hold"],
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "man-pomade",
    slug: "man-pomade",
    line: "MAN",
    category: "Styling",
    name: "Man Pomade",
    description: "Brillantina de fijación extra fuerte con acabado brillante.",
    sizes: ["100ml"],
    tags: ["men", "strong hold"],
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "man-pomade",
    slug: "man-pomade",
    line: "MAN",
    category: "Styling",
    name: "Man Pomade",
    description: "Brillantina de fijación extra fuerte con acabado brillante.",
    sizes: ["100ml"],
    tags: ["men", "strong hold"],
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "man-pomade",
    slug: "man-pomade",
    line: "MAN",
    category: "Styling",
    name: "Man Pomade",
    description: "Brillantina de fijación extra fuerte con acabado brillante.",
    sizes: ["100ml"],
    tags: ["men", "strong hold"],
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "man-pomade",
    slug: "man-pomade",
    line: "MAN",
    category: "Styling",
    name: "Man Pomade",
    description: "Brillantina de fijación extra fuerte con acabado brillante.",
    sizes: ["100ml"],
    tags: ["men", "strong hold"],
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1600&q=80",
  },
];