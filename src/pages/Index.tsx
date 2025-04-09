
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GothamSkyline from "@/assets/GothamSkyline";
import BatLogo from "@/assets/BatLogo";
import RiddlerLogo from "@/assets/RiddlerLogo";
import AnimatedBats from "@/components/AnimatedBats";
import RiddlerGlitches from "@/components/RiddlerGlitches";

const Index = () => {
  const [riddlerVisible, setRiddlerVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [titleVisible, setTitleVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    // Loading sequence
    const timer1 = setTimeout(() => setLoading(false), 2000);
    const timer2 = setTimeout(() => setLogoVisible(true), 2500);
    const timer3 = setTimeout(() => setTitleVisible(true), 3000);
    const timer4 = setTimeout(() => setButtonVisible(true), 3500);
    
    // Riddler glitch appearance
    const riddlerInterval = setInterval(() => {
      setRiddlerVisible(true);
      setTimeout(() => setRiddlerVisible(false), 200);
    }, 5000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearInterval(riddlerInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-batman-dark text-white">
      {/* Background */}
      <GothamSkyline />
      
      {/* Animated elements */}
      <AnimatedBats />
      <RiddlerGlitches />
      
      {/* Loading screen */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-batman-dark z-50">
          <div className="text-xl font-mono text-white animate-pulse">
            Initializing Gotham Security Protocol...
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center px-4 sm:px-6 space-y-12 py-16">
        {/* Logo */}
        <div className={`transition-all duration-1000 transform ${logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <BatLogo className="h-24 sm:h-32 text-white" />
        </div>
        
        {/* Title */}
        <div className={`text-center space-y-4 transition-all duration-1000 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl font-batman font-bold tracking-wider">
          Wayne Enterprises
          </h1>
          <div className="text-xl sm:text-2xl text-gray-400 font-light">
          Enter the secure portal of Wayne Enterprises. 
          </div>
          <p className="max-w-2xl mx-auto text-gray-400 my-4">
            The Riddler is watching...
          </p>
        </div>
        
        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${buttonVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <Link to="/login">
            <Button className="bg-batman-primary hover:bg-batman-secondary text-white px-8 py-6 text-lg">
              Enter Portal
            </Button>
          </Link>
        </div>
        
        {/* Riddler logo glitch */}
        {riddlerVisible && (
          <div className="absolute inset-0 flex items-center justify-center animate-glitch">
            <RiddlerLogo className="h-64 text-riddler-neon opacity-30" />
          </div>
        )}
        
        {/* Footer with CTF instructions */}
        <div className={`absolute bottom-4 left-4 right-4 text-center text-sm text-gray-500 transition-all duration-1000 ${buttonVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>
            <span className="text-riddler-neon">.-. .. -.. -.. .-.. . .-. / .-- .- ... / .... . .-. .</span>
          </p>
          <p className="text-xs mt-1">
            {/* HTML comment for CTF players to find */}
            {/* <!-- Debug credentials: Username: bruce, Password: wayne123 --> */}
            Protected by Batman • EnigmaCTF 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
