import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ShoppingCart,
  Package,
  Truck,
  CreditCard,
  Smartphone,
  Wallet,
  Landmark,
  Shield,
  Tag,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Razorpay constants
const CREATE_ORDER_URL = "https://bilgoxmvnvhiqzidllvj.supabase.co/functions/v1/create-order";
const SAVE_ORDER_URL = "https://bilgoxmvnvhiqzidllvj.supabase.co/functions/v1/save-order";
// const RZP_PUBLIC_KEY = "rzp_live_R6kRjBKRDQalxT";
const RZP_PUBLIC_KEY = "rzp_test_N8MLCvpxuLueYZ";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .refine((email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }, "Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .refine((phone) => {
      const phoneRegex = /^[6-9]\d{9}$/;
      return phoneRegex.test(phone.replace(/\D/g, ""));
    }, "Please enter a valid 10-digit Indian mobile number"),
  address: z.string().min(10, "Please enter your complete address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z
    .string()
    .min(6, "Pincode must be 6 digits")
    .max(6, "Pincode must be 6 digits")
    .refine((pin) => {
      return /^\d{6}$/.test(pin);
    }, "Pincode must be exactly 6 digits"),
  country: z.literal("India", { errorMap: () => ({ message: "We currently only ship within India" }) }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, getCartItemsCount, user, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    mode: "onChange",
    defaultValues: {
      country: "India",
    },
  });

  // Load profile if user is logged in
  useEffect(() => {
    const loadProfile = async () => {
      if (user) {
        try {
          const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", user.id).single();

          if (error) throw error;

          if (profile) {
            setValue("name", profile.name);
            setValue("phone", profile.phone);
            setValue("email", user.email || "");
          }
        } catch (error) {
          console.error("Error loading profile:", error);
        }
      }
      setIsLoadingProfile(false);
    };

    loadProfile();
  }, [user, setValue]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  const subtotal = getCartTotal();
  const shipping = subtotal >= 500 ? 0 : 50; // Free shipping on orders above ₹500
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + shipping - discountAmount;

  const applyCoupon = () => {
    // Simple coupon logic - in real app, this would be an API call
    const validCoupons: Record<string, number> = {
      WELCOME10: 10,
      FESTIVAL15: 15,
      SAVE20: 20,
      BLESS10: 10,
    };

    if (validCoupons[couponCode.toUpperCase()]) {
      setDiscount(validCoupons[couponCode.toUpperCase()]);
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const startPayment = async (data: CheckoutFormData) => {
    setIsProcessingPayment(true);

    try {
      // Convert INR to paise
      const amount = Math.round(total * 100);
      const receipt = `PU-${Date.now()}`;

      // Create order via Supabase Edge Function
      const response = await fetch(CREATE_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "INR", receipt }),
      });

      const order = await response.json();
      if (!order.id) {
        throw new Error("Could not create order");
      }

      // Initialize Razorpay
      const options = {
        key: RZP_PUBLIC_KEY,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "Pavitra Uphaar",
        description: "Order " + receipt,
        order_id: order.id,
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone,
        },
        handler: async function (razorpayResponse: any) {
          try {
            // Save order to Supabase
            const shippingAddress = `${data.address}, ${data.city}, ${data.state} - ${data.pincode}, ${data.country}`;

            const saveResponse = await fetch(SAVE_ORDER_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                user_id: user?.id || null,
                razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                razorpay_order_id: order.id,
                order_ref: receipt,
                amount_paise: amount,
                customer_name: data.name,
                customer_email: data.email,
                customer_phone: data.phone,
                shipping_address: shippingAddress,
                cart_items: cartItems,
              }),
            });

            if (!saveResponse.ok) {
              throw new Error("Failed to save order");
            }

            // Clear cart for guest users (authenticated users' carts are cleared in the backend)
            if (!user) {
              clearCart();
            }

            // Success - redirect to thank you page
            window.location.href = `/thank-you?payment_id=${encodeURIComponent(razorpayResponse.razorpay_payment_id)}&order_id=${encodeURIComponent(order.id)}`;
          } catch (error) {
            console.error("Error saving order:", error);
            // Clear cart even if save fails for guest users
            if (!user) {
              clearCart();
            }
            // Still redirect to thank you even if save fails
            window.location.href = `/thank-you?payment_id=${encodeURIComponent(razorpayResponse.razorpay_payment_id)}&order_id=${encodeURIComponent(order.id)}`;
          }
        },
        modal: {
          ondismiss: function () {
            // User closed the modal - redirect to payment failed
            window.location.href = `/payment-failed?order_ref=${encodeURIComponent(receipt)}`;
          },
        },
      };

      // @ts-ignore - Razorpay is loaded dynamically
      new window.Razorpay(options).open();
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Error",
        description: "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
      setIsProcessingPayment(false);
    }
  };

  const onSubmit = async (data: CheckoutFormData) => {
    await startPayment(data);
  };

  if (cartItems.length === 0 || isLoadingProfile) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <Button variant="outline" size="sm" onClick={() => navigate("/")} className="gap-2 order-2 sm:order-1">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Shop</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground order-1 sm:order-2">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Form */}
          <div className="space-y-4 sm:space-y-6">
            {/* Customer Details */}
            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Package className="h-5 w-5 text-primary" />
                  Customer Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Enter your full name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className={`transition-all duration-200 ${errors.email ? "border-destructive focus:border-destructive" : "focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1 animate-fade-in">{errors.email.message}</p>
                  )}
                  {watch("email") && !errors.email && (
                    <p className="text-sm text-primary mt-1 animate-fade-in">✓ Valid email</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="Enter your 10-digit mobile number"
                    className={`transition-all duration-200 ${errors.phone ? "border-destructive focus:border-destructive" : "focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                    maxLength={10}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1 animate-fade-in">{errors.phone.message}</p>
                  )}
                  {watch("phone") && !errors.phone && watch("phone").length === 10 && (
                    <p className="text-sm text-primary mt-1 animate-fade-in">✓ Valid phone number</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Truck className="h-5 w-5 text-primary" />
                  Shipping Address
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1">🇮🇳 We currently ship within India only</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    {...register("address")}
                    placeholder="Enter your complete address"
                    className={errors.address ? "border-destructive" : ""}
                  />
                  {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      {...register("city")}
                      placeholder="City"
                      className={`transition-all duration-200 ${errors.city ? "border-destructive focus:border-destructive" : "focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                    />
                    {errors.city && (
                      <p className="text-sm text-destructive mt-1 animate-fade-in">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      {...register("state")}
                      placeholder="State"
                      className={`transition-all duration-200 ${errors.state ? "border-destructive focus:border-destructive" : "focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                    />
                    {errors.state && (
                      <p className="text-sm text-destructive mt-1 animate-fade-in">{errors.state.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      {...register("pincode")}
                      placeholder="6-digit pincode"
                      className={`transition-all duration-200 ${errors.pincode ? "border-destructive focus:border-destructive" : "focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                      maxLength={6}
                    />
                    {errors.pincode && (
                      <p className="text-sm text-destructive mt-1 animate-fade-in">{errors.pincode.message}</p>
                    )}
                    {watch("pincode") && !errors.pincode && watch("pincode").length === 6 && (
                      <p className="text-sm text-primary mt-1 animate-fade-in">✓ Valid pincode</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" {...register("country")} value="India" disabled className="bg-muted" />
                  </div>
                </div>

                {/* Delivery Estimate */}
                <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <span className="flex items-center gap-2 font-medium mb-2">
                      <Truck className="h-4 w-4 text-primary" />
                      Estimated Delivery:
                    </span>
                    <span className="text-xs block">
                      • Major cities (Mumbai, Delhi, Bangalore etc.): <strong>Within 7 working days</strong>
                      <br />• Rest of India: <strong>Within 3 weeks</strong>
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Review */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="shadow-card lg:sticky lg:top-4">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  Order Review ({getCartItemsCount()} items)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-card-foreground truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity} × ₹{item.price}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-semibold text-sm text-card-foreground">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Coupon Code Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <Label htmlFor="coupon" className="text-sm font-medium">
                      Apply Coupon
                    </Label>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 text-sm"
                    />
                    <Button
                      onClick={applyCoupon}
                      variant="outline"
                      size="sm"
                      className="px-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Apply
                    </Button>
                  </div>
                  {discount > 0 && (
                    <p className="text-xs text-primary animate-fade-in">✓ Coupon applied! {discount}% discount</p>
                  )}
                </div>

                <Separator />

                {/* Order Summary */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Discount ({discount}%)</span>
                      <span className="font-medium text-primary">-₹{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && <p className="text-xs text-primary">🎉 Free shipping on orders above ₹500</p>}
                  <Separator />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary text-2xl">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Methods Trust */}
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-2">We accept:</p>
                    <div className="flex justify-center items-center gap-3 mb-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs">
                        <Smartphone className="h-3 w-3 text-primary" />
                        <span>UPI</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs">
                        <CreditCard className="h-3 w-3 text-primary" />
                        <span>Cards</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs">
                        <Landmark className="h-3 w-3 text-primary" />
                        <span>Net Banking</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs">
                        <Wallet className="h-3 w-3 text-primary" />
                        <span>Wallets</span>
                      </div>
                    </div>
                  </div>

                  {/* Pay Now Button */}
                  <Button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting || isProcessingPayment}
                    className="w-full h-14 text-lg font-semibold bg-gradient-saffron hover:opacity-90 transition-all duration-300 hover:shadow-gold text-primary-foreground"
                  >
                    {isSubmitting || isProcessingPayment ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                        Processing...
                      </div>
                    ) : (
                      `Pay Now ₹${total.toFixed(2)}`
                    )}
                  </Button>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>100% Secure Payments powered by Razorpay</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
