import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const products = [
      // Incense & Agarbatti
      { id: 1, name: 'Premium Sandalwood Agarbatti', price: 299, original_price: 399, image: '/product-images/agarbatti.jpg', category: 'incense', rating: 5, description: 'Hand-rolled incense sticks made from pure sandalwood powder. Burns for 45 minutes with divine fragrance.', badge: 'Best Seller', google_category: '632' },
      
      // Pooja Accessories
      { id: 34, name: 'Gold Pooja Thali', price: 2499, original_price: 3499, image: '/product-images/gold-pooja-thali.jpg', category: 'accessories', rating: 5, description: 'Exquisite gold-plated pooja thali with intricate designs. Complete set with all essential compartments for elaborate worship ceremonies.', badge: 'Premium', google_category: '696' },
      { id: 35, name: 'Silver Pooja Thali', price: 2499, original_price: 3499, image: '/product-images/silver-pooja-thali.jpg', category: 'accessories', rating: 5, description: 'Elegant silver-plated pooja thali with traditional motifs. Premium quality craftsmanship for special occasions and daily worship.', badge: 'Premium', google_category: '696' },
      
      // Festival Kits
      { id: 19, name: 'Signature Pooja Gift Box', price: 1999, original_price: 3000, image: '/product-images/diwali-kit-premium.png', category: 'kits', rating: 4.8, description: 'An exquisite pooja hamper with satin ribbons containing handcrafted lotus diyas, traditional toran to welcome divine blessings, fragrant incense and dhoop sticks, and premium quality potlis with large cashews and raisins. Perfect for all auspicious occasions and spiritual celebrations.', badge: '34% OFF', google_category: '696' },
      { id: 46, name: 'Dussehra Gift Box', price: 1999, original_price: 3000, image: '/product-images/dussehra-kit-1.png', category: 'kits', rating: 4.9, description: 'Celebrate the victory of good over evil with our premium Dussehra collection featuring organic dhoop sticks, carved wooden holders, and lotus diyas for divine blessings.', badge: '34% OFF', google_category: '696' },
      { id: 20, name: 'Ganesh Chaturthi Kit', price: 2499, original_price: 5000, image: '/product-images/ganesh-kit.jpg', category: 'kits', rating: 4.9, description: 'Everything needed for Ganesh Chaturthi celebrations. Includes modak molds.', badge: 'Complete Kit', google_category: '696' },
      { id: 21, name: 'Navratri Pooja Kit', price: 2499, original_price: 5000, image: '/product-images/navratri-kit.jpg', category: 'kits', rating: 4.8, description: 'Nine-day Navratri celebration kit with all essential items.', badge: '9-Day Kit', google_category: '696' },
      { id: 22, name: 'Karva Chauth Gift Box', price: 2499, original_price: 5000, image: '/product-images/karva-chauth-gift-box.png', category: 'kits', rating: 4.7, description: 'Complete essentials for the auspicious Karva Chauth ceremony. Includes Mathi, Decorative Diya, Bindi Packet, Mehendi Cone, Kalash for Water, Pooja Thali, and Mithai Box.', badge: '50% OFF', google_category: '696' },
      
      // More Accessories
      { id: 36, name: 'Hanuman Chalisa Aarti Book', price: 1499, original_price: 2499, image: '/product-images/aarti-book.png', category: 'accessories', rating: 5, description: 'Premium gold-finished Hanuman Chalisa book in elegant gift box. Perfect for daily prayers and gifting.', badge: 'Premium', google_category: '783' },
      { id: 37, name: 'Akhand Brass Diya', price: 1499, original_price: 2499, image: '/product-images/akhand-brass-diya.png', category: 'lamps', rating: 5, description: 'Premium Akhand Brass Diya with glass protection cover. Ideal for continuous lighting during festivals and special occasions.', badge: 'Premium', google_category: '696' },
      { id: 38, name: 'Gold Kalash', price: 1499, original_price: 2499, image: '/product-images/gold-kalash.png', category: 'accessories', rating: 5, description: 'Elevate your Aarti experience with our Gold Kalash. Exquisite gold-finished sacred vessel with intricate engravings for water rituals and ceremonies.', badge: 'Premium', google_category: '696' },
      { id: 39, name: 'Aarti Sangrah', price: 1499, original_price: 2499, image: '/product-images/aarti-sangrah.png', category: 'accessories', rating: 5, description: 'Premium Aarti Sangrah book in elegant gift box. Complete collection of traditional aartis for daily prayers and special occasions.', badge: 'Premium', google_category: '783' },
      { id: 40, name: 'Laxmi Ganesh Pooja Box', price: 999, original_price: 1499, image: '/product-images/laxmi-ganesh-pooja-box.png', category: 'accessories', rating: 5, description: 'Exquisite wooden pooja box with golden Laxmi Ganesh images. Complete set with traditional compartments for sacred ceremonies and worship.', badge: 'Premium', google_category: '696' },
      { id: 41, name: 'Wooden Incense Holder', price: 499, original_price: 750, image: '/product-images/wooden-dhoop-holder.png', category: 'accessories', rating: 4.8, description: 'Handcrafted wooden incense holder with intricate carved designs. Perfect for holding incense sticks during pooja ceremonies.', badge: 'Handcrafted', google_category: '696' },
      { id: 42, name: 'Wooden Dhoop Stick Holder', price: 499, original_price: 750, image: '/product-images/wooden-incense-holder.png', category: 'accessories', rating: 4.7, description: 'Elegant triangular wooden dhoop stick holder with carved patterns. Features storage compartment for dhoop sticks.', badge: 'Elegant', google_category: '696' },
      
      // Idols
      { id: 43, name: 'Lord Krishna Statue', price: 2499, original_price: 4000, image: '/product-images/lord-krishna-statue.png', category: 'idols', rating: 4.9, description: 'Beautiful handcrafted Lord Krishna statue with golden calf. Features intricate detailing and vibrant colors. Perfect centerpiece for your home temple.', badge: 'Sacred', google_category: '696' },
      { id: 44, name: 'Kamdhenu Idol Silver', price: 3999, original_price: 5999, image: '/product-images/kamdhenu-idol-silver.jpg', category: 'idols', rating: 4.9, description: 'Exquisite silver-finished Kamdhenu cow idol with calf. Symbol of prosperity and abundance. Perfect for home temple and gifting during auspicious occasions.', badge: 'Sacred', google_category: '696' },
      
      // Lamps
      { id: 45, name: 'Lotus LED Diya - Pack of 6', price: 999, original_price: 1200, image: '/product-images/lotus-led-diya.png', category: 'lamps', rating: 4.8, description: 'Beautiful crystal lotus LED diyas pack of 6. Perfect for festivals, home decoration, and creating a serene ambiance during prayers and celebrations.', badge: 'Festival Special', google_category: '696' },
      
      // Copper Bottles
      { id: 47, name: 'Elephant Motif Copper Bottle', price: 1750, original_price: 2500, image: '/product-images/elephant-copper-bottle.png', category: 'accessories', rating: 5, description: 'Premium copper bottle with exquisite elephant motif design. Perfect for Dhanteras and daily use. Keeps water fresh and provides health benefits of copper-enriched water.', badge: 'Dhanteras Special', google_category: '2920' },
      { id: 48, name: 'Rani Meher Copper Bottle', price: 1750, original_price: 2500, image: '/product-images/rani-meher-copper-bottle.png', category: 'accessories', rating: 5, description: 'Exquisite copper bottle featuring traditional Rajasthani Rani Meher artwork. Perfect for Dhanteras celebrations and healthy copper-enriched water storage.', badge: 'Dhanteras Special', google_category: '2920' },
      
      // Candles
      { id: 49, name: 'Dazzling Electric Candles with Glitter', price: 1800, original_price: 2500, image: '/product-images/glitter-electric-candles-gold.png', category: 'candles', rating: 4.9, description: 'Stunning electric LED candles with luxurious glitter finish. Box of 12 flameless candles with realistic flickering effect. Perfect for festivals, weddings, and creating enchanting ambiance without fire hazards.', badge: 'Festival Special', google_category: '696' },
      { id: 50, name: 'Multicoloured Electric Candles', price: 2400, original_price: 2999, image: '/product-images/multicolour-electric-candles.png', category: 'candles', rating: 4.9, description: 'Vibrant multicoloured electric LED candles set. Box of 12 flameless candles in assorted bright colors with warm LED flames. Safe and reusable for all celebrations, adding a magical glow to your festivities.', badge: 'Festival Special', google_category: '696' }
    ];

    const { data, error } = await supabase
      .from('products')
      .upsert(products, { onConflict: 'id' });

    if (error) throw error;

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Successfully seeded ${products.length} products`,
        data 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error seeding products:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
