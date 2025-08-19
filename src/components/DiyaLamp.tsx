import { useEffect, useState } from "react";

const DiyaLamp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`absolute right-4 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 transition-all duration-1000 z-[9999] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="relative w-16 h-20 md:w-20 md:h-24 lg:w-24 lg:h-28">
        {/* Enhanced Background for Visibility */}
        <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/10 to-transparent rounded-full scale-125 blur-sm"></div>
        
        {/* Stronger Golden Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-[#DAA520]/50 via-[#F39C12]/30 to-transparent rounded-full scale-150 animate-pulse opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/40 via-[#DAA520]/25 to-transparent rounded-full scale-125 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#FF8C00]/30 via-transparent to-transparent rounded-full scale-200 animate-pulse delay-1000 opacity-60"></div>
        
        {/* Diya SVG */}
        <svg
          viewBox="0 0 120 140"
          className="w-full h-full relative z-[10000]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Diya Base */}
          <ellipse
            cx="60"
            cy="120"
            rx="45"
            ry="15"
            fill="url(#diyaGradient)"
            stroke="url(#brassStroke)"
            strokeWidth="1"
          />
          
          {/* Diya Bowl */}
          <path
            d="M 20 120 Q 20 100 40 95 L 80 95 Q 100 100 100 120 Q 95 125 90 125 L 30 125 Q 25 125 20 120 Z"
            fill="url(#diyaGradient)"
            stroke="url(#brassStroke)"
            strokeWidth="1"
          />
          
          {/* Diya Spout */}
          <ellipse
            cx="95"
            cy="120"
            rx="8"
            ry="5"
            fill="url(#diyaGradient)"
            stroke="url(#brassStroke)"
            strokeWidth="1"
          />
          
          {/* Oil/Wick Area */}
          <ellipse
            cx="60"
            cy="115"
            rx="25"
            ry="8"
            fill="url(#oilGradient)"
          />
          
          {/* Wick */}
          <rect
            x="93"
            y="115"
            width="3"
            height="8"
            fill="#8B4513"
            rx="1"
          />
          
          {/* Flame */}
          <g className="animate-[sway_3s_ease-in-out_infinite]">
            <path
              d="M 95 115 Q 92 105 95 95 Q 98 90 102 95 Q 105 100 102 110 Q 100 115 95 115"
              fill="url(#flameGradient)"
              className="animate-[flicker_2s_ease-in-out_infinite]"
            />
            <path
              d="M 95 112 Q 93 108 95 105 Q 97 103 99 105 Q 101 108 99 112 Q 97 115 95 112"
              fill="url(#innerFlameGradient)"
              className="animate-[flicker_2s_ease-in-out_infinite_0.5s]"
            />
          </g>
          
          {/* Decorative Patterns */}
          <circle cx="45" cy="110" r="2" fill="url(#decorativeGold)" opacity="0.7" />
          <circle cx="75" cy="110" r="2" fill="url(#decorativeGold)" opacity="0.7" />
          <circle cx="60" cy="105" r="1.5" fill="url(#decorativeGold)" opacity="0.6" />
          
          {/* Gradients */}
          <defs>
            <radialGradient id="diyaGradient" cx="0.3" cy="0.3">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="30%" stopColor="#DAA520" />
              <stop offset="70%" stopColor="#B8860B" />
              <stop offset="100%" stopColor="#8B6914" />
            </radialGradient>
            
            <linearGradient id="brassStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            
            <radialGradient id="oilGradient" cx="0.5" cy="0.3">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#654321" />
            </radialGradient>
            
            <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="30%" stopColor="#FF8C42" />
              <stop offset="60%" stopColor="#FFA726" />
              <stop offset="100%" stopColor="#FFD54F" />
            </linearGradient>
            
            <linearGradient id="innerFlameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF8C42" />
              <stop offset="50%" stopColor="#FFB74D" />
              <stop offset="100%" stopColor="#FFF176" />
            </linearGradient>
            
            <radialGradient id="decorativeGold" cx="0.3" cy="0.3">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#DAA520" />
            </radialGradient>
          </defs>
        </svg>
        
        {/* Enhanced Flame Light Effect */}
        <div className="absolute top-0 right-2 w-8 h-10 bg-gradient-radial from-[#FFA726]/60 via-[#FF8C42]/40 to-transparent rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-1 right-3 w-6 h-8 bg-gradient-radial from-[#FFD54F]/50 via-[#FFA726]/30 to-transparent rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default DiyaLamp;