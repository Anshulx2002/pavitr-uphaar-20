import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Gift, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import diwaliKit from "@/assets/diwali-kit-premium.png";
import diwaliKit2 from "@/assets/diwali-kit-2.png";
import dussehraKit1 from "@/assets/dussehra-kit-1.png";
import dussehraKit2 from "@/assets/dussehra-kit-2.png";
import ganeshKit from "@/assets/ganesh-kit.jpg";
import karvaKit from "@/assets/karva-chauth-gift-box.png";
import navratriKit from "@/assets/navratri-kit.jpg";

const FestivalKits = () => {
  console.log("FestivalKits component loaded, CartDrawer:", CartDrawer);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [diwaliImageIndex, setDiwaliImageIndex] = useState(0);
  const [dussehraImageIndex, setDussehraImageIndex] = useState(0);

  const festivalKits = [
    {
      id: 46,
      name: "Dussehra Gift Box",
      description: "Celebrate the victory of good over evil with our premium Dussehra collection featuring organic dhoop sticks, carved wooden holders, and lotus diyas for divine blessings.",
      price: 1999,
      originalPrice: 3000,
      images: [dussehraKit1, dussehraKit2],
      items: ["Long Organic Dhoop Sticks", "Premium Incense Sticks", "Exquisite Cashew Potli", "Carved Wooden Dhoop Holder", "Golden Lotus Diyas", "Sacred Pearl Toran"],
      rating: 4.9,
      discount: "34% OFF"
    },
    {
      id: 3,
      name: "Ganesh Chaturthi Kit",
      description: "Sacred items for Ganpati celebrations with eco-friendly idol",
      price: 2499,
      originalPrice: 5000,
      images: [ganeshKit],
      items: ["Eco Ganesha Idol", "Pooja Thali", "Modak Mould", "Incense Sticks", "Flowers"],
      rating: 4.9,
      discount: "50% OFF"
    },
    {
      id: 4,
      name: "Karva Chauth Gift Box",
      description: "Complete essentials for the auspicious Karva Chauth ceremony",
      price: 2499,
      originalPrice: 5000,
      images: [karvaKit],
      items: ["Mathi", "Decorative Diya", "Bindi Packet", "Mehendi Cone", "Kalash for Water", "Pooja Thali", "Mithai Box"],
      rating: 4.7,
      discount: "50% OFF"
    },
    {
      id: 5,
      name: "Navratri Pooja Kit",
      description: "Nine-day celebration kit with all essentials",
      price: 2499,
      originalPrice: 5000,
      images: [navratriKit],
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
      image: kit.images[0],
      description: kit.description
    });
    setIsCartOpen(true);
  };

  const handleKitClick = (kitId: number) => {
    if (kitId === 46) {
      navigate('/dussehra-kit');
    }
  };

  const nextImage = (kitId: number) => {
    if (kitId === 19) {
      setDiwaliImageIndex(prev => prev === 1 ? 0 : 1);
    } else if (kitId === 46) {
      setDussehraImageIndex(prev => prev === 1 ? 0 : 1);
    }
  };

  const prevImage = (kitId: number) => {
    if (kitId === 19) {
      setDiwaliImageIndex(prev => prev === 0 ? 1 : 0);
    } else if (kitId === 46) {
      setDussehraImageIndex(prev => prev === 0 ? 1 : 0);
    }
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
            {festivalKits.map((kit, index) => (
              <Card key={kit.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                 <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg bg-gradient-festive">
                    {(kit.id === 19 || kit.id === 46) ? (
                      // Diwali and Dussehra kits with carousel
                      <div className="relative">
                        <img 
                          src={kit.images[kit.id === 19 ? diwaliImageIndex : dussehraImageIndex]} 
                          alt={`${kit.name} - View ${(kit.id === 19 ? diwaliImageIndex : dussehraImageIndex) + 1}`}
                          className="w-full h-[36rem] md:h-[40rem] object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                        />
                        {kit.images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(kit.id)}
                              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 transition-colors shadow-md"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => nextImage(kit.id)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 transition-colors shadow-md"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                              {kit.images.map((_, imgIndex) => (
                                <button
                                  key={imgIndex}
                                  onClick={() => kit.id === 19 ? setDiwaliImageIndex(imgIndex) : setDussehraImageIndex(imgIndex)}
                                  className={`w-2 h-2 rounded-full transition-colors ${
                                    imgIndex === (kit.id === 19 ? diwaliImageIndex : dussehraImageIndex) ? 'bg-primary' : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      // Other kits with single image
                      <img 
                        src={kit.images[0]} 
                        alt={kit.name}
                        className="w-full h-[28rem] md:h-[28rem] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
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
                  
                  <CardTitle 
                    className="text-lg md:text-xl mb-2 group-hover:text-saffron transition-colors line-clamp-2 cursor-pointer"
                    onClick={() => handleKitClick(kit.id)}
                  >
                    {kit.name}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {kit.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Kit Includes:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {kit.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
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