import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';

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
  "incense-agarbatti": "Home & Garden > Home Fragrances > Incense",
  "lamps-diyas": "Home & Garden > Lighting > Lamps",
  "candles": "Home & Garden > Lighting > Candles",
  "pooja-accessories": "Religious & Ceremonial > Religious Items",
  "idols": "Religious & Ceremonial > Religious Items > Statues",
  "festival-kits": "Religious & Ceremonial > Religious Items",
  "sacred-threads": "Religious & Ceremonial > Religious Items",
  "flowers-garlands": "Religious & Ceremonial > Religious Items",
};

// Products will be fetched from database

// Generate XML feed from products array
function generateMetaProductFeed(products: any[], baseUrl: string): string {
  const now = new Date().toISOString();
  
  let xmlItems = '';
  
  for (const product of products) {
    const availability = product.availability || "in stock";
    const condition = product.condition || "new";
    const brand = product.brand || "Pavitra Uphaar";
    const googleCategory = categoryMap[product.category] || "Religious & Ceremonial > Religious Items";
    
    // Construct full URLs
    const productUrl = `${baseUrl}/product/${product.id}`;
    const imageUrl = `${baseUrl}${product.image}`;
    
    // Determine price and sale price correctly
    const hasDiscount = product.original_price && product.original_price > product.price;
    const displayPrice = hasDiscount ? product.original_price : product.price;
    const salePrice = hasDiscount ? product.price : null;
    
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
      <g:price>${displayPrice}.00 INR</g:price>
      <g:brand>${escapeXml(brand)}</g:brand>
      <g:condition>${condition}</g:condition>
      <g:google_product_category>${escapeXml(googleCategory)}</g:google_product_category>${salePrice ? `
      <g:sale_price>${salePrice}.00 INR</g:sale_price>` : ''}
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
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Fetch products from database
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('availability', 'in stock')
      .order('id');
    
    if (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
    
    console.log(`Fetched ${products?.length || 0} products from database`);
    
    // Base URL for your production site
    const baseUrl = 'https://pavitrauphaar.com';
    
    // Generate XML feed
    const xmlFeed = generateMetaProductFeed(products || [], baseUrl);
    
    console.log(`Generated feed with ${products?.length || 0} products`);
    
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
