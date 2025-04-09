
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RiddlerLogo from "@/assets/RiddlerLogo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-batman-dark p-4">
      <RiddlerLogo className="h-24 text-riddler-neon animate-glitch mb-8" />
      
      <h1 className="text-4xl font-bold mb-4 text-white glitch-text" data-text="404">
        404
      </h1>
      
      <div className="mb-8 text-center">
        <p className="text-xl text-gray-400 mb-2">
          Riddle me this: What page is missing and cannot be found?
        </p>
        <p className="text-riddler-neon font-mono">
          The one you're looking for!
        </p>
      </div>
      
      <Link to="/">
        <Button className="bg-batman-primary hover:bg-batman-secondary text-white">
          Return to Gotham
        </Button>
      </Link>
      
      {/* Hidden hint */}
      <div className="mt-12 text-xs text-gray-600 font-mono">
        {/* Even in error pages, clues might be hiding. Have you checked the JWT tokens? */}
      </div>
    </div>
  );
};

export default NotFound;
