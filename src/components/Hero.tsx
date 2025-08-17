import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pooja.jpg";
import productImage from "@/assets/diwali-kit.jpg";
import { Shield, Truck, Package, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-background py-24 md:py-24 overflow-hidden">
      {/* Subtle background with warm overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traditional pooja setup with diyas and incense" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-orange-50/60 dark:bg-orange-950/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[60ch]">
                <span className="text-foreground">Premium pooja kits, </span>
                <span className="text-orange-600 dark:text-orange-400">delivered to your door</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[50ch]">
                Everything you need. Beautifully packed. Ready to worship.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <Link to="/festival-kits">
                <Button 
                  size="lg"
                  className="h-14 px-8 rounded-3xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Shop Kits
                </Button>
              </Link>
              
              <div>
                <Link 
                  to="/products/all" 
                  className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                >
                  Browse all products
                </Link>
              </div>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t pt-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span>Hand-packed</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Made in India</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="lg:order-2">
            <div className="relative">
              <img 
                src={productImage}
                alt="Premium Diwali pooja kit with traditional items beautifully arranged"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;