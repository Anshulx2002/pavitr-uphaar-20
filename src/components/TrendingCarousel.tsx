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
 import artisanMonkFigurineSetImage from "@/assets/artisan-monk-figurine-set.png";
 import asceticGaneshaMeditationIdolImage from "@/assets/ascetic-ganesha-meditation-idol.png";
 import dancingGaneshaIdolImage from "@/assets/dancing-ganesha-idol.png";
import laxmiGaneshPoojaBoxSmallImage from "@/assets/laxmi-ganesh-puja-box-small.png";
import siddhivinayakPujaBoxImage from "@/assets/siddhivinayak-puja-box.png";
import radhakrishnaPujaBoxImage from "@/assets/radhakrishna-puja-box.png";
import ganeshPujaBoxSmallImage from "@/assets/ganesh-puja-box-small.png";
import laxmiGaneshSmallPujaBoxImage from "@/assets/laxmi-ganesh-small-puja-box.png";
import goldenTemplePujaBoxBigImage from "@/assets/golden-temple-puja-box-big.png";
import elephantCopperBottleImage from "@/assets/elephant-copper-bottle.png";

const trendingProducts = [
  {
    id: 13,
    name: "Laxmi Ganesh Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: laxmiGaneshPoojaBoxSmallImage,
    rating: 5,
    description:
      "Exquisite puja box featuring Goddess Laxmi with Lord Ganesha and Goddess Saraswati. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Compact size perfect for prosperity, wisdom, and sacred worship ceremonies.",
    badge: "Premium",
  },
  {
    id: 24,
    name: "SiddhiVinayak Puja Box",
    price: 1299,
    originalPrice: 1599,
    image: siddhivinayakPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite SiddhiVinayak puja box featuring Lord Ganesha with 8 sacred forms. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Complete set with compartments for sacred offerings and worship ceremonies.",
    badge: "Premium",
  },
  {
    id: 25,
    name: "Radhakrishna Puja Box",
    price: 999,
    originalPrice: 1299,
    image: radhakrishnaPujaBoxImage,
    rating: 4.9,
    description:
      "Beautiful Radhakrishna puja box featuring divine Radha-Krishna imagery. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Compact size perfect for personal worship and sacred offerings.",
    badge: "Premium",
  },
  {
    id: 31,
    name: "Ganesh Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: ganeshPujaBoxSmallImage,
    rating: 4.9,
    description:
      "Exquisite compact Ganesh puja box featuring Lord Ganesha with radiant golden aura. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Perfect size for personal worship and sacred offerings.",
    badge: "Premium",
  },
  {
    id: 38,
    name: "Laxmi Ganesh Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: laxmiGaneshSmallPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite compact Laxmi Ganesh puja box featuring Goddess Laxmi and Lord Ganesha with stunning golden embossed artwork in elegant white frame. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Perfect size for personal worship with divine compartments for sacred offerings and ceremonies.",
    badge: "Premium",
  },
  {
    id: 45,
    name: "Golden Temple Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: goldenTemplePujaBoxBigImage,
    rating: 4.9,
    description:
      "Magnificent large Golden Temple (Harmandir Sahib) puja box featuring intricate architectural detailing of the sacred shrine with gold and silver plated embossed artwork. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium deluxe set with elegant black exterior, multiple compartments with sacred symbols, and ceremonial items for divine worship.",
    badge: "Premium",
  },
  {
    id: 19,
    name: "Elephant Motif Copper Bottle",
    price: 1750,
    originalPrice: 2500,
    image: elephantCopperBottleImage,
    rating: 5,
    description:
      "Premium copper bottle with exquisite elephant motif design. Perfect for Dhanteras and daily use. Keeps water fresh and provides health benefits of copper-enriched water.",
    badge: "Dhanteras Special",
  },
  {
    id: 39,
    name: "Aarti Sangrah",
    price: 1499,
    originalPrice: 2499,
    image: aartiSanghrahImage,
    rating: 5,
    description:
      "Premium Aarti Sangrah book in elegant gift box. Complete collection of traditional aartis for daily prayers and special occasions.",
    badge: "Premium",
  },
  {
    id: 34,
    name: "Gold Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: goldPoojaThaliImage,
    rating: 5,
    description:
      "Exquisite gold-plated pooja thali with intricate designs. Complete set with all essential compartments for elaborate worship ceremonies.",
    badge: "Premium",
  },
  {
    id: 35,
    name: "Silver Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: silverPoojaThaliImage,
    rating: 5,
    description:
      "Elegant silver-plated pooja thali with traditional motifs. Premium quality craftsmanship for special occasions and daily worship.",
    badge: "Premium",
  },
  {
    id: 38,
    name: "Gold Kalash",
    price: 1499,
    originalPrice: 2499,
    image: goldKalashImage,
    rating: 5,
    description:
      "Elevate your Aarti experience with our Gold Kalash. Exquisite gold-finished sacred vessel with intricate engravings for water rituals and ceremonies.",
    badge: "Premium",
  },
  {
    id: 40,
    name: "Laxmi Ganesh Pooja Box",
    price: 999,
    originalPrice: 1499,
    image: laxmiGaneshPoojaBoxImage,
    rating: 5,
    description:
      "Exquisite wooden pooja box with golden Laxmi Ganesh images. Complete set with traditional compartments for sacred ceremonies and worship.",
    badge: "Premium",
  },
  {
    id: 41,
    name: "Wooden Incense Holder",
    price: 499,
    originalPrice: 750,
    image: woodenDhoopHolderImage,
    rating: 4.8,
    description:
      "Handcrafted wooden incense holder with intricate carved designs. Perfect for holding incense sticks during pooja ceremonies.",
    badge: "Handcrafted",
  },
  {
    id: 42,
    name: "Wooden Dhoop Stick Holder",
    price: 499,
    originalPrice: 750,
    image: woodenIncenseHolderImage,
    rating: 4.7,
    description:
      "Elegant triangular wooden dhoop stick holder with carved patterns. Features storage compartment for dhoop sticks.",
    badge: "Elegant",
  },
  {
    id: 36,
    name: "Hanuman Chalisa Aarti Book",
    price: 1499,
    originalPrice: 2499,
    image: aartiBookImage,
    rating: 5,
    description:
      "Premium gold-finished Hanuman Chalisa book in elegant gift box. Perfect for daily prayers and gifting.",
    badge: "Premium",
  },
  {
    id: 37,
    name: "Akhand Brass Diya",
    price: 1499,
    originalPrice: 2499,
    image: akhandBrassDiyaImage,
    rating: 5,
    description:
      "Premium Akhand Brass Diya with glass protection cover. Ideal for continuous lighting during festivals and special occasions.",
    badge: "Premium",
  },
  {
    id: 43,
    name: "Lord Krishna Statue",
    price: 2499,
    originalPrice: 4000,
    image: lordKrishnaStatueImage,
    rating: 4.9,
    description:
      "Beautiful handcrafted Lord Krishna statue with golden calf. Features intricate detailing and vibrant colors. Perfect centerpiece for your home temple.",
    badge: "Sacred",
  },
   {
     id: 60,
     name: "Artisan Monk Figurine Set",
     price: 1499,
     originalPrice: 1999,
     image: artisanMonkFigurineSetImage,
     rating: 4.9,
     description:
       "Charming artisan monk figurine set featuring peaceful, hand-painted poses with jewel-studded traditional robes. A serene decor piece for meditation corners.",
     badge: "New Arrival",
   },
   {
     id: 61,
     name: "Ascetic Ganesha Meditation Idol",
     price: 1299,
     originalPrice: 1799,
     image: asceticGaneshaMeditationIdolImage,
     rating: 4.9,
     description:
       "Unique ascetic-style Ganesha idol in a meditative pose on a rocky base, featuring sacred Om detailing and traditional elements.",
     badge: "New Arrival",
   },
   {
     id: 62,
     name: "Dancing Ganesha Idol",
     price: 2499,
     originalPrice: 3499,
     image: dancingGaneshaIdolImage,
     rating: 5,
     description:
       "Vibrant dancing Ganesha idol with ornate crown and detailed jewelry, finished with rich colors and a premium golden base.",
     badge: "New Arrival",
   },
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
                <CarouselItem
                  key={product.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
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
