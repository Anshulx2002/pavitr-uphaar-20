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
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">${item.name}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price}</td>
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
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Pavitra Uphaar</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 14px;">Sacred Gifts for Every Occasion</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #FF6B35; margin-top: 0;">${statusTitle}</h2>
            
            <p>Dear ${customerName},</p>
            
            <p>${statusMessage}</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Order Details</h3>
              <p style="margin: 5px 0;"><strong>Order Reference:</strong> ${orderRef}</p>
              <p style="margin: 5px 0;"><strong>Status:</strong> <span style="color: #28a745; font-weight: bold;">${status.charAt(0).toUpperCase() + status.slice(1)}</span></p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Order Items</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background: #f5f5f5;">
                    <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Item</th>
                    <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd;">Qty</th>
                    <th style="padding: 12px; text-align: right; border-bottom: 2px solid #ddd;">Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                  <tr style="background: #f5f5f5; font-weight: bold;">
                    <td colspan="2" style="padding: 12px; text-align: right;">Total:</td>
                    <td style="padding: 12px; text-align: right;">₹${totalAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Shipping Address</h3>
              <p style="margin: 0; white-space: pre-line;">${shippingAddress}</p>
            </div>

            ${
              status === "delivered"
                ? `
              <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                <p style="margin: 0;"><strong>Need Help?</strong></p>
                <p style="margin: 5px 0 0 0;">If you have any questions about your order, please contact us at <a href="mailto:pavitrauphaar@gmail.com" style="color: #FF6B35;">pavitrauphaar@gmail.com</a></p>
              </div>
            `
                : ""
            }
            
            <p style="margin-top: 30px;">Thank you for choosing Pavitra Uphaar!</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
              <p>Pavitra Uphaar - Sacred Gifts for Every Occasion</p>
              <p>Email: <a href="mailto:pavitrauphaar@gmail.com" style="color: #FF6B35;">pavitrauphaar@gmail.com</a></p>
            </div>
          </div>
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
