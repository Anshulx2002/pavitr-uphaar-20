import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import Footer from "@/components/Footer";
import TrendingCarousel from "@/components/TrendingCarousel";
import CompactReviews from "@/components/CompactReviews";
import InstagramFeed from "@/components/InstagramFeed";
import RightSidePopup from "@/components/RightSidePopup";
import VideoPopup from "@/components/VideoPopup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      
      <Hero />
      <TrendingCarousel />
      <CompactReviews />
      <FeaturedProductsSection />
      <InstagramFeed />
      <Footer />
      <VideoPopup />
    </div>
  );
};

export default Index;
