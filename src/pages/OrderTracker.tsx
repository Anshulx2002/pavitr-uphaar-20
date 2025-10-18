import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Package, Truck, CheckCircle, Clock, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Order {
  id: string;
  order_ref: string;
  created_at: string;
  amount_paise: number;
  status: string;
  status_updated_at: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_address: string;
  meta: any;
}

const OrderTracker = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (orderId) {
      fetchOrder();

      // Set up real-time subscription for status updates
      const channel = supabase
        .channel("order-changes")
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "orders",
            filter: `id=eq.${orderId}`,
          },
          (payload) => {
            setOrder(payload.new as Order);
          },
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [orderId]);

  const fetchOrder = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Build query to fetch order by ID and either user_id OR customer_email
    let query = supabase.from("orders").select("*").eq("id", orderId);

    // If user is logged in, also match by email for guest orders
    if (user) {
      query = query.or(`user_id.eq.${user.id},customer_email.eq.${user.email}`);
    }

    const { data, error } = await query.maybeSingle();

    if (error) {
      console.error("Error fetching order:", error);
      setLoading(false);
      return;
    }

    if (!data) {
      setLoading(false);
      return;
    }

    setOrder(data);
    setLoading(false);
  };

  const getStatusSteps = () => {
    const steps = [
      { key: "paid", label: "Order Placed", icon: Clock },
      { key: "shipped", label: "Shipped", icon: Truck },
      { key: "delivered", label: "Delivered", icon: CheckCircle },
    ];

    const currentStatus = order?.status?.toLowerCase() || "paid";
    const currentIndex = steps.findIndex((s) => s.key === currentStatus);

    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      active: index === currentIndex,
    }));
  };

  const downloadInvoice = () => {
    const invoiceWindow = window.open("", "_blank");
    if (!invoiceWindow) return;

    const items = order?.meta?.cart_items || [];
    
    invoiceWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice #${order?.order_ref}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            .company-name { font-size: 28px; font-weight: bold; color: #D97706; margin-bottom: 5px; }
            .invoice-title { font-size: 20px; color: #666; }
            .info-section { display: flex; justify-content: space-between; margin-bottom: 30px; }
            .info-block { flex: 1; }
            .info-label { font-weight: bold; margin-bottom: 5px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th { background: #f5f5f5; padding: 12px; text-align: left; border-bottom: 2px solid #333; }
            td { padding: 12px; border-bottom: 1px solid #ddd; }
            .text-right { text-align: right; }
            .total-section { margin-top: 20px; text-align: right; }
            .total-row { display: flex; justify-content: flex-end; margin: 10px 0; }
            .total-label { min-width: 150px; text-align: right; margin-right: 20px; }
            .total-value { min-width: 100px; text-align: right; font-weight: bold; }
            .grand-total { font-size: 18px; border-top: 2px solid #333; padding-top: 10px; margin-top: 10px; }
            .footer { margin-top: 40px; text-align: center; color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 20px; }
            @media print {
              body { padding: 20px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="company-name">Pavitra Uphaar</div>
            <div class="invoice-title">TAX INVOICE</div>
          </div>
          
          <div class="info-section">
            <div class="info-block">
              <div class="info-label">Invoice Number:</div>
              <div>#${order?.order_ref}</div>
              <div style="margin-top: 15px;">
                <div class="info-label">Invoice Date:</div>
                <div>${new Date(order?.created_at || "").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</div>
              </div>
            </div>
            
            <div class="info-block" style="text-align: right;">
              <div class="info-label">Bill To:</div>
              <div>${order?.customer_name}</div>
              <div>${order?.customer_email}</div>
              <div>${order?.customer_phone}</div>
              <div style="margin-top: 10px; max-width: 250px; margin-left: auto;">${order?.shipping_address}</div>
            </div>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th class="text-right">Quantity</th>
                <th class="text-right">Price</th>
                <th class="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item: any) => `
                <tr>
                  <td>${item.name}</td>
                  <td class="text-right">${item.quantity}</td>
                  <td class="text-right">₹${item.price.toLocaleString("en-IN")}</td>
                  <td class="text-right">₹${(item.price * item.quantity).toLocaleString("en-IN")}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          
          <div class="total-section">
            <div class="total-row">
              <div class="total-label">Subtotal:</div>
              <div class="total-value">₹${((order?.amount_paise || 0) / 100).toLocaleString("en-IN")}</div>
            </div>
            <div class="total-row">
              <div class="total-label">Shipping:</div>
              <div class="total-value">₹${(order?.meta?.shipping || 0).toLocaleString("en-IN")}</div>
            </div>
            <div class="total-row grand-total">
              <div class="total-label">Grand Total:</div>
              <div class="total-value">₹${((order?.amount_paise || 0) / 100).toLocaleString("en-IN")}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>Thank you for your purchase!</p>
            <p>For any queries, please contact us at support@pavitrauphaar.com</p>
          </div>
          
          <div class="no-print" style="text-align: center; margin-top: 30px;">
            <button onclick="window.print()" style="padding: 10px 20px; background: #D97706; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Print / Save as PDF</button>
          </div>
        </body>
      </html>
    `);
    
    invoiceWindow.document.close();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Skeleton className="h-96 w-full" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <p className="text-center">Order not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  const steps = getStatusSteps();
  const items = order.meta?.cart_items || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-center mb-4">
            <Button variant="ghost" onClick={() => navigate("/account")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Account
            </Button>
            <Button onClick={downloadInvoice} variant="saffron">
              <Download className="mr-2 h-4 w-4" />
              Download Invoice
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order #{order.order_ref}</CardTitle>
              <CardDescription>
                Placed on{" "}
                {new Date(order.created_at).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Status Tracker */}
              <div className="relative">
                <div className="flex justify-between mb-12">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.key} className="flex flex-col items-center relative flex-1">
                        {/* Green tick above completed steps */}
                        {step.completed && <CheckCircle className="h-6 w-6 text-green-600 mb-2" fill="currentColor" />}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                            step.completed
                              ? "bg-primary border-primary text-primary-foreground"
                              : "bg-background border-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <p
                          className={`mt-3 text-sm font-medium text-center ${
                            step.completed ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {step.label}
                        </p>
                        {index < steps.length - 1 && (
                          <div
                            className={`absolute top-6 left-1/2 w-full h-0.5 -translate-y-1/2 ${
                              steps[index + 1].completed ? "bg-primary" : "bg-muted"
                            }`}
                            style={{ width: "calc(100% - 3rem)" }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="font-semibold mb-4">Order Items</h3>
                <div className="space-y-4">
                  {items.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4 border-b pb-4 last:border-0">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        <p className="font-semibold mt-1">₹{item.price.toLocaleString("en-IN")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{(order.amount_paise / 100 || 0).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>₹{(order.meta?.shipping || 0).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>₹{(order.amount_paise / 100).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <p className="text-muted-foreground">{order.shipping_address}</p>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p className="text-muted-foreground">{order.customer_name}</p>
                <p className="text-muted-foreground">{order.customer_email}</p>
                <p className="text-muted-foreground">{order.customer_phone}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTracker;
