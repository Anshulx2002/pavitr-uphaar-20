import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface OrderConfirmationRequest {
  customerName: string;
  customerEmail: string;
  orderId: string;
  orderRef: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: OrderConfirmationRequest = await req.json();
    console.log("Order confirmation request:", requestData);

    const {
      customerName,
      customerEmail,
      orderId,
      orderRef,
      items,
      subtotal,
      discount,
      shipping,
      total,
      shippingAddress,
    } = requestData;

    // Generate order items HTML with fallback for missing images
    const orderItemsHtml = items
      .map(
        (item) => `
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 12px; text-align: left;">
              <div style="display: flex; align-items: center;">
                <div style="width: 60px; height: 60px; background-color: #f8f9fa; border-radius: 8px; margin-right: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid #e0e0e0;">
                  <span style="font-size: 24px;">🎁</span>
                </div>
                <div>
                  <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #333;">${item.name}</h4>
                  <p style="margin: 4px 0 0 0; font-size: 12px; color: #666;">Qty: ${item.quantity}</p>
                </div>
              </div>
            </td>
            <td style="padding: 12px; text-align: right;">
              <span style="font-weight: 600; color: #333;">₹${(item.price * item.quantity).toFixed(2)}</span>
            </td>
          </tr>
        `
      )
      .join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Order Confirmation - Pavitra Uphaar</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9f9f9;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #ff6b35, #f7931e); padding: 40px 30px; text-align: center;">
                      <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
                        <img src="https://bilgoxmvnvhiqzidllvj.supabase.co/storage/v1/object/public/lovable-uploads/18f62fac-4131-4917-b863-cb0619cb947d.png" alt="Pavitra Uphaar Logo" style="height: 80px; margin-right: 12px; filter: brightness(0) invert(1);" />
                      </div>
                      <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">Order Confirmation</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 16px 0; color: #333; font-size: 24px; font-weight: 600;">Thank you for your order, ${customerName}!</h2>
                      <p style="margin: 0 0 24px 0; color: #666; font-size: 16px; line-height: 1.5;">
                        We've received your order and it's being processed. You'll receive a shipping confirmation email with tracking details once your order is on its way.
                      </p>
                      
                      <!-- Order Details -->
                      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                        <h3 style="margin: 0 0 12px 0; color: #333; font-size: 18px; font-weight: 600;">Order Details</h3>
                        <p style="margin: 0; color: #666; font-size: 14px;"><strong>Order ID:</strong> ${orderId}</p>
                        <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;"><strong>Order Reference:</strong> ${orderRef}</p>
                        <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;"><strong>Order Date:</strong> ${new Date().toLocaleDateString('en-IN')}</p>
                      </div>
                      
                      <!-- Order Items -->
                      <h3 style="margin: 0 0 16px 0; color: #333; font-size: 18px; font-weight: 600;">Your Items</h3>
                      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                        ${orderItemsHtml}
                      </table>
                      
                      <!-- Order Summary -->
                      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                        <h3 style="margin: 0 0 16px 0; color: #333; font-size: 18px; font-weight: 600;">Order Summary</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 4px 0; color: #666; font-size: 14px;">Subtotal</td>
                            <td style="padding: 4px 0; color: #333; font-size: 14px; text-align: right; font-weight: 600;">₹${subtotal.toFixed(2)}</td>
                          </tr>
                          ${discount > 0 ? `
                          <tr>
                            <td style="padding: 4px 0; color: #666; font-size: 14px;">Discount</td>
                            <td style="padding: 4px 0; color: #ff6b35; font-size: 14px; text-align: right; font-weight: 600;">-₹${discount.toFixed(2)}</td>
                          </tr>
                          ` : ''}
                          <tr>
                            <td style="padding: 4px 0; color: #666; font-size: 14px;">Shipping</td>
                            <td style="padding: 4px 0; color: #333; font-size: 14px; text-align: right; font-weight: 600;">${shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</td>
                          </tr>
                          <tr style="border-top: 2px solid #e0e0e0;">
                            <td style="padding: 12px 0 0 0; color: #333; font-size: 18px; font-weight: 700;">Total</td>
                            <td style="padding: 12px 0 0 0; color: #ff6b35; font-size: 18px; text-align: right; font-weight: 700;">₹${total.toFixed(2)}</td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Shipping Address -->
                      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                        <h3 style="margin: 0 0 12px 0; color: #333; font-size: 18px; font-weight: 600;">Shipping Address</h3>
                        <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">
                          ${customerName}<br>
                          ${shippingAddress.address}<br>
                          ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.pincode}
                        </p>
                      </div>
                      
                      <!-- Delivery Info -->
                      <div style="background-color: #fff3e0; border: 1px solid #ff6b35; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                        <p style="margin: 0; color: #e65100; font-size: 14px; font-weight: 600;">📦 Estimated Delivery: 2-3 business days</p>
                      </div>
                      
                      <!-- Support -->
                      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                        <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                          Need help? Contact us at 
                          <a href="mailto:support@pavitrauphaar.com" style="color: #ff6b35; text-decoration: none;">support@pavitrauphaar.com</a>
                        </p>
                        <p style="margin: 0; color: #999; font-size: 12px;">
                          Thank you for choosing Pavitra Uphaar for your spiritual needs.
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Pavitra Uphaar <support@pavitrauphaar.com>",
      to: [customerEmail],
      subject: `Order Confirmation - ${orderRef} | Pavitra Uphaar`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Order confirmation email sent successfully",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-order-confirmation function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);