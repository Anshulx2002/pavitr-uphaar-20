import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Package, Truck, CheckCircle, Clock } from "lucide-react";
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
          <Button variant="ghost" onClick={() => navigate("/account")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Account
          </Button>

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
                    <span>₹{(order.meta?.subtotal || 0).toLocaleString("en-IN")}</span>
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
