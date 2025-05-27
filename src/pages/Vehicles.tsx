
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import VehicleCard from '@/components/VehicleCard';
import SearchFilters from '@/components/SearchFilters';
import VehicleComparison from '@/components/VehicleComparison';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, List, SlidersHorizontal } from 'lucide-react';

const Vehicles = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(false);
  const [comparisonVehicles, setComparisonVehicles] = useState<any[]>([]);

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
    // Add more vehicles...
  ];

  const handleFiltersChange = (filters: any) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleClearFilters = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const addToComparison = (vehicle: any) => {
    if (comparisonVehicles.length < 3 && !comparisonVehicles.find(v => v.id === vehicle.id)) {
      setComparisonVehicles([...comparisonVehicles, vehicle]);
    }
  };

  const removeFromComparison = (vehicleId: string) => {
    setComparisonVehicles(comparisonVehicles.filter(v => v.id !== vehicleId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-secondary mb-4">Browse Vehicles</h1>
            <p className="text-xl text-gray-600">Find your perfect car, bike, or motorcycle from trusted dealers</p>
          </div>

          {/* Search Filters */}
          <SearchFilters 
            onFiltersChange={handleFiltersChange}
            onClearFilters={handleClearFilters}
          />

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{vehicles.length}</span> vehicles
              </p>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="year-old">Year: Oldest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Loading State */}
          {loading && <LoadingSpinner text="Loading vehicles..." />}

          {/* Vehicles Grid */}
          {!loading && (
            <div className={`grid gap-6 mb-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {vehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <VehicleCard {...vehicle} />
                  <div className="mt-2 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addToComparison(vehicle)}
                      disabled={comparisonVehicles.length >= 3 || comparisonVehicles.find(v => v.id === vehicle.id)}
                    >
                      Add to Compare
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vehicle Comparison */}
          <VehicleComparison
            vehicles={comparisonVehicles}
            onRemoveVehicle={removeFromComparison}
            onAddVehicle={() => {}}
          />

          {/* Load More */}
          {!loading && (
            <div className="text-center mt-8">
              <Button className="btn-primary">
                Load More Vehicles
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicles;
