
import React from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Key, Server, Settings, Terminal, UserCheck } from "lucide-react";

const AdminPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-batman-dark">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="mb-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-riddler-dark text-riddler-neon">
              Restricted Access
            </span>
          </div>
          <p className="text-gray-400 mt-1">
            Welcome, Administrator {user?.name}.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* System Settings Card */}
          <Card className="bg-batman-primary border-batman-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5 text-gray-400" />
                System Settings
              </CardTitle>
              <CardDescription>Configure core system parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Maintenance Mode</span>
                  <div className="w-12 h-6 bg-riddler-dark rounded-full relative">
                    <div className="absolute right-1 top-1 bg-riddler-neon w-4 h-4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Debug Logging</span>
                  <div className="w-12 h-6 bg-riddler-dark rounded-full relative">
                    <div className="absolute right-1 top-1 bg-riddler-neon w-4 h-4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Automatic Updates</span>
                  <div className="w-12 h-6 bg-batman-secondary rounded-full relative">
                    <div className="absolute left-1 top-1 bg-gray-400 w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* User Management Card */}
          <Card className="bg-batman-primary border-batman-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="mr-2 h-5 w-5 text-gray-400" />
                User Management
              </CardTitle>
              <CardDescription>Manage system users and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Bruce Wayne (You)</span>
                  </div>
                  <span className="text-xs text-riddler-neon">Admin</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Alfred Pennyworth</span>
                  </div>
                  <span className="text-xs text-riddler-neon">Admin</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                    <span>Lucius Fox</span>
                  </div>
                  <span className="text-xs">User</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                    <span>Jim Gordon</span>
                  </div>
                  <span className="text-xs">User</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Database Management Card */}
          <Card className="bg-batman-primary border-batman-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5 text-gray-400" />
                Database Management
              </CardTitle>
              <CardDescription>Manage system databases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Batcomputer Main DB</span>
                  <span className="text-xs px-2 py-1 rounded bg-green-900 text-green-400">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Wayne Enterprises DB</span>
                  <span className="text-xs px-2 py-1 rounded bg-green-900 text-green-400">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Arkham Case Files</span>
                  <span className="text-xs px-2 py-1 rounded bg-yellow-900 text-yellow-400">Maintenance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Batcave Surveillance</span>
                  <span className="text-xs px-2 py-1 rounded bg-green-900 text-green-400">Online</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Security Tools Card */}
          <Card className="bg-batman-primary border-batman-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="mr-2 h-5 w-5 text-gray-400" />
                Security Tools
              </CardTitle>
              <CardDescription>Advanced security management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="px-3 py-2 bg-batman-secondary/50 rounded-md hover:bg-batman-secondary cursor-pointer transition-colors">
                  <div className="flex items-center">
                    <Server className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Firewall Configuration</span>
                  </div>
                </div>
                <div className="px-3 py-2 bg-batman-secondary/50 rounded-md hover:bg-batman-secondary cursor-pointer transition-colors">
                  <div className="flex items-center">
                    <Terminal className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Access Log Analyzer</span>
                  </div>
                </div>
                <div className="px-3 py-2 bg-batman-secondary/50 rounded-md hover:bg-batman-secondary cursor-pointer transition-colors">
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Authentication Manager</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Riddler Terminal - The hidden console */}
          <Card className="bg-black border-riddler-dark shadow-lg col-span-1 md:col-span-2">
            <CardHeader className="border-b border-riddler-dark">
              <CardTitle className="flex items-center text-riddler-neon">
                <Terminal className="mr-2 h-5 w-5" />
                Riddler Terminal
              </CardTitle>
              <CardDescription className="text-gray-600">
                Secret backdoor - Don't delete!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="font-mono text-sm bg-black p-4 max-h-60 overflow-auto">
                <div className="text-green-500 mb-2">$ Connection established</div>
                <div className="text-green-500">$ Running security analysis...</div>
                <div className="text-yellow-500">$ WARNING: JWT implementation vulnerable</div>
                <div className="text-yellow-500">$ JWT signature verification bypassed</div>
                <div className="text-red-500">$ CVE-2022-XXXX: Authentication bypass possible</div>
                <div className="text-white">$ Privilege escalation successful: user → admin</div>
                <div className="text-riddler-neon font-bold">
                  $ FLAG CAPTURED: CTF{'{JWT_TOKENS_ARE_EASILY_TAMPERED_WITH}'}
                </div>
                <div className="text-gray-400">$ Vulnerability details:</div>
                <div className="text-gray-400 ml-2">- JWT token not properly signed</div>
                <div className="text-gray-400 ml-2">- Simple base64 encoding used</div>
                <div className="text-gray-400 ml-2">- No signature verification</div>
                <div className="text-gray-400 ml-2">- User roles stored in token payload</div>
                <div className="text-white mt-2">$ Method: Decode JWT → Modify role → Re-encode</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
