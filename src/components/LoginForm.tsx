
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import BatLogo from "@/assets/BatLogo";
import { Eye, EyeOff, Lock, User } from "lucide-react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }
    
    const success = await login(username, password);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <Card className="w-full max-w-md border border-batman-secondary bg-batman-dark/90 backdrop-blur-lg shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex justify-center">
          <BatLogo className="h-16 text-white" />
        </div>
        <CardTitle className="text-2xl text-center font-batman">WAYNE ENTERPRISES</CardTitle>
        <CardDescription className="text-center text-gray-400">
          Secure Access Portal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-medium text-gray-400">
              Username
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <User size={16} />
              </div>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="pl-10 bg-batman-primary/70 border-batman-secondary text-white placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-400">
              Password
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Lock size={16} />
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pl-10 pr-10 bg-batman-primary/70 border-batman-secondary text-white placeholder:text-gray-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          
          {error && (
            <div className="text-destructive text-sm px-1">{error}</div>
          )}
          
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-batman-primary hover:bg-batman-secondary text-white transition-colors duration-300"
          >
            {isLoading ? "Authenticating..." : "LOGIN"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pt-0">
        <div className="text-xs text-gray-500 italic mt-2 text-center">
          {/* Hidden message in HTML comments for CTF players to find */}
          {/* <!-- Riddler was here. The secret is not in the frontend. Look at the JWT token. --> */}
          System Security Level: Maximum • Authorized Personnel Only
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
