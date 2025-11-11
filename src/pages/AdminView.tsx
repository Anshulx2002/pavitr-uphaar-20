import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Order {
  id: string;
  order_ref: string;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  shipping_address: string | null;
  amount_paise: number;
  currency: string;
  status: string;
  meta: any;
  created_at: string;
}

const AdminView = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    checkAuthorization();
  }, []);

  const checkAuthorization = async () => {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error || !user) {
        toast.error("Please login to access this page");
        navigate("/auth");
        return;
      }

      if (user.email !== "anshulvchadha@hotmail.com") {
        toast.error("Unauthorized access");
        navigate("/");
        return;
      }

      setAuthorized(true);
      fetchOrders();
    } catch (error) {
      console.error("Authorization error:", error);
      navigate("/");
    }
  };

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const order = orders.find((o) => o.id === orderId);
      if (!order) throw new Error("Order not found");

      const { error } = await supabase.from("orders").update({ status: newStatus }).eq("id", orderId);

      if (error) throw error;

      setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)));

      // Send email notification if status is shipped or delivered
      if (newStatus === "shipped" || newStatus === "delivered") {
        try {
          const items = order.meta?.cart_items || [];
          await supabase.functions.invoke("send-status-update", {
            body: {
              customerName: order.customer_name,
              customerEmail: order.customer_email,
              orderRef: order.order_ref,
              status: newStatus,
              items: items.map((item: any) => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price || 0,
              })),
              totalAmount: order.amount_paise,
              shippingAddress: order.shipping_address || "N/A",
            },
          });
          console.log("Status update email sent");
        } catch (emailError) {
          console.error("Error sending status email:", emailError);
          // Don't fail the status update if email fails
        }
      }

      toast.success("Order status updated successfully");
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Failed to update order status");
    }
  };

  const formatPrice = (paise: number, currency: string) => {
    const amount = paise / 100;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  const getOrderItems = (meta: any) => {
    try {
      const items = meta?.cart_items || [];
      return items.map((item: any) => `${item.name} (x${item.quantity})`).join(", ");
    } catch {
      return "N/A";
    }
  };

  if (loading || !authorized) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-48 mb-6" />
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">All Orders</h1>

          <Card>
            <CardHeader>
              <CardTitle>Order Management ({orders.length} orders)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.No</TableHead>
                      <TableHead>Customer Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Shipping Address</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{order.customer_name || "N/A"}</TableCell>
                        <TableCell>{order.customer_email || "N/A"}</TableCell>
                        <TableCell>{order.customer_phone || "N/A"}</TableCell>
                        <TableCell>
                          <div className="max-w-xs overflow-x-auto whitespace-nowrap">
                            {order.shipping_address || "N/A"}
                          </div>
                        </TableCell>
                        <TableCell>{getOrderItems(order.meta)}</TableCell>
                        <TableCell>{formatPrice(order.amount_paise, order.currency)}</TableCell>
                        <TableCell>
                          <Select value={order.status} onValueChange={(value) => updateOrderStatus(order.id, value)}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="paid">Paid</SelectItem>
                              <SelectItem value="shipped">Shipped</SelectItem>
                              <SelectItem value="delivered">Delivered</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminView;
