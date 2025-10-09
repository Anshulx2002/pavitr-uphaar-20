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
import diwaliKitPremium from "@/assets/diwali-kit-premium.png";
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
    description: "A beautiful Diwali hamper containing exquisite lotus diyas, handcrafted toran to welcome the goddess into your home, fragrant incense and dhoop sticks, and premium quality potlis with large cashews and raisins to spread festive joy. BONUS: Get an additional diya absolutely FREE!",
    badge: "34% OFF"
  };

  const images = [diwaliKitPremium, diwaliKit2];
  
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
      
      <main className="container mx-auto px-4 pt-2 pb-8 mt-16">
        {/* Scarcity Banner */}
        <Card className="mb-8 bg-gradient-saffron text-white p-4 md:p-6 border-none">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              <div>
                <h2 className="text-lg md:text-xl font-bold">Limited Time Special Promotion</h2>
                <p className="text-white/90 text-xs md:text-sm">For the first 100 kits only - ₹1999 INR</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">{kitsRemaining}</div>
              <div className="text-xs md:text-sm text-white/90">Kits Remaining</div>
            </div>
          </div>
          <div className="mt-3 md:mt-4">
            <div className="flex justify-between text-xs md:text-sm mb-2">
              <span>Only {totalKits} kits made</span>
              <span>{kitsRemaining} left</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 md:h-3 overflow-hidden">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${percentageLeft}%` }}
              />
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
                    alt={`Diwali Kit ${index + 1}`}
                    className="w-full h-24 object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Video Section - hidden on mobile, shown on desktop */}
            <Card className="p-4 hidden lg:block">
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
                  <span>Handcrafted toran to welcome prosperity</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>1 Exquisite lotus diya</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Fragrant incense sticks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium dhoop sticks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium quality potlis with large cashews and raisins</span>
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

            {/* Video Section - Mobile only */}
            <Card className="p-4 lg:hidden">
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
                    <span className="font-semibold">Priya Sharma</span>
                    <span className="text-muted-foreground text-sm">• Mumbai</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Absolutely beautiful Diwali kit! The quality of the diyas and the toran is exceptional. The cashew and raisin potlis were a delightful addition. Everything arrived well-packaged and on time. Highly recommend for gifting!"
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 block">Verified Purchase • 2 days ago</span>
                </div>

                {/* Review 2 */}
                <div className="border-b border-border pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="font-semibold">Rajesh Kumar</span>
                    <span className="text-muted-foreground text-sm">• Delhi</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Ordered this for my parents and they loved it! The presentation is stunning and everything is of premium quality. The toran looks handcrafted and authentic. Great value for money at this price. Will order again next year."
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 block">Verified Purchase • 5 days ago</span>
                </div>

                {/* Review 3 */}
                <div className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                    <span className="font-semibold">Anjali Patel</span>
                    <span className="text-muted-foreground text-sm">• Ahmedabad</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Very nice Diwali hamper with good quality items. The diyas are lovely and the incense sticks smell amazing. Only giving 4 stars because I wish there were more diyas included, but overall very satisfied with the purchase and delivery was quick."
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 block">Verified Purchase • 1 week ago</span>
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

export default DiwaliKit;
