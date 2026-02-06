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
import kamdhenusIdolSilverImage from "@/assets/kamdhenu-idol-silver.jpg";
import elephantCopperBottleImage from "@/assets/elephant-copper-bottle.png";
import raniMeherCopperBottleImage from "@/assets/rani-meher-copper-bottle.png";
import laxmiGaneshPoojaBoxSmallImage from "@/assets/laxmi-ganesh-puja-box-small.png";
import siddhivinayakPujaBoxImage from "@/assets/siddhivinayak-puja-box.png";
import radhakrishnaPujaBoxImage from "@/assets/radhakrishna-puja-box.png";
import ganeshPujaBoxSmallImage from "@/assets/ganesh-puja-box-small.png";
import laxmiGaneshSmallPujaBoxImage from "@/assets/laxmi-ganesh-small-puja-box.png";
import goldenTemplePujaBoxBigImage from "@/assets/golden-temple-puja-box-big.png";
import laxmijiPujaBoxSmallImage from "@/assets/laxmiji-puja-box-small.png";
 import artisanMonkFigurineSetImage from "@/assets/artisan-monk-figurine-set.png";
 import asceticGaneshaMeditationIdolImage from "@/assets/ascetic-ganesha-meditation-idol.png";
 import dancingGaneshaIdolImage from "@/assets/dancing-ganesha-idol.png";
 import royalPeacockKrishnaReclineIdolImage from "@/assets/royal-peacock-krishna-recline-idol.png";
 import balKrishnaMakhanIdolImage from "@/assets/bal-krishna-makhan-idol.png";
 import buddhaBoddhiTreeIdolImage from "@/assets/buddha-bodhi-tree-idol.png";
 import serpentKrishnaIdolImage from "@/assets/serpent-krishna-idol.png";
 import goldenBalKrishnaIdolImage from "@/assets/golden-bal-krishna-idol.png";
 import heritageTempleSculptureImage from "@/assets/heritage-temple-sculpture.png";
 import ganeshaWallHangingImage from "@/assets/ganesha-wall-hanging.png";
 import ganeshaProsperityPanelImage from "@/assets/ganesha-prosperity-panel.png";
 import shrineDeityIdolImage from "@/assets/shrine-deity-idol.png";
 import twinGuardianDeityIdolImage from "@/assets/twin-guardian-deity-idol.png";
 import mysticalSageGaneshaImage from "@/assets/mystical-sage-ganesha.png";

