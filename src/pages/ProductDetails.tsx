import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Share2, CheckCircle, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { allProducts } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import NotFound from "./NotFound";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = allProducts.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [packSize, setPackSize] = useState(4);
  
  const isCandle = product?.category?.toLowerCase().includes('candle');

  if (!product) {
    return <NotFound />;
  }

  const images = [product.image];

  const getPackMultiplier = () => {
    if (!isCandle) return 1;
    switch (packSize) {
      case 4: return 1;
      case 8: return 1.9;
      case 12: return 2.7;
      default: return 1;
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const multiplier = getPackMultiplier();
    addToCart({
      id: product.id,
      name: isCandle ? `${product.name} (${packSize} Pack)` : product.name,
      price: Math.round(product.price * multiplier),
      originalPrice: product.originalPrice ? Math.round(product.originalPrice * multiplier) : undefined,
      image: product.image,
      description: product.description,
      badge: product.badge
    });
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    const multiplier = getPackMultiplier();
    addToCart({
      id: product.id,
      name: isCandle ? `${product.name} (${packSize} Pack)` : product.name,
      price: Math.round(product.price * multiplier),
      originalPrice: product.originalPrice ? Math.round(product.originalPrice * multiplier) : undefined,
      image: product.image,
      description: product.description,
      badge: product.badge
    });
    navigate('/checkout');
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      console.error('Error copying link:', err);
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border bg-card">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-saffron text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {product.badge}
                </div>
              )}
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < product.rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">({product.rating}.0 Rating)</span>
                </div>
              </div>
            </div>

            {/* Pack Size Selection for Candles */}
            {isCandle && (
              <div className="space-y-3 pb-4 border-b border-border">
                <label className="text-sm font-medium text-foreground">Select Pack Size:</label>
                <div className="grid grid-cols-3 gap-3">
                  {[4, 8, 12].map((size) => (
                    <button
                      key={size}
                      onClick={() => setPackSize(size)}
                      className={`relative py-3 px-4 rounded-lg border-2 transition-all ${
                        packSize === size
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-bold text-lg text-foreground">{size} Pack</div>
                        {size === 8 && (
                          <div className="text-xs text-primary font-medium mt-1">Save 5%</div>
                        )}
                        {size === 12 && (
                          <div className="text-xs text-primary font-medium mt-1">Save 10%</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold" style={{ color: 'hsl(var(--premium-gold-saffron))' }}>
                  ₹{Math.round(product.price * getPackMultiplier())}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{Math.round(product.originalPrice * getPackMultiplier())}
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: 'hsl(var(--premium-gold-saffron) / 0.1)', color: 'hsl(var(--premium-gold-saffron))' }}>
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              {isCandle && (
                <p className="text-sm text-muted-foreground">Price for {packSize} pack • Inclusive of all taxes</p>
              )}
              {!isCandle && (
                <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleBuyNow}
                size="lg"
                className="flex-1 bg-gradient-premium-gold hover:opacity-90 text-white font-semibold text-lg h-12"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Now
              </Button>
              <Button 
                onClick={handleAddToCart}
                size="lg"
                variant="outline"
                className="flex-1 h-12 text-lg"
              >
                Add to Cart
              </Button>
              <Button 
                onClick={handleShare}
                size="lg"
                variant="outline"
                className="sm:w-12 h-12"
              >
                <Share2 className="w-5 h-5" />
                <span className="sm:hidden ml-2">Share</span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex flex-col items-center text-center gap-2">
                <CheckCircle className="w-8 h-8 text-primary" />
                <span className="text-xs text-muted-foreground">Quality Assured</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-8 h-8 text-primary" />
                <span className="text-xs text-muted-foreground">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xs text-muted-foreground">Secure Payment</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-3 pt-6 border-t border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category</span>
                <span className="font-medium text-foreground capitalize">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SKU</span>
                <span className="font-medium text-foreground">PU-{product.id.toString().padStart(4, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Care Instructions Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Care Instructions
            </h2>
            <div className="space-y-3 text-muted-foreground">
              {product.category?.toLowerCase().includes('idol') || product.category?.toLowerCase().includes('statue') ? (
                <>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wipe the idol with a soft, dry cloth to remove dust.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid using chemical cleaning agents, as the material may get damaged by harsh chemicals or excessive moisture.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep the product away from direct sunlight to prevent discoloration.</span>
                  </p>
                </>
              ) : product.category?.toLowerCase().includes('brass') || product.category?.toLowerCase().includes('copper') || product.category?.toLowerCase().includes('thali') || product.category?.toLowerCase().includes('kalash') ? (
                <>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clean with a soft cloth and mild soap solution. Rinse and dry thoroughly.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For traditional brass/copper items, natural tarnishing adds character. Polish with lemon and salt or brass cleaner if preferred.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Store in a dry place to prevent oxidation.</span>
                  </p>
                </>
              ) : product.category?.toLowerCase().includes('candle') ? (
                <>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wipe with a soft, dry cloth to remove dust.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep away from water and moisture to preserve electronic components.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Store batteries separately when not in use for extended periods.</span>
                  </p>
                </>
              ) : product.category?.toLowerCase().includes('incense') || product.category?.toLowerCase().includes('agarbatti') ? (
                <>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Store in a cool, dry place away from direct sunlight.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep the packaging sealed to preserve fragrance and prevent moisture absorption.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Always use on a heat-resistant surface and never leave burning incense unattended.</span>
                  </p>
                </>
              ) : (
                <>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wipe with a soft, dry cloth to remove dust and maintain freshness.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Store in a cool, dry place away from direct sunlight.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Handle with care to preserve the quality and craftsmanship.</span>
                  </p>
                </>
              )}
              <div className="pt-4 mt-4 border-t border-border space-y-3">
                <p className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span>Each product may have slight variations in colour or craftsmanship, adding to its uniqueness and charm.</span>
                </p>
                <p className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span>Images may vary from the actual product in form and colour due to screen resolution and device settings.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
