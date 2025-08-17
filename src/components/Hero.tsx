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
      <div className="hover-scale">
        <div className="text-lg md:text-2xl font-bold text-saffron animate-fade-in">
          {count}{suffix}
        </div>
        <div className="text-xs md:text-sm text-muted-foreground">{label}</div>
      </div>
    );
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-gradient-warm overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traditional pooja setup with diyas and incense" 
          className="w-full h-full object-cover opacity-25 transform transition-transform duration-[20000ms] hover:scale-105" 
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-background/65 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-saffron/10 to-gold/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="w-6 h-6 text-gold/40" />
        </div>
        <div className="absolute top-32 right-16 animate-pulse">
          <Star className="w-4 h-4 text-saffron/50" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
          <Heart className="w-5 h-5 text-gold/30" />
        </div>
        <div className="absolute top-64 right-32 animate-pulse delay-500">
          <Sparkles className="w-3 h-3 text-saffron/40" />
        </div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron/5 to-transparent animate-[slide-in-right_3s_ease-in-out_infinite]"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 py-8 md:py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight animate-fade-in">
          <span className="inline-block animate-[scale-in_0.8s_ease-out]">Premium pooja kits,</span>
          <br className="hidden md:block" />
          <span className="text-saffron inline-block animate-[scale-in_0.8s_ease-out_0.2s_both] bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent animate-pulse"> delivered to your door</span>
        </h1>
        
        <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-lg md:max-w-2xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_0.4s_both]">
          Everything you need. Beautifully packed. Ready to worship.
        </p>
        
        <div className="flex flex-col gap-3 md:gap-4 justify-center animate-[fade-in_1s_ease-out_0.6s_both]">
          <Button 
            variant="saffron" 
            size="lg" 
            className="text-base md:text-lg px-8 py-4 w-full md:w-auto h-12 md:h-auto hover-scale shadow-glow transition-all duration-300 hover:shadow-xl"
            onClick={() => window.location.href = '/products'}
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Shop Kits
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-sm px-6 py-2 w-full md:w-auto hover-scale transition-all duration-300 hover:bg-saffron/10 hover:border-saffron"
            onClick={() => window.location.href = '/about'}
          >
            Explore Our Heritage
          </Button>
        </div>
        
        <div className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-sm md:max-w-md mx-auto text-center animate-[fade-in_1s_ease-out_0.8s_both]">
          <AnimatedCounter target="500+" label="Products" />
          <AnimatedCounter target="10K+" label="Families" />
          <AnimatedCounter target="15+" label="Years" />
        </div>
      </div>
      
      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/50 to-transparent animate-pulse"></div>
    </section>
  );
};
export default Hero;