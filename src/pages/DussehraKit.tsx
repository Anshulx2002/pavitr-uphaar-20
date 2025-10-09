import { useState } from "react";
import { ShoppingCart, Star, Package, Clock, Shield, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Import product images
import dussehraKit1 from "@/assets/dussehra-kit-1.png";
import dussehraKit2 from "@/assets/dussehra-kit-2.png";

const DussehraKit = () => {
  const [selectedImage, setSelectedImage] = useState(dussehraKit1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 46,
    name: "Dussehra Gift Box",
    price: 1999,
    originalPrice: 3000,
    image: dussehraKit1,
    rating: 4.9,
    description: "Celebrate the victory of good over evil with our premium Dussehra collection featuring organic dhoop sticks, carved wooden holders, and lotus diyas for divine blessings. BONUS: Get an additional diya absolutely FREE!",
    badge: "34% OFF"
  };

  const images = [dussehraKit1, dussehraKit2];
  
  const kitsRemaining = 7;
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
      
      <main className="container mx-auto px-4 pt-2 pb-8 mt-16">
        {/* Scarcity Banner */}
        <Card className="mb-6 relative overflow-hidden border-none shadow-lg">
          {/* Diwali-inspired gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600"></div>
          
          {/* Decorative diya pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 2px, transparent 2px),
                             radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 2px, transparent 2px)`,
            backgroundSize: '100px 50px'
          }}></div>
          
          {/* Content */}
          <div className="relative z-10 p-3 md:p-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {/* Left side - Promotion text */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-100" />
                </div>
                <div>
                  <h2 className="text-sm md:text-base font-bold text-white mb-1">
                    Limited Time Special Promotion
                  </h2>
                  <div className="bg-white text-orange-600 px-3 py-1 rounded-md inline-block">
                    <p className="text-xs md:text-sm font-bold">
                      First 100 Kits Only • <span className="text-base md:text-lg">₹1999</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Remaining count */}
              <div className="text-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="text-xl md:text-2xl font-bold text-yellow-100">{kitsRemaining}</div>
                <div className="text-xs text-white/90">Kits Left</div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-3">
              <div className="w-full bg-white/20 rounded-full h-1.5 md:h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-300 to-yellow-100 h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentageLeft}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4 lg:order-1">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-card">
              <img 
                src={selectedImage} 
                alt="Dussehra Gift Box"
                className="w-full h-[500px] object-contain"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-gradient-saffron text-white text-base px-4 py-2">
                  {product.badge}
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-2 gap-4">
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
                    alt={`Dussehra Kit ${index + 1}`}
                    className="w-full h-24 object-contain"
                  />
                </button>
              ))}
            </div>
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

            {/* Features */}
            <Card className="p-6 bg-gradient-warm border-primary/20">
              <h3 className="font-bold text-xl mb-4">What's Included:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Carved wooden dhoop holder</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>1 Exquisite lotus diya</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Organic dhoop sticks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium incense sticks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sacred kumkum and turmeric</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-primary">BONUS: 1 Free Additional Diya 🎁</span>
                  </div>
                </li>
              </ul>
            </Card>

            {/* Action Buttons - First instance */}
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
              <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Truck className="w-4 h-4" />
                Delivery Pan India within 3-5 days
              </p>
            </div>

            {/* Urgency Message - First instance */}
            <Card className="p-4 bg-destructive/10 border-destructive/30">
              <p className="text-center text-destructive font-semibold flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Hurry! Only {kitsRemaining} kits left at this special price!
              </p>
            </Card>

            {/* Trust Badges - Desktop only */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Delivery within 3-5 days Pan India</p>
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
                    <span className="font-semibold">Amit Desai</span>
                    <span className="text-muted-foreground text-sm">• Pune</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Perfect Dussehra gift! The wooden dhoop holder is beautifully carved and the quality of all items is top-notch. The organic dhoop sticks have a wonderful fragrance. Very impressed with the packaging and timely delivery."
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
                    <span className="font-semibold">Meera Singh</span>
                    <span className="text-muted-foreground text-sm">• Jaipur</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Excellent value for money! Ordered this for Dussehra pooja and everything exceeded my expectations. The lotus diya is gorgeous and the bonus diya was a lovely surprise. Highly recommend for festival celebrations!"
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
                    <span className="font-semibold">Vikram Rao</span>
                    <span className="text-muted-foreground text-sm">• Bangalore</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Good quality Dussehra kit with authentic items. The dhoop sticks are truly organic and have a pleasant aroma. Giving 4 stars as I expected slightly more quantity, but overall very satisfied with the purchase."
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
              <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Truck className="w-4 h-4" />
                Delivery Pan India within 3-5 days
              </p>
            </div>

            {/* Trust Badges - Mobile only (at bottom) */}
            <div className="grid grid-cols-3 gap-4 lg:hidden">
              <Card className="p-4 text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Delivery within 3-5 days Pan India</p>
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DussehraKit;
