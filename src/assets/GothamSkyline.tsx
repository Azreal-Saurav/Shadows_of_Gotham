
import React from "react";

const GothamSkyline: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <svg
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Night Sky Background */}
        <rect width="1200" height="400" fill="#0F1729" />
        
        {/* Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1200}
            cy={Math.random() * 200}
            r={Math.random() * 1.5}
            fill="#FFFFFF"
            opacity={Math.random() * 0.8 + 0.2}
            className={`animate-flicker`}
            style={{ animationDelay: `${Math.random() * 5}s` }}
          />
        ))}
        
        {/* Bat Signal */}
        <circle
          cx="600"
          cy="120"
          r="40"
          fill="url(#batSignal)"
          opacity="0.2"
          className="animate-pulse"
        />
        
        {/* Buildings - Left Side */}
        <rect x="50" y="200" width="40" height="200" fill="#1A202C" />
        <rect x="90" y="150" width="60" height="250" fill="#2D3748" />
        <rect x="150" y="220" width="30" height="180" fill="#1A202C" />
        <rect x="180" y="180" width="70" height="220" fill="#2D3748" />
        <rect x="250" y="250" width="50" height="150" fill="#1A202C" />
        <rect x="300" y="150" width="80" height="250" fill="#2D3748" />
        
        {/* Wayne Tower (Central) */}
        <rect x="500" y="100" width="100" height="300" fill="#1A202C" />
        <polygon
          points="500,100 600,100 550,50"
          fill="#2D3748"
        />
        <rect x="530" y="120" width="40" height="60" fill="#4A5568" />
        <rect x="530" y="200" width="40" height="60" fill="#4A5568" />
        <rect x="530" y="280" width="40" height="60" fill="#4A5568" />
        
        {/* Buildings - Right Side */}
        <rect x="700" y="180" width="60" height="220" fill="#2D3748" />
        <rect x="760" y="220" width="40" height="180" fill="#1A202C" />
        <rect x="800" y="150" width="70" height="250" fill="#2D3748" />
        <rect x="870" y="200" width="50" height="200" fill="#1A202C" />
        <rect x="920" y="170" width="90" height="230" fill="#2D3748" />
        <rect x="1010" y="220" width="40" height="180" fill="#1A202C" />
        <rect x="1050" y="180" width="70" height="220" fill="#2D3748" />
        
        {/* Windows - scattered across buildings */}
        {Array.from({ length: 200 }).map((_, i) => {
          const building = Math.floor(Math.random() * 10);
          let x = 0, y = 0;
          
          switch(building) {
            case 0: x = 60 + Math.random() * 20; y = 210 + Math.random() * 180; break;
            case 1: x = 100 + Math.random() * 40; y = 160 + Math.random() * 230; break;
            case 2: x = 190 + Math.random() * 50; y = 190 + Math.random() * 200; break;
            case 3: x = 310 + Math.random() * 60; y = 160 + Math.random() * 230; break;
            case 4: x = 510 + Math.random() * 80; y = 110 + Math.random() * 280; break;
            case 5: x = 710 + Math.random() * 40; y = 190 + Math.random() * 200; break;
            case 6: x = 810 + Math.random() * 50; y = 160 + Math.random() * 230; break;
            case 7: x = 930 + Math.random() * 70; y = 180 + Math.random() * 210; break;
            case 8: x = 1020 + Math.random() * 20; y = 230 + Math.random() * 160; break;
            case 9: x = 1060 + Math.random() * 50; y = 190 + Math.random() * 200; break;
          }
          
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={3}
              height={5}
              fill="#F7FAFC"
              opacity={Math.random() > 0.7 ? Math.random() * 0.8 + 0.2 : 0}
              className={Math.random() > 0.8 ? "animate-flicker" : ""}
              style={Math.random() > 0.8 ? { animationDelay: `${Math.random() * 5}s` } : {}}
            />
          );
        })}
        
        {/* Gradients */}
        <defs>
          <radialGradient id="batSignal" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#F7FAFC" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#F7FAFC" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GothamSkyline;
