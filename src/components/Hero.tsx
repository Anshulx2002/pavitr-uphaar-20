import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pooja.jpg";
import { useState, useEffect } from "react";
import { Sparkles, Heart, Star, Shield, Truck, Package, MapPin, Box, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

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
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isMobile ? 'bg-gradient-to-br from-orange-50 via-yellow-50/90 to-orange-100/70' : 'bg-gradient-to-br from-background via-accent/5 to-background'}`}>
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
        {/* Mobile: Logo and Caption */}
        {isMobile ? (
          <>
            {/* Move logo higher for main focal point */}
            <div className="-mt-20 pt-4"></div>
            
            {/* Premium festive background with cultural motifs */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-100/50 via-[#F39C12]/20 to-transparent opacity-70 pointer-events-none"></div>
            
            {/* Subtle festive motifs - diyas, lotus, rangoli sparkles */}
            <div className="absolute inset-0 opacity-12 pointer-events-none" style={{
              backgroundImage: `
                radial-gradient(circle at 15% 25%, rgba(243,156,18,0.4) 1px, transparent 1px),
                radial-gradient(circle at 85% 30%, rgba(249,200,70,0.3) 1px, transparent 1px),
                radial-gradient(circle at 25% 75%, rgba(243,156,18,0.3) 1px, transparent 1px),
                radial-gradient(circle at 75% 80%, rgba(249,200,70,0.4) 1px, transparent 1px),
                radial-gradient(circle at 50% 20%, rgba(243,156,18,0.2) 2px, transparent 2px),
                radial-gradient(circle at 30% 60%, rgba(249,200,70,0.2) 1.5px, transparent 1.5px)
              `,
              backgroundSize: '100px 100px, 120px 120px, 110px 110px, 130px 130px, 150px 150px, 140px 140px'
            }}></div>
            
            {/* Traditional Indian motifs - very subtle diya and lotus outlines */}
            <div className="absolute inset-0 opacity-6 pointer-events-none" style={{
              backgroundImage: `
                radial-gradient(ellipse 8px 4px at 20% 30%, transparent 40%, rgba(243,156,18,0.15) 45%, transparent 50%),
                radial-gradient(ellipse 6px 3px at 80% 25%, transparent 40%, rgba(249,200,70,0.12) 45%, transparent 50%),
                radial-gradient(ellipse 8px 4px at 30% 70%, transparent 40%, rgba(243,156,18,0.10) 45%, transparent 50%),
                radial-gradient(ellipse 6px 3px at 70% 75%, transparent 40%, rgba(249,200,70,0.15) 45%, transparent 50%),
                radial-gradient(circle 12px at 50% 50%, transparent 60%, rgba(243,156,18,0.08) 65%, transparent 70%)
              `,
              backgroundSize: '180px 180px, 200px 200px, 160px 160px, 220px 220px, 300px 300px'
            }}></div>
            
            {/* Elegant mandala pattern for cultural richness */}
            <div className="absolute inset-0 opacity-6 pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle at center, transparent 20%, rgba(243,156,18,0.08) 25%, transparent 30%, rgba(243,156,18,0.04) 35%, transparent 40%)`,
              backgroundSize: '200px 200px',
              backgroundPosition: 'center center'
            }}></div>
            
            {/* Divine golden halo behind logo - enhanced */}
            <div className="absolute inset-0 bg-gradient-radial from-[#DAA520]/35 via-[#F39C12]/20 to-transparent opacity-90 pointer-events-none scale-90"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/25 via-[#DAA520]/15 to-transparent opacity-80 pointer-events-none scale-110 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[#F39C12]/15 via-transparent to-transparent opacity-60 pointer-events-none scale-125"></div>
            
            <div className="flex justify-center mb-4 relative z-10">
              <img 
                src="/lovable-uploads/0ab4aa57-a2b8-462d-88ab-8fda71e755d9.png" 
                alt="Pavitra Uphaar - Premium Pooja Kits" 
                className="w-48 h-auto animate-[fade-in_1s_ease-out] drop-shadow-[0_0_20px_rgba(218,165,32,0.3)]"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            
            {/* Elegant thin golden divider */}
            <div className="flex justify-center mb-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
            </div>
            
            <p className="text-center font-playfair text-base leading-[1.4] mb-5 px-4 max-w-[85%] mx-auto animate-[fade-in_1s_ease-out_0.2s_both]">
              <span className="text-[#4A2A1F] font-semibold">Premium Pooja Kits</span> <span className="text-[#8B5A3C] font-light">— beautifully packed & delivered.</span>
            </p>
          </>
        ) : (
          <>
            {/* Desktop: Traditional Gold Ornament Above Title */}
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
          </>
        )}
        
        <div className="flex flex-col gap-4 md:gap-4 items-center animate-[fade-in_1s_ease-out_0.6s_both] px-4">
          <div className="relative">
            {/* Enhanced divine aura/halo with warm glow */}
            <div className="absolute inset-0 bg-gradient-radial from-[#F39C12]/30 via-[#DAA520]/20 to-transparent rounded-full scale-150 animate-pulse opacity-80 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/25 via-[#F39C12]/15 to-transparent rounded-full scale-125 opacity-70 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[#F39C12]/15 via-transparent to-transparent rounded-full scale-200 animate-pulse delay-1000 opacity-50 pointer-events-none"></div>
            {/* Shimmer animation overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[slide-in-right_3s_linear_infinite] overflow-hidden pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-transparent via-[#FFD700]/20 to-transparent animate-[slide-in-right_4s_linear_infinite] overflow-hidden pointer-events-none delay-500"></div>
            <Button 
              size="lg" 
              className="relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 px-8 py-4 font-medium text-white hover:scale-[1.015] hover:-translate-y-0.5"
              style={{ 
                background: 'linear-gradient(135deg, #B8860B, #DAA520, #CD853F)',
                borderRadius: '10px',
                boxShadow: 'inset 0px 1px 2px rgba(255,255,255,0.15), 0 3px 12px rgba(184,134,11,0.25)',
                height: isMobile ? '52px' : 'clamp(48px, 6vw, 52px)',
                border: '1px solid rgba(218,165,32,0.3)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #A0750A, #B8860B, #B8860B)';
                e.currentTarget.style.boxShadow = 'inset 0px 1px 2px rgba(255,255,255,0.15), 0 4px 16px rgba(184,134,11,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #B8860B, #DAA520, #CD853F)';
                e.currentTarget.style.boxShadow = 'inset 0px 1px 2px rgba(255,255,255,0.15), 0 3px 12px rgba(184,134,11,0.25)';
              }}
              onClick={() => window.location.href = '/festival-kits'}
            >
              <Star className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 stroke-[1.5] text-white" />
              <span className="font-medium tracking-wide">Shop Kits</span>
            </Button>
          </div>
          
          {/* Browse all products - clean minimal with gold underline */}
          <a 
            href="/products/all" 
            className={`text-muted-foreground hover:text-foreground font-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm px-1 ${isMobile ? 'text-[13px] mb-1 underline decoration-1 decoration-[#DAA520] underline-offset-4 hover:underline-offset-2' : 'text-sm underline underline-offset-4 hover:underline-offset-2'}`}
          >
            Browse all products
          </a>
          
          {/* Trust badges - premium saffron styling with enhanced visibility */}
          <div className={`flex flex-wrap items-center justify-center gap-5 text-muted-foreground ${isMobile ? 'text-xs mt-4' : 'text-xs md:text-sm mt-5'}`}>
            <div className={`flex items-center gap-2 ${isMobile ? 'text-[#E67E22]' : ''}`}>
              <Shield className={`${isMobile ? 'w-4 h-4 stroke-[2.5]' : 'w-3 h-3 md:w-4 md:h-4'}`} />
              <span className={`${isMobile ? 'font-semibold tracking-wide' : ''}`}>Secure Checkout</span>
            </div>
            <span className="text-primary/50">•</span>
            <div className={`flex items-center gap-2 ${isMobile ? 'text-[#E67E22]' : ''}`}>
              <Truck className={`${isMobile ? 'w-4 h-4 stroke-[2.5]' : 'w-3 h-3 md:w-4 md:h-4'}`} />
              <span className={`${isMobile ? 'font-semibold tracking-wide' : ''}`}>Fast Shipping</span>
            </div>
            <span className="text-primary/50">•</span>
            <div className={`flex items-center gap-2 ${isMobile ? 'text-[#E67E22]' : ''}`}>
              <Package className={`${isMobile ? 'w-4 h-4 stroke-[2.5]' : 'w-3 h-3 md:w-4 md:h-4'}`} />
              <span className={`${isMobile ? 'font-semibold tracking-wide' : ''}`}>Hand-packed</span>
            </div>
            <span className="text-primary/50">•</span>
            <div className={`flex items-center gap-2 ${isMobile ? 'text-[#E67E22]' : ''}`}>
              <MapPin className={`${isMobile ? 'w-4 h-4 stroke-[2.5]' : 'w-3 h-3 md:w-4 md:h-4'}`} />
              <span className={`${isMobile ? 'font-semibold tracking-wide' : ''}`}>Made in India</span>
            </div>
          </div>
        </div>
        
        {/* Stats tiles - Premium embossed golden gradient borders */}
        <div className={`px-4 ${isMobile ? 'mt-7' : 'mt-12 md:mt-16'}`}>
          <div className={`text-center animate-[fade-in_1s_ease-out_0.8s_both] ${isMobile ? 'max-w-xs mx-auto' : 'gap-4 md:gap-8 max-w-sm md:max-w-md mx-auto'}`}>
            <div className={`${isMobile ? 'flex gap-3 relative' : 'grid grid-cols-2 gap-3'}`}>
              <div className={`bg-gradient-to-br from-orange-50/80 via-yellow-50/70 to-[#DAA520]/20 backdrop-blur-sm transition-all duration-500 ${isMobile ? 'flex-1 p-5 rounded-2xl border border-[#DAA520]/40 shadow-[0_8px_25px_rgba(218,165,32,0.25),0_3px_10px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(218,165,32,0.15)]' : 'p-4 md:p-6 rounded-xl md:rounded-2xl border border-[#DAA520]/35 shadow-[0_10px_30px_rgba(218,165,32,0.2),0_4px_15px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(218,165,32,0.12)]'} relative overflow-hidden hover:shadow-[0_12px_35px_rgba(218,165,32,0.3),0_6px_20px_rgba(0,0,0,0.1)] hover:border-[#DAA520]/50 hover:scale-[1.01] group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/12 via-[#FFD700]/8 to-transparent opacity-60 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FFD700]/6 to-transparent opacity-40 pointer-events-none"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/30 to-transparent"></div>
                {isMobile && <Box className="w-4 h-4 text-[#E67E22] mx-auto mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300" />}
                <div className="relative z-10">
                  <AnimatedCounter target="20+" label="Products" />
                </div>
              </div>
              
              {/* Enhanced golden divider with glow */}
              {isMobile && (
                <div className="flex items-center">
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#DAA520]/60 to-transparent shadow-[0_0_10px_rgba(218,165,32,0.5)]"></div>
                </div>
              )}
              
              <div className={`bg-gradient-to-br from-orange-50/80 via-yellow-50/70 to-[#DAA520]/20 backdrop-blur-sm transition-all duration-500 ${isMobile ? 'flex-1 p-5 rounded-2xl border border-[#DAA520]/40 shadow-[0_8px_25px_rgba(218,165,32,0.25),0_3px_10px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(218,165,32,0.15)]' : 'p-4 md:p-6 rounded-xl md:rounded-2xl border border-[#DAA520]/35 shadow-[0_10px_30px_rgba(218,165,32,0.2),0_4px_15px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(218,165,32,0.12)]'} relative overflow-hidden hover:shadow-[0_12px_35px_rgba(218,165,32,0.3),0_6px_20px_rgba(0,0,0,0.1)] hover:border-[#DAA520]/50 hover:scale-[1.01] group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/12 via-[#FFD700]/8 to-transparent opacity-60 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FFD700]/6 to-transparent opacity-40 pointer-events-none"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/30 to-transparent"></div>
                {isMobile && <Users className="w-4 h-4 text-[#E67E22] mx-auto mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300" />}
                <div className="relative z-10">
                  <AnimatedCounter target="200+" label="Families Served" />
                </div>
              </div>
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