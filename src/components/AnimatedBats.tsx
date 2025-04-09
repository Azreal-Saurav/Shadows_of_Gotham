
import React, { useEffect, useState } from "react";
import Bat from "@/assets/Bat";

interface BatInstance {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const AnimatedBats: React.FC = () => {
  const [bats, setBats] = useState<BatInstance[]>([]);

  useEffect(() => {
    const generateBats = () => {
      const newBats: BatInstance[] = [];
      const count = Math.floor(Math.random() * 5) + 3; // 3-7 bats
      
      for (let i = 0; i < count; i++) {
        newBats.push({
          id: Date.now() + i,
          x: Math.random() * 100, // random horizontal position
          y: Math.random() * 50 + 25, // random vertical position in middle area
          size: Math.random() * 0.5 + 0.2, // random size between 0.2 and 0.7
          duration: Math.random() * 8 + 4, // random duration between 4-12s
          delay: Math.random() * 2, // random delay between 0-2s
        });
      }
      
      setBats(newBats);
    };
    
    // Initial bats
    generateBats();
    
    // Generate new bats periodically
    const interval = setInterval(() => {
      generateBats();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bats.map((bat) => (
        <Bat
          key={bat.id}
          className="absolute text-black opacity-70"
          style={{
            top: `${bat.y}%`,
            left: `-50px`,
            transform: `scale(${bat.size})`,
            animation: `bat-fly ${bat.duration}s linear ${bat.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBats;
