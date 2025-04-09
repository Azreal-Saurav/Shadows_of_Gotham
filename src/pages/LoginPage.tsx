
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/LoginForm";
import GothamSkyline from "@/assets/GothamSkyline";
import AnimatedBats from "@/components/AnimatedBats";
import RiddlerGlitches from "@/components/RiddlerGlitches";

const LoginPage: React.FC = () => {
  const { user } = useAuth();
  
  // If already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-batman-dark">
      {/* Background */}
      <GothamSkyline />
      
      {/* Animated elements */}
      <AnimatedBats />
      <RiddlerGlitches />
      
      <div className="relative z-10 w-full max-w-md px-4 py-12 sm:px-6 sm:py-16">
        <LoginForm />
      </div>
      
      {/* Hidden div with Riddler's hint */}
      <div className="hidden">
        {/* 
          RIDDLER'S HINT:
          JWT tokens are like puzzles, easily broken apart.
          What if you could change your identity?
          Base64 encoding is a simple game.
          Change "user" to "admin" and you'll gain new powers.
        */}
      </div>
    </div>
  );
};

export default LoginPage;
