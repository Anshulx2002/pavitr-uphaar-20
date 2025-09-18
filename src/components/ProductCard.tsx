import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  description: string;
  badge?: string;
  viewMode?: "grid" | "list";
}

const ProductCard = ({ 
  id,
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  description, 
  badge,
  viewMode = "grid"
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      originalPrice,
      image,
      description,
      badge
    });
  };

  if (viewMode === "list") {
    return (
      <Card className="group hover-lift border-border/50 hover:border-primary/30 bg-card overflow-hidden scroll-animate">
        <div className="flex flex-col md:flex-row">
          <div className="relative overflow-hidden w-full md:w-80 h-64 md:h-auto">
            {badge && (
              <div className="absolute top-3 left-3 z-10 bg-gradient-saffron text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {badge}
              </div>
            )}
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {name}
                </h3>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-2xl font-bold" style={{ color: 'hsl(var(--premium-gold-saffron))' }}>₹{price}</span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
                )}
                {originalPrice && (
                  <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: 'hsl(var(--premium-gold-saffron) / 0.1)', color: 'hsl(var(--premium-gold-saffron))' }}>
                    {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="bg-gradient-premium-gold hover:opacity-90 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  return (
    <Card className="group hover-lift border-border/50 hover:border-primary/30 bg-card overflow-hidden scroll-animate">
      <div className="relative overflow-hidden">
        {badge && (
          <div className="absolute top-3 left-3 z-10 bg-gradient-saffron text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {badge}
          </div>
        )}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} 
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="text-2xl font-bold" style={{ color: 'hsl(var(--premium-gold-saffron))' }}>₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          )}
          {originalPrice && (
            <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: 'hsl(var(--premium-gold-saffron) / 0.1)', color: 'hsl(var(--premium-gold-saffron))' }}>
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <div className="flex gap-2 w-full">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-premium-gold hover:opacity-90 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 group-hover:shadow-xl"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button variant="outline" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;