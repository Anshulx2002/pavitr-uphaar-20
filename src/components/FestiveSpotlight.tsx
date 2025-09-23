import { useState } from "react";
import { Sparkles, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface FestiveSpotlightProps {
  festival: string;
  description: string;
  discount: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  isActive?: boolean;
}

const FestiveSpotlight = ({ 
  festival, 
  description, 
  discount, 
  image, 
  ctaText, 
  ctaLink,
  isActive = true 
}: FestiveSpotlightProps) => {
  const [isVisible, setIsVisible] = useState(isActive);
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-saffron via-gold to-primary p-1 rounded-2xl mb-6 overflow-hidden">
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-4 animate-pulse">
          <Sparkles className="h-4 w-4 text-white/60" />
        </div>
        <div className="absolute top-8 right-8 animate-pulse delay-300">
          <Sparkles className="h-3 w-3 text-white/60" />
        </div>
        <div className="absolute bottom-6 left-12 animate-pulse delay-700">
          <Sparkles className="h-3 w-3 text-white/60" />
        </div>
      </div>
      
      <div className="bg-background rounded-xl p-6 relative">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-6 w-6 hover:bg-muted"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Festival Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
            <img
              src={image}
              alt={festival}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">
                {festival} Special
              </Badge>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {festival} Collection
            </h3>
            
            <p className="text-muted-foreground mb-4 max-w-md">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="text-center">
                <span className="text-3xl font-bold text-primary">{discount}</span>
                <p className="text-sm text-muted-foreground">Special Offer</p>
              </div>
              
              <Button 
                className="bg-gradient-saffron hover:opacity-90 text-white px-8 py-3 text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 touch-manipulation"
                onClick={() => navigate(ctaLink)}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                {ctaText}
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-radial from-gold/5 to-transparent rounded-full" />
      </div>
    </div>
  );
};

// Default Navratri spotlight component
const NavratriFestiveSpotlight = () => {
  return (
    <FestiveSpotlight
      festival="Navratri"
      description="Celebrate the divine nine nights with our specially curated collection of sacred items, garba accessories, and traditional decorations."
      discount="30% OFF"
      image="/src/assets/navratri-kit.jpg"
      ctaText="Shop Navratri Collection"
      ctaLink="/festival-kits"
      isActive={true}
    />
  );
};

export default FestiveSpotlight;
export { NavratriFestiveSpotlight };