import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

// Import product images
import agarbattiImage from "@/assets/agarbatti.jpg";
import diyaImage from "@/assets/diya.jpg";
import kumkumImage from "@/assets/kumkum.jpg";
import rudrakshaImage from "@/assets/rudraksha.jpg";
import camphorImage from "@/assets/camphor.jpg";
import poojaThaliImage from "@/assets/pooja-thali.jpg";
import garlandImage from "@/assets/garland.jpg";
import sandalwoodImage from "@/assets/sandalwood.jpg";
import diwaliKitImage from "@/assets/diwali-kit.jpg";
import ganeshKitImage from "@/assets/ganesh-kit.jpg";

// Featured products - carefully selected top 10 products with premium badges
const featuredProducts = [
  {
    id: 1,
    name: "Premium Sandalwood Agarbatti",
    price: 299,
    originalPrice: 399,
    image: agarbattiImage,
    rating: 5,
    description: "Hand-rolled incense sticks made from pure sandalwood powder. Burns for 45 minutes with divine fragrance.",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Brass Diya Set",
    price: 549,
    originalPrice: 699,
    image: diyaImage,
    rating: 5,
    description: "Traditional brass oil lamps with intricate designs. Set of 4 diyas perfect for festivals and daily prayers.",
    badge: "Premium"
  },
  {
    id: 4,
    name: "Rudraksha Mala",
    price: 899,
    originalPrice: 1199,
    image: rudrakshaImage,
    rating: 5,
    description: "5-Mukhi Rudraksha beads mala with 108 beads. Blessed and energized for meditation and prayers.",
    badge: "Sacred"
  },
  {
    id: 6,
    name: "Brass Pooja Thali",
    price: 1299,
    originalPrice: 1599,
    image: poojaThaliImage,
    rating: 5,
    description: "Complete pooja thali set with 7 compartments. Handcrafted brass with traditional motifs.",
    badge: "Premium"
  },
  {
    id: 8,
    name: "Sandalwood Powder",
    price: 399,
    originalPrice: 499,
    image: sandalwoodImage,
    rating: 5,
    description: "Pure Mysore sandalwood powder for tilaka and skin care. 50g premium quality.",
    badge: "Organic"
  },
  {
    id: 19,
    name: "Diwali Celebration Kit",
    price: 1499,
    originalPrice: 1999,
    image: diwaliKitImage,
    rating: 5,
    description: "Complete Diwali celebration kit with diyas, rangoli colors, and sweets.",
    badge: "Festival Special"
  },
  {
    id: 20,
    name: "Ganesh Chaturthi Kit",
    price: 999,
    originalPrice: 1299,
    image: ganeshKitImage,
    rating: 5,
    description: "Everything needed for Ganesh Chaturthi celebrations. Includes modak molds.",
    badge: "Complete Kit"
  },
  {
    id: 14,
    name: "Tulsi Mala",
    price: 399,
    originalPrice: 499,
    image: rudrakshaImage,
    rating: 5,
    description: "Sacred tulsi beads mala for chanting and meditation. 108 beads.",
    badge: "Holy"
  },
  {
    id: 3,
    name: "Pure Kumkum Powder",
    price: 149,
    image: kumkumImage,
    rating: 5,
    description: "Authentic vermillion powder made from turmeric and lime. 100g pack for tilaka and rituals."
  },
  {
    id: 18,
    name: "Lotus Garland",
    price: 399,
    image: garlandImage,
    rating: 5,
    description: "Artificial lotus garland for permanent temple decoration. Weather resistant.",
    badge: "Durable"
  }
];

const FeaturedProductsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-radial from-accent/30 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-radial from-secondary/30 to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Handpicked Excellence</span>
            <Star className="w-4 h-4 fill-current" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="text-foreground">Collection</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our most cherished pooja essentials, meticulously selected for their 
            authenticity, quality, and spiritual significance.
          </p>
          
        </div>

        {/* Products Grid - Mobile optimized to show 6 products */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8 mb-16">
          {featuredProducts.slice(0, isMobile ? 6 : 10).map((product, index) => (
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

        {/* Call to Action */}
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
      </div>
    </section>
  );
};

export default FeaturedProductsSection;