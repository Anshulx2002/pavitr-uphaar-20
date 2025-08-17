import { useState, useEffect } from "react";
import { Sparkles, X, Calendar, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RightSidePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 animate-slide-in-right">
      <div className="bg-gradient-to-br from-saffron via-gold to-primary p-1 rounded-2xl shadow-2xl max-w-sm overflow-hidden">
        {/* Animated background sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-2 left-2 animate-pulse">
            <Sparkles className="h-3 w-3 text-white/60" />
          </div>
          <div className="absolute top-6 right-4 animate-pulse delay-300">
            <Sparkles className="h-2 w-2 text-white/60" />
          </div>
          <div className="absolute bottom-4 left-6 animate-pulse delay-700">
            <Sparkles className="h-2 w-2 text-white/60" />
          </div>
        </div>
        
        <div className="bg-background rounded-xl p-6 relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6 hover:bg-muted"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Festival Image */}
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-lg">
            <img
              src="/src/assets/navratri-kit.jpg"
              alt="Navratri Collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold text-xs">
                Navratri Special
              </Badge>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-2">
              Navratri Collection
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4">
              Celebrate with our sacred collection. Special festival items available now!
            </p>

            <div className="flex flex-col gap-3">
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">30% OFF</span>
                <p className="text-xs text-muted-foreground">Limited Time</p>
              </div>
              
              <Button 
                className="bg-gradient-saffron hover:opacity-90 text-white px-6 py-2 text-sm font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/festival-kits'}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Shop Now
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-radial from-primary/5 to-transparent rounded-full" />
          <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-radial from-gold/5 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default RightSidePopup;