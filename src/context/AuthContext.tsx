
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  username: string;
  role: string; // "user" or "admin"
  name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const createToken = (payload: any): string => {
  const header = { alg: "HS256", typ: "JWT" };
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  const signature = btoa("iAmBatman" + encodedHeader + encodedPayload);
  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

const decodeToken = (token: string): any => {
  try {
    const [, encodedPayload] = token.split(".");
    return JSON.parse(atob(encodedPayload));
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    if (storedToken) {
      try {
        const decoded = decodeToken(storedToken);
        if (decoded && decoded.exp > Date.now() / 1000) {
          setUser({
            id: decoded.id,
            username: decoded.username,
            role: decoded.role,
            name: decoded.name
          });
          setToken(storedToken);
        } else {
          localStorage.removeItem("auth_token");
        }
      } catch (error) {
        localStorage.removeItem("auth_token");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === "bruce" && password === "wayne123") {
          const userObj: User = {
            id: "1",
            username: "bruce",
            role: "user",
            name: "Bruce Wayne"
          };
          
          const payload = {
            ...userObj,
            exp: Math.floor(Date.now() / 1000) + 3600
          };
          
          const newToken = createToken(payload);
          
          localStorage.setItem("auth_token", newToken);
          
          setUser(userObj);
          setToken(newToken);
          setIsLoading(false);
          
          toast({
            title: "Login successful",
            description: "Welcome back, Bruce Wayne",
          });
          
          resolve(true);
        } else {
          setIsLoading(false);
          toast({
            variant: "destructive",
            title: "Login failed",
            description: "Invalid username or password",
          });
          resolve(false);
        }
      }, 1500);
    });
  };
  
  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
    setToken(null);
    toast({
      title: "Logged out successfully",
    });
  };
  
  const value = {
    user,
    isLoading,
    login,
    logout,
    token
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Easter egg comment:
// 
// ___R_I_D_D_L_E___M_E___T_H_I_S___
//
// I am the key to the kingdom,
// Easily broken, easily changed.
// A secret hidden in plain sight,
// Base64 is my game.
//
// Hint: Look for 'role': 'user' and change it to 'role': 'admin'
// Decode, modify, encode, and replace your token to unlock the Batcave.
//
// The token is not properly signed. You can tamper with the payload!
//
