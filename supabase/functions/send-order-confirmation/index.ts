import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OrderConfirmationRequest {
  customerName: string;
  customerEmail: string;
  orderRef: string;
  amount: number;
  currency: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  shippingAddress: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Received order confirmation request');
    
    const { 
      customerName, 
      customerEmail, 
      orderRef, 
      amount, 
      currency,
      items,
      shippingAddress 
    }: OrderConfirmationRequest = await req.json();

    console.log('Sending order confirmation to:', customerEmail);

    // Generate order items HTML
    const itemsHtml = items.map(item => `
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px; text-align: left;">${item.name}</td>
        <td style="padding: 12px; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px; text-align: right;">₹${(item.price * item.quantity / 100).toFixed(2)}</td>
      </tr>
    `).join('');

    const emailResponse = await resend.emails.send({
      from: "Divine Pooja <noreply@yourstore.com>",
      to: [customerEmail],
      subject: `Order Confirmation - ${orderRef}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Order Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px;">
            
            <!-- Header -->
            <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #8B4513;">
              <h1 style="margin: 0; color: #8B4513; font-size: 28px;">Divine Pooja</h1>
              <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Sacred Items for Every Occasion</p>
            </div>

            <!-- Order Confirmation -->
            <div style="padding: 30px 0;">
              <h2 style="color: #333; margin: 0 0 10px 0;">Thank you for your order, ${customerName}!</h2>
              <p style="color: #666; font-size: 16px; margin: 0 0 20px 0;">
                Your order has been confirmed and will be processed shortly. We'll send you another email when your items ship.
              </p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin: 0 0 15px 0; color: #333;">Order Details</h3>
                <p style="margin: 5px 0; color: #666;"><strong>Order Reference:</strong> ${orderRef}</p>
                <p style="margin: 5px 0; color: #666;"><strong>Total Amount:</strong> ₹${(amount / 100).toFixed(2)} ${currency}</p>
              </div>

              <!-- Order Items -->
              <div style="margin: 30px 0;">
                <h3 style="color: #333; margin: 0 0 15px 0;">Items Ordered</h3>
                <table style="width: 100%; border-collapse: collapse; background-color: white; border: 1px solid #eee;">
                  <thead>
                    <tr style="background-color: #f8f9fa;">
                      <th style="padding: 12px; text-align: left; border-bottom: 2px solid #eee;">Item</th>
                      <th style="padding: 12px; text-align: center; border-bottom: 2px solid #eee;">Qty</th>
                      <th style="padding: 12px; text-align: right; border-bottom: 2px solid #eee;">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${itemsHtml}
                  </tbody>
                </table>
              </div>

              <!-- Shipping Address -->
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin: 0 0 15px 0; color: #333;">Shipping Address</h3>
                <p style="margin: 0; color: #666; white-space: pre-line;">${shippingAddress}</p>
              </div>

              <!-- What's Next -->
              <div style="border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; color: #333;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #666;">
                  <li style="margin: 8px 0;">We'll prepare your items with care</li>
                  <li style="margin: 8px 0;">You'll receive a shipping confirmation with tracking details</li>
                  <li style="margin: 8px 0;">Your sacred items will be delivered to your doorstep</li>
                </ul>
              </div>

            </div>

            <!-- Footer -->
            <div style="border-top: 1px solid #eee; padding: 20px 0; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                Thank you for choosing Divine Pooja for your spiritual needs.
              </p>
              <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
                If you have any questions about your order, please contact our support team.
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    console.log("Order confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      messageId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending order confirmation email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);