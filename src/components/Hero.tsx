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
        <div className="text-xl md:text-3xl font-bold text-foreground animate-fade-in">
          {count}{suffix}
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium">{label}</div>
      </div>
    );
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
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
        
        {/* Balanced Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20"></div>
        
        {/* Subtle Luxury Pattern */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 60px 60px'
        }}></div>
        
        {/* Minimal Floating Elements - Very Subtle */}
        <div className="absolute top-32 right-20 opacity-20">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-24 opacity-15">
          <Star className="w-3 h-3 text-accent animate-pulse delay-1000" />
        </div>
        <div className="absolute top-48 left-1/4 opacity-10">
          <Heart className="w-3 h-3 text-primary animate-pulse delay-500" />
        </div>
      </div>

      {/* Content with Perfect Readability */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 py-12 md:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
          <span className="inline-block animate-[scale-in_0.8s_ease-out] text-foreground">Premium pooja kits,</span>
          <br />
          <span className="inline-block animate-[scale-in_0.8s_ease-out_0.2s_both] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-extrabold">
            delivered to your door
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_0.4s_both] font-medium">
          Everything you need. Beautifully packed. Ready to worship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in_1s_ease-out_0.6s_both]">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold text-lg px-10 py-6 h-14 rounded-full shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-hover"
            onClick={() => window.location.href = '/products'}
          >
            <Sparkles className="w-5 h-5 mr-3" />
            Shop Kits
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 font-medium text-lg px-8 py-6 h-14 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/about'}
          >
            Explore Our Heritage
          </Button>
        </div>
        
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center animate-[fade-in_1s_ease-out_0.8s_both]">
          <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/30 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
            <AnimatedCounter target="500+" label="Products" />
          </div>
          <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/30 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
            <AnimatedCounter target="10K+" label="Families" />
          </div>
          <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/30 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
            <AnimatedCounter target="15+" label="Years" />
          </div>
        </div>
      </div>
      
      {/* Clean Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};
export default Hero;