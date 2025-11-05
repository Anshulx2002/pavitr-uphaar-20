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
      { id: 1, name: 'Premium Agarbatti (Incense Sticks)', price: 150, original_price: 200, image: '/product-images/agarbatti.jpg', category: 'incense-agarbatti', rating: 4.5, description: 'Hand-rolled premium incense sticks with natural fragrances. Perfect for daily pooja and meditation.', badge: 'Best Seller', google_category: '632' },
      { id: 2, name: 'Pure Camphor Tablets', price: 80, original_price: 100, image: '/product-images/camphor.jpg', category: 'incense-agarbatti', rating: 4.7, description: 'Pure camphor tablets for aarti and religious ceremonies. Burns cleanly with a divine fragrance.', badge: null, google_category: '632' },
      { id: 3, name: 'Traditional Clay Diyas (Set of 12)', price: 120, original_price: null, image: '/product-images/diya.jpg', category: 'lamps-diyas', rating: 4.6, description: 'Handcrafted traditional clay diyas. Perfect for festivals and daily worship.', badge: null, google_category: '696' },
      { id: 4, name: 'Fresh Marigold Garland', price: 250, original_price: 300, image: '/product-images/garland.jpg', category: 'flowers-garlands', rating: 4.8, description: 'Fresh marigold garland for deity decoration and special occasions.', badge: 'Festival Special', google_category: '505' },
      { id: 5, name: 'Kumkum & Haldi Set', price: 100, original_price: null, image: '/product-images/kumkum.jpg', category: 'pooja-accessories', rating: 4.5, description: 'Pure kumkum and haldi powder for daily worship and tilak.', badge: null, google_category: '469' },
      { id: 6, name: 'Original Rudraksha Mala', price: 500, original_price: 700, image: '/product-images/rudraksha.jpg', category: 'sacred-threads', rating: 4.9, description: 'Authentic 108 beads rudraksha mala for meditation and spiritual practice.', badge: 'Premium', google_category: '536' },
      { id: 7, name: 'Sandalwood Powder - Premium Grade', price: 350, original_price: 450, image: '/product-images/sandalwood.jpg', category: 'incense-agarbatti', rating: 4.7, description: 'Pure sandalwood powder for tilak, skin care, and aromatherapy.', badge: null, google_category: '469' },
      { id: 8, name: 'Brass Pooja Thali Set', price: 450, original_price: 600, image: '/product-images/pooja-thali.jpg', category: 'pooja-accessories', rating: 4.6, description: 'Traditional brass thali with diya, kumkum container, and accessories.', badge: null, google_category: '696' },
      { id: 9, name: 'Gold-Plated Pooja Thali', price: 800, original_price: 1000, image: '/product-images/gold-pooja-thali.jpg', category: 'pooja-accessories', rating: 4.8, description: 'Elegant gold-plated pooja thali for special ceremonies and gifting.', badge: 'Premium', google_category: '696' },
      { id: 10, name: 'Silver-Plated Pooja Thali', price: 1200, original_price: 1500, image: '/product-images/silver-pooja-thali.jpg', category: 'pooja-accessories', rating: 4.9, description: 'Exquisite silver-plated thali perfect for weddings and festivals.', badge: 'Best Seller', google_category: '696' },
      { id: 11, name: 'Electric LED Candles - Glitter Gold', price: 299, original_price: 399, image: '/product-images/glitter-electric-candles.jpg', category: 'candles', rating: 4.6, description: 'Beautiful glitter gold electric candles with warm LED glow. Battery operated and reusable.', badge: null, google_category: '696' },
      { id: 12, name: 'Multicolor Electric Candles Set', price: 399, original_price: 499, image: '/product-images/multicolour-electric-candles.jpg', category: 'candles', rating: 4.7, description: 'Set of colorful electric LED candles perfect for decoration and celebrations.', badge: 'Festival Special', google_category: '696' },
      { id: 13, name: 'Wooden Incense Holder - Handcrafted', price: 180, original_price: 250, image: '/product-images/wooden-incense-holder.png', category: 'pooja-accessories', rating: 4.5, description: 'Beautifully carved wooden holder for incense sticks with ash catcher.', badge: null, google_category: '696' },
      { id: 14, name: 'Wooden Dhoop Holder', price: 200, original_price: 280, image: '/product-images/wooden-dhoop-holder.png', category: 'pooja-accessories', rating: 4.6, description: 'Traditional wooden dhoop holder with intricate carvings.', badge: null, google_category: '696' },
      { id: 15, name: 'Brass Kalash (Holy Pot)', price: 550, original_price: 700, image: '/product-images/gold-kalash.png', category: 'pooja-accessories', rating: 4.8, description: 'Sacred brass kalash for religious ceremonies and temple worship.', badge: null, google_category: '696' },
      { id: 16, name: 'Lotus LED Diya - Electric', price: 349, original_price: 450, image: '/product-images/lotus-led-diya.png', category: 'lamps-diyas', rating: 4.7, description: 'Beautiful lotus-shaped LED diya with changing colors. USB rechargeable.', badge: 'New Arrival', google_category: '696' },
      { id: 17, name: 'Akhand Brass Diya', price: 420, original_price: 550, image: '/product-images/akhand-brass-diya.png', category: 'lamps-diyas', rating: 4.8, description: 'Traditional akhand diya for continuous lighting during festivals.', badge: null, google_category: '696' },
      { id: 18, name: 'Multicolor LED Candles - Premium', price: 450, original_price: 599, image: '/product-images/multicolour-electric-candles.png', category: 'candles', rating: 4.7, description: 'Premium quality multicolor LED candles with remote control.', badge: 'Premium', google_category: '696' },
      { id: 19, name: 'Glitter Electric Candles - Gold Set', price: 380, original_price: 499, image: '/product-images/glitter-electric-candles-gold.png', category: 'candles', rating: 4.6, description: 'Set of 6 glitter gold electric candles for elegant decoration.', badge: null, google_category: '696' },
      { id: 20, name: 'Rani Meher Copper Water Bottle', price: 899, original_price: 1299, image: '/product-images/rani-meher-copper-bottle.png', category: 'pooja-accessories', rating: 4.9, description: 'Premium copper water bottle with traditional design. Health benefits of copper water.', badge: 'Best Seller', google_category: '2920' },
      { id: 21, name: 'Elephant Design Copper Bottle', price: 999, original_price: 1399, image: '/product-images/elephant-copper-bottle.png', category: 'pooja-accessories', rating: 4.8, description: 'Artistic elephant design copper bottle. Perfect for gifting and daily use.', badge: 'Premium', google_category: '2920' },
      { id: 22, name: 'Premium Diwali Pooja Kit', price: 2999, original_price: 3999, image: '/product-images/diwali-kit-premium.png', category: 'festival-kits', rating: 5.0, description: 'Complete premium Diwali pooja kit with all essentials. Includes diyas, agarbatti, kumkum, and more.', badge: 'Diwali Special', google_category: '696' },
      { id: 23, name: 'Aarti Sangrah Book', price: 199, original_price: 299, image: '/product-images/aarti-sangrah.png', category: 'pooja-accessories', rating: 4.7, description: 'Complete collection of popular aartis in Hindi with meanings.', badge: null, google_category: '783' },
      { id: 24, name: 'Dussehra Pooja Kit', price: 1499, original_price: 1999, image: '/product-images/dussehra-kit-1.png', category: 'festival-kits', rating: 4.8, description: 'Special Dussehra pooja kit with all necessary items for the celebration.', badge: 'Festival Special', google_category: '696' },
      { id: 25, name: 'Ganesh Pooja Kit', price: 1299, original_price: 1699, image: '/product-images/ganesh-kit.jpg', category: 'festival-kits', rating: 4.9, description: 'Complete Ganesh Chaturthi pooja kit with modak mold and decorations.', badge: 'Festival Special', google_category: '696' },
      { id: 26, name: 'Navratri Pooja Kit', price: 1799, original_price: 2299, image: '/product-images/navratri-kit.jpg', category: 'festival-kits', rating: 4.8, description: '9-day Navratri pooja kit with kalash, chunri, and all essentials.', badge: 'Festival Special', google_category: '696' },
      { id: 27, name: 'Karva Chauth Gift Box', price: 2499, original_price: 3199, image: '/product-images/karva-chauth-gift-box.png', category: 'festival-kits', rating: 4.9, description: 'Beautiful Karva Chauth gift box with karva, pooja thali, and accessories.', badge: 'Festival Special', google_category: '696' },
      { id: 28, name: 'Aarti Book - Premium Edition', price: 299, original_price: 399, image: '/product-images/aarti-book.png', category: 'pooja-accessories', rating: 4.7, description: 'Premium edition aarti book with golden border and beautiful illustrations.', badge: 'Premium', google_category: '783' },
      { id: 29, name: 'Laxmi Ganesh Pooja Box', price: 1899, original_price: 2499, image: '/product-images/laxmi-ganesh-pooja-box.png', category: 'festival-kits', rating: 4.9, description: 'Diwali special Laxmi Ganesh pooja box with silver coin and complete accessories.', badge: 'Diwali Special', google_category: '696' },
      { id: 30, name: 'Lord Krishna Brass Statue', price: 1599, original_price: 2099, image: '/product-images/lord-krishna-statue.png', category: 'pooja-accessories', rating: 4.9, description: 'Beautiful brass Krishna statue with flute. Perfect for home temple.', badge: 'Premium', google_category: '696' },
      { id: 31, name: 'Kamdhenu Silver-Plated Idol', price: 2299, original_price: 2999, image: '/product-images/kamdhenu-idol-silver.jpg', category: 'pooja-accessories', rating: 5.0, description: 'Sacred Kamdhenu cow idol in silver plating. Symbol of prosperity and abundance.', badge: 'Premium', google_category: '696' }
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
