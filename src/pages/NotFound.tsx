
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, Car, Users, Wrench, ArrowLeft, MessageCircle } from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    {
      icon: Car,
      title: 'Browse Vehicles',
      description: 'Find your next car, bike, or motorcycle',
      href: '/vehicles',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Find Dealers',
      description: 'Connect with certified dealers',
      href: '/dealers',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: 'Service Centers',
      description: 'Book maintenance and repairs',
      href: '/services',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Community',
      description: 'Join automotive discussions',
      href: '/community',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const helpfulLinks = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact Support', href: '/contact' },
    { title: 'Help Center', href: '/help' },
    { title: 'Careers', href: '/careers' },
    { title: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            {/* 404 Illustration */}
            <div className="relative mb-8">
              <div className="text-9xl font-bold text-primary/20 select-none animate-bounce-subtle">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center animate-scale-in">
                  <Search className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold text-secondary mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                The page you're looking for seems to have taken a wrong turn. 
                Don't worry, let's get you back on track!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-right">
              <Link to="/">
                <Button size="lg" className="btn-primary">
                  <Home className="h-5 w-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </Button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-secondary text-center mb-8">
              Where would you like to go?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={index} to={link.href}>
                    <Card className="card-hover h-full">
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center mx-auto mb-4`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{link.title}</h3>
                        <p className="text-gray-600 text-sm">{link.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Search Section */}
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-orange-500/5 border-0">
            <CardContent className="p-8 text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600 mb-6">
                Try searching for vehicles, dealers, or services using our search feature.
              </p>
              <div className="max-w-md mx-auto flex gap-2">
                <input
                  type="text"
                  placeholder="Search for vehicles, dealers, services..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="px-6">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Helpful Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-secondary mb-6">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {helpfulLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="px-4 py-2 text-primary hover:text-primary/80 hover:bg-primary/10 rounded-lg transition-all duration-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Still need help?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our support team is here to assist you 24/7
                </p>
                <Link to="/contact">
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
