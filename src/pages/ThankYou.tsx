import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, AlertCircle } from "lucide-react";
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
              
              {/* Email notification card */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-800">Order Confirmation Email</h3>
                </div>
                <p className="text-sm text-blue-700 text-center">
                  Check your inbox (including junk/spam folder) for the order confirmation email.
                </p>
                <div className="flex items-center justify-center space-x-1 text-xs text-blue-600">
                  <AlertCircle className="w-3 h-3" />
                  <span>Don't forget to check your spam folder!</span>
                </div>
              </div>
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