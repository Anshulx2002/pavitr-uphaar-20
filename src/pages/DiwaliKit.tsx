import { useState } from "react";
import { ShoppingCart, Star, Package, Clock, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Import product images
import diwaliKitPremium from "@/assets/diwali-kit-premium.png";
import diwaliKit from "@/assets/diwali-kit.jpg";
import diwaliKit2 from "@/assets/diwali-kit-2.png";

const DiwaliKit = () => {
  const [selectedImage, setSelectedImage] = useState(diwaliKitPremium);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 19,
    name: "Diwali Gift Box",
    price: 1999,
    originalPrice: 3000,
    image: diwaliKitPremium,
    rating: 4.8,
    description: "A beautiful Diwali hamper with satin ribbons containing exquisite lotus diyas, handcrafted toran to welcome the goddess into your home, fragrant incense and dhoop sticks, and premium quality potlis with large cashews and raisins to spread festive joy.",
    badge: "34% OFF"
  };

  const images = [diwaliKitPremium, diwaliKit, diwaliKit2];
  
  const kitsRemaining = 86;
  const totalKits = 100;
  const percentageLeft = (kitsRemaining / totalKits) * 100;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        {/* Scarcity Banner */}
        <Card className="mb-8 bg-gradient-saffron text-white p-6 border-none">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              <div>
                <h2 className="text-xl font-bold">Limited Time Special Promotion</h2>
                <p className="text-white/90 text-sm">For the first 100 kits only - ₹1999 INR</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{kitsRemaining}</div>
              <div className="text-sm text-white/90">Kits Remaining</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Only {totalKits} kits made</span>
              <span>{kitsRemaining} left</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${percentageLeft}%` }}
              />
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Images & Video */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-card">
              <img 
                src={selectedImage} 
                alt="Diwali Gift Box"
                className="w-full h-[500px] object-contain"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-gradient-saffron text-white text-base px-4 py-2">
                  {product.badge}
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === img ? 'border-primary' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Diwali Kit ${index + 1}`}
                    className="w-full h-24 object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Video Section */}
            <Card className="p-4">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Watch Our Diwali Kit Showcase
              </h3>
              <video 
                controls 
                className="w-full rounded-lg"
                poster={diwaliKitPremium}
              >
                <source src="/diwali-kit-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < product.rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} 
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{product.rating}</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold" style={{ color: 'hsl(var(--premium-gold-saffron))' }}>
                  ₹{product.price}
                </span>
                <span className="text-2xl text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
                <Badge className="bg-gradient-saffron text-white text-base px-3 py-1">
                  Save ₹{product.originalPrice - product.price}
                </Badge>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <Card className="p-6 bg-gradient-warm border-primary/20">
              <h3 className="font-bold text-xl mb-4">What's Included:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Exquisite lotus diyas for divine illumination</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Handcrafted toran to welcome prosperity</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Fragrant incense and dhoop sticks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium quality potlis with large cashews and raisins</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Beautiful presentation with satin ribbons</span>
                </li>
              </ul>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Package className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Premium Packaging</p>
              </Card>
              <Card className="p-4 text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Fast Delivery</p>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Quality Assured</p>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleBuyNow}
                className="w-full bg-gradient-premium-gold hover:opacity-90 text-white font-bold text-lg py-6 shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                Buy Now - Limited Stock!
              </Button>
              <Button 
                onClick={handleAddToCart}
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg py-6"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Urgency Message */}
            <Card className="p-4 bg-destructive/10 border-destructive/30">
              <p className="text-center text-destructive font-semibold flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Hurry! Only {kitsRemaining} kits left at this special price!
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiwaliKit;
