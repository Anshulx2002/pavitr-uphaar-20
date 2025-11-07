import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';
import { sendMetaPurchaseEvent } from '../_shared/meta-capi.ts';

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

    // Send Meta Conversions API event
    try {
      console.log('Sending Meta CAPI Purchase event');
      
      await sendMetaPurchaseEvent({
        event_id: `purchase_${order_ref}`,
        order_ref,
        amount_rupees: amount_paise / 100,
        cart_items,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
      });

      console.log('Meta CAPI Purchase event sent successfully');
    } catch (capiError) {
      console.error('Error sending Meta CAPI event (non-fatal):', capiError);
      // Don't fail the order if CAPI fails
    }

    // Clear user's cart after successful order
    const { error: cartError } = await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', user_id);

    if (cartError) {
      console.error('Error clearing cart:', cartError);
      // Don't throw error here - order is already saved
    }

    // Send order confirmation email to customer
    try {
      console.log('Sending order confirmation email to:', customer_email);
      
      const emailData = {
        customerName: customer_name,
        customerEmail: customer_email,
        orderRef: order_ref,
        paymentId: razorpay_payment_id,
        items: cart_items,
        subtotal: amount_paise / 100, // Convert paise to rupees
        shipping: amount_paise >= 50000 ? 0 : 50, // Free shipping above ₹500
        total: amount_paise / 100,
        shippingAddress: shipping_address,
      };

      const { error: emailError } = await supabase.functions.invoke('send-order-confirmation', {
        body: emailData,
      });

      if (emailError) {
        console.error('Error sending confirmation email:', emailError);
        // Don't fail the order if email fails
      } else {
        console.log('Order confirmation email sent successfully');
      }
    } catch (emailError) {
      console.error('Exception sending confirmation email:', emailError);
      // Don't fail the order if email fails
    }

    // Send admin notification email
    try {
      console.log('Sending admin notification email');
      
      const adminEmailData = {
        customerName: customer_name,
        customerEmail: customer_email,
        orderRef: order_ref,
        paymentId: razorpay_payment_id,
        items: cart_items,
        subtotal: amount_paise / 100,
        shipping: amount_paise >= 50000 ? 0 : 50,
        total: amount_paise / 100,
        shippingAddress: shipping_address,
        customerPhone: customer_phone,
      };

      const { error: adminEmailError } = await supabase.functions.invoke('send-admin-notification', {
        body: adminEmailData,
      });

      if (adminEmailError) {
        console.error('Error sending admin notification:', adminEmailError);
        // Don't fail the order if email fails
      } else {
        console.log('Admin notification email sent successfully');
      }
    } catch (adminEmailError) {
      console.error('Exception sending admin notification:', adminEmailError);
      // Don't fail the order if email fails
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
