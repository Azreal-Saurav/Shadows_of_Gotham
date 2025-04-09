
import React, { useEffect, useState } from "react";
import QuestionMark from "@/assets/QuestionMark";

interface GlitchInstance {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const RiddlerGlitches: React.FC = () => {
  const [glitches, setGlitches] = useState<GlitchInstance[]>([]);

  useEffect(() => {
    const generateGlitches = () => {
      const newGlitches: GlitchInstance[] = [];
      const count = Math.floor(Math.random() * 3) + 1; // 1-3 glitches at a time
      
      for (let i = 0; i < count; i++) {
        newGlitches.push({
          id: Date.now() + i,
          x: Math.random() * 90 + 5, // random position (5-95%)
          y: Math.random() * 90 + 5, // random position (5-95%)
          size: Math.random() * 0.5 + 0.3, // random size between 0.3 and 0.8
          duration: Math.random() * 0.3 + 0.2, // random duration between 0.2-0.5s
          delay: Math.random() * 0.5, // random delay between 0-0.5s
          rotation: Math.random() * 60 - 30, // random rotation -30 to 30 degrees
        });
      }
      
      setGlitches(newGlitches);
    };
    
    // Generate glitches periodically
    const interval = setInterval(() => {
      generateGlitches();
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {glitches.map((glitch) => (
        <div
          key={glitch.id}
          className="absolute"
          style={{
            top: `${glitch.y}%`,
            left: `${glitch.x}%`,
            opacity: 0,
            animation: `question-appear ${glitch.duration}s ease-out ${glitch.delay}s forwards`,
          }}
        >
          <QuestionMark 
            className="text-riddler-neon opacity-80" 
            style={{
              transform: `scale(${glitch.size}) rotate(${glitch.rotation}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default RiddlerGlitches;
