import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

interface AdminNotificationRequest {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderRef: string;
  paymentId: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Admin notification handler invoked");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Parsing request body...");
    const requestBody = await req.json();
    console.log("Request body received:", JSON.stringify(requestBody, null, 2));

    const {
      customerName,
      customerEmail,
      customerPhone,
      orderRef,
      paymentId,
      items,
      subtotal,
      shipping,
      total,
      shippingAddress,
    }: AdminNotificationRequest = requestBody;

    console.log("Admin notification request parsed:", {
      customerName,
      customerEmail,
      customerPhone,
      orderRef,
      paymentId,
      itemsCount: items?.length,
      subtotal,
      shipping,
      total,
      shippingAddress,
    });

    const itemsHtml = items
      .map(
        (item) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          ${item.name}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">
          ${item.quantity}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
          ₹${item.price.toFixed(2)}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
          ₹${(item.price * item.quantity).toFixed(2)}
        </td>
      </tr>
    `,
      )
      .join("");

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Order Notification</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🎉 New Order Received!</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Order Details</h2>
              <p><strong>Order Reference:</strong> ${orderRef}</p>
              <p><strong>Payment ID:</strong> ${paymentId}</p>
              <p><strong>Order Total:</strong> ₹${total.toFixed(2)}</p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Customer Information</h2>
              <p><strong>Name:</strong> ${customerName}</p>
              <p><strong>Email:</strong> ${customerEmail}</p>
              <p><strong>Phone:</strong> ${customerPhone}</p>
              <p><strong>Shipping Address:</strong><br>${shippingAddress}</p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Order Items</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background: #f5f5f5;">
                    <th style="padding: 10px; text-align: left; border-bottom: 2px solid #667eea;">Product</th>
                    <th style="padding: 10px; text-align: center; border-bottom: 2px solid #667eea;">Qty</th>
                    <th style="padding: 10px; text-align: right; border-bottom: 2px solid #667eea;">Price</th>
                    <th style="padding: 10px; text-align: right; border-bottom: 2px solid #667eea;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Order Summary</h2>
              <table style="width: 100%;">
                <tr>
                  <td style="padding: 5px 0;">Subtotal:</td>
                  <td style="padding: 5px 0; text-align: right;">₹${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0;">Shipping:</td>
                  <td style="padding: 5px 0; text-align: right;">${shipping === 0 ? "FREE" : "₹" + shipping.toFixed(2)}</td>
                </tr>
                <tr style="border-top: 2px solid #667eea; font-weight: bold; font-size: 18px;">
                  <td style="padding: 10px 0;">Total:</td>
                  <td style="padding: 10px 0; text-align: right; color: #667eea;">₹${total.toFixed(2)}</td>
                </tr>
              </table>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0;">
              <p style="color: #666; font-size: 14px;">
                This is an automated notification from Pavitra Uphaar<br>
                Please process this order as soon as possible.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    console.log("Attempting to send email via Resend...");
    console.log("RESEND_API_KEY exists:", !!Deno.env.get("RESEND_API_KEY"));

    const { data, error } = await resend.emails.send({
      from: "Pavitra Uphaar <support@pavitrauphaar.com>",
      // to: ["anshulvchadha@hotmail.com", "vikasrchadha@hotmail.com"],
      to:['monalikapatnaik114@gmail.com']
      subject: `🛍️ New Order: ${orderRef}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error, null, 2));
      throw error;
    }

    console.log("Admin notification email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in send-admin-notification function:", error);
    console.error("Error stack:", error.stack);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return new Response(
      JSON.stringify({
        error: error.message,
        details: error.toString(),
        stack: error.stack,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
};

serve(handler);
