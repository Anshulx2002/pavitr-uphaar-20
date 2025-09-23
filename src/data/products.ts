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
import diwaliKitImage from "@/assets/diwali-gift-box.png";
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
    id: 2,
    name: "Pure Camphor Tablets",
    price: 149,
    originalPrice: 199,
    image: camphorImage,
    rating: 4.8,
    description: "Pure camphor tablets for traditional aarti and purification rituals. Long-lasting fragrance and clean burning.",
    badge: "Pure Quality",
    category: "incense"
  },
  {
    id: 3,
    name: "Sandalwood Powder",
    price: 399,
    originalPrice: 499,
    image: sandalwoodImage,
    rating: 4.9,
    description: "Premium sandalwood powder for tilaka, spiritual practices, and aromatic preparations. Finest quality from Mysore.",
    badge: "Premium",
    category: "incense"
  },
  {
    id: 4,
    name: "Traditional Diya Oil Lamp",
    price: 89,
    originalPrice: 120,
    image: diyaImage,
    rating: 4.7,
    description: "Handcrafted clay diya perfect for festivals and daily prayers. Creates a warm, divine atmosphere.",
    badge: "Traditional",
    category: "lamps"
  },
  {
    id: 5,
    name: "Kumkum Sindoor",
    price: 99,
    originalPrice: 149,
    image: kumkumImage,
    rating: 4.6,
    description: "Pure vermillion kumkum for tilaka and religious ceremonies. Natural ingredients, vibrant color.",
    badge: "Natural",
    category: "accessories"
  },
  {
    id: 6,
    name: "Rudraksha Beads Mala",
    price: 799,
    originalPrice: 999,
    image: rudrakshaImage,
    rating: 4.9,
    description: "Authentic rudraksha mala for meditation and prayers. 108 beads, naturally grown, blessed for spiritual practice.",
    badge: "Sacred",
    category: "accessories"
  },
  {
    id: 7,
    name: "Traditional Pooja Thali",
    price: 399,
    originalPrice: 599,
    image: poojaThaliImage,
    rating: 4.5,
    description: "Complete brass pooja thali set with all essential items. Perfect for daily worship and special occasions.",
    badge: "Complete Set",
    category: "accessories"
  },
  {
    id: 8,
    name: "Marigold Garland",
    price: 199,
    originalPrice: 249,
    image: garlandImage,
    rating: 4.4,
    description: "Fresh marigold garlands for temple decoration and festivals. Vibrant colors, long-lasting freshness.",
    badge: "Fresh",
    category: "flowers"
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
    name: "Diwali Gift Box",
    price: 2499,
    originalPrice: 5000,
    image: diwaliKitImage,
    rating: 4.8,
    description: "Premium Diwali gift box with traditional sweets and pooja essentials. Includes Kaju Katli Box (500gm), 3 Lotus Shaped Diyas, Silver Puja Thali with Laxmi Ji, Door Toran, Dhoop Sticks, Thick Incense Sticks, and Aarti Book.",
    badge: "50% OFF",
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
    category: "incense"
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
    category: "incense"
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
  }
];

export const categories = [
  { id: "all", name: "All Products", count: allProducts.length },
  { id: "incense", name: "Incense & Agarbatti", count: allProducts.filter(p => p.category === "incense").length },
  { id: "lamps", name: "Lamps & Diyas", count: allProducts.filter(p => p.category === "lamps").length },
  { id: "accessories", name: "Pooja Accessories", count: allProducts.filter(p => p.category === "accessories").length },
  { id: "flowers", name: "Flowers & Garlands", count: allProducts.filter(p => p.category === "flowers").length },
  { id: "idols", name: "Idols", count: allProducts.filter(p => p.category === "idols").length },
  { id: "kits", name: "Festival Kits", count: allProducts.filter(p => p.category === "kits").length },
];

export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return allProducts.filter(product => product.badge && ["Best Seller", "Premium", "Sacred", "Handcrafted", "Elegant"].includes(product.badge));
};