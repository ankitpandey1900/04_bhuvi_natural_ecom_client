export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
  accent: string;
  badge: string;
  ingredients: string[];
  highlights: string[];
  story: string;
};

export const products: Product[] = [
  {
    id: "velvet-rose-soap",
    slug: "velvet-rose-soap",
    name: "Velvet Rose Soap",
    category: "Cleansing",
    price: "₹18",
    description: "A botanical bar with rosehip, oat milk, and a silky finish for daily luxury.",
    accent: "from-[#a66e4f] to-[#e8c7a8]",
    badge: "Best Seller",
    ingredients: ["Rosehip seed", "Oat milk", "Coconut butter"],
    highlights: ["Gentle for daily use", "Creamy lather", "Balanced for dry skin"],
    story: "Created for slow mornings and restorative evenings, this soap feels plush and grounding from the first touch.",
  },
  {
    id: "sunlit-calm-serum",
    slug: "sunlit-calm-serum",
    name: "Sunlit Calm Serum",
    category: "Face",
    price: "₹34",
    description: "A lightweight serum paired with squalane and green tea to soften and restore.",
    accent: "from-[#6c8554] to-[#cbd7b3]",
    badge: "New",
    ingredients: ["Green tea", "Squalane", "Niacinamide"],
    highlights: ["Fast-absorbing", "Brightens appearance", "Calms visible stress"],
    story: "An airy serum that brings comfort and luminosity to modern routines without heaviness.",
  },
  {
    id: "amber-ritual-oil",
    slug: "amber-ritual-oil",
    name: "Amber Ritual Oil",
    category: "Body",
    price: "₹28",
    description: "A nourishing body oil with almond and neroli for a grounded evening ritual.",
    accent: "from-[#9a6a3d] to-[#f0ddbf]",
    badge: "Editor’s Pick",
    ingredients: ["Sweet almond", "Neroli", "Vitamin E"],
    highlights: ["Silky finish", "Layerable", "Ideal for night rituals"],
    story: "Grounded in warmth and tactile comfort, this oil turns a simple body care step into a sensory ritual.",
  },
  {
    id: "mint-bloom-cleanser",
    slug: "mint-bloom-cleanser",
    name: "Mint Bloom Cleanser",
    category: "Cleansing",
    price: "₹24",
    description: "An airy gel cleanser that refreshes the complexion while respecting the skin barrier.",
    accent: "from-[#55705b] to-[#cfe0d1]",
    badge: "Gentle Care",
    ingredients: ["Peppermint leaf", "Chamomile", "Hyaluronic acid"],
    highlights: ["Refreshing feel", "Barrier-friendly", "Sprightly finish"],
    story: "A cooling cleanser that feels crisp and elegant while keeping skin comfort at the center.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
