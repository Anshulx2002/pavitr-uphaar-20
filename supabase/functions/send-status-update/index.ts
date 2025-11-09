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
  }>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customerName, customerEmail, orderRef, status, items }: StatusUpdateRequest = await req.json();

    console.log("Sending status update email to:", customerEmail);

    const statusText = status === "shipped" ? "Shipped" : "Delivered";
    const statusMessage = status === "shipped" 
      ? "Your order has been shipped and is on its way to you!" 
      : "Your order has been delivered successfully!";

    const itemsList = items
      .map(
        (item) =>
          `<li style="margin-bottom: 8px;">
            ${item.name} (Quantity: ${item.quantity})
          </li>`
      )
      .join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Order ${statusText}! 🎉</h1>
            </div>
            
            <div style="padding: 30px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Dear ${customerName},</p>
              
              <p style="font-size: 16px; margin-bottom: 20px; color: #27ae60; font-weight: bold;">
                ${statusMessage}
              </p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #2c3e50;">Order Reference:</p>
                <p style="margin: 0; font-size: 18px; color: #3498db; font-weight: bold;">${orderRef}</p>
              </div>

              <div style="margin: 20px 0;">
                <h3 style="color: #2c3e50; margin-bottom: 15px;">Order Items:</h3>
                <ul style="list-style-type: none; padding-left: 0;">
                  ${itemsList}
                </ul>
              </div>
              
              ${status === "shipped" ? `
                <p style="font-size: 14px; color: #7f8c8d; margin-top: 20px;">
                  You will receive your order soon. Please keep your phone accessible for delivery updates.
                </p>
              ` : `
                <p style="font-size: 14px; color: #7f8c8d; margin-top: 20px;">
                  Thank you for shopping with Pavitra Uphaar! We hope you love your purchase.
                </p>
              `}
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="font-size: 14px; color: #7f8c8d; margin: 5px 0;">
                  If you have any questions, please contact our customer support.
                </p>
                <p style="font-size: 14px; color: #7f8c8d; margin: 5px 0;">
                  Thank you for choosing Pavitra Uphaar!
                </p>
              </div>
            </div>
            
            <div style="background-color: #2c3e50; padding: 20px; text-align: center;">
              <p style="color: #ecf0f1; margin: 0; font-size: 14px;">
                © ${new Date().getFullYear()} Pavitra Uphaar. All rights reserved.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Pavitra Uphaar <onboarding@resend.dev>",
      to: [customerEmail],
      subject: `Order ${statusText} - ${orderRef}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Error sending status update email:", error);
      throw error;
    }

    console.log("Status update email sent successfully:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-status-update function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
