import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface StatusUpdateRequest {
  customerName: string;
  customerEmail: string;
  orderRef: string;
  status: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  shippingAddress: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customerName, customerEmail, orderRef, status, items, totalAmount, shippingAddress }: StatusUpdateRequest =
      await req.json();

    console.log("Sending status update email:", { customerEmail, orderRef, status });

    const statusTitle = status === "shipped" ? "Your Order Has Been Shipped! 📦" : "Your Order Has Been Delivered! 🎉";
    const statusMessage =
      status === "shipped"
        ? "Great news! Your order is on its way to you."
        : "Your order has been successfully delivered. We hope you enjoy your purchase!";

    const itemsHtml = items
      .map(
        (item) => `
        <tr style="border-bottom: 1px solid #f0f0f0;">
          <td style="padding: 12px; text-align: left;">
            <div>
              <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #333;">${item.name}</h4>
            </div>
          </td>
          <td style="padding: 12px; text-align: center;">
            <span style="font-size: 14px; color: #666;">${item.quantity}</span>
          </td>
          <td style="padding: 12px; text-align: right;">
            <span style="font-weight: 600; color: #333; font-size: 14px;">₹${(item.price * item.quantity).toFixed(2)}</span>
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
          <title>Order Status Update</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9f9f9;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #ff6b35; padding: 40px 30px; text-align: center;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                        <tr>
                          <td style="text-align: center;">
                            <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                              <tr>
                                <td style="vertical-align: middle; padding-right: 16px;">
                                  <img src="https://res.cloudinary.com/dv6yivx37/image/upload/v1755598895/LOGO_PAVITRA_UPHAAR_DARK_BROWN_c8ybts.png" alt="Pavitra Uphaar Logo" style="height: 60px; background: white; padding: 8px; border-radius: 8px; display: block;" />
                                </td>
                                <td style="vertical-align: middle;">
                                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: 1px; font-family: Arial, sans-serif;">Pavitra Uphaar</h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 16px 0; color: #ff6b35; font-size: 24px; font-weight: 600;">${statusTitle}</h2>
                      
                      <p style="margin: 0 0 8px 0; color: #333; font-size: 16px;">Dear ${customerName},</p>
                      
                      <p style="margin: 0 0 24px 0; color: #666; font-size: 16px; line-height: 1.5;">${statusMessage}</p>
                      
                      <!-- Order Details -->
                      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                        <h3 style="margin: 0 0 12px 0; color: #333; font-size: 18px; font-weight: 600;">Order Details</h3>
                        <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;"><strong>Order Reference:</strong> ${orderRef}</p>
                        <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;"><strong>Status:</strong> <span style="color: #28a745; font-weight: 600;">${status.charAt(0).toUpperCase() + status.slice(1)}</span></p>
                      </div>

                      <!-- Order Items -->
                      <h3 style="margin: 0 0 16px 0; color: #333; font-size: 18px; font-weight: 600;">Order Items</h3>
                      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                        <thead>
                          <tr style="background-color: #f8f9fa;">
                            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e0e0e0; color: #333; font-size: 14px; font-weight: 600;">Item</th>
                            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e0e0e0; color: #333; font-size: 14px; font-weight: 600;">Qty</th>
                            <th style="padding: 12px; text-align: right; border-bottom: 2px solid #e0e0e0; color: #333; font-size: 14px; font-weight: 600;">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${itemsHtml}
                          <tr style="background-color: #f8f9fa;">
                            <td colspan="2" style="padding: 12px; text-align: right; font-weight: 600; color: #333; font-size: 16px;">Total:</td>
                            <td style="padding: 12px; text-align: right; font-weight: 700; color: #ff6b35; font-size: 16px;">₹${(totalAmount / 100).toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>

                      <!-- Shipping Address -->
                      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                        <h3 style="margin: 0 0 12px 0; color: #333; font-size: 18px; font-weight: 600;">Shipping Address</h3>
                        <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6; white-space: pre-line;">${shippingAddress}</p>
                      </div>

                      ${
                        status === "delivered"
                          ? `
                      <!-- Help Section -->
                      <div style="background-color: #fff3e0; border: 1px solid #ff6b35; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                        <p style="margin: 0; color: #e65100; font-size: 14px; font-weight: 600;">Need Help?</p>
                        <p style="margin: 8px 0 0 0; color: #e65100; font-size: 14px;">If you have any questions about your order, please contact us at <a href="mailto:support@pavitrauphaar.com" style="color: #ff6b35; text-decoration: none;">support@pavitrauphaar.com</a></p>
                      </div>
                      `
                          : ""
                      }
                      
                      <!-- Support -->
                      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                        <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                          Need help? Contact us at 
                          <a href="mailto:support@pavitrauphaar.com" style="color: #ff6b35; text-decoration: none;">support@pavitrauphaar.com</a>
                        </p>
                        <p style="margin: 0; color: #999; font-size: 12px;">
                          Thank you for choosing Pavitra Uphaar.
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
      subject: `Order ${status.charAt(0).toUpperCase() + status.slice(1)} - ${orderRef}`,
      html: htmlContent,
    });

    console.log("Status update email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending status update email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
