import { useState } from "react";
import { ShoppingCart, Star, Package, Clock, Shield, Sparkles, Truck, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Import product images
import aartiSangrah from "@/assets/aarti-sangrah.png";
import aartiBook from "@/assets/aarti-book.png";

const AartiSangrah = () => {
  const [selectedImage, setSelectedImage] = useState(aartiSangrah);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 101,
    name: "Aarti Sangrah - Complete Prayer Collection",
    price: 1499,
    originalPrice: 2499,
    image: aartiSangrah,
    rating: 4.9,
    description: "A comprehensive collection of traditional Hindu aartis and prayers. This beautifully crafted Aarti Sangrah contains all essential prayers for daily worship, festivals, and special occasions. Perfect for devotees seeking spiritual guidance and maintaining religious traditions.",
    badge: "40% OFF"
  };

  const images = [aartiSangrah];

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      console.error("Error copying link:", err);
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-2 pb-8 mt-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4 lg:order-1">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-card">
              <img 
                src={selectedImage} 
                alt="Aarti Sangrah"
                className="w-full h-[500px] object-contain"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-gradient-saffron text-white text-base px-4 py-2">
                  {product.badge}
                </Badge>
              )}
            </div>


            {/* Video Section - hidden on mobile, shown on desktop */}
            <Card className="p-4 hidden lg:block">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Watch Our Aarti Sangrah Showcase
              </h3>
              <video 
                controls 
                className="w-full rounded-lg"
                poster={aartiSangrah}
              >
                <source src="/aarti-sangrah-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6 lg:order-2">
            {/* Title, Rating, Price, Description - Desktop only */}
            <div className="hidden lg:block">
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

            {/* Features - What's Included */}
            <Card className="p-6 bg-gradient-warm border-primary/20">
              <h3 className="font-bold text-xl mb-4">What's Included:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Complete collection of traditional aartis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Daily worship prayers and mantras</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Festival-specific prayers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Hindi and Sanskrit text with meanings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Durable hardcover binding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Easy-to-read large font</span>
                </li>
              </ul>
            </Card>

            {/* Action Buttons - First instance */}
            <div className="space-y-3">
              <Button 
                onClick={handleBuyNow}
                className="w-full bg-gradient-premium-gold hover:opacity-90 text-white font-bold text-lg py-6 shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                Buy Now
              </Button>
              <div className="flex gap-3">
                <Button 
                  onClick={handleAddToCart}
                  variant="outline"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg py-6"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleShare}
                  variant="outline"
                  className="px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg py-6"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Truck className="w-4 h-4" />
                Major cities: 7 days | Rest of India: 3 weeks
              </p>
            </div>

            {/* Video Section - Mobile only */}
            <Card className="p-4 lg:hidden">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Watch Our Aarti Sangrah Showcase
              </h3>
              <video 
                controls 
                className="w-full rounded-lg"
                poster={aartiSangrah}
              >
                <source src="/aarti-sangrah-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>

            {/* Trust Badges - Desktop only */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Major Cities: 7 days<br/>Rest of India: 3 weeks</p>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Safe Razorpay UPI Checkout</p>
              </Card>
              <Card className="p-4 text-center">
                <Package className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Premium Packaging</p>
              </Card>
            </div>

            {/* Customer Reviews */}
            <Card className="p-6 bg-card">
              <h3 className="font-bold text-xl mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {/* Review 1 */}
                <div className="border-b border-border pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="font-semibold">Meera Devi</span>
                    <span className="text-muted-foreground text-sm">• Varanasi</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "An essential book for every Hindu household! The collection is comprehensive and the print quality is excellent. The large font makes it easy to read during prayers. Highly recommended for daily worship."
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 block">Verified Purchase • 3 days ago</span>
                </div>

                {/* Review 2 */}
                <div className="border-b border-border pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="font-semibold">Ramesh Gupta</span>
                    <span className="text-muted-foreground text-sm">• Jaipur</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Beautifully compiled Aarti Sangrah with authentic prayers. The hardcover binding is durable and the book opens flat which is very convenient during prayers. Perfect gift for religious occasions."
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 block">Verified Purchase • 1 week ago</span>
                </div>

                {/* Review 3 */}
                <div className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                    <span className="font-semibold">Kavita Sharma</span>
                    <span className="text-muted-foreground text-sm">• Pune</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Very good collection of aartis. The book has all major prayers and the Sanskrit pronunciation guide is helpful. Only wish it had a few more regional prayers, but overall a great purchase for the price."
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 block">Verified Purchase • 2 weeks ago</span>
                </div>
              </div>
            </Card>

            {/* Action Buttons - Second instance (Mobile only) */}
            <div className="space-y-3 lg:hidden">
              <Button 
                onClick={handleBuyNow}
                className="w-full bg-gradient-premium-gold hover:opacity-90 text-white font-bold text-lg py-6 shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                Buy Now
              </Button>
              <div className="flex gap-3">
                <Button 
                  onClick={handleAddToCart}
                  variant="outline"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg py-6"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleShare}
                  variant="outline"
                  className="px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg py-6"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AartiSangrah;
