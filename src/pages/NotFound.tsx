
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Car } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        {/* 404 Illustration */}
        <div className="mb-8 relative">
          <div className="text-9xl md:text-[12rem] font-bold text-gray-200 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-primary p-4 rounded-2xl shadow-2xl animate-bounce-subtle">
              <Car className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            The page you're looking for seems to have taken a detour.
          </p>
          <p className="text-lg text-gray-500">
            Don't worry, even the best vehicles sometimes take wrong turns!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
          <Link to="/">
            <Button className="btn-primary w-full sm:w-auto px-8 py-3 text-lg">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/vehicles">
            <Button variant="outline" className="w-full sm:w-auto px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-white">
              <Search className="h-5 w-5 mr-2" />
              Browse Vehicles
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            Looking for something specific?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <Link 
              to="/vehicles" 
              className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-primary"
            >
              <Car className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="font-medium">Buy Vehicles</div>
            </Link>
            <Link 
              to="/dealers" 
              className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-primary"
            >
              <Home className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="font-medium">Dealers</div>
            </Link>
            <Link 
              to="/services" 
              className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-primary"
            >
              <Search className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="font-medium">Services</div>
            </Link>
            <Link 
              to="/sell" 
              className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-primary"
            >
              <ArrowLeft className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="font-medium">Sell Vehicle</div>
            </Link>
          </div>
        </div>

        {/* Error Details */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p>Error Code: 404 | Requested Path: <code className="bg-white px-2 py-1 rounded">{location.pathname}</code></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
