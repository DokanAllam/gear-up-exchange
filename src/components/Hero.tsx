
import React, { useState } from 'react';
import { Car, Search, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Create search params
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (vehicleType) params.set('type', vehicleType);
    if (location) params.set('location', location);
    if (priceRange) params.set('price', priceRange);
    
    // Navigate to vehicles page with search params
    navigate(`/vehicles?${params.toString()}`);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-bounce-subtle">
          <Car className="h-20 w-20 text-primary" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
          <Car className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
          <Car className="h-12 w-12 text-primary" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-gradient bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Vehicle
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Buy, sell, and service cars, bikes & motorcycles. Connect with trusted dealers and service centers.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-gray-300">Vehicles</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-300">Dealers</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-gray-300">Users</div>
            </div>
          </div>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto animate-slide-in-right">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-secondary mb-2">
                What are you looking for?
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search cars, bikes, motorcycles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Type
              </label>
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger className="h-12 border-gray-300 focus:border-primary">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="car">Cars</SelectItem>
                  <SelectItem value="bike">Bikes</SelectItem>
                  <SelectItem value="motorcycle">Motorcycles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="City, State"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Search Button */}
            <div>
              <Button onClick={handleSearch} className="w-full h-12 btn-primary text-lg font-semibold">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
            <span className="text-sm font-medium text-secondary">Popular:</span>
            {['BMW', 'Mercedes', 'Honda', 'Toyota', 'Harley Davidson'].map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setSearchQuery(brand);
                  handleSearch();
                }}
                className="px-4 py-2 text-sm bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-all duration-300 font-medium"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