// Featured products - carefully selected new premium products
const featuredProducts = [
    // New Idol Products - Featured First
  {
    id: 63,
    name: "Mystical Sage Ganesha Idol",
    price: 499,
    originalPrice: 999,
    image: mysticalSageGaneshaImage,
    rating: 5,
    description:
      "Charming Mystical Sage Ganesha idol in a scholarly pose with traditional red attire, writing desk, and sacred mouse companion.",
    badge: "50% OFF",
  },
  {
     id: 62,
     name: "Dancing Ganesha Idol",
      price: 499,
      originalPrice: 999,
     image: dancingGaneshaIdolImage,
     rating: 5,
     description:
       "Vibrant dancing Ganesha idol with ornate crown and detailed jewelry, finished with rich colors and a premium golden base.",
      badge: "50% OFF",
   },
   {
     id: 61,
     name: "Ascetic Ganesha Meditation Idol",
      price: 999,
      originalPrice: 1499,
     image: asceticGaneshaMeditationIdolImage,
     rating: 4.9,
     description:
       "Unique ascetic-style Ganesha idol in a meditative pose on a rocky base, featuring sacred Om detailing and traditional elements.",
      badge: "33% OFF",
   },
   {
     id: 60,
     name: "Artisan Monk Figurine Set",
      price: 1599,
      originalPrice: 2499,
     image: artisanMonkFigurineSetImage,
     rating: 4.9,
     description:
       "Charming artisan monk figurine set featuring peaceful, hand-painted poses with jewel-studded traditional robes.",
      badge: "36% OFF",
   },
   {
     id: 50,
     name: "Royal Peacock Krishna Recline Idol",
      price: 1499,
      originalPrice: 1999,
     image: royalPeacockKrishnaReclineIdolImage,
     rating: 5,
     description:
       "Exquisite Royal Peacock Krishna Recline Idol featuring Lord Krishna in a beautiful reclining pose with ornate peacock feather crown.",
      badge: "25% OFF",
   },
   {
     id: 51,
     name: "Bal Krishna Makhan Idol",
      price: 499,
      originalPrice: 999,
     image: balKrishnaMakhanIdolImage,
     rating: 4.9,
     description:
       "Adorable Bal Krishna (Laddu Gopal) idol with butter pot. Hand-painted with vibrant colors featuring peacock feather crown.",
      badge: "50% OFF",
   },
   {
     id: 52,
     name: "Buddha Bodhi Tree Idol",
      price: 899,
      originalPrice: 1499,
     image: buddhaBoddhiTreeIdolImage,
     rating: 5,
     description:
       "Serene Buddha statue meditating under the sacred Bodhi tree. Features stunning golden finish with turquoise detailing.",
      badge: "40% OFF",
   },
   {
     id: 53,
     name: "Serpent Krishna Idol",
      price: 1799,
      originalPrice: 2499,
     image: serpentKrishnaIdolImage,
     rating: 4.9,
     description:
       "Modern artistic Krishna idol with flowing purple robes and peacock feather crown. Unique contemporary design.",
      badge: "28% OFF",
   },
   {
     id: 54,
     name: "Golden Bal Krishna Idol",
      price: 499,
      originalPrice: 999,
     image: goldenBalKrishnaIdolImage,
     rating: 4.9,
     description:
       "Exquisite golden Bal Krishna idol with butter pot. Features stunning all-gold finish with delicate facial details.",
      badge: "50% OFF",
   },
   {
     id: 55,
     name: "Heritage Temple Sculpture",
      price: 499,
      originalPrice: 999,
     image: heritageTempleSculptureImage,
     rating: 5,
     description:
       "Magnificent golden replica of the Ayodhya Ram Mandir temple complex. Intricate architectural detailing of the sacred temple.",
      badge: "50% OFF",
   },
   {
     id: 56,
     name: "Ganesha Wall Hanging",
     price: 999,
     originalPrice: 1399,
     image: ganeshaWallHangingImage,
     rating: 4.8,
     description:
       "Beautiful Ganesha wall hanging with traditional rope design and decorative tassels. Perfect for entrance decor.",
     badge: "29% OFF",
   },
   {
     id: 57,
     name: "Ganesha Prosperity Panel",
      price: 999,
      originalPrice: 1499,
     image: ganeshaProsperityPanelImage,
     rating: 4.8,
    description:
       "Colorful Ganesha prosperity panel featuring Lord Ganesha with veena, sacred mantras, and traditional symbols.",
      badge: "33% OFF",
   },
   {
     id: 58,
     name: "Shrine Deity Idol",
      price: 599,
      originalPrice: 999,
     image: shrineDeityIdolImage,
     rating: 4.9,
     description:
       "Majestic Ram Lalla idol in ornate temple shrine frame with intricate golden detailing. Features Lord Ram with bow.",
     badge: "40% OFF",
  },
  {
     id: 59,
     name: "Twin Guardian Deity Idol",
      price: 999,
      originalPrice: 1499,
     image: twinGuardianDeityIdolImage,
    rating: 4.9,
    description:
       "Elegant Ram Lalla temple idol featuring Lord Ram in traditional black finish with golden ornaments.",
      badge: "33% OFF",
  },
  {
     id: 43,
    name: "Gold Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: goldPoojaThaliImage,
    rating: 5,
    description:
      "Exquisite gold-plated pooja thali with intricate designs. Complete set with all essential compartments for worship rituals.",
    badge: "Premium",
  },
];

const FeaturedProductsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
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
            Discover our most cherished pooja essentials, meticulously selected for their authenticity, quality, and
            spiritual significance.
          </p>
        </div>

        {/* Mobile-Optimized Products Grid */}
        <div
          className={`
          ${
            isMobile
              ? "grid grid-cols-1 gap-6 max-w-sm mx-auto"
              : "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8"
          } 
          mb-8 md:mb-12
        `}
        >
          {featuredProducts.slice(0, isMobile ? 4 : 12).map((product, index) => (
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
