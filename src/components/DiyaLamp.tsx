import { useEffect, useState } from "react";

const DiyaLamp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`absolute right-4 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 transition-all duration-1000 z-[9999] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="relative w-8 h-10 md:w-20 md:h-24 lg:w-24 lg:h-28 opacity-40 md:opacity-100">
        {/* Enhanced Background for Visibility */}
        <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/10 to-transparent rounded-full scale-125 blur-sm"></div>
        
        {/* Stronger Golden Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-[#DAA520]/50 via-[#F39C12]/30 to-transparent rounded-full scale-150 animate-pulse opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/40 via-[#DAA520]/25 to-transparent rounded-full scale-125 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#FF8C00]/30 via-transparent to-transparent rounded-full scale-200 animate-pulse delay-1000 opacity-60"></div>
        
        {/* Diya SVG - Premium Luxury Design */}
        <svg
          viewBox="0 0 120 140"
          className="w-full h-full relative z-[10000]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Premium Diya Base with Depth */}
          <ellipse
            cx="60"
            cy="125"
            rx="48"
            ry="12"
            fill="url(#premiumBaseGradient)"
            filter="url(#dropShadow)"
          />
          
          {/* Main Diya Body - Sophisticated Shape */}
          <path
            d="M 18 125 Q 18 108 25 98 Q 35 85 50 82 L 70 82 Q 85 85 95 98 Q 102 108 102 125 Q 98 130 92 130 L 28 130 Q 22 130 18 125 Z"
            fill="url(#premiumBrassGradient)"
            stroke="url(#brassHighlight)"
            strokeWidth="0.8"
            filter="url(#innerShadow)"
          />
          
          {/* Elegant Rim */}
          <ellipse
            cx="60"
            cy="125"
            rx="42"
            ry="8"
            fill="url(#rimGradient)"
            stroke="url(#brassHighlight)"
            strokeWidth="0.5"
          />
          
          {/* Sophisticated Spout */}
          <path
            d="M 95 125 Q 105 123 112 125 Q 115 127 112 130 Q 105 132 95 130"
            fill="url(#premiumBrassGradient)"
            stroke="url(#brassHighlight)"
            strokeWidth="0.5"
          />
          
          {/* Premium Oil Surface */}
          <ellipse
            cx="60"
            cy="122"
            rx="35"
            ry="6"
            fill="url(#oilSurfaceGradient)"
            opacity="0.9"
          />
          
          {/* Refined Wick */}
          <rect
            x="107"
            y="120"
            width="2.5"
            height="8"
            fill="#654321"
            rx="1"
            filter="url(#wickShadow)"
          />
          
          {/* Elegant Flame - Realistic */}
          <g className="animate-[elegant-flame_4s_ease-in-out_infinite]">
            <path
              d="M 108 120 Q 105 108 108 98 Q 111 92 116 98 Q 119 105 116 115 Q 113 120 108 120"
              fill="url(#realisticFlameGradient)"
              filter="url(#flameGlow)"
              className="animate-[subtle-flicker_3s_ease-in-out_infinite]"
            />
            <path
              d="M 108 117 Q 106 113 108 109 Q 110 107 112 109 Q 114 113 112 117 Q 110 120 108 117"
              fill="url(#innerFlameGradient)"
              className="animate-[subtle-flicker_3s_ease-in-out_infinite_0.8s]"
            />
            <ellipse
              cx="109"
              cy="113"
              rx="1.5"
              ry="3"
              fill="url(#flameCoreGradient)"
              opacity="0.9"
            />
          </g>
          
          {/* Premium Decorative Engravings */}
          <g opacity="0.8" stroke="url(#engravingStroke)" strokeWidth="0.4" fill="none">
            <circle cx="45" cy="105" r="3" />
            <circle cx="75" cy="105" r="3" />
            <path d="M 40 110 Q 50 108 60 110 Q 70 108 80 110" />
            <path d="M 35 115 Q 45 113 55 115 Q 65 113 75 115 Q 85 113 95 115" />
          </g>
          
          {/* Luxury Brass Highlight */}
          <ellipse
            cx="50"
            cy="95"
            rx="4"
            ry="12"
            fill="url(#brassHighlight)"
            opacity="0.6"
          />
          
          {/* Premium Gradients and Effects */}
          <defs>
            {/* Sophisticated Brass Gradient */}
            <radialGradient id="premiumBrassGradient" cx="0.25" cy="0.25">
              <stop offset="0%" stopColor="#FFE55C" />
              <stop offset="20%" stopColor="#DAA520" />
              <stop offset="60%" stopColor="#B8860B" />
              <stop offset="100%" stopColor="#8B6914" />
            </radialGradient>
            
            <linearGradient id="premiumBaseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#CD853F" />
              <stop offset="50%" stopColor="#B8860B" />
              <stop offset="100%" stopColor="#8B6914" />
            </linearGradient>
            
            <radialGradient id="rimGradient" cx="0.3" cy="0.2">
              <stop offset="0%" stopColor="#FFE55C" />
              <stop offset="70%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="#B8860B" />
            </radialGradient>
            
            <linearGradient id="brassHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFACD" />
              <stop offset="30%" stopColor="#FFE55C" />
              <stop offset="100%" stopColor="#DAA520" />
            </linearGradient>
            
            <radialGradient id="oilSurfaceGradient" cx="0.4" cy="0.3">
              <stop offset="0%" stopColor="#2F1B14" />
              <stop offset="70%" stopColor="#654321" />
              <stop offset="100%" stopColor="#8B4513" />
            </radialGradient>
            
            {/* Realistic Flame Gradients */}
            <linearGradient id="realisticFlameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="25%" stopColor="#FF6347" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="75%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFFACD" />
            </linearGradient>
            
            <linearGradient id="innerFlameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="40%" stopColor="#FFB347" />
              <stop offset="100%" stopColor="#FFF8DC" />
            </linearGradient>
            
            <radialGradient id="flameCoreGradient" cx="0.5" cy="0.7">
              <stop offset="0%" stopColor="#FFFACD" />
              <stop offset="60%" stopColor="#FFE4B5" />
              <stop offset="100%" stopColor="#FFB347" />
            </radialGradient>
            
            <linearGradient id="engravingStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B6914" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            
            {/* Premium Filters */}
            <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
            </filter>
            
            <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#654321" floodOpacity="0.4"/>
            </filter>
            
            <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="wickShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0.5" dy="1" stdDeviation="0.5" floodColor="#000000" floodOpacity="0.5"/>
            </filter>
          </defs>
        </svg>
        
        {/* Subtle Ambient Light */}
        <div className="absolute top-2 right-4 w-8 h-12 bg-gradient-radial from-[#FFA500]/30 via-[#FF8C00]/15 to-transparent rounded-full animate-[ambient-glow_5s_ease-in-out_infinite] blur-sm"></div>
      </div>
    </div>
  );
};

export default DiyaLamp;