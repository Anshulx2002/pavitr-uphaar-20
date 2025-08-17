import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pooja.jpg";
import { useState, useEffect } from "react";
import { Sparkles, Heart, Star } from "lucide-react";

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
      
      const duration = 2000;
      const increment = numericTarget / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
          setCount(numericTarget);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, numericTarget]);

    return (
      <div className="hover-scale text-center">
        <div className="text-lg md:text-2xl font-bold text-white drop-shadow-lg animate-fade-in">
          {count}{suffix}
        </div>
        <div className="text-xs md:text-sm text-white/70 drop-shadow-md">{label}</div>
      </div>
    );
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Primary Background Image */}
        <img 
          src={heroImage} 
          alt="Traditional pooja setup with diyas and incense" 
          className="w-full h-full object-cover transform transition-transform duration-[20000ms] hover:scale-110" 
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        
        {/* Rich Gradient Overlays for Visual Impact */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/25 animate-pulse"></div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 30px 30px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
        
        {/* Dynamic Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="w-8 h-8 text-accent drop-shadow-glow" />
        </div>
        <div className="absolute top-32 right-16 animate-pulse">
          <Star className="w-6 h-6 text-primary drop-shadow-glow" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
          <Heart className="w-7 h-7 text-accent drop-shadow-glow" />
        </div>
        <div className="absolute top-64 right-32 animate-pulse delay-500">
          <Sparkles className="w-5 h-5 text-primary drop-shadow-glow" />
        </div>
        <div className="absolute top-40 left-1/3 animate-bounce delay-700">
          <Star className="w-4 h-4 text-accent drop-shadow-glow" />
        </div>
        <div className="absolute bottom-48 right-1/4 animate-pulse delay-300">
          <Heart className="w-6 h-6 text-primary drop-shadow-glow" />
        </div>
        
        {/* Moving Light Rays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-accent/40 to-transparent animate-pulse transform rotate-12"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-primary/40 to-transparent animate-pulse delay-500 transform -rotate-12"></div>
          <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-accent/30 to-transparent animate-pulse delay-1000 transform rotate-6"></div>
        </div>
      </div>

      {/* Content with Enhanced Typography and Effects */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 py-8 md:py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
          <span className="inline-block animate-[scale-in_0.8s_ease-out] text-white drop-shadow-xl">Premium pooja kits,</span>
          <br />
          <span className="inline-block animate-[scale-in_0.8s_ease-out_0.2s_both] bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent drop-shadow-2xl animate-pulse text-5xl md:text-8xl lg:text-9xl font-extrabold">
            delivered to your door
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_0.4s_both] drop-shadow-lg font-medium">
          Everything you need. Beautifully packed. Ready to worship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-[fade-in_1s_ease-out_0.6s_both]">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-bold text-lg md:text-xl px-10 py-6 w-full sm:w-auto h-14 md:h-16 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
            onClick={() => window.location.href = '/products'}
          >
            <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
            Shop Kits
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-semibold text-lg px-8 py-6 w-full sm:w-auto h-14 md:h-16 rounded-full transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
            onClick={() => window.location.href = '/about'}
          >
            Explore Our Heritage
          </Button>
        </div>
        
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-md md:max-w-lg mx-auto text-center animate-[fade-in_1s_ease-out_0.8s_both]">
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <AnimatedCounter target="500+" label="Products" />
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <AnimatedCounter target="10K+" label="Families" />
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <AnimatedCounter target="15+" label="Years" />
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-primary animate-pulse"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-pulse"></div>
    </section>
  );
};
export default Hero;