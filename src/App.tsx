import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingInfo from "./pages/ShippingInfo";
import FestivalKits from "./pages/FestivalKits";
import FeaturedProducts from "./pages/FeaturedProducts";
import CategoryPage from "./pages/CategoryPage";
import Checkout from "./pages/checkout";
import ThankYou from "./pages/ThankYou";
import PaymentFailed from "./pages/PaymentFailed";
import NotFound from "./pages/NotFound";
import DiwaliKit from "./pages/DiwaliKit";
import DussehraKit from "./pages/DussehraKit";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import OrderTracker from "./pages/OrderTracker";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-info" element={<ShippingInfo />} />
          <Route path="/festival-kits" element={<FestivalKits />} />
          <Route path="/featured-products" element={<FeaturedProducts />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="/diwali-kit" element={<DiwaliKit />} />
          <Route path="/dussehra-kit" element={<DussehraKit />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          {/* Legacy routes redirect to dynamic routes */}
          <Route path="/incense-agarbatti" element={<CategoryPage />} />
          <Route path="/lamps-diyas" element={<CategoryPage />} />
          <Route path="/pooja-accessories" element={<CategoryPage />} />
          <Route path="/sacred-threads" element={<CategoryPage />} />
          <Route path="/flowers-garlands" element={<CategoryPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order/:orderId" element={<OrderTracker />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
