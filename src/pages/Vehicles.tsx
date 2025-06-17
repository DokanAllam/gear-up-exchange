
import React, { useState, useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import SimpleVehicleFilters from '@/components/SimpleVehicleFilters';
import VehicleResultsHeader from '@/components/VehicleResultsHeader';
import VehicleGrid from '@/components/VehicleGrid';

const Vehicles = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(false);
  const [comparisonVehicles, setComparisonVehicles] = useState<any[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<any[]>([]);

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

  const addToComparison = (vehicle: any) => {
    if (comparisonVehicles.length < 3 && !comparisonVehicles.find(v => v.id === vehicle.id)) {
      setComparisonVehicles([...comparisonVehicles, vehicle]);
    }
  };

  const removeFromComparison = (vehicleId: string) => {
    setComparisonVehicles(comparisonVehicles.filter(v => v.id !== vehicleId));
  };

  const clearFilters = () => {
    setLoading(true);
    setTimeout(() => {
      setFilteredVehicles(vehicles);
      setLoading(false);
    }, 500);
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

          {/* Simplified Filters */}
          <SimpleVehicleFilters
            vehicles={vehicles}
            onFilteredVehiclesChange={setFilteredVehicles}
            onLoadingChange={setLoading}
          />

          {/* Results Header */}
          <VehicleResultsHeader
            filteredCount={filteredVehicles.length}
            totalCount={vehicles.length}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onFilterPopupOpen={() => {}}
            activeFiltersCount={0}
          />

          {/* Vehicle Grid */}
          <VehicleGrid
            vehicles={filteredVehicles}
            viewMode={viewMode}
            loading={loading}
            comparisonVehicles={comparisonVehicles}
            onAddToComparison={addToComparison}
            onRemoveFromComparison={removeFromComparison}
            onClearFilters={clearFilters}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicles;
