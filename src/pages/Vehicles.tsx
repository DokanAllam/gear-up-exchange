
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import VehicleCard from '@/components/VehicleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const Vehicles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vehicleType, setVehicleType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for vehicles
  const vehicles = [
    {
      id: '1',
      title: '2023 BMW M3 Competition',
      price: 75000,
      image: '/placeholder.svg',
      year: 2023,
      mileage: '5,000 km',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'New York, NY',
      rating: 4.8,
      reviewCount: 12,
      condition: 'used' as const,
      dealerName: 'BMW Manhattan',
      type: 'car' as const
    },
    {
      id: '2',
      title: '2024 Harley Davidson Sportster',
      price: 28000,
      image: '/placeholder.svg',
      year: 2024,
      mileage: '0 km',
      fuelType: 'Petrol',
      transmission: 'Manual',
      location: 'Los Angeles, CA',
      rating: 4.9,
      reviewCount: 8,
      condition: 'new' as const,
      dealerName: 'HD Los Angeles',
      type: 'motorcycle' as const
    },
    {
      id: '3',
      title: '2023 Tesla Model S Plaid',
      price: 95000,
      image: '/placeholder.svg',
      year: 2023,
      mileage: '8,000 km',
      fuelType: 'Electric',
      transmission: 'Automatic',
      location: 'San Francisco, CA',
      rating: 4.7,
      reviewCount: 15,
      condition: 'used' as const,
      dealerName: 'Tesla Bay Area',
      type: 'car' as const
    },
    // Add more vehicles as needed
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    if (vehicleType !== 'all' && vehicle.type !== vehicleType) return false;
    if (searchQuery && !vehicle.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Browse Vehicles
            </h1>
            <p className="text-xl text-gray-600">
              Find your perfect car, bike, or motorcycle from trusted sellers
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-scale-in">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
              {/* Search Input */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Search Vehicles
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by make, model, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              {/* Vehicle Type Filter */}
              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Vehicle Type
                </label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="car">Cars</SelectItem>
                    <SelectItem value="bike">Bikes</SelectItem>
                    <SelectItem value="motorcycle">Motorcycles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort By */}
              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="mileage">Lowest Mileage</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Advanced Filters Button */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>

            {/* Advanced Filters (Collapsible) */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200 animate-slide-in-right">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Condition
                    </label>
                    <Select>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="used">Used</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Price Range
                    </label>
                    <Select>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Price</SelectItem>
                        <SelectItem value="0-25000">Under $25,000</SelectItem>
                        <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100000+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Year
                    </label>
                    <Select>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Any Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Year</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="older">2020 & Older</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Fuel Type
                    </label>
                    <Select>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Any Fuel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Fuel</SelectItem>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button variant="outline" className="w-full h-10 border-gray-300">
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <p className="text-lg text-gray-600">
              Showing <span className="font-semibold text-secondary">{filteredVehicles.length}</span> vehicles
            </p>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <VehicleCard {...vehicle} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredVehicles.length > 0 && (
            <div className="text-center mt-12 animate-fade-in">
              <Button className="btn-primary px-8 py-4 text-lg">
                Load More Vehicles
              </Button>
            </div>
          )}

          {/* Empty State */}
          {filteredVehicles.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-2">No vehicles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse all vehicles
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setVehicleType('all');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicles;
