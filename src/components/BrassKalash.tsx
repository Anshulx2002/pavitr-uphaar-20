import { useEffect, useState } from "react";

const BrassKalash = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`absolute left-4 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 transition-all duration-1000 z-[9999] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="relative w-16 h-20 md:w-20 md:h-24 lg:w-24 lg:h-28">
        {/* Enhanced Background for Visibility */}
        <div className="absolute inset-0 bg-gradient-radial from-black/25 via-black/15 to-transparent rounded-full scale-125 blur-sm"></div>
        
        {/* Stronger Divine Pulsing Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-[#DAA520]/40 via-[#F39C12]/25 to-transparent rounded-full scale-125 animate-[divine-pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/35 via-[#DAA520]/20 to-transparent rounded-full scale-150 animate-[divine-pulse_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#FF8C00]/25 via-transparent to-transparent rounded-full scale-175 animate-[divine-pulse_6s_ease-in-out_infinite_2s]"></div>
        
        {/* Kalash SVG - Premium Luxury Design */}
        <svg
          viewBox="0 0 120 140"
          className="w-full h-full relative z-[10000]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Premium Kalash Base with Depth */}
          <ellipse
            cx="60"
            cy="135"
            rx="28"
            ry="6"
            fill="url(#premiumBaseGradient)"
            filter="url(#baseShadow)"
          />
          
          {/* Sophisticated Kalash Body */}
          <path
            d="M 32 135 Q 32 125 35 115 Q 40 100 48 90 Q 55 82 60 82 Q 65 82 72 90 Q 80 100 85 115 Q 88 125 88 135"
            fill="url(#premiumKalashGradient)"
            stroke="url(#kalashHighlight)"
            strokeWidth="0.8"
            filter="url(#bodyDepth)"
          />
          
          {/* Elegant Neck */}
          <rect
            x="54"
            y="75"
            width="12"
            height="12"
            fill="url(#premiumKalashGradient)"
            stroke="url(#kalashHighlight)"
            strokeWidth="0.6"
            rx="1"
          />
          
          {/* Refined Mouth with Rim */}
          <ellipse
            cx="60"
            cy="75"
            rx="9"
            ry="2.5"
            fill="url(#rimGradient)"
            stroke="url(#kalashHighlight)"
            strokeWidth="0.4"
          />
          
          {/* Premium Coconut */}
          <circle
            cx="60"
            cy="65"
            r="9"
            fill="url(#premiumCoconutGradient)"
            stroke="#8B4513"
            strokeWidth="0.4"
            filter="url(#coconutTexture)"
          />
          
          {/* Realistic Coconut Fibers */}
          <g stroke="#654321" strokeWidth="0.3" opacity="0.8">
            <path d="M 57 58 Q 57 65 57 72" />
            <path d="M 60 57 Q 60 65 60 73" />
            <path d="M 63 58 Q 63 65 63 72" />
            <path d="M 55 60 Q 58 63 61 60" />
            <path d="M 59 70 Q 62 67 65 70" />
          </g>
          
          {/* Sophisticated Mango Leaves */}
          <g className="animate-[luxury-sway_6s_ease-in-out_infinite]">
            {/* Left Leaf Cluster */}
            <path
              d="M 48 72 Q 42 67 35 70 Q 30 72 33 78 Q 38 82 45 78 Q 48 75 48 72"
              fill="url(#premiumLeafGradient)"
              stroke="#2D5016"
              strokeWidth="0.3"
              filter="url(#leafShadow)"
            />
            <path
              d="M 46 70 Q 39 65 32 68 Q 27 70 30 76 Q 35 80 43 76 Q 46 73 46 70"
              fill="url(#premiumLeafGradient)"
              stroke="#2D5016"
              strokeWidth="0.3"
            />
            <path
              d="M 44 68 Q 36 63 29 66 Q 24 68 27 74 Q 32 78 41 74 Q 44 71 44 68"
              fill="url(#premiumLeafGradient)"
              stroke="#2D5016"
              strokeWidth="0.3"
            />
            
            {/* Right Leaf Cluster */}
            <path
              d="M 72 72 Q 78 67 85 70 Q 90 72 87 78 Q 82 82 75 78 Q 72 75 72 72"
              fill="url(#premiumLeafGradient)"
              stroke="#2D5016"
              strokeWidth="0.3"
              filter="url(#leafShadow)"
            />
            <path
              d="M 74 70 Q 81 65 88 68 Q 93 70 90 76 Q 85 80 77 76 Q 74 73 74 70"
              fill="url(#premiumLeafGradient)"
              stroke="#2D5016"
              strokeWidth="0.3"
            />
            <path
              d="M 76 68 Q 84 63 91 66 Q 96 68 93 74 Q 88 78 79 74 Q 76 71 76 68"
              fill="url(#premiumLeafGradient)"
              stroke="#2D5016"
              strokeWidth="0.3"
            />
            
            {/* Top Central Leaves */}
            <path
              d="M 60 58 Q 58 52 62 49 Q 67 47 70 52 Q 70 58 66 61 Q 60 62 60 58"
              fill="url(#premiumLeafGradient)"
              stroke="#2D5016"
              strokeWidth="0.3"
            />
            <path
              d="M 58 56 Q 56 50 60 47 Q 65 45 68 50 Q 68 56 64 59 Q 58 60 58 56"
              fill="url(#premiumLeafGradient)"
              stroke="#2D5016"
              strokeWidth="0.3"
            />
          </g>
          
          {/* Luxury Decorative Patterns */}
          <g opacity="0.9" stroke="url(#engravingGold)" strokeWidth="0.3" fill="url(#patternFill)">
            <circle cx="48" cy="105" r="2" opacity="0.8" />
            <circle cx="72" cy="105" r="2" opacity="0.8" />
            <circle cx="60" cy="110" r="1.5" opacity="0.7" />
            
            {/* Traditional Ornate Pattern */}
            <path
              d="M 42 115 Q 48 113 54 115 Q 60 117 66 115 Q 72 113 78 115"
              stroke="url(#engravingGold)"
              strokeWidth="0.8"
              fill="none"
              opacity="0.8"
            />
            
            {/* Sacred Symbols */}
            <circle cx="45" cy="95" r="1.5" opacity="0.6" />
            <circle cx="75" cy="95" r="1.5" opacity="0.6" />
            <path d="M 50 100 Q 55 98 60 100 Q 65 98 70 100" stroke="url(#engravingGold)" strokeWidth="0.5" fill="none" />
          </g>
          
          {/* Premium Reflective Shine */}
          <ellipse
            cx="52"
            cy="100"
            rx="4"
            ry="15"
            fill="url(#luxuryShineGradient)"
            opacity="0.7"
          />
          
          {/* Secondary Shine */}
          <ellipse
            cx="68"
            cy="95"
            rx="2"
            ry="8"
            fill="url(#luxuryShineGradient)"
            opacity="0.5"
          />
          
          {/* Premium Gradients and Effects */}
          <defs>
            {/* Sophisticated Kalash Gradients */}
            <radialGradient id="premiumKalashGradient" cx="0.25" cy="0.25">
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
            
            <linearGradient id="kalashHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFACD" />
              <stop offset="30%" stopColor="#FFE55C" />
              <stop offset="100%" stopColor="#DAA520" />
            </linearGradient>
            
            <radialGradient id="premiumCoconutGradient" cx="0.3" cy="0.3">
              <stop offset="0%" stopColor="#F5DEB3" />
              <stop offset="40%" stopColor="#D2B48C" />
              <stop offset="80%" stopColor="#CD853F" />
              <stop offset="100%" stopColor="#8B4513" />
            </radialGradient>
            
            <linearGradient id="premiumLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ADFF2F" />
              <stop offset="30%" stopColor="#9ACD32" />
              <stop offset="70%" stopColor="#6B8E23" />
              <stop offset="100%" stopColor="#556B2F" />
            </linearGradient>
            
            <radialGradient id="engravingGold" cx="0.3" cy="0.3">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="#B8860B" />
            </radialGradient>
            
            <radialGradient id="patternFill" cx="0.4" cy="0.4">
              <stop offset="0%" stopColor="#FFE55C" />
              <stop offset="100%" stopColor="#DAA520" />
            </radialGradient>
            
            <linearGradient id="luxuryShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#FFFACD" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#FFE55C" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Premium Filters */}
            <filter id="baseShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.4"/>
            </filter>
            
            <filter id="bodyDepth" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#654321" floodOpacity="0.3"/>
            </filter>
            
            <filter id="coconutTexture" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0.5" dy="1" stdDeviation="0.8" floodColor="#8B4513" floodOpacity="0.6"/>
            </filter>
            
            <filter id="leafShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0.3" dy="0.8" stdDeviation="0.5" floodColor="#2D5016" floodOpacity="0.5"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default BrassKalash;