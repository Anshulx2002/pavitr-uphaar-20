import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ShoppingCart, Package, Truck, CreditCard, Smartphone, Wallet, Landmark, Shield, Tag } from 'lucide-react';

// Razorpay constants
const CREATE_ORDER_URL = "https://bilgoxmvnvhiqzidllvj.supabase.co/functions/v1/create-order";
const RZP_PUBLIC_KEY = "rzp_live_R6RSxqVRmxuZdA"; // your live key_id

const checkoutSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(10, 'Please enter your complete address'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().length(6, 'Pincode must be 6 digits'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, getCartItemsCount } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    mode: 'onChange',
  });

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existing) existing.remove();
    };
  }, []);

  // Redirect if cart empty
  useEffect(() => {
    if (cartItems.length === 0) navigate('/');
  }, [cartItems, navigate]);

  const subtotal = getCartTotal();
  const shipping = subtotal >= 500 ? 0 : 50;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + shipping - discountAmount;

  const applyCoupon = () => {
    const valid: Record<string, number> = {
      'WELCOME10': 10,
      'FESTIVAL15': 15,
      'SAVE20': 20,
    };
    if (valid[couponCode.toUpperCase()]) {
      setDiscount(valid[couponCode.toUpperCase()]);
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const startPayment = async (form: CheckoutFormData) => {
    try {
      setIsProcessingPayment(true);

      // Call backend to create Razorpay order (amount in rupees)
      const res = await fetch(CREATE_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount_rupees: Number(total) })
      });
      const order = await res.json();
      if (!res.ok || !order.order_id) {
        throw new Error(order?.error?.description || "Could not create order");
      }

      // Setup checkout options
      const options = {
        key: order.key_id ?? RZP_PUBLIC_KEY, // backend should send key_id too
        order_id: order.order_id,
        amount: order.amount, // in paise
        currency: order.currency || "INR",
        name: "Pavitra Uphaar",
        description: "Order",
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone
        },
        handler: function (response: any) {
          alert(`Payment Success: ${response.razorpay_payment_id}`);
          window.location.href = "/thank-you";
        },
        modal: {
          ondismiss: function () {
            window.location.href = "/payment-failed";
          }
        }
      };

      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (err: any) => {
        console.error(err.error);
        alert("Payment failed: " + (err?.error?.description || "Unknown error"));
        window.location.href = "/payment-failed";
      });
      rzp.open();

    } catch (err) {
      console.error("Payment error:", err);
      window.location.href = "/payment-failed";
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const onSubmit = async (data: CheckoutFormData) => {
    await startPayment(data);
  };

  if (cartItems.length === 0) return null;

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <Button variant="outline" size="sm" onClick={() => navigate('/')} className="gap-2 order-2 sm:order-1">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Shop</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground order-1 sm:order-2">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left - Form */}
          {/* ... keep your form code exactly as you had ... */}
          {/* Right - Order Review */}
          {/* ... keep your order review code exactly as you had ... */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
