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
import diwaliKitImage from "@/assets/diwali-kit-premium.png";
import dussehraKitImage from "@/assets/dussehra-kit-1.png";
import ganeshKitImage from "@/assets/ganesh-kit.jpg";
import navratriKitImage from "@/assets/navratri-kit.jpg";
import karvaKitImage from "@/assets/karva-chauth-gift-box.png";
import aartiBookImage from "@/assets/aarti-book.png";
import akhandBrassDiyaImage from "@/assets/akhand-brass-diya.png";
import goldKalashImage from "@/assets/gold-kalash.png";
import aartiSanghrahImage from "@/assets/aarti-sangrah.png";
import laxmiGaneshPoojaBoxImage from "@/assets/laxmi-ganesh-pooja-box.png";
import woodenDhoopHolderImage from "@/assets/wooden-dhoop-holder.png";
import woodenIncenseHolderImage from "@/assets/wooden-incense-holder.png";
import lordKrishnaStatueImage from "@/assets/lord-krishna-statue.png";
import kamdhenusIdolSilverImage from "@/assets/kamdhenu-idol-silver.jpg";
import lotusLedDiyaImage from "@/assets/lotus-led-diya.png";
import elephantCopperBottleImage from "@/assets/elephant-copper-bottle.png";
import raniMeherCopperBottleImage from "@/assets/rani-meher-copper-bottle.png";
import glitterElectricCandlesImage from "@/assets/glitter-electric-candles-gold.png";
import multicolourElectricCandlesImage from "@/assets/multicolour-electric-candles.png";

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

  // Sacred Threads (removed sandalwood mala and red thread kalava)
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
    name: "Signature Pooja Gift Box",
    price: 1999,
    originalPrice: 3000,
    image: diwaliKitImage,
    rating: 4.8,
    description: "An exquisite pooja hamper with satin ribbons containing handcrafted lotus diyas, traditional toran to welcome divine blessings, fragrant incense and dhoop sticks, and premium quality potlis with large cashews and raisins. Perfect for all auspicious occasions and spiritual celebrations.",
    badge: "34% OFF",
    category: "kits"
  },
  {
    id: 46,
    name: "Dussehra Gift Box",
    price: 1999,
    originalPrice: 3000,
    image: dussehraKitImage,
    rating: 4.9,
    description: "Celebrate the victory of good over evil with our premium Dussehra collection featuring organic dhoop sticks, carved wooden holders, and lotus diyas for divine blessings.",
    badge: "34% OFF",
    category: "kits"
  },
  {
    id: 20,
    name: "Ganesh Chaturthi Kit",
    price: 2499,
    originalPrice: 5000,
    image: ganeshKitImage,
    rating: 4.9,
    description: "Everything needed for Ganesh Chaturthi celebrations. Includes modak molds.",
    badge: "Complete Kit",
    category: "kits"
  },
  {
    id: 21,
    name: "Navratri Pooja Kit",
    price: 2499,
    originalPrice: 5000,
    image: navratriKitImage,
    rating: 4.8,
    description: "Nine-day Navratri celebration kit with all essential items.",
    badge: "9-Day Kit",
    category: "kits"
  },
  {
    id: 22,
    name: "Karva Chauth Gift Box",
    price: 2499,
    originalPrice: 5000,
    image: karvaKitImage,
    rating: 4.7,
    description: "Complete essentials for the auspicious Karva Chauth ceremony. Includes Mathi, Decorative Diya, Bindi Packet, Mehendi Cone, Kalash for Water, Pooja Thali, and Mithai Box.",
    badge: "50% OFF",
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
  },
  {
    id: 37,
    name: "Akhand Brass Diya",
    price: 1499,
    originalPrice: 2499,
    image: akhandBrassDiyaImage,
    rating: 5,
    description: "Premium Akhand Brass Diya with glass protection cover. Ideal for continuous lighting during festivals and special occasions.",
    badge: "Premium",
    category: "lamps"
  },
  {
    id: 38,
    name: "Gold Kalash",
    price: 1499,
    originalPrice: 2499,
    image: goldKalashImage,
    rating: 5,
    description: "Elevate your Aarti experience with our Gold Kalash. Exquisite gold-finished sacred vessel with intricate engravings for water rituals and ceremonies.",
    badge: "Premium",
    category: "accessories"
  },
  {
    id: 39,
    name: "Aarti Sangrah",
    price: 1499,
    originalPrice: 2499,
    image: aartiSanghrahImage,
    rating: 5,
    description: "Premium Aarti Sangrah book in elegant gift box. Complete collection of traditional aartis for daily prayers and special occasions.",
    badge: "Premium",
    category: "accessories"
  },
  {
    id: 40,
    name: "Laxmi Ganesh Pooja Box",
    price: 999,
    originalPrice: 1499,
    image: laxmiGaneshPoojaBoxImage,
    rating: 5,
    description: "Exquisite wooden pooja box with golden Laxmi Ganesh images. Complete set with traditional compartments for sacred ceremonies and worship.",
    badge: "Premium",
    category: "accessories"
  },
  {
    id: 41,
    name: "Wooden Incense Holder",
    price: 499,
    originalPrice: 750,
    image: woodenDhoopHolderImage,
    rating: 4.8,
    description: "Handcrafted wooden incense holder with intricate carved designs. Perfect for holding incense sticks during pooja ceremonies.",
    badge: "Handcrafted",
    category: "accessories"
  },
  {
    id: 42,
    name: "Wooden Dhoop Stick Holder",
    price: 499,
    originalPrice: 750,
    image: woodenIncenseHolderImage,
    rating: 4.7,
    description: "Elegant triangular wooden dhoop stick holder with carved patterns. Features storage compartment for dhoop sticks.",
    badge: "Elegant",
    category: "accessories"
  },
  {
    id: 43,
    name: "Lord Krishna Statue",
    price: 2499,
    originalPrice: 4000,
    image: lordKrishnaStatueImage,
    rating: 4.9,
    description: "Beautiful handcrafted Lord Krishna statue with golden calf. Features intricate detailing and vibrant colors. Perfect centerpiece for your home temple.",
    badge: "Sacred",
    category: "idols"
  },
  {
    id: 44,
    name: "Kamdhenu Idol Silver",
    price: 3999,
    originalPrice: 5999,
    image: kamdhenusIdolSilverImage,
    rating: 4.9,
    description: "Exquisite silver-finished Kamdhenu cow idol with calf. Symbol of prosperity and abundance. Perfect for home temple and gifting during auspicious occasions.",
    badge: "Sacred",
    category: "idols"
  },
  {
    id: 45,
    name: "Lotus LED Diya - Pack of 6",
    price: 999,
    originalPrice: 1200,
    image: lotusLedDiyaImage,
    rating: 4.8,
    description: "Beautiful crystal lotus LED diyas pack of 6. Perfect for festivals, home decoration, and creating a serene ambiance during prayers and celebrations.",
    badge: "Festival Special",
    category: "lamps"
  },
  {
    id: 47,
    name: "Elephant Motif Copper Bottle",
    price: 1750,
    originalPrice: 2500,
    image: elephantCopperBottleImage,
    rating: 5,
    description: "Premium copper bottle with exquisite elephant motif design. Perfect for Dhanteras and daily use. Keeps water fresh and provides health benefits of copper-enriched water.",
    badge: "Dhanteras Special",
    category: "accessories"
  },
  {
    id: 48,
    name: "Rani Meher Copper Bottle",
    price: 1750,
    originalPrice: 2500,
    image: raniMeherCopperBottleImage,
    rating: 5,
    description: "Exquisite copper bottle featuring traditional Rajasthani Rani Meher artwork. Perfect for Dhanteras celebrations and healthy copper-enriched water storage.",
    badge: "Dhanteras Special",
    category: "accessories"
  },
  
  // Candles
  {
    id: 49,
    name: "Dazzling Electric Candles with Glitter",
    price: 599,
    originalPrice: 799,
    image: glitterElectricCandlesImage,
    rating: 4.9,
    description: "Stunning electric LED candles with luxurious glitter finish. Available in 4, 8, or 12 pack with flameless realistic flickering effect. Perfect for festivals, weddings, and creating enchanting ambiance without fire hazards.",
    badge: "Festival Special",
    category: "candles"
  },
  {
    id: 50,
    name: "Multicoloured Electric Candles",
    price: 799,
    originalPrice: 999,
    image: multicolourElectricCandlesImage,
    rating: 4.9,
    description: "Vibrant multicoloured electric LED candles set. Available in 4, 8, or 12 pack in assorted bright colors with warm LED flames. Safe and reusable for all celebrations, adding a magical glow to your festivities.",
    badge: "Festival Special",
    category: "candles"
  }
];

export const categories = [
  { id: "all", name: "All Products", count: allProducts.length },
  { id: "incense", name: "Incense & Agarbatti", count: allProducts.filter(p => p.category === "incense").length },
  { id: "lamps", name: "Lamps & Diyas", count: allProducts.filter(p => p.category === "lamps").length },
  { id: "candles", name: "Candles", count: allProducts.filter(p => p.category === "candles").length },
  { id: "accessories", name: "Pooja Accessories", count: allProducts.filter(p => p.category === "accessories").length },
  { id: "idols", name: "Idols", count: allProducts.filter(p => p.category === "idols").length },
  { id: "kits", name: "Festival Kits", count: allProducts.filter(p => p.category === "kits").length },
];

export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return allProducts.filter(product => product.badge && ["Best Seller", "Premium", "Sacred", "Handcrafted", "Elegant"].includes(product.badge));
};