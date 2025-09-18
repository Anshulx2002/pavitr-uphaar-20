// Import all images
import agarbattiImage from "@/assets/agarbatti.jpg";
import diyaImage from "@/assets/diya.jpg";
import kumkumImage from "@/assets/kumkum.jpg";
import rudrakshaImage from "@/assets/rudraksha.jpg";
import camphorImage from "@/assets/camphor.jpg";
import poojaThaliImage from "@/assets/pooja-thali.jpg";
import goldPoojaThaliImage from "@/assets/gold-pooja-thali.jpg";
import silverPoojaThaliImage from "@/assets/silver-pooja-thali.jpg";
import garlandImage from "@/assets/garland.jpg";
import sandalwoodImage from "@/assets/sandalwood.jpg";
import diwaliKitImage from "@/assets/diwali-kit.jpg";
import ganeshKitImage from "@/assets/ganesh-kit.jpg";
import navratriKitImage from "@/assets/navratri-kit.jpg";
import karvaKitImage from "@/assets/karva-kit.jpg";
import aartiBookImage from "@/assets/aarti-book.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  description: string;
  badge?: string;
  category: string;
}

export const allProducts: Product[] = [
  // Incense & Agarbatti
  {
    id: 1,
    name: "Premium Sandalwood Agarbatti",
    price: 299,
    originalPrice: 399,
    image: agarbattiImage,
    rating: 5,
    description: "Hand-rolled incense sticks made from pure sandalwood powder. Burns for 45 minutes with divine fragrance.",
    badge: "Best Seller",
    category: "incense"
  },
  {
    id: 9,
    name: "Rose Agarbatti Sticks",
    price: 199,
    originalPrice: 249,
    image: agarbattiImage,
    rating: 4.8,
    description: "Delicate rose-scented incense sticks for peaceful meditation and prayers.",
    badge: "Fragrant",
    category: "incense"
  },
  {
    id: 10,
    name: "Jasmine Incense Cones",
    price: 149,
    image: agarbattiImage,
    rating: 4.6,
    description: "Aromatic jasmine incense cones for evening prayers and relaxation.",
    category: "incense"
  },
  {
    id: 24,
    name: "Lavender Meditation Sticks",
    price: 249,
    image: agarbattiImage,
    rating: 4.7,
    description: "Calming lavender incense sticks for meditation and stress relief.",
    badge: "Calming",
    category: "incense"
  },
  {
    id: 25,
    name: "Mogra Agarbatti Pack",
    price: 179,
    originalPrice: 229,
    image: agarbattiImage,
    rating: 4.5,
    description: "Traditional mogra scented agarbatti for daily worship. Pack of 20 sticks.",
    category: "incense"
  },

  // Lamps & Diyas
  {
    id: 2,
    name: "Brass Diya Set",
    price: 549,
    originalPrice: 699,
    image: diyaImage,
    rating: 5,
    description: "Traditional brass oil lamps with intricate designs. Set of 4 diyas perfect for festivals and daily prayers.",
    badge: "Premium",
    category: "lamps"
  },
  {
    id: 11,
    name: "Clay Diya Collection",
    price: 99,
    originalPrice: 149,
    image: diyaImage,
    rating: 4.7,
    description: "Handcrafted clay diyas in traditional designs. Pack of 12 pieces.",
    badge: "Eco-Friendly",
    category: "lamps"
  },
  {
    id: 12,
    name: "Decorative Floating Diyas",
    price: 299,
    image: diyaImage,
    rating: 4.9,
    description: "Beautiful floating diyas for water ceremonies and decoration.",
    badge: "Decorative",
    category: "lamps"
  },
  {
    id: 26,
    name: "Electric LED Diya",
    price: 399,
    originalPrice: 499,
    image: diyaImage,
    rating: 4.4,
    description: "Modern LED diya with warm light. Battery operated for safe use.",
    badge: "Modern",
    category: "lamps"
  },
  {
    id: 27,
    name: "Silver Plated Diya",
    price: 799,
    image: diyaImage,
    rating: 4.8,
    description: "Elegant silver-plated diya for special occasions and ceremonies.",
    badge: "Elegant",
    category: "lamps"
  },

  // Pooja Accessories
  {
    id: 5,
    name: "Pure Camphor Tablets",
    price: 99,
    image: camphorImage,
    rating: 4.6,
    description: "Natural camphor tablets for aarti and purification rituals. Pack of 20 tablets.",
    category: "accessories"
  },
  {
    id: 6,
    name: "Brass Pooja Thali",
    price: 1299,
    originalPrice: 1599,
    image: poojaThaliImage,
    rating: 5,
    description: "Complete pooja thali set with 7 compartments. Handcrafted brass with traditional motifs.",
    badge: "Premium",
    category: "accessories"
  },
  {
    id: 16,
    name: "Copper Kalash",
    price: 799,
    originalPrice: 999,
    image: poojaThaliImage,
    rating: 4.9,
    description: "Pure copper kalash for water rituals and ceremonies. Traditional design.",
    badge: "Traditional",
    category: "accessories"
  },
  {
    id: 28,
    name: "Pooja Bell Set",
    price: 449,
    image: poojaThaliImage,
    rating: 4.7,
    description: "Traditional brass bells with melodious sound for aarti and prayers.",
    badge: "Melodious",
    category: "accessories"
  },
  {
    id: 29,
    name: "Incense Holder Stand",
    price: 199,
    originalPrice: 249,
    image: poojaThaliImage,
    rating: 4.5,
    description: "Elegant brass incense holder with ash catcher. Perfect for agarbatti.",
    category: "accessories"
  },
  {
    id: 3,
    name: "Pure Kumkum Powder",
    price: 149,
    image: kumkumImage,
    rating: 4.8,
    description: "Authentic vermillion powder made from turmeric and lime. 100g pack for tilaka and rituals.",
    category: "accessories"
  },
  {
    id: 8,
    name: "Sandalwood Powder",
    price: 399,
    originalPrice: 499,
    image: sandalwoodImage,
    rating: 4.9,
    description: "Pure Mysore sandalwood powder for tilaka and skin care. 50g premium quality.",
    badge: "Organic",
    category: "accessories"
  },

  // Flowers & Garlands
  {
    id: 7,
    name: "Fresh Marigold Garland",
    price: 199,
    image: garlandImage,
    rating: 4.6,
    description: "Fresh marigold flowers garland for temple decoration and offerings. 2 meter length.",
    category: "flowers"
  },
  {
    id: 17,
    name: "Rose Petals",
    price: 149,
    image: garlandImage,
    rating: 4.5,
    description: "Fresh rose petals for worship and decoration. 500g pack.",
    badge: "Fresh",
    category: "flowers"
  },
  {
    id: 18,
    name: "Lotus Garland",
    price: 399,
    image: garlandImage,
    rating: 4.8,
    description: "Artificial lotus garland for permanent temple decoration. Weather resistant.",
    badge: "Durable",
    category: "flowers"
  },
  {
    id: 30,
    name: "Jasmine Flower Strings",
    price: 129,
    originalPrice: 179,
    image: garlandImage,
    rating: 4.4,
    description: "Traditional jasmine flower strings for hair decoration and offerings.",
    badge: "Traditional",
    category: "flowers"
  },
  {
    id: 31,
    name: "Mixed Flower Garland",
    price: 249,
    image: garlandImage,
    rating: 4.7,
    description: "Beautiful mixed flower garland with marigold, roses, and jasmine.",
    badge: "Colorful",
    category: "flowers"
  },

  // Sacred Threads
  {
    id: 4,
    name: "Rudraksha Mala",
    price: 899,
    originalPrice: 1199,
    image: rudrakshaImage,
    rating: 5,
    description: "5-Mukhi Rudraksha beads mala with 108 beads. Blessed and energized for meditation and prayers.",
    badge: "Sacred",
    category: "threads"
  },
  {
    id: 14,
    name: "Tulsi Mala",
    price: 399,
    originalPrice: 499,
    image: rudrakshaImage,
    rating: 4.9,
    description: "Sacred tulsi beads mala for chanting and meditation. 108 beads.",
    badge: "Holy",
    category: "threads"
  },
  {
    id: 15,
    name: "Crystal Mala",
    price: 1299,
    image: rudrakshaImage,
    rating: 4.8,
    description: "Pure crystal beads mala for healing and meditation practices.",
    badge: "Healing",
    category: "threads"
  },
  {
    id: 32,
    name: "Sandalwood Mala",
    price: 699,
    originalPrice: 899,
    image: rudrakshaImage,
    rating: 4.7,
    description: "Fragrant sandalwood beads mala for peaceful meditation. 108 beads.",
    badge: "Fragrant",
    category: "threads"
  },
  {
    id: 33,
    name: "Red Thread Kalava",
    price: 49,
    image: rudrakshaImage,
    rating: 4.5,
    description: "Sacred red thread kalava for protection and blessings. Pack of 10 meters.",
    badge: "Protection",
    category: "threads"
  },
  {
    id: 34,
    name: "Gold Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: goldPoojaThaliImage,
    rating: 5,
    description: "Exquisite gold-plated pooja thali with intricate designs. Complete set with all essential compartments for elaborate worship ceremonies.",
    badge: "Premium",
    category: "accessories"
  },
  {
    id: 35,
    name: "Silver Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: silverPoojaThaliImage,
    rating: 5,
    description: "Elegant silver-plated pooja thali with traditional motifs. Premium quality craftsmanship for special occasions and daily worship.",
    badge: "Premium",
    category: "accessories"
  },

  // Festival Kits
  {
    id: 19,
    name: "Diwali Celebration Kit",
    price: 1499,
    originalPrice: 1999,
    image: diwaliKitImage,
    rating: 5,
    description: "Complete Diwali celebration kit with diyas, rangoli colors, and sweets.",
    badge: "Festival Special",
    category: "kits"
  },
  {
    id: 20,
    name: "Ganesh Chaturthi Kit",
    price: 999,
    originalPrice: 1299,
    image: ganeshKitImage,
    rating: 4.9,
    description: "Everything needed for Ganesh Chaturthi celebrations. Includes modak molds.",
    badge: "Complete Kit",
    category: "kits"
  },
  {
    id: 21,
    name: "Navratri Pooja Kit",
    price: 799,
    originalPrice: 999,
    image: navratriKitImage,
    rating: 4.8,
    description: "Nine-day Navratri celebration kit with all essential items.",
    badge: "9-Day Kit",
    category: "kits"
  },
  {
    id: 22,
    name: "Karva Chauth Kit",
    price: 599,
    originalPrice: 799,
    image: karvaKitImage,
    rating: 4.7,
    description: "Traditional Karva Chauth kit with decorated thali and accessories.",
    badge: "Traditional",
    category: "kits"
  },
  {
    id: 36,
    name: "Hanuman Chalisa Aarti Book",
    price: 1499,
    originalPrice: 2499,
    image: aartiBookImage,
    rating: 5,
    description: "Premium gold-finished Hanuman Chalisa book in elegant gift box. Perfect for daily prayers and gifting.",
    badge: "Premium",
    category: "accessories"
  }
];

export const categories = [
  { id: "all", name: "All Products", count: allProducts.length },
  { id: "incense", name: "Incense & Agarbatti", count: allProducts.filter(p => p.category === "incense").length },
  { id: "lamps", name: "Lamps & Diyas", count: allProducts.filter(p => p.category === "lamps").length },
  { id: "accessories", name: "Pooja Accessories", count: allProducts.filter(p => p.category === "accessories").length },
  { id: "flowers", name: "Flowers & Garlands", count: allProducts.filter(p => p.category === "flowers").length },
  { id: "threads", name: "Sacred Threads", count: allProducts.filter(p => p.category === "threads").length },
  { id: "kits", name: "Festival Kits", count: allProducts.filter(p => p.category === "kits").length },
];

export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return allProducts.filter(product => product.badge && ["Best Seller", "Premium", "Sacred"].includes(product.badge));
};