import React, { useState, useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import VehicleCard from '@/components/VehicleCard';
import SearchFilters from '@/components/SearchFilters';
import FilterPopup from '@/components/FilterPopup';
import VehicleComparison from '@/components/VehicleComparison';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, List, Filter } from 'lucide-react';

const Vehicles = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(false);
  const [comparisonVehicles, setComparisonVehicles] = useState<any[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<any[]>([]);
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [currentFilters, setCurrentFilters] = useState<any>({
    vehicleType: '',
    priceRange: [0, 100000],
    year: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    condition: '',
    brand: '',
    location: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data for vehicles with proper images
  const vehicles = [
    {
      id: '1',
      title: '2023 BMW M3 Competition',
      price: 75000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      year: 2023,
      mileage: '5,000 km',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'New York, NY',
      rating: 4.8,
      reviewCount: 12,
      condition: 'used' as const,
      dealerName: 'BMW Manhattan',
      type: 'car' as const,
      brand: 'BMW'
    },
    {
      id: '2',
      title: '2024 Harley Davidson Sportster',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      year: 2024,
      mileage: '0 km',
      fuelType: 'Petrol',
      transmission: 'Manual',
      location: 'Los Angeles, CA',
      rating: 4.9,
      reviewCount: 8,
      condition: 'new' as const,
      dealerName: 'HD Los Angeles',
      type: 'motorcycle' as const,
      brand: 'Harley Davidson'
    },
    {
      id: '3',
      title: '2022 Tesla Model S',
      price: 89000,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
      year: 2022,
      mileage: '15,000 km',
      fuelType: 'Electric',
      transmission: 'Automatic',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviewCount: 25,
      condition: 'used' as const,
      dealerName: 'Tesla SF',
      type: 'car' as const,
      brand: 'Tesla'
    },
    {
      id: '4',
      title: '2023 Toyota Camry Hybrid',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      year: 2023,
      mileage: '8,000 km',
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      location: 'Miami, FL',
      rating: 4.7,
      reviewCount: 18,
      condition: 'used' as const,
      dealerName: 'Toyota Miami',
      type: 'car' as const,
      brand: 'Toyota'
    }
  ];

  // Initialize filtered vehicles
  useEffect(() => {
    setFilteredVehicles(vehicles);
  }, []);

  const handleFiltersChange = (filters: any) => {
    setLoading(true);
    setCurrentFilters(filters);
    
    // Apply filters to vehicles
    setTimeout(() => {
      let filtered = vehicles.filter(vehicle => {
        // Filter by vehicle type
        if (filters.vehicleType && vehicle.type !== filters.vehicleType) {
          return false;
        }
        
        // Filter by brand
        if (filters.brand && vehicle.brand !== filters.brand) {
          return false;
        }
        
        // Filter by condition
        if (filters.condition && vehicle.condition !== filters.condition) {
          return false;
        }
        
        // Filter by fuel type
        if (filters.fuelType && vehicle.fuelType !== filters.fuelType) {
          return false;
        }
        
        // Filter by year
        if (filters.year && vehicle.year.toString() !== filters.year) {
          return false;
        }
        
        // Filter by price range
        if (vehicle.price < filters.priceRange[0] || vehicle.price > filters.priceRange[1]) {
          return false;
        }
        
        // Filter by location
        if (filters.location && !vehicle.location.toLowerCase().includes(filters.location.toLowerCase())) {
          return false;
        }
        
        return true;
      });
      
      setFilteredVehicles(filtered);
      setLoading(false);
    }, 1000);
  };

  const handleClearFilters = () => {
    setLoading(true);
    const clearedFilters = {
      vehicleType: '',
      priceRange: [0, 100000],
      year: '',
      mileage: '',
      fuelType: '',
      transmission: '',
      condition: '',
      brand: '',
      location: ''
    };
    setCurrentFilters(clearedFilters);
    setTimeout(() => {
      setFilteredVehicles(vehicles);
      setLoading(false);
    }, 500);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (currentFilters.vehicleType) count++;
    if (currentFilters.brand) count++;
    if (currentFilters.condition) count++;
    if (currentFilters.fuelType) count++;
    if (currentFilters.year) count++;
    if (currentFilters.location) count++;
    if (currentFilters.priceRange[0] > 0 || currentFilters.priceRange[1] < 100000) count++;
    return count;
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
                Showing <span className="font-semibold">{filteredVehicles.length}</span> of <span className="font-semibold">{vehicles.length}</span> vehicles
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
                
                {/* Enhanced Filter Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterPopupOpen(true)}
                  className="ml-2 border-primary/20 hover:bg-primary/5 transition-all duration-200"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {getActiveFiltersCount() > 0 && (
                    <span className="ml-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getActiveFiltersCount()}
                    </span>
                  )}
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
              {filteredVehicles.map((vehicle, index) => (
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

          {/* No results message */}
          {!loading && filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No vehicles found matching your filters</p>
              <Button onClick={handleClearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}

          {/* Vehicle Comparison */}
          <VehicleComparison
            vehicles={comparisonVehicles}
            onRemoveVehicle={removeFromComparison}
            onAddVehicle={() => {}}
          />

          {/* Load More */}
          {!loading && filteredVehicles.length > 0 && (
            <div className="text-center mt-8">
              <Button className="btn-primary">
                Load More Vehicles
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Filter Popup */}
      <FilterPopup
        isOpen={isFilterPopupOpen}
        onClose={() => setIsFilterPopupOpen(false)}
        onApplyFilters={handleFiltersChange}
        onClearFilters={handleClearFilters}
        initialFilters={currentFilters}
      />
    </div>
  );
};

export default Vehicles;
