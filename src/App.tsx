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
import AartiSangrah from "./pages/AartiSangrah";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import OrderTracker from "./pages/OrderTracker";
import AdminView from "./pages/AdminView";
import ProductDetails from "./pages/ProductDetails";
import CorporateGifting from "./pages/CorporateGifting";
import Candles from "./pages/Candles";
import Blogs from "./pages/Blogs";
import BlogFamilyGifts from "./pages/BlogFamilyGifts";
import BlogCorporateGifts from "./pages/BlogCorporateGifts";
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
          <div className="overflow-x-hidden w-full">
            <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/family-gifts" element={<BlogFamilyGifts />} />
          <Route path="/blog/corporate-gifts" element={<BlogCorporateGifts />} />
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
          <Route path="/aarti-sangrah" element={<AartiSangrah />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          {/* Category routes with proper parameters */}
          <Route path="/incense-agarbatti" element={<CategoryPage />} />
          <Route path="/lamps-diyas" element={<CategoryPage />} />
          <Route path="/candles" element={<Candles />} />
          <Route path="/pooja-accessories" element={<CategoryPage />} />
          <Route path="/sacred-threads" element={<CategoryPage />} />
          <Route path="/flowers-garlands" element={<CategoryPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order/:orderId" element={<OrderTracker />} />
          <Route path="/admin/view" element={<AdminView />} />
          <Route path="/corporate-gifting" element={<CorporateGifting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
