import { useIsMobile } from "@/hooks/use-mobile";

const MarigoldGarland = () => {
  const isMobile = useIsMobile();

  return (
    <div className={`absolute top-0 left-0 right-0 z-10 pointer-events-none ${isMobile ? 'scale-[0.7]' : ''}`}>
      <svg
        width="100%"
        height={isMobile ? "60" : "80"}
        viewBox="0 0 1200 80"
        className="w-full h-auto drop-shadow-[0_2px_8px_rgba(243,156,18,0.3)] animate-[gentle-sway_35s_ease-in-out_infinite]"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* Garland String */}
        <path
          d="M0,25 Q150,20 300,25 Q450,30 600,25 Q750,20 900,25 Q1050,30 1200,25"
          stroke="#8B5A3C"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        
        {/* Repeating Marigold Flowers */}
        {Array.from({ length: 12 }, (_, i) => {
          const x = 100 + i * 100;
          const y = 25;
          const rotation = i * 15;
          const scale = 0.8 + (i % 3) * 0.1; // Slight size variation
          
          return (
            <g key={i} transform={`translate(${x}, ${y}) rotate(${rotation}) scale(${scale})`}>
              {/* Marigold Flower */}
              <g className="animate-[gentle-flower-bob_40s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.5}s` }}>
                {/* Outer petals */}
                {Array.from({ length: 8 }, (_, petalIndex) => {
                  const angle = (petalIndex * 45) * (Math.PI / 180);
                  const petalX = Math.cos(angle) * 12;
                  const petalY = Math.sin(angle) * 12;
                  
                  return (
                    <ellipse
                      key={petalIndex}
                      cx={petalX}
                      cy={petalY}
                      rx="8"
                      ry="4"
                      fill="url(#marigoldGradient)"
                      transform={`rotate(${petalIndex * 45})`}
                      opacity="0.9"
                    />
                  );
                })}
                
                {/* Inner petals */}
                {Array.from({ length: 6 }, (_, petalIndex) => {
                  const angle = (petalIndex * 60) * (Math.PI / 180);
                  const petalX = Math.cos(angle) * 8;
                  const petalY = Math.sin(angle) * 8;
                  
                  return (
                    <ellipse
                      key={`inner-${petalIndex}`}
                      cx={petalX}
                      cy={petalY}
                      rx="6"
                      ry="3"
                      fill="url(#marigoldInnerGradient)"
                      transform={`rotate(${petalIndex * 60})`}
                      opacity="0.8"
                    />
                  );
                })}
                
                {/* Flower center */}
                <circle
                  cx="0"
                  cy="0"
                  r="4"
                  fill="url(#centerGradient)"
                  opacity="0.9"
                />
              </g>
            </g>
          );
        })}
        
        {/* Mango Leaves (Aam-patta) between flower clusters */}
        {Array.from({ length: 6 }, (_, i) => {
          const x = 200 + i * 200;
          const y = 35;
          const rotation = -10 + (i % 2) * 20;
          
          return (
            <g key={`leaf-${i}`} transform={`translate(${x}, ${y}) rotate(${rotation})`}>
              <path
                d="M0,0 Q-5,-8 -8,-12 Q-10,-15 -8,-18 Q-5,-20 0,-18 Q5,-20 8,-18 Q10,-15 8,-12 Q5,-8 0,0 Z"
                fill="url(#leafGradient)"
                opacity="0.7"
                className="animate-[gentle-leaf-sway_30s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.8}s` }}
              />
            </g>
          );
        })}
        
        {/* Gradients */}
        <defs>
          {/* Marigold outer gradient - soft saffron/orange */}
          <radialGradient id="marigoldGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
            <stop offset="30%" stopColor="#F39C12" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#E67E22" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D35400" stopOpacity="0.8" />
          </radialGradient>
          
          {/* Marigold inner gradient - deeper saffron */}
          <radialGradient id="marigoldInnerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="50%" stopColor="#F39C12" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E67E22" stopOpacity="0.9" />
          </radialGradient>
          
          {/* Flower center gradient */}
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="1" />
            <stop offset="50%" stopColor="#DAA520" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.8" />
          </radialGradient>
          
          {/* Mango leaf gradient - muted green */}
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#90EE90" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#7CB342" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#689F38" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#558B2F" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MarigoldGarland;