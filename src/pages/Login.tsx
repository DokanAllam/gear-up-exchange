
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, EyeOff, User, Building2, Wrench, Shield } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const demoAccounts = [
    {
      type: 'admin',
      email: 'admin@autohub.com',
      password: 'admin123',
      title: 'Admin Dashboard',
      description: 'Full platform management access',
      icon: Shield,
      route: '/admin',
      badge: 'Super Admin'
    },
    {
      type: 'dealer',
      email: 'dealer@autohub.com', 
      password: 'dealer123',
      title: 'Dealer Dashboard',
      description: 'Manage vehicle listings & customers',
      icon: Building2,
      route: '/dealer-dashboard',
      badge: 'Premium Dealer'
    },
    {
      type: 'service',
      email: 'service@autohub.com',
      password: 'service123', 
      title: 'Service Center',
      description: 'Manage bookings & services',
      icon: Wrench,
      route: '/service-dashboard',
      badge: 'Certified Service'
    },
    {
      type: 'customer',
      email: 'customer@autohub.com',
      password: 'customer123',
      title: 'Customer Profile',
      description: 'Personal profile & history',
      icon: User,
      route: '/profile',
      badge: 'Premium User'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDemoLogin = (account: typeof demoAccounts[0]) => {
    setFormData({
      email: account.email,
      password: account.password,
      userType: account.type
    });
    
    // Simulate login process
    setTimeout(() => {
      navigate(account.route);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find matching demo account
    const account = demoAccounts.find(acc => 
      acc.email === formData.email && acc.password === formData.password
    );
    
    if (account) {
      navigate(account.route);
    } else {
      alert('Invalid credentials. Please use one of the demo accounts.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-secondary mb-4">
                Welcome Back to AutoHub
              </h1>
              <p className="text-xl text-gray-600">
                Sign in to access your dashboard and manage your automotive business
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Demo Accounts */}
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-6">Demo Accounts</h2>
                <p className="text-gray-600 mb-6">
                  Try our platform with these demo accounts to explore different user roles and features.
                </p>
                
                <div className="space-y-4">
                  {demoAccounts.map((account) => {
                    const Icon = account.icon;
                    return (
                      <Card key={account.type} className="card-hover cursor-pointer" onClick={() => handleDemoLogin(account)}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="bg-primary/10 p-3 rounded-lg">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center space-x-2 mb-1">
                                  <h3 className="font-bold text-secondary">{account.title}</h3>
                                  <Badge variant="secondary" className="text-xs">
                                    {account.badge}
                                  </Badge>
                                </div>
                                <p className="text-gray-600 text-sm">{account.description}</p>
                                <div className="text-xs text-gray-500 mt-2">
                                  <span className="font-mono">{account.email}</span>
                                </div>
                              </div>
                            </div>
                            <Button className="btn-primary">
                              Access Dashboard
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Demo Features Include:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Full dashboard functionality with sample data</li>
                    <li>• Vehicle listing management (Dealer)</li>
                    <li>• Service booking system (Service Center)</li>
                    <li>• User management and analytics (Admin)</li>
                    <li>• Community Q&A and reviews</li>
                  </ul>
                </div>
              </div>

              {/* Login Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                      Enter your credentials or use a demo account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="password">Password</Label>
                        <div className="relative mt-1">
                          <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            placeholder="Enter your password"
                            className="pr-10"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="userType">Account Type</Label>
                        <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select account type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="customer">Customer</SelectItem>
                            <SelectItem value="dealer">Dealer</SelectItem>
                            <SelectItem value="service">Service Center</SelectItem>
                            <SelectItem value="admin">Administrator</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button type="submit" className="w-full btn-primary">
                        Sign In
                      </Button>

                      <div className="text-center space-y-4">
                        <Link to="/register" className="text-primary hover:underline">
                          Don't have an account? Sign up
                        </Link>
                        
                        <div className="text-sm text-gray-600">
                          <p>For testing, use any of the demo accounts above</p>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Quick Access */}
                <div className="mt-6">
                  <h3 className="font-bold text-secondary mb-4">Quick Access</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/apply/dealer">
                      <Button variant="outline" className="w-full">
                        <Building2 className="h-4 w-4 mr-2" />
                        Become a Dealer
                      </Button>
                    </Link>
                    <Link to="/apply/service">
                      <Button variant="outline" className="w-full">
                        <Wrench className="h-4 w-4 mr-2" />
                        Join as Service
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
