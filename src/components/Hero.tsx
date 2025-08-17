import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pooja.jpg";
import productImage from "@/assets/diwali-kit.jpg";
import { Shield, Truck, Package, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-background py-24 md:py-24 overflow-hidden">
      {/* Rich Indian Traditional Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle background with warm overlay */}
        <img 
          src={heroImage} 
          alt="Traditional pooja setup with diyas and incense" 
          className="w-full h-full object-cover opacity-30" 
        />
        
        {/* Warm golden overlay for traditional feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 via-amber-50/40 to-orange-50/60 dark:from-orange-950/60 dark:via-amber-950/40 dark:to-orange-950/60"></div>
        
        {/* Traditional Indian Mandala Patterns */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #d97706 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '80px 80px, 60px 60px, 120px 120px'
        }}></div>
        
        {/* Traditional Paisley Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20c0-11.046 8.954-20 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
        
        {/* Traditional Decorative Borders */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute top-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>
        <div className="absolute bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        {/* Traditional Corner Decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/30 rounded-bl-lg"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[60ch]">
                <span className="text-foreground">Premium pooja kits, </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-extrabold">delivered to your door</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[50ch]">
                Everything you need. Beautifully packed. Ready to worship.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <div className="relative">
                {/* Glitz animation overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-[slide-in-right_2s_linear_infinite] overflow-hidden pointer-events-none"></div>
                <Link to="/festival-kits">
                  <Button 
                    size="lg"
                    className="h-14 px-8 rounded-3xl bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-yellow-900 font-semibold text-lg shadow-[0_4px_16px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.3)_inset] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.4)_inset] transition-all duration-300 hover:scale-[1.02] border border-yellow-400/20 relative overflow-hidden focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  >
                    Shop Kits
                  </Button>
                </Link>
              </div>
              
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