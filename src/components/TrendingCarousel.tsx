import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

// Import product images
import diwaliKitImage from "@/assets/diwali-kit-premium.png";
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
import lotusLedDiyaImage from "@/assets/lotus-led-diya.png";
import glitterElectricCandlesImage from "@/assets/glitter-electric-candles-gold.png";
import multicolourElectricCandlesImage from "@/assets/multicolour-electric-candles.jpg";

const trendingProducts = [
  {
    id: 19,
    name: "Signature Pooja Gift Box",
    price: 1999,
    originalPrice: 3000,
    image: diwaliKitImage,
    rating: 4.8,
    description: "An exquisite pooja hamper with satin ribbons containing handcrafted lotus diyas, traditional toran to welcome divine blessings, fragrant incense and dhoop sticks, and premium quality potlis with large cashews and raisins. Perfect for all auspicious occasions and spiritual celebrations.",
    badge: "34% OFF"
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
    name: "Wooden Incense Holder",
    price: 499,
    originalPrice: 750,
    image: woodenDhoopHolderImage,
    rating: 4.8,
    description: "Handcrafted wooden incense holder with intricate carved designs. Perfect for holding incense sticks during pooja ceremonies.",
    badge: "Handcrafted"
  },
  {
    id: 42,
    name: "Wooden Dhoop Stick Holder",
    price: 499,
    originalPrice: 750,
    image: woodenIncenseHolderImage,
    rating: 4.7,
    description: "Elegant triangular wooden dhoop stick holder with carved patterns. Features storage compartment for dhoop sticks.",
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
  },
  {
    id: 45,
    name: "Lotus LED Diya - Pack of 6",
    price: 999,
    originalPrice: 1200,
    image: lotusLedDiyaImage,
    rating: 4.8,
    description: "Beautiful crystal lotus LED diyas pack of 6. Perfect for festivals, home decoration, and creating a serene ambiance during prayers and celebrations.",
    badge: "Festival Special"
  },
  {
    id: 44,
    name: "Kamdhenu Idol Silver",
    price: 3999,
    originalPrice: 5999,
    image: kamdhenusIdolSilverImage,
    rating: 4.9,
    description: "Exquisite silver-finished Kamdhenu cow idol with calf. Symbol of prosperity and abundance. Perfect for home temple and gifting during auspicious occasions.",
    badge: "Sacred"
  },
  {
    id: 49,
    name: "Dazzling Electric Candles with Glitter",
    price: 1800,
    originalPrice: 2500,
    image: glitterElectricCandlesImage,
    rating: 4.9,
    description: "Stunning electric LED candles with luxurious glitter finish. Box of 12 flameless candles with realistic flickering effect. Perfect for festivals, weddings, and creating enchanting ambiance without fire hazards.",
    badge: "Festival Special"
  },
  {
    id: 50,
    name: "Multicoloured Electric Candles",
    price: 2400,
    originalPrice: 2999,
    image: multicolourElectricCandlesImage,
    rating: 4.9,
    description: "Vibrant multicoloured electric LED candles set. Box of 12 flameless candles in assorted bright colors with warm LED flames. Safe and reusable for all celebrations, adding a magical glow to your festivities.",
    badge: "Festival Special"
  }
];

const TrendingCarousel = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Trending Now</h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Popular
          </Badge>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {trendingProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="transform transition-all duration-300 hover:scale-105">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-6 md:hidden">
          <p className="text-sm text-muted-foreground">← Swipe to see more →</p>
        </div>
      </div>
    </section>
  );
};

export default TrendingCarousel;