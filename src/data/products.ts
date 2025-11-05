// Product images are served from public folder for stable URLs in Meta feeds
// NOTE: Products are now stored in Supabase database
// Use the useProducts hook to fetch products dynamically
// This file is kept for backward compatibility and type definitions

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
  availability?: "in stock" | "out of stock" | "preorder";
  condition?: "new" | "refurbished" | "used";
  brand?: string;
}

// Fallback static products (will be replaced by database data in production)
// To populate the database, call the seed-products edge function once

export const allProducts: Product[] = [
  // Incense & Agarbatti
  {
    id: 1,
    name: "Premium Sandalwood Agarbatti",
    price: 299,
    originalPrice: 399,
    image: "/product-images/agarbatti.jpg",
    rating: 5,
    description: "Hand-rolled incense sticks made from pure sandalwood powder. Burns for 45 minutes with divine fragrance.",
    badge: "Best Seller",
    category: "incense",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },

  // Sacred Threads (removed sandalwood mala and red thread kalava)
  {
    id: 34,
    name: "Gold Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: "/product-images/gold-pooja-thali.jpg",
    rating: 5,
    description: "Exquisite gold-plated pooja thali with intricate designs. Complete set with all essential compartments for elaborate worship ceremonies.",
    badge: "Premium",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 35,
    name: "Silver Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: "/product-images/silver-pooja-thali.jpg",
    rating: 5,
    description: "Elegant silver-plated pooja thali with traditional motifs. Premium quality craftsmanship for special occasions and daily worship.",
    badge: "Premium",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },

  // Festival Kits
  {
    id: 19,
    name: "Signature Pooja Gift Box",
    price: 1999,
    originalPrice: 3000,
    image: "/product-images/diwali-kit-premium.png",
    rating: 4.8,
    description: "An exquisite pooja hamper with satin ribbons containing handcrafted lotus diyas, traditional toran to welcome divine blessings, fragrant incense and dhoop sticks, and premium quality potlis with large cashews and raisins. Perfect for all auspicious occasions and spiritual celebrations.",
    badge: "34% OFF",
    category: "kits",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 46,
    name: "Dussehra Gift Box",
    price: 1999,
    originalPrice: 3000,
    image: "/product-images/dussehra-kit-1.png",
    rating: 4.9,
    description: "Celebrate the victory of good over evil with our premium Dussehra collection featuring organic dhoop sticks, carved wooden holders, and lotus diyas for divine blessings.",
    badge: "34% OFF",
    category: "kits",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 20,
    name: "Ganesh Chaturthi Kit",
    price: 2499,
    originalPrice: 5000,
    image: "/product-images/ganesh-kit.jpg",
    rating: 4.9,
    description: "Everything needed for Ganesh Chaturthi celebrations. Includes modak molds.",
    badge: "Complete Kit",
    category: "kits",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 21,
    name: "Navratri Pooja Kit",
    price: 2499,
    originalPrice: 5000,
    image: "/product-images/navratri-kit.jpg",
    rating: 4.8,
    description: "Nine-day Navratri celebration kit with all essential items.",
    badge: "9-Day Kit",
    category: "kits",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 22,
    name: "Karva Chauth Gift Box",
    price: 2499,
    originalPrice: 5000,
    image: "/product-images/karva-chauth-gift-box.png",
    rating: 4.7,
    description: "Complete essentials for the auspicious Karva Chauth ceremony. Includes Mathi, Decorative Diya, Bindi Packet, Mehendi Cone, Kalash for Water, Pooja Thali, and Mithai Box.",
    badge: "50% OFF",
    category: "kits",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 36,
    name: "Hanuman Chalisa Aarti Book",
    price: 1499,
    originalPrice: 2499,
    image: "/product-images/aarti-book.png",
    rating: 5,
    description: "Premium gold-finished Hanuman Chalisa book in elegant gift box. Perfect for daily prayers and gifting.",
    badge: "Premium",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 37,
    name: "Akhand Brass Diya",
    price: 1499,
    originalPrice: 2499,
    image: "/product-images/akhand-brass-diya.png",
    rating: 5,
    description: "Premium Akhand Brass Diya with glass protection cover. Ideal for continuous lighting during festivals and special occasions.",
    badge: "Premium",
    category: "lamps",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 38,
    name: "Gold Kalash",
    price: 1499,
    originalPrice: 2499,
    image: "/product-images/gold-kalash.png",
    rating: 5,
    description: "Elevate your Aarti experience with our Gold Kalash. Exquisite gold-finished sacred vessel with intricate engravings for water rituals and ceremonies.",
    badge: "Premium",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 39,
    name: "Aarti Sangrah",
    price: 1499,
    originalPrice: 2499,
    image: "/product-images/aarti-sangrah.png",
    rating: 5,
    description: "Premium Aarti Sangrah book in elegant gift box. Complete collection of traditional aartis for daily prayers and special occasions.",
    badge: "Premium",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 40,
    name: "Laxmi Ganesh Pooja Box",
    price: 999,
    originalPrice: 1499,
    image: "/product-images/laxmi-ganesh-pooja-box.png",
    rating: 5,
    description: "Exquisite wooden pooja box with golden Laxmi Ganesh images. Complete set with traditional compartments for sacred ceremonies and worship.",
    badge: "Premium",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 41,
    name: "Wooden Incense Holder",
    price: 499,
    originalPrice: 750,
    image: "/product-images/wooden-dhoop-holder.png",
    rating: 4.8,
    description: "Handcrafted wooden incense holder with intricate carved designs. Perfect for holding incense sticks during pooja ceremonies.",
    badge: "Handcrafted",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 42,
    name: "Wooden Dhoop Stick Holder",
    price: 499,
    originalPrice: 750,
    image: "/product-images/wooden-incense-holder.png",
    rating: 4.7,
    description: "Elegant triangular wooden dhoop stick holder with carved patterns. Features storage compartment for dhoop sticks.",
    badge: "Elegant",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 43,
    name: "Lord Krishna Statue",
    price: 2499,
    originalPrice: 4000,
    image: "/product-images/lord-krishna-statue.png",
    rating: 4.9,
    description: "Beautiful handcrafted Lord Krishna statue with golden calf. Features intricate detailing and vibrant colors. Perfect centerpiece for your home temple.",
    badge: "Sacred",
    category: "idols",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 44,
    name: "Kamdhenu Idol Silver",
    price: 3999,
    originalPrice: 5999,
    image: "/product-images/kamdhenu-idol-silver.jpg",
    rating: 4.9,
    description: "Exquisite silver-finished Kamdhenu cow idol with calf. Symbol of prosperity and abundance. Perfect for home temple and gifting during auspicious occasions.",
    badge: "Sacred",
    category: "idols",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 45,
    name: "Lotus LED Diya - Pack of 6",
    price: 999,
    originalPrice: 1200,
    image: "/product-images/lotus-led-diya.png",
    rating: 4.8,
    description: "Beautiful crystal lotus LED diyas pack of 6. Perfect for festivals, home decoration, and creating a serene ambiance during prayers and celebrations.",
    badge: "Festival Special",
    category: "lamps",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 47,
    name: "Elephant Motif Copper Bottle",
    price: 1750,
    originalPrice: 2500,
    image: "/product-images/elephant-copper-bottle.png",
    rating: 5,
    description: "Premium copper bottle with exquisite elephant motif design. Perfect for Dhanteras and daily use. Keeps water fresh and provides health benefits of copper-enriched water.",
    badge: "Dhanteras Special",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 48,
    name: "Rani Meher Copper Bottle",
    price: 1750,
    originalPrice: 2500,
    image: "/product-images/rani-meher-copper-bottle.png",
    rating: 5,
    description: "Exquisite copper bottle featuring traditional Rajasthani Rani Meher artwork. Perfect for Dhanteras celebrations and healthy copper-enriched water storage.",
    badge: "Dhanteras Special",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  
  // Candles
  {
    id: 49,
    name: "Dazzling Electric Candles with Glitter",
    price: 1800,
    originalPrice: 2500,
    image: "/product-images/glitter-electric-candles-gold.png",
    rating: 4.9,
    description: "Stunning electric LED candles with luxurious glitter finish. Box of 12 flameless candles with realistic flickering effect. Perfect for festivals, weddings, and creating enchanting ambiance without fire hazards.",
    badge: "Festival Special",
    category: "candles",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 50,
    name: "Multicoloured Electric Candles",
    price: 2400,
    originalPrice: 2999,
    image: "/product-images/multicolour-electric-candles.png",
    rating: 4.9,
    description: "Vibrant multicoloured electric LED candles set. Box of 12 flameless candles in assorted bright colors with warm LED flames. Safe and reusable for all celebrations, adding a magical glow to your festivities.",
    badge: "Festival Special",
    category: "candles",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
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