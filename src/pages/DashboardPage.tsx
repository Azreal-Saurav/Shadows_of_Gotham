
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, FileText, Lock, Shield, Users } from "lucide-react";

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="min-h-screen bg-batman-dark">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, {user?.name}.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Info Card */}
          <Card className="bg-batman-primary border-batman-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-gray-400" />
                User Profile
              </CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Username:</span>
                  <span className="font-mono">{user?.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Role:</span>
                  <span className="font-mono">
                    {user?.role === "admin" ? (
                      <span className="text-riddler-neon">Administrator</span>
                    ) : (
                      "Standard User"
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ID:</span>
                  <span className="font-mono">{user?.id}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Security Status Card */}
          <Card className="bg-batman-primary border-batman-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-gray-400" />
                Security Status
              </CardTitle>
              <CardDescription>System security overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Firewall: Active</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Encryption: Enabled</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Last Scan: 3 days ago</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Authentication: JWT</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Activity Card */}
          <Card className="bg-batman-primary border-batman-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-gray-400" />
                Recent Activity
              </CardTitle>
              <CardDescription>System logs and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-400 text-xs">Today, 10:23 AM</div>
                  <div>User login from 192.168.1.105</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Today, 9:45 AM</div>
                  <div>System maintenance complete</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Yesterday, 11:52 PM</div>
                  <div className="flex items-center text-yellow-400">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>Failed login attempt (IP: 10.0.0.12)</span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Yesterday, 3:15 PM</div>
                  <div>Database backup completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Restricted Files Card - This is the bait for the CTF challenge */}
          <Card className="bg-batman-primary border-batman-secondary shadow-lg col-span-1 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5 text-gray-400" />
                Restricted Files
              </CardTitle>
              <CardDescription>
                Access to classified documents requires administrator privileges
              </CardDescription>
            </CardHeader>
            <CardContent>
              {user?.role === "admin" ? (
                <div>
                  <div className="bg-batman-secondary/50 p-4 rounded-md border border-batman-secondary">
                    <h3 className="text-lg font-semibold mb-2 text-riddler-neon">
                      Batcave Access Codes
                    </h3>
                    <div className="font-mono">
                      <div className="p-3 bg-black/50 rounded text-white">
                        {showSecret ? (
                          <div>
                            <p>Congratulations! You found the vulnerability!</p>
                            <p className="mt-2 text-riddler-neon font-bold">
                              FLAG: CTF{"ENIGMA{bruce_didnt_sign_it_so_riddler_did}"}
                            </p>
                            <p className="mt-2 text-xs text-gray-400">
                              The JWT implementation had a critical flaw: it didn't properly verify signatures.
                              By manipulating the token payload, you were able to escalate privileges.
                            </p>
                          </div>
                        ) : (
                          <div>
                            <button 
                              onClick={() => setShowSecret(true)}
                              className="text-riddler-neon hover:text-riddler-accent underline"
                            >
                              Click to reveal the secret flag
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-batman-secondary/50 p-4 rounded-md border border-batman-secondary">
                  <div className="flex flex-col items-center justify-center py-4">
                    <Lock className="h-12 w-12 text-gray-500 mb-2" />
                    <p className="text-gray-400 text-center max-w-lg">
                      This section contains classified Wayne Enterprises data.
                      Administrator access is required to view these files.
                    </p>
                    
                    {/* Hidden hint for CTF players */}
                    <div className="hidden">
                      {/* HINT: Check your JWT token. The role might be changeable... */}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Console-like element with a Riddler hint */}
      <div className="mx-auto max-w-7xl px-4 pb-8">
        <div className="p-4 bg-black/70 border border-batman-secondary rounded-md font-mono text-xs">
          <div className="text-gray-500">// Console output</div>
          <p className="text-gray-400">
            &gt; System initialized
          </p>
          <p className="text-gray-400">
            &gt; User authenticated: {user?.username}
          </p>
          <p className="text-gray-400">
            &gt; Role: {user?.role}
          </p>
          <p className="text-riddler-neon console-typing">
            &gt; What if roles could be changed? Look for the token...
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
