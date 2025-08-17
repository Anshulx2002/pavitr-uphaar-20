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
        <div className="text-sm md:text-xl lg:text-3xl font-bold text-foreground animate-fade-in">
          {count}{suffix}
        </div>
        <div className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium">{label}</div>
      </div>
    );
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
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
        
        {/* Balanced Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20"></div>
        
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
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Traditional Gold Ornament Above Title */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 md:w-8 h-0.5 bg-gradient-gold"></div>
            <Sparkles className="w-4 md:w-6 h-4 md:h-6 text-primary animate-pulse" />
            <div className="w-6 md:w-8 h-0.5 bg-gradient-gold"></div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight px-2">
          <span className="inline-block animate-[scale-in_0.8s_ease-out] text-foreground">Premium pooja kits,</span>
          <br />
          <span className="inline-block animate-[scale-in_0.8s_ease-out_0.2s_both] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-extrabold">
            delivered to your door
          </span>
        </h1>
        
        <p className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 lg:mb-10 max-w-xl md:max-w-2xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_0.4s_both] font-medium px-4">
          Everything you need. Beautifully packed. Ready to worship.
        </p>
        
        <div className="flex flex-col gap-3 md:gap-4 justify-center animate-[fade-in_1s_ease-out_0.6s_both] px-4">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:opacity-90 text-foreground font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-6 h-12 md:h-14 rounded-full shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-hover border border-primary/20 w-full max-w-xs mx-auto"
            onClick={() => window.location.href = '/products'}
          >
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 text-primary" />
            Shop Kits
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 font-medium text-sm md:text-lg px-6 md:px-8 py-3 md:py-6 h-10 md:h-14 rounded-full transition-all duration-300 hover:scale-105 shadow-card w-full max-w-xs mx-auto"
            onClick={() => window.location.href = '/about'}
          >
            Explore Our Heritage
          </Button>
        </div>
        
        <div className="mt-12 md:mt-16 px-4">
          <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-xs md:max-w-lg mx-auto text-center animate-[fade-in_1s_ease-out_0.8s_both]">
            <div className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 md:border-2 shadow-gold hover:shadow-hover transition-all duration-300 hover:scale-105 hover:border-primary/40">
              <AnimatedCounter target="500+" label="Products" />
            </div>
            <div className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 md:border-2 shadow-gold hover:shadow-hover transition-all duration-300 hover:scale-105 hover:border-primary/40">
              <AnimatedCounter target="10K+" label="Families" />
            </div>
            <div className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 md:border-2 shadow-gold hover:shadow-hover transition-all duration-300 hover:scale-105 hover:border-primary/40">
              <AnimatedCounter target="15+" label="Years" />
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