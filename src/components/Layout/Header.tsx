
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, User, Users, Menu, X, Heart, Bell, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Mock authentication state - in real app this would come from auth context
  const isAuthenticated = true; // Mock value
  const notificationCount = 3; // Mock notification count
  const cartItemCount = 2; // Mock cart count

  const navItems = [
    { label: 'Buy Vehicles', href: '/vehicles', icon: Car },
    { label: 'Dealers', href: '/dealers', icon: Users },
    { label: 'Services', href: '/services', icon: User },
    { label: 'Store', href: '/store', icon: ShoppingBag },
    { label: 'Sell Your Vehicle', href: '/sell', icon: Car },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-primary p-2 rounded-xl group-hover:animate-glow transition-all duration-300">
              <Car className="h-8 w-8 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-secondary">AutoHub</h1>
              <p className="text-xs text-gray-500">Buy • Sell • Service</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-secondary hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated && (
              <>
                <Link to="/notifications">
                  <Button variant="outline" size="icon" className="border-blue-200 text-blue-600 hover:bg-blue-50 relative">
                    <Bell className="h-4 w-4" />
                    {notificationCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                        {notificationCount}
                      </Badge>
                    )}
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button variant="outline" size="icon" className="border-green-200 text-green-600 hover:bg-green-50 relative">
                    <ShoppingBag className="h-4 w-4" />
                    {cartItemCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-green-500 text-white text-xs">
                        {cartItemCount}
                      </Badge>
                    )}
                  </Button>
                </Link>
                <Link to="/wishlist">
                  <Button variant="outline" size="icon" className="border-red-200 text-red-600 hover:bg-red-50">
                    <Heart className="h-4 w-4" />
                  </Button>
                </Link>
              </>
            )}
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="btn-primary">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t animate-slide-in-right">
            <div className="p-4 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-primary text-white'
                        : 'text-secondary hover:bg-primary/10'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-3 pt-4 border-t">
                {isAuthenticated && (
                  <>
                    <Link to="/notifications" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Bell className="h-4 w-4 mr-2" />
                        Notifications
                        {notificationCount > 0 && (
                          <Badge className="ml-2 bg-red-500 text-white">
                            {notificationCount}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                    <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-green-200 text-green-600 hover:bg-green-50">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Cart
                        {cartItemCount > 0 && (
                          <Badge className="ml-2 bg-green-500 text-white">
                            {cartItemCount}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                    <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50">
                        <Heart className="h-4 w-4 mr-2" />
                        Wishlist
                      </Button>
                    </Link>
                  </>
                )}
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-primary w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
