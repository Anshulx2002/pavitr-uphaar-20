import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

// Import product images
import goldPoojaThaliImage from "@/assets/gold-pooja-thali.jpg";
import silverPoojaThaliImage from "@/assets/silver-pooja-thali.jpg";
import goldKalashImage from "@/assets/gold-kalash.png";
import aartiSanghrahImage from "@/assets/aarti-sangrah.png";
import laxmiGaneshPoojaBoxImage from "@/assets/laxmi-ganesh-pooja-box.png";
import woodenDhoopHolderImage from "@/assets/wooden-dhoop-holder.png";
import woodenIncenseHolderImage from "@/assets/wooden-incense-holder.png";
import aartiBookImage from "@/assets/aarti-book.png";
import akhandBrassDiyaImage from "@/assets/akhand-brass-diya.png";
import lordKrishnaStatueImage from "@/assets/lord-krishna-statue.png";

// Featured products - carefully selected new premium products
const featuredProducts = [
  {
    id: 34,
    name: "Gold Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: goldPoojaThaliImage,
    rating: 5,
    description: "Exquisite gold-plated pooja thali with intricate designs. Complete set with all essential compartments for elaborate worship ceremonies.",
    badge: "Premium"
  },
  {
    id: 35,
    name: "Silver Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: silverPoojaThaliImage,
    rating: 5,
    description: "Elegant silver-plated pooja thali with traditional motifs. Premium quality craftsmanship for special occasions and daily worship.",
    badge: "Premium"
  },
  {
    id: 38,
    name: "Gold Kalash",
    price: 1499,
    originalPrice: 2499,
    image: goldKalashImage,
    rating: 5,
    description: "Elevate your Aarti experience with our Gold Kalash. Exquisite gold-finished sacred vessel with intricate engravings for water rituals and ceremonies.",
    badge: "Premium"
  },
  {
    id: 39,
    name: "Aarti Sangrah",
    price: 1499,
    originalPrice: 2499,
    image: aartiSanghrahImage,
    rating: 5,
    description: "Premium Aarti Sangrah book in elegant gift box. Complete collection of traditional aartis for daily prayers and special occasions.",
    badge: "Premium"
  },
  {
    id: 40,
    name: "Laxmi Ganesh Pooja Box",
    price: 999,
    originalPrice: 1499,
    image: laxmiGaneshPoojaBoxImage,
    rating: 5,
    description: "Exquisite wooden pooja box with golden Laxmi Ganesh images. Complete set with traditional compartments for sacred ceremonies and worship.",
    badge: "Premium"
  },
  {
    id: 41,
    name: "Wooden Carved Dhoop Stick Holder for Pooja",
    price: 499,
    originalPrice: 750,
    image: woodenDhoopHolderImage,
    rating: 4.8,
    description: "Handcrafted wooden dhoop stick holder with intricate carved designs. Perfect for holding dhoop sticks during pooja ceremonies.",
    badge: "Handcrafted"
  },
  {
    id: 42,
    name: "Wooden Incense Holder",
    price: 450,
    originalPrice: 750,
    image: woodenIncenseHolderImage,
    rating: 4.7,
    description: "Elegant triangular wooden incense holder with carved patterns. Features storage compartment for incense sticks.",
    badge: "Elegant"
  },
  {
    id: 36,
    name: "Hanuman Chalisa Aarti Book",
    price: 1499,
    originalPrice: 2499,
    image: aartiBookImage,
    rating: 5,
    description: "Premium gold-finished Hanuman Chalisa book in elegant gift box. Perfect for daily prayers and gifting.",
    badge: "Premium"
  },
  {
    id: 37,
    name: "Akhand Brass Diya",
    price: 1499,
    originalPrice: 2499,
    image: akhandBrassDiyaImage,
    rating: 5,
    description: "Premium Akhand Brass Diya with glass protection cover. Ideal for continuous lighting during festivals and special occasions.",
    badge: "Premium"
  },
  {
    id: 43,
    name: "Lord Krishna Statue",
    price: 2499,
    originalPrice: 4000,
    image: lordKrishnaStatueImage,
    rating: 4.9,
    description: "Beautiful handcrafted Lord Krishna statue with golden calf. Features intricate detailing and vibrant colors. Perfect centerpiece for your home temple.",
    badge: "Sacred"
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
          <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-semibold mb-3 md:mb-4 border border-primary/20">
            <Sparkles className="w-3 md:w-4 h-3 md:h-4" />
            <span>Handpicked Excellence</span>
            <Star className="w-3 md:w-4 h-3 md:h-4 fill-current" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="text-foreground">Collection</span>
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
            : "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8"
          } 
          mb-8 md:mb-12
        `}>
          {featuredProducts.slice(0, isMobile ? 4 : 10).map((product, index) => (
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