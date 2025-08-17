import { X, Plus, Minus, ShoppingBag, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const CartDrawer = ({ isOpen, onOpenChange, children }: CartDrawerProps) => {
  const { cartItems, updateQuantity, getCartTotal, getCartItemsCount } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 999 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
            <Badge variant="secondary" className="ml-auto">
              {getCartItemsCount()} items
            </Badge>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button 
                  variant="outline" 
                  onClick={() => onOpenChange(false)}
                  className="mt-4"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.name}</h4>
                      <p className="text-primary font-semibold">₹{item.price}</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-auto"
                          onClick={() => updateQuantity(item.id, 0)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary & Actions */}
          {cartItems.length > 0 && (
            <div className="border-t border-border pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-semibold" : ""}>
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>
                {subtotal < 999 && (
                  <div className="text-xs text-muted-foreground">
                    Add ₹{999 - subtotal} more for free shipping
                  </div>
                )}
                <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>
              </div>

              {/* Payment Badges */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Accepted:</span>
                <div className="flex items-center gap-1">
                  <CreditCard className="h-4 w-4" />
                  <span>UPI • GPay • Cards</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full bg-gradient-saffron hover:opacity-90" size="lg">
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => onOpenChange(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;