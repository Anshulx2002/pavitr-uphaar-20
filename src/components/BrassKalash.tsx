import { useEffect, useState } from "react";

const BrassKalash = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`absolute left-4 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="relative w-16 h-20 md:w-20 md:h-24 lg:w-24 lg:h-28">
        {/* Enhanced Background for Visibility */}
        <div className="absolute inset-0 bg-gradient-radial from-black/25 via-black/15 to-transparent rounded-full scale-125 blur-sm"></div>
        
        {/* Stronger Divine Pulsing Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-[#DAA520]/40 via-[#F39C12]/25 to-transparent rounded-full scale-125 animate-[divine-pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/35 via-[#DAA520]/20 to-transparent rounded-full scale-150 animate-[divine-pulse_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#FF8C00]/25 via-transparent to-transparent rounded-full scale-175 animate-[divine-pulse_6s_ease-in-out_infinite_2s]"></div>
        
        {/* Kalash SVG */}
        <svg
          viewBox="0 0 120 140"
          className="w-full h-full relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Kalash Base */}
          <ellipse
            cx="60"
            cy="130"
            rx="25"
            ry="8"
            fill="url(#kalashGradient)"
            stroke="url(#brassStroke)"
            strokeWidth="1"
          />
          
          {/* Kalash Body */}
          <path
            d="M 35 130 Q 35 120 40 110 Q 45 95 55 85 Q 60 80 65 85 Q 75 95 80 110 Q 85 120 85 130"
            fill="url(#kalashGradient)"
            stroke="url(#brassStroke)"
            strokeWidth="1"
          />
          
          {/* Kalash Neck */}
          <rect
            x="55"
            y="75"
            width="10"
            height="15"
            fill="url(#kalashGradient)"
            stroke="url(#brassStroke)"
            strokeWidth="1"
            rx="2"
          />
          
          {/* Kalash Mouth */}
          <ellipse
            cx="60"
            cy="75"
            rx="8"
            ry="3"
            fill="url(#kalashGradient)"
            stroke="url(#brassStroke)"
            strokeWidth="1"
          />
          
          {/* Coconut */}
          <circle
            cx="60"
            cy="65"
            r="8"
            fill="url(#coconutGradient)"
            stroke="#8B4513"
            strokeWidth="0.5"
          />
          
          {/* Coconut Fibers */}
          <g stroke="#654321" strokeWidth="0.5" opacity="0.7">
            <line x1="58" y1="60" x2="58" y2="70" />
            <line x1="60" y1="59" x2="60" y2="71" />
            <line x1="62" y1="60" x2="62" y2="70" />
          </g>
          
          {/* Mango Leaves */}
          <g className="animate-[gentle-sway_5s_ease-in-out_infinite]">
            {/* Left Leaves */}
            <path
              d="M 50 70 Q 45 65 40 68 Q 35 70 38 75 Q 42 78 47 75 Q 50 72 50 70"
              fill="url(#leafGradient)"
              stroke="#2D5016"
              strokeWidth="0.5"
            />
            <path
              d="M 48 68 Q 42 63 37 66 Q 32 68 35 73 Q 39 76 45 73 Q 48 70 48 68"
              fill="url(#leafGradient)"
              stroke="#2D5016"
              strokeWidth="0.5"
            />
            
            {/* Right Leaves */}
            <path
              d="M 70 70 Q 75 65 80 68 Q 85 70 82 75 Q 78 78 73 75 Q 70 72 70 70"
              fill="url(#leafGradient)"
              stroke="#2D5016"
              strokeWidth="0.5"
            />
            <path
              d="M 72 68 Q 78 63 83 66 Q 88 68 85 73 Q 81 76 75 73 Q 72 70 72 68"
              fill="url(#leafGradient)"
              stroke="#2D5016"
              strokeWidth="0.5"
            />
            
            {/* Top Leaves */}
            <path
              d="M 60 60 Q 58 55 62 52 Q 66 50 68 55 Q 68 60 64 62 Q 60 63 60 60"
              fill="url(#leafGradient)"
              stroke="#2D5016"
              strokeWidth="0.5"
            />
          </g>
          
          {/* Decorative Patterns on Kalash */}
          <g opacity="0.8">
            <circle cx="50" cy="100" r="1.5" fill="url(#decorativeGold)" />
            <circle cx="70" cy="100" r="1.5" fill="url(#decorativeGold)" />
            <circle cx="60" cy="105" r="1" fill="url(#decorativeGold)" />
            
            {/* Traditional Pattern */}
            <path
              d="M 45 110 Q 50 108 55 110 Q 60 112 65 110 Q 70 108 75 110"
              stroke="url(#decorativeGold)"
              strokeWidth="1"
              fill="none"
            />
          </g>
          
          {/* Reflective Shine */}
          <ellipse
            cx="55"
            cy="95"
            rx="3"
            ry="8"
            fill="url(#shineGradient)"
            opacity="0.6"
          />
          
          {/* Gradients */}
          <defs>
            <radialGradient id="kalashGradient" cx="0.3" cy="0.3">
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
            
            <radialGradient id="coconutGradient" cx="0.3" cy="0.3">
              <stop offset="0%" stopColor="#D2B48C" />
              <stop offset="50%" stopColor="#CD853F" />
              <stop offset="100%" stopColor="#8B4513" />
            </radialGradient>
            
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9ACD32" />
              <stop offset="50%" stopColor="#6B8E23" />
              <stop offset="100%" stopColor="#556B2F" />
            </linearGradient>
            
            <radialGradient id="decorativeGold" cx="0.3" cy="0.3">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#DAA520" />
            </radialGradient>
            
            <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default BrassKalash;