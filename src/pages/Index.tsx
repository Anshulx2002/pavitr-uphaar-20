import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import Footer from "@/components/Footer";
import TrendingCarousel from "@/components/TrendingCarousel";
import InstagramFeed from "@/components/InstagramFeed";
import RightSidePopup from "@/components/RightSidePopup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      
      <Hero />
      <TrendingCarousel />
      <FeaturedProductsSection />
      <InstagramFeed />
      <Footer />
      
      {/* Right Side Popup */}
      <RightSidePopup />
    </div>
  );
};

export default Index;
