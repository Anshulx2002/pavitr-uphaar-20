import { useState, useEffect } from "react";
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
  const [selectedBottleVariant, setSelectedBottleVariant] = useState<number>(Number(id));
  
  const isCandle = product?.category?.toLowerCase().includes('candle');
  const isCopperBottle = product?.id === 47 || product?.id === 48;

  // Track ViewContent event
  useEffect(() => {
    if (product && typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_ids: [product.id],
        content_name: product.name,
        content_type: 'product',
        value: product.price,
        currency: 'INR'
      });
    }
  }, [product]);

  if (!product) {
    return <NotFound />;
  }

  // Get current bottle variant if applicable
  const currentBottleProduct = isCopperBottle 
    ? allProducts.find(p => p.id === selectedBottleVariant) || product
    : product;

  const images = currentBottleProduct.images || [currentBottleProduct.image];

  const getPackPrice = () => {
    if (isCopperBottle) return currentBottleProduct.price;
    if (!isCandle) return product.price;
    
    // Product 49: Dazzling Electric Candles with Glitter
    if (product.id === 49) {
      switch (packSize) {
        case 4: return 599;
        case 8: return 1200;
        case 12: return 1800;
        default: return 599;
      }
    }
    
    // Product 50: Multicolour Electric Candles
    if (product.id === 50) {
      switch (packSize) {
        case 4: return 799;
        case 8: return 1599;
        case 12: return 2400;
        default: return 799;
      }
    }
    
    return product.price;
  };

  const getOriginalPackPrice = () => {
    if (isCopperBottle) return currentBottleProduct.originalPrice;
    if (!isCandle) return product.originalPrice;
    
    // Product 49: Dazzling Electric Candles with Glitter
    if (product.id === 49) {
      switch (packSize) {
        case 4: return 799;
        case 8: return 1600;
        case 12: return 2500;
        default: return 799;
      }
    }
    
    // Product 50: Multicolour Electric Candles
    if (product.id === 50) {
      switch (packSize) {
        case 4: return 999;
        case 8: return 1999;
        case 12: return 2999;
        default: return 999;
      }
    }
    
    return product.originalPrice || product.price;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const productToAdd = isCopperBottle ? currentBottleProduct : product;
    addToCart({
      id: productToAdd.id,
      name: isCandle ? `${productToAdd.name} (${packSize} Pack)` : productToAdd.name,
      price: getPackPrice(),
      originalPrice: productToAdd.originalPrice,
      image: productToAdd.image,
      description: productToAdd.description,
      badge: productToAdd.badge
    });
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    const productToAdd = isCopperBottle ? currentBottleProduct : product;
    addToCart({
      id: productToAdd.id,
      name: isCandle ? `${productToAdd.name} (${packSize} Pack)` : productToAdd.name,
      price: getPackPrice(),
      originalPrice: productToAdd.originalPrice,
      image: productToAdd.image,
      description: productToAdd.description,
      badge: productToAdd.badge
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
              {currentBottleProduct.badge && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-saffron text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {currentBottleProduct.badge}
                </div>
              )}
              <img 
                src={images[selectedImage]} 
                alt={currentBottleProduct.name}
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
                    <img src={img} alt={`${currentBottleProduct.name} view ${idx + 1}`} className="w-full h-full object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-3 md:space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {currentBottleProduct.name}
              </h1>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 md:w-5 md:h-5 ${i < currentBottleProduct.rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} 
                    />
                  ))}
                  <span className="text-xs md:text-sm text-muted-foreground ml-2">({currentBottleProduct.rating}.0)</span>
                </div>
              </div>
            </div>

            {/* Copper Bottle Variant Selection */}
            {isCopperBottle && (
              <div className="space-y-2 pb-3 border-b border-border">
                <label className="text-xs md:text-sm font-medium text-foreground">Choose Variant:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedBottleVariant(47)}
                    className={`relative py-2 px-3 rounded-lg border-2 transition-all ${
                      selectedBottleVariant === 47
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-xs md:text-sm text-foreground">Elephant Motif</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedBottleVariant(48)}
                    className={`relative py-2 px-3 rounded-lg border-2 transition-all ${
                      selectedBottleVariant === 48
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-xs md:text-sm text-foreground">Rani Meher</div>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Pack Size Selection for Candles */}
            {isCandle && (
              <div className="space-y-2 pb-3 border-b border-border">
                <label className="text-xs md:text-sm font-medium text-foreground">Select Pack Size:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[4, 8, 12].map((size) => (
                    <button
                      key={size}
                      onClick={() => setPackSize(size)}
                      className={`relative py-2 px-2 rounded-lg border-2 transition-all ${
                        packSize === size
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-bold text-sm md:text-base text-foreground">{size} Pack</div>
                        {size === 8 && (
                          <div className="text-[10px] md:text-xs text-primary font-medium mt-0.5">Save 25%</div>
                        )}
                        {size === 12 && (
                          <div className="text-[10px] md:text-xs text-primary font-medium mt-0.5">Save 28%</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl md:text-4xl font-bold" style={{ color: 'hsl(var(--premium-gold-saffron))' }}>
                  ₹{getPackPrice()}
                </span>
                {isCandle ? (
                  <>
                    <span className="text-lg md:text-xl text-muted-foreground line-through">
                      ₹{getOriginalPackPrice()}
                    </span>
                    <span className="text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: 'hsl(var(--premium-gold-saffron) / 0.1)', color: 'hsl(var(--premium-gold-saffron))' }}>
                      {Math.round(((getOriginalPackPrice() - getPackPrice()) / getOriginalPackPrice()) * 100)}% OFF
                    </span>
                  </>
                ) : product.originalPrice && (
                  <>
                    <span className="text-lg md:text-xl text-muted-foreground line-through">
                      ₹{isCopperBottle ? currentBottleProduct.originalPrice : product.originalPrice}
                    </span>
                    <span className="text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: 'hsl(var(--premium-gold-saffron) / 0.1)', color: 'hsl(var(--premium-gold-saffron))' }}>
                      {isCopperBottle 
                        ? Math.round(((currentBottleProduct.originalPrice! - currentBottleProduct.price) / currentBottleProduct.originalPrice!) * 100)
                        : Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                      }% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                {isCandle ? `Price for ${packSize} pack • ` : ''}Inclusive of all taxes
              </p>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
              {currentBottleProduct.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <Button 
                onClick={handleBuyNow}
                size="lg"
                className="flex-1 bg-gradient-premium-gold hover:opacity-90 text-white font-bold text-lg sm:text-xl h-16 sm:h-14 shadow-lg hover:shadow-xl transition-all rounded-xl"
              >
                <ShoppingCart className="w-6 h-6 mr-2" />
                Buy Now
              </Button>
              <Button 
                onClick={handleAddToCart}
                size="lg"
                variant="outline"
                className="flex-1 h-16 sm:h-14 text-lg sm:text-xl font-semibold border-2 hover:bg-primary/5 transition-all rounded-xl"
              >
                Add to Cart
              </Button>
              <Button 
                onClick={handleShare}
                size="lg"
                variant="outline"
                className="sm:w-14 h-16 sm:h-14 border-2 hover:bg-primary/5 transition-all rounded-xl"
              >
                <Share2 className="w-6 h-6" />
                <span className="sm:hidden ml-2 font-semibold">Share Product</span>
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
                <span className="font-medium text-foreground capitalize">{currentBottleProduct.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SKU</span>
                <span className="font-medium text-foreground">PU-{currentBottleProduct.id.toString().padStart(4, '0')}</span>
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
              ) : isCopperBottle ? (
                <>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clean with lemon juice and salt mixture, then rinse with water.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Do not use abrasive cleaners or dishwasher to maintain the finish.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dry thoroughly after washing to prevent water spots and oxidation.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fill with water at night and drink in the morning for health benefits.</span>
                  </p>
                </>
              ) : product.category?.toLowerCase().includes('candle') ? (
                <>
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

        {/* Customer Reviews Section */}
        <div className="mt-12 max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="border-b border-border pb-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">Priya S.</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">Verified Purchase</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Really happy with this purchase! The quality is much better than what i expected from online photos. Packaging was also nice, came well protected. Only small thing is delivery took 1 day extra than promised but overall very satisfied. Would definitely recommend to friends and family 😊
                </p>
              </div>

              {/* Review 2 */}
              <div className="pb-2">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">Rajesh M.</span>
                      <div className="flex gap-0.5">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                        <Star className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">Verified Purchase</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Good product overall. Looks exactly like the pictures shown. I bought this for puja at home and it serves the purpose well. The finishing could have been slightly better in some areas but nothing major. For the price point its quite decent. Customer service was helpful when i had questions before ordering.
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
