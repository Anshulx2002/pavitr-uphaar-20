import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

// Import product images
import agarbattiImage from "@/assets/agarbatti.jpg";
import diyaImage from "@/assets/diya.jpg";
import rudrakshaImage from "@/assets/rudraksha.jpg";
import poojaThaliImage from "@/assets/pooja-thali.jpg";
import navratriKitImage from "@/assets/navratri-kit.jpg";
import diwaliKitImage from "@/assets/diwali-kit.jpg";

const trendingProducts = [
  {
    id: 1,
    name: "Navratri Special Kit",
    price: 899,
    originalPrice: 1199,
    image: navratriKitImage,
    rating: 5,
    description: "Complete Navratri celebration kit with kalash, chunri, and prayer essentials.",
    badge: "Trending"
  },
  {
    id: 2,
    name: "Diwali Celebration Kit",
    price: 1299,
    originalPrice: 1599,
    image: diwaliKitImage,
    rating: 5,
    description: "Premium Diwali kit with diyas, rangoli colors, and festive decorations.",
    badge: "Hot"
  },
  {
    id: 3,
    name: "Premium Sandalwood Agarbatti",
    price: 299,
    originalPrice: 399,
    image: agarbattiImage,
    rating: 5,
    description: "Hand-rolled incense sticks made from pure sandalwood powder.",
    badge: "Best Seller"
  },
  {
    id: 4,
    name: "Brass Diya Set",
    price: 549,
    originalPrice: 699,
    image: diyaImage,
    rating: 5,
    description: "Traditional brass oil lamps with intricate designs. Set of 4 diyas.",
    badge: "Popular"
  },
  {
    id: 5,
    name: "Rudraksha Mala",
    price: 899,
    originalPrice: 1199,
    image: rudrakshaImage,
    rating: 5,
    description: "5-Mukhi Rudraksha beads mala with 108 beads. Blessed and energized.",
    badge: "Sacred"
  },
  {
    id: 6,
    name: "Brass Pooja Thali",
    price: 1299,
    originalPrice: 1599,
    image: poojaThaliImage,
    rating: 5,
    description: "Complete pooja thali set with 7 compartments. Handcrafted brass.",
    badge: "Premium"
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