import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Product data structure matching the frontend
interface Product {
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

// Map product categories to Google Product Categories for Meta
const categoryMap: Record<string, string> = {
  "incense": "Home & Garden > Home Fragrances > Incense",
  "lamps": "Home & Garden > Lighting > Lamps",
  "candles": "Home & Garden > Lighting > Candles",
  "accessories": "Religious & Ceremonial > Religious Items",
  "idols": "Religious & Ceremonial > Religious Items > Statues",
  "kits": "Religious & Ceremonial > Religious Items",
};

// Static product data (copy from frontend)
const products: Product[] = [
  {
    id: 1,
    name: "Premium Sandalwood Agarbatti",
    price: 299,
    originalPrice: 399,
    image: "/assets/agarbatti.jpg",
    rating: 5,
    description: "Hand-rolled incense sticks made from pure sandalwood powder. Burns for 45 minutes with divine fragrance.",
    badge: "Best Seller",
    category: "incense",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 34,
    name: "Gold Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: "/assets/gold-pooja-thali.jpg",
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
    image: "/assets/silver-pooja-thali.jpg",
    rating: 5,
    description: "Elegant silver-plated pooja thali with traditional motifs. Premium quality craftsmanship for special occasions and daily worship.",
    badge: "Premium",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 19,
    name: "Signature Pooja Gift Box",
    price: 1999,
    originalPrice: 3000,
    image: "/assets/diwali-kit-premium.png",
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
    image: "/assets/dussehra-kit-1.png",
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
    image: "/assets/ganesh-kit.jpg",
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
    image: "/assets/navratri-kit.jpg",
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
    image: "/assets/karva-chauth-gift-box.png",
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
    image: "/assets/aarti-book.png",
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
    image: "/assets/akhand-brass-diya.png",
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
    image: "/assets/gold-kalash.png",
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
    image: "/assets/aarti-sangrah.png",
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
    image: "/assets/laxmi-ganesh-pooja-box.png",
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
    image: "/assets/wooden-dhoop-holder.png",
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
    image: "/assets/wooden-incense-holder.png",
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
    image: "/assets/lord-krishna-statue.png",
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
    image: "/assets/kamdhenu-idol-silver.jpg",
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
    image: "/assets/lotus-led-diya.png",
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
    image: "/assets/elephant-copper-bottle.png",
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
    image: "/assets/rani-meher-copper-bottle.png",
    rating: 5,
    description: "Exquisite copper bottle featuring traditional Rajasthani Rani Meher artwork. Perfect for Dhanteras celebrations and healthy copper-enriched water storage.",
    badge: "Dhanteras Special",
    category: "accessories",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  },
  {
    id: 49,
    name: "Dazzling Electric Candles with Glitter",
    price: 1800,
    originalPrice: 2500,
    image: "/assets/glitter-electric-candles-gold.png",
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
    image: "/assets/multicolour-electric-candles.png",
    rating: 4.9,
    description: "Vibrant multicoloured electric LED candles set. Box of 12 flameless candles in assorted bright colors with warm LED flames. Safe and reusable for all celebrations, adding a magical glow to your festivities.",
    badge: "Festival Special",
    category: "candles",
    availability: "in stock",
    condition: "new",
    brand: "Pavitra Uphaar"
  }
];

// Generate XML feed
function generateMetaProductFeed(baseUrl: string): string {
  const now = new Date().toISOString();
  
  let xmlItems = '';
  
  for (const product of products) {
    const availability = product.availability || "in stock";
    const condition = product.condition || "new";
    const brand = product.brand || "Pavitra Uphaar";
    const googleCategory = categoryMap[product.category] || "Religious & Ceremonial > Religious Items";
    
    // Construct full URLs
    const productUrl = `${baseUrl}/product-details/${product.id}`;
    const imageUrl = `${baseUrl}${product.image}`;
    
    // Escape XML special characters
    const escapeXml = (str: string) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    };
    
    xmlItems += `
    <item>
      <g:id>${product.id}</g:id>
      <g:title>${escapeXml(product.name)}</g:title>
      <g:description>${escapeXml(product.description)}</g:description>
      <g:link>${productUrl}</g:link>
      <g:image_link>${imageUrl}</g:image_link>
      <g:availability>${availability}</g:availability>
      <g:price>${product.price}.00 INR</g:price>
      <g:brand>${escapeXml(brand)}</g:brand>
      <g:condition>${condition}</g:condition>
      <g:google_product_category>${escapeXml(googleCategory)}</g:google_product_category>${product.originalPrice ? `
      <g:sale_price>${product.originalPrice}.00 INR</g:sale_price>` : ''}
    </item>`;
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Pavitra Uphaar - Pooja Items Catalog</title>
    <link>${baseUrl}</link>
    <description>Premium spiritual and religious items for all your pooja needs</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>${xmlItems}
  </channel>
</rss>`;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Meta Product Feed request received');
    
    // Base URL for your production site
    const baseUrl = 'https://pavitrauphaar.com';
    
    // Generate XML feed
    const xmlFeed = generateMetaProductFeed(baseUrl);
    
    console.log(`Generated feed with ${products.length} products`);
    
    return new Response(xmlFeed, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
    
  } catch (error) {
    console.error('Error generating product feed:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
