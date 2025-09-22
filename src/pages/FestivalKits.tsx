import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Gift } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer"; // Fixed import
import diwaliKit from "@/assets/diwali-gift-box.png";
import ganeshKit from "@/assets/ganesh-kit.jpg";
import karvaKit from "@/assets/karva-kit.jpg";
import navratriKit from "@/assets/navratri-kit.jpg";

const FestivalKits = () => {
  console.log("FestivalKits component loaded, CartDrawer:", CartDrawer);
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const festivalKits = [
    {
      id: 1,
      name: "Diwali Gift Box",
      description: "Premium Diwali gift box with traditional sweets and pooja essentials",
      price: 2499,
      originalPrice: 5000,
      image: diwaliKit,
      items: ["Kaju Katli Box (500gm)", "3 Lotus Shaped Diyas", "Silver Puja Thali with Laxmi Ji", "Door Toran", "Dhoop Sticks", "Thick Incense Sticks", "Aarti Book"],
      rating: 4.8,
      discount: "50% OFF"
    },
    {
      id: 2,
      name: "Ganesh Chaturthi Kit",
      description: "Sacred items for Ganpati celebrations with eco-friendly idol",
      price: 2499,
      originalPrice: 5000,
      image: ganeshKit,
      items: ["Eco Ganesha Idol", "Pooja Thali", "Modak Mould", "Incense Sticks", "Flowers"],
      rating: 4.9,
      discount: "50% OFF"
    },
    {
      id: 3,
      name: "Karva Chauth Kit",
      description: "Traditional items for the auspicious Karva Chauth ceremony",
      price: 2499,
      originalPrice: 5000,
      image: karvaKit,
      items: ["Decorated Karva", "Sieve", "Mehendi", "Sindoor", "Pooja Items"],
      rating: 4.7,
      discount: "50% OFF"
    },
    {
      id: 4,
      name: "Navratri Pooja Kit",
      description: "Nine-day celebration kit with all essentials",
      price: 2499,
      originalPrice: 5000,
      image: navratriKit,
      items: ["Kalash Set", "9 Day Pooja Items", "Garlands", "Chunri", "Coconuts"],
      rating: 4.8,
      discount: "50% OFF"
    }
  ];

  const handleAddToCart = (kit: typeof festivalKits[0]) => {
    addToCart({
      id: kit.id,
      name: kit.name,
      price: kit.price,
      originalPrice: kit.originalPrice,
      image: kit.image,
      description: kit.description
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Festival Celebration Kits
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl md:max-w-2xl mx-auto leading-relaxed">
              Curated collections for every Indian festival. Premium items, beautifully packaged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {festivalKits.map((kit) => (
              <Card key={kit.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={kit.image} 
                      alt={kit.name}
                      className="w-full h-52 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-saffron text-white font-medium">
                      {kit.discount}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-saffron text-saffron" />
                      <span className="text-sm text-muted-foreground ml-1 font-medium">{kit.rating}</span>
                    </div>
                    <Gift className="w-4 h-4 text-gold" />
                  </div>
                  
                  <CardTitle className="text-lg md:text-xl mb-2 group-hover:text-saffron transition-colors line-clamp-2">
                    {kit.name}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {kit.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Kit Includes:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {kit.items.slice(0, 3).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                      {kit.items.length > 3 && (
                        <li className="text-saffron font-medium">+ {kit.items.length - 3} more items</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-bold text-saffron">₹{kit.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{kit.originalPrice}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 md:p-6 pt-0">
                  <Button 
                    className="w-full h-10 md:h-11" 
                    variant="saffron"
                    onClick={() => handleAddToCart(kit)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 md:mt-16 bg-gradient-warm p-6 md:p-8 rounded-lg text-center">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
              Custom Festival Kits
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
              Need something special? We create custom kits tailored to your celebration.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-10 md:h-12"
              onClick={() => window.location.href = '/contact'}
            >
              Contact for Custom Kits
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      
      <CartDrawer isOpen={isCartOpen} onOpenChange={setIsCartOpen}>
        <div />
      </CartDrawer>
    </div>
  );
};

export default FestivalKits;