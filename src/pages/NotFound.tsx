
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, ArrowLeft, Car, Wrench, Building2 } from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    { icon: Car, label: 'Browse Vehicles', href: '/vehicles', description: 'Find your perfect car' },
    { icon: Building2, label: 'Find Dealers', href: '/dealers', description: 'Locate trusted dealers' },
    { icon: Wrench, label: 'Service Centers', href: '/services', description: 'Book maintenance' },
    { icon: Search, label: 'Community', href: '/community', description: 'Ask questions' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-bounce-subtle">
          <Car className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
          <Car className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
          <Car className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce-subtle" style={{ animationDelay: '1.5s' }}>
          <Car className="h-10 w-10 text-primary" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          {/* Large 404 */}
          <div className="text-8xl md:text-9xl font-bold text-white mb-4 opacity-90">
            4<span className="text-primary">0</span>4
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Looks like you took a wrong turn. The page you're looking for doesn't exist, 
            but don't worry - we'll help you get back on track!
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link to="/">
              <Button className="btn-primary text-lg px-8 py-3">
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-secondary"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto animate-scale-in">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Or explore these popular sections:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link key={index} to={link.href}>
                  <Card className="card-hover bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-secondary transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="bg-primary/20 p-4 rounded-full inline-block mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2">{link.label}</h3>
                      <p className="text-sm opacity-75">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto">
            <CardContent className="p-6">
              <Search className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Still can't find what you need?</h3>
              <p className="text-gray-300 mb-4">
                Try searching or contact our support team for assistance.
              </p>
              <Link to="/community">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Ask the Community
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-slide-in-right">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-gray-300">Vehicles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-gray-300">Dealers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">1M+</div>
            <div className="text-gray-300">Users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
