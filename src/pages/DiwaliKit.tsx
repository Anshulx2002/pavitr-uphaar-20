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
import { useProductById } from "@/hooks/useProducts";
import NotFound from "./NotFound";

// Import product images
import diwaliKitPremium from "@/assets/diwali-kit-premium.png";
import diwaliKit2 from "@/assets/diwali-kit-2.png";

const DiwaliKit = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Fetch product from database (id 22: Premium Diwali Pooja Kit)
  const { data: product, isLoading } = useProductById(22);
  
  const [selectedImage, setSelectedImage] = useState(product?.image || diwaliKitPremium);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-muted-foreground">Loading product...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return <NotFound />;
  }

  const images = [diwaliKitPremium, diwaliKit2];
  
  const kitsRemaining = 62;
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
        {/* Scarcity Banner - Vibrant & Elegant Design */}
        <Card className="mb-6 relative overflow-hidden border-2 border-orange-300 shadow-lg">
          {/* Rich gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-100 to-orange-50"></div>
          
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,140,0,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          {/* Vibrant border accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500"></div>
          
          {/* Content */}
          <div className="relative z-10 px-4 py-4 md:px-6 md:py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left side - Promotion text */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-5 bg-gradient-to-b from-orange-600 to-amber-600 rounded-full shadow-sm"></div>
                  <h2 className="text-xs md:text-sm font-bold text-orange-800 tracking-widest uppercase font-inter">
                    Limited Time Offer
                  </h2>
                </div>
                <div className="space-y-1">
                  <p className="text-sm md:text-base text-orange-900 font-medium">
                    Exclusive offer for the first <span className="font-bold text-orange-700">100 kits</span>
                  </p>
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-orange-700 font-playfair drop-shadow">₹1,999</span>
                    <span className="text-base text-slate-600 line-through">₹3,000</span>
                    <Badge className="bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0 shadow-md">Save 34%</Badge>
                  </div>
                </div>
              </div>
              
              {/* Center - Remaining count badge */}
              <div className="flex justify-center">
                <div className="text-center bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-orange-300/60 shadow-lg">
                  <div className="text-xs text-orange-800 font-bold mb-1 uppercase tracking-widest">Only</div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent font-playfair leading-none drop-shadow-sm">{kitsRemaining}</div>
                  <div className="text-xs text-orange-800 font-bold mt-1 uppercase tracking-widest">Remaining</div>
                </div>
              </div>
            </div>
            
            {/* Vibrant progress bar */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-orange-900 font-semibold">{kitsRemaining} of {totalKits} available</span>
                <span className="text-xs text-orange-900 font-semibold">{percentageLeft.toFixed(0)}% left</span>
              </div>
              <div className="w-full bg-orange-200/50 rounded-full h-2.5 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 h-full rounded-full transition-all duration-500 shadow-sm"
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
                alt={product.name}
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
                    <span className="font-semibold">Priya Sharma</span>
                    <span className="text-muted-foreground text-sm">• Mumbai</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Absolutely beautiful pooja gift box! The quality of the diyas and the toran is exceptional. The cashew and raisin potlis were a delightful addition. Everything arrived well-packaged and on time. Perfect for gifting on any auspicious occasion!"
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
                    "Ordered this signature pooja box for my parents and they loved it! The presentation is stunning and everything is of premium quality. The toran looks handcrafted and authentic. Great value for money at this price. Will definitely order again for other festivities."
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
                    "Very nice pooja gift set with good quality items. The diyas are lovely and the incense sticks smell amazing. Only giving 4 stars because I wish there were more diyas included, but overall very satisfied with the purchase and delivery was quick. Perfect for housewarming gifts!"
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

            {/* Trust Badges - Mobile only (at bottom) */}
            <div className="grid grid-cols-3 gap-4 lg:hidden">
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiwaliKit;
