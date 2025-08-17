import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Clock, MapPin, Shield } from "lucide-react";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Information</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fast and reliable delivery of your sacred products with care and devotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <Truck className="w-6 h-6 text-saffron mr-3" />
                <h2 className="text-xl font-semibold">Delivery Timeframe</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We ensure your sacred products reach you within 0-3 days across India.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Same day delivery available in select cities</li>
                <li>• Express delivery: 1-2 days</li>
                <li>• Standard delivery: 2-3 days</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-saffron mr-3" />
                <h2 className="text-xl font-semibold">Secure Packaging</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                All sacred items are carefully packed to maintain their sanctity and prevent damage.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Eco-friendly packaging materials</li>
                <li>• Fragile items receive extra protection</li>
                <li>• Blessed packaging for spiritual items</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-saffron mr-3" />
                <h2 className="text-xl font-semibold">Delivery Areas</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We deliver across India with special coverage in major cities.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• All major cities and towns</li>
                <li>• Remote areas (may take 1-2 extra days)</li>
                <li>• Pincode verification available</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-saffron mr-3" />
                <h2 className="text-xl font-semibold">Order Processing</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Orders are processed with care and blessed before dispatch.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Same day processing for orders before 2 PM</li>
                <li>• Quality check before dispatch</li>
                <li>• Real-time tracking updates</li>
              </ul>
            </div>
          </div>

          <div className="bg-saffron/10 p-6 rounded-lg border border-saffron/20">
            <h3 className="text-lg font-semibold mb-3 text-saffron">Special Festival Rush</h3>
            <p className="text-muted-foreground">
              During festival seasons, we prioritize orders to ensure your pooja items reach you on time. 
              We recommend placing orders 2-3 days in advance during peak festival periods.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingInfo;