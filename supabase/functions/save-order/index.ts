import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const {
      user_id,
      razorpay_payment_id,
      razorpay_order_id,
      order_ref,
      amount_paise,
      customer_name,
      customer_email,
      customer_phone,
      shipping_address,
      cart_items,
    } = await req.json();

    console.log('Saving order:', { order_ref, amount_paise, user_id });

    // Save order to database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id,
        razorpay_payment_id,
        razorpay_order_id,
        order_ref,
        amount_paise,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
        currency: 'INR',
        status: 'paid',
        meta: {
          cart_items,
          created_at: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (orderError) {
      console.error('Error saving order:', orderError);
      throw orderError;
    }

    console.log('Order saved successfully:', order.id);

    // Clear user's cart after successful order
    const { error: cartError } = await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', user_id);

    if (cartError) {
      console.error('Error clearing cart:', cartError);
      // Don't throw error here - order is already saved
    }

    return new Response(
      JSON.stringify({ success: true, order_id: order.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error('Error in save-order function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
