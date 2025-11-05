import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useFeaturedProducts } from "@/hooks/useProducts";

const FeaturedProductsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { data: featuredProducts = [], isLoading } = useFeaturedProducts();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-radial from-accent/30 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-radial from-secondary/30 to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Mobile-Optimized Header */}
        <div className="text-center mb-6 md:mb-10 scroll-animate">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Collection
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4 md:mb-6 px-2">
            Discover our most cherished pooja essentials, meticulously selected for their 
            authenticity, quality, and spiritual significance.
          </p>
          
        </div>

        {/* Mobile-Optimized Products Grid */}
        <div className={`
          ${isMobile 
            ? "grid grid-cols-1 gap-6 max-w-sm mx-auto" 
            : "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8"
          } 
          mb-8 md:mb-12
        `}>
          {isLoading ? (
            <div className="col-span-full text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-muted-foreground">Loading featured products...</p>
            </div>
          ) : featuredProducts.slice(0, isMobile ? 4 : 12).map((product, index) => (
            <div 
              key={product.id} 
              className="scroll-animate hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  description={product.description}
                  badge={product.badge}
                />
                {/* Subtle hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile: Show More Button */}
        {isMobile && (
          <div className="text-center mb-8">
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 rounded-full shadow-gold hover:shadow-hover transform transition-all duration-300 hover:scale-105 w-full max-w-xs"
              >
                View All Products
              </Button>
            </Link>
          </div>
        )}

        {/* Desktop Call to Action */}
        {!isMobile && (
          <div className="text-center scroll-animate">
            <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-background/80 via-accent/5 to-background/80 backdrop-blur-sm border border-border/50 shadow-card">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Explore Our Complete Collection
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                Browse through our entire catalog of sacred items, festival kits, and spiritual accessories
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 rounded-full shadow-gold hover:shadow-hover transform transition-all duration-300 hover:scale-105"
                  >
                    View All Products
                  </Button>
                </Link>
                <Link to="/products">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary/20 hover:border-primary/40 px-8 py-4 rounded-full transition-all duration-300"
                  >
                    Shop by Category
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;