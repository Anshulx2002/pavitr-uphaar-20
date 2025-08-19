import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    // Clear cart after successful payment
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-green-700">
                Payment Successful!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Thank you for your order. Your payment has been processed successfully.
              </p>
              <p className="text-sm text-muted-foreground">
                Please check your inbox (including junk/spam) for the order confirmation email.
              </p>
              {paymentId && (
                <div className="bg-muted p-3 rounded">
                  <p className="text-sm">
                    <strong>Payment ID:</strong> {paymentId}
                  </p>
                  {orderId && (
                    <p className="text-sm">
                      <strong>Order ID:</strong> {orderId}
                    </p>
                  )}
                </div>
              )}
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link to="/products">Continue Shopping</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;