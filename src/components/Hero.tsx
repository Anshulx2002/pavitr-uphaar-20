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
        
        {/* Balanced Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20"></div>
        
        {/* Complex Traditional Indian Mandala Patterns */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--gold)) 3px, transparent 3px),
            radial-gradient(circle at 75% 75%, hsl(var(--primary)) 2px, transparent 2px),
            radial-gradient(circle at 50% 50%, hsl(var(--gold)) 2.5px, transparent 2.5px),
            radial-gradient(circle at 12.5% 87.5%, hsl(var(--accent)) 1.5px, transparent 1.5px),
            radial-gradient(circle at 87.5% 12.5%, hsl(var(--primary)) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '60px 60px, 40px 40px, 80px 80px, 100px 100px, 120px 120px'
        }}></div>
        
        {/* Intricate Paisley Pattern Overlay */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `
            conic-gradient(from 45deg at 20% 20%, hsl(var(--gold)) 0deg, transparent 60deg, hsl(var(--primary)) 120deg, transparent 180deg),
            conic-gradient(from 135deg at 80% 80%, hsl(var(--accent)) 0deg, transparent 90deg, hsl(var(--gold)) 180deg, transparent 270deg)
          `,
          backgroundSize: '150px 150px, 200px 200px'
        }}></div>
        
        {/* Traditional Lotus Petal Patterns */}
        <div className="absolute inset-0 opacity-12" style={{
          backgroundImage: `
            repeating-conic-gradient(from 0deg at 33% 33%, 
              hsl(var(--primary)) 0deg 30deg, 
              transparent 30deg 60deg,
              hsl(var(--gold)) 60deg 90deg,
              transparent 90deg 120deg
            ),
            repeating-conic-gradient(from 45deg at 67% 67%, 
              hsl(var(--accent)) 0deg 45deg, 
              transparent 45deg 90deg,
              hsl(var(--primary)) 90deg 135deg,
              transparent 135deg 180deg
            )
          `,
          backgroundSize: '300px 300px, 250px 250px'
        }}></div>
        
        {/* Sacred Geometry - Om Symbol Inspired */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5" style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 50%, hsl(var(--gold)) 20%, transparent 70%)`,
          borderRadius: '60% 40% 60% 40%',
          transform: 'rotate(45deg)'
        }}></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 opacity-5" style={{
          background: `radial-gradient(ellipse 50% 70% at 40% 60%, hsl(var(--primary)) 15%, transparent 60%)`,
          borderRadius: '50% 70% 50% 70%',
          transform: 'rotate(-30deg)'
        }}></div>
        
        {/* Traditional Golden Floating Elements with More Variety */}
        <div className="absolute top-20 right-16 opacity-25 animate-pulse">
          <Sparkles className="w-8 h-8 text-primary drop-shadow-glow" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-20 animate-pulse delay-1000">
          <Star className="w-6 h-6 text-gold drop-shadow-glow" />
        </div>
        <div className="absolute top-40 left-1/5 opacity-15 animate-pulse delay-500">
          <Heart className="w-5 h-5 text-accent drop-shadow-glow" />
        </div>
        <div className="absolute top-2/3 right-1/3 opacity-20 animate-pulse delay-700">
          <Sparkles className="w-4 h-4 text-gold" />
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-18 animate-pulse delay-1200">
          <Star className="w-7 h-7 text-primary drop-shadow-glow" />
        </div>
        <div className="absolute top-1/3 left-1/3 opacity-12 animate-pulse delay-300">
          <Heart className="w-6 h-6 text-gold" />
        </div>
        
        {/* Enhanced Traditional Decorative Corners with Inner Details */}
        <div className="absolute top-6 left-6 w-20 h-20">
          <div className="w-full h-full border-t-3 border-l-3 border-primary/40 rounded-tl-2xl"></div>
          <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-gold/30 rounded-tl-xl"></div>
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/60 rounded-tl-lg"></div>
        </div>
        <div className="absolute top-6 right-6 w-20 h-20">
          <div className="w-full h-full border-t-3 border-r-3 border-primary/40 rounded-tr-2xl"></div>
          <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-gold/30 rounded-tr-xl"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-primary/60 rounded-tr-lg"></div>
        </div>
        <div className="absolute bottom-6 left-6 w-20 h-20">
          <div className="w-full h-full border-b-3 border-l-3 border-primary/40 rounded-bl-2xl"></div>
          <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-gold/30 rounded-bl-xl"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-primary/60 rounded-bl-lg"></div>
        </div>
        <div className="absolute bottom-6 right-6 w-20 h-20">
          <div className="w-full h-full border-b-3 border-r-3 border-primary/40 rounded-br-2xl"></div>
          <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-gold/30 rounded-br-xl"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/60 rounded-br-lg"></div>
        </div>
        
        {/* Traditional Indian Side Borders */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute left-1 top-1/3 bottom-1/3 w-0.5 bg-gradient-to-b from-transparent via-gold/40 to-transparent"></div>
        <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute right-1 top-1/3 bottom-1/3 w-0.5 bg-gradient-to-b from-transparent via-gold/40 to-transparent"></div>
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
        
        <h1 className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-6 lg:mb-8 leading-relaxed px-2 pb-2">
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
              className="bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-yellow-900 font-semibold text-lg md:text-lg px-10 md:px-10 py-5 md:py-6 h-14 md:h-14 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.3)_inset] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.4)_inset] transition-all duration-300 hover:scale-[1.02] border border-yellow-400/20 relative overflow-hidden"
              onClick={() => window.location.href = '/products'}
            >
              <Sparkles className="w-5 md:w-5 h-5 md:h-5 mr-3 md:mr-3 text-yellow-800" />
              Shop Kits
            </Button>
          </div>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 font-medium text-base md:text-lg px-8 md:px-8 py-4 md:py-6 h-12 md:h-14 rounded-full transition-all duration-300 hover:scale-105 shadow-card w-full max-w-xs mx-auto"
            onClick={() => window.location.href = '/about'}
          >
            Explore Our Heritage
          </Button>
        </div>
        
        <div className="mt-12 md:mt-16 px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-sm md:max-w-lg mx-auto text-center animate-[fade-in_1s_ease-out_0.8s_both]">
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 md:border-2 shadow-gold transition-all duration-500">
              <AnimatedCounter target="500+" label="Products" />
            </div>
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 md:border-2 shadow-gold transition-all duration-500">
              <AnimatedCounter target="10K+" label="Families" />
            </div>
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 md:border-2 shadow-gold transition-all duration-500">
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