import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pooja.jpg";
import { useState, useEffect } from "react";
import { Sparkles, Heart, Star, Shield, Truck, Package, MapPin } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const AnimatedCounter = ({ target, label }: { target: string; label: string }) => {
    const [count, setCount] = useState(0);
    const numericTarget = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/\d/g, '');

    useEffect(() => {
      if (!isVisible) return;
      
      const duration = 1500;
      const increment = numericTarget / (duration / 32);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
          setCount(numericTarget);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 32);

      return () => clearInterval(timer);
    }, [isVisible, numericTarget]);

    return (
      <div className="text-center">
        <div className="text-lg md:text-xl lg:text-3xl font-bold text-foreground">
          {count}{suffix}
        </div>
        <div className="text-sm md:text-sm lg:text-base text-muted-foreground font-medium">{label}</div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Traditional Indian Border - Top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute top-2 left-0 right-0 h-1 bg-gradient-gold"></div>
      
      {/* Sophisticated Background with Visible Diyas */}
      <div className="absolute inset-0 z-0">
        {/* Background Image with Visible Diyas */}
        <img 
          src={heroImage} 
          alt="Traditional pooja setup with diyas and incense" 
          className="w-full h-full object-cover opacity-40 transform transition-transform duration-[15000ms]" 
          style={{
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        />
        
        {/* Balanced Overlays for Text Readability - 50-55% opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/55 to-background/75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/15"></div>
        
        {/* Traditional Indian Mandala Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--gold)) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, hsl(var(--gold)) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '80px 80px, 60px 60px, 120px 120px'
        }}></div>
        
        {/* Traditional Golden Floating Elements */}
        <div className="absolute top-32 right-20 opacity-30 animate-pulse">
          <Sparkles className="w-6 h-6 text-primary drop-shadow-glow" />
        </div>
        <div className="absolute bottom-40 left-24 opacity-25 animate-pulse delay-1000">
          <Star className="w-5 h-5 text-primary drop-shadow-glow" />
        </div>
        <div className="absolute top-48 left-1/4 opacity-20 animate-pulse delay-500">
          <Heart className="w-4 h-4 text-primary drop-shadow-glow" />
        </div>
        
        {/* Traditional Decorative Corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/30 rounded-bl-lg"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>
      </div>

      {/* Content with Perfect Readability */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 py-8 md:px-6 md:py-12 lg:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Traditional Gold Ornament Above Title */}
        <div className="flex justify-center mb-6 md:mb-6">
          <div className="flex items-center gap-3 md:gap-3">
            <div className="w-8 md:w-8 h-0.5 bg-gradient-gold"></div>
            <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-primary animate-pulse" />
            <div className="w-8 md:w-8 h-0.5 bg-gradient-gold"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-6 lg:mb-8 leading-relaxed px-2 pb-2" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          <span className="inline-block animate-[scale-in_0.8s_ease-out] text-foreground">Premium pooja kits,</span>
          <br />
          <span className="inline-block animate-[scale-in_0.8s_ease-out_0.2s_both] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-extrabold">
            delivered to your door
          </span>
        </h1>
        
        <p className="text-lg md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-8 lg:mb-10 max-w-xl md:max-w-2xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_0.4s_both] font-medium px-4">
          Everything you need. Beautifully packed. Ready to worship.
        </p>
        
        <div className="flex flex-col gap-4 md:gap-4 items-center animate-[fade-in_1s_ease-out_0.6s_both] px-4">
          <div className="relative">
            {/* Glitz animation overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-[slide-in-right_2s_linear_infinite] overflow-hidden pointer-events-none"></div>
            <Button 
              size="lg" 
              className="bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-yellow-900 font-semibold text-lg md:text-lg px-10 md:px-10 py-5 md:py-6 rounded-full border border-yellow-400/20 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-300"
              style={{ 
                height: 'clamp(52px, 7vw, 56px)',
                animation: 'elegantPulse 3.5s ease-in-out infinite'
              }}
              onClick={() => window.location.href = '/festival-kits'}
            >
              <Sparkles className="w-5 md:w-5 h-5 md:h-5 mr-3 md:mr-3 text-yellow-800" />
              Shop Kits
            </Button>
          </div>
          
          {/* Browse all products link */}
          <a 
            href="/products/all" 
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm px-1"
          >
            Browse all products
          </a>
          
          {/* Trust bar - 16-20px below link */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-muted-foreground font-medium mt-5">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 md:w-4 md:h-4" />
              <span>Secure Checkout</span>
            </div>
            <span className="text-primary/40">•</span>
            <div className="flex items-center gap-1.5">
              <Truck className="w-3 h-3 md:w-4 md:h-4" />
              <span>Fast Shipping</span>
            </div>
            <span className="text-primary/40">•</span>
            <div className="flex items-center gap-1.5">
              <Package className="w-3 h-3 md:w-4 md:h-4" />
              <span>Hand-packed</span>
            </div>
            <span className="text-primary/40">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              <span>Made in India</span>
            </div>
          </div>
        </div>
        
        {/* Stats tiles */}
        <div className="mt-12 md:mt-16 px-4">
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-sm md:max-w-md mx-auto text-center animate-[fade-in_1s_ease-out_0.8s_both]">
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 md:border-2 shadow-gold transition-all duration-500">
              <AnimatedCounter target="20+" label="Products" />
            </div>
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 md:border-2 shadow-gold transition-all duration-500">
              <AnimatedCounter target="200+" label="Families Served" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Traditional Indian Border - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold"></div>
      <div className="absolute bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      {/* Traditional Corner Flourishes */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-300"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-600"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;