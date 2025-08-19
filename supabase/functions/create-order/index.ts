import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders,
      status: 200 
    });
  }

  // Ensure CORS headers are included in all responses
  const responseHeaders = { 
    ...corsHeaders, 
    'Content-Type': 'application/json' 
  };

  try {
    console.log('Request method:', req.method);
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));
    
    let requestBody;
    try {
      requestBody = await req.json();
      console.log('Request body:', requestBody);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }),
        { status: 400, headers: responseHeaders }
      );
    }

    const { amount, currency = 'INR', receipt } = requestBody;

    if (!amount || amount <= 0) {
      return new Response(
        JSON.stringify({ error: 'Valid amount is required' }),
        { status: 400, headers: responseHeaders }
      );
    }

    const razorpayKeyId = "rzp_live_R6RSxqVRmxuZdA";
    const razorpaySecret = Deno.env.get('RAZORPAY_SECRET');

    console.log('Razorpay Key ID exists:', !!razorpayKeyId);
    console.log('Razorpay Secret exists:', !!razorpaySecret);

    if (!razorpayKeyId || !razorpaySecret) {
      console.error('Missing Razorpay credentials');
      return new Response(
        JSON.stringify({ 
          error: 'Payment service configuration error',
          details: 'Missing Razorpay credentials'
        }),
        { status: 500, headers: responseHeaders }
      );
    }

    // Create Razorpay order
    const orderData = {
      amount: Math.round(amount), // Amount should already be in paise
      currency: currency,
      receipt: receipt || `order_${Date.now()}`,
    };

    console.log('Creating Razorpay order with data:', orderData);

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${razorpayKeyId}:${razorpaySecret}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const responseData = await response.json();
    console.log('Razorpay API response status:', response.status);
    console.log('Razorpay API response data:', responseData);

    if (!response.ok) {
      console.error('Razorpay API error:', responseData);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to create order', 
          details: responseData,
          status: response.status 
        }),
        { status: response.status, headers: responseHeaders }
      );
    }

    console.log('Order created successfully:', responseData.id);
    return new Response(
      JSON.stringify(responseData),
      { status: 200, headers: responseHeaders }
    );

  } catch (error) {
    console.error('Error in create-order function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        message: error.message,
        stack: error.stack 
      }),
      { status: 500, headers: responseHeaders }
    );
  }
});