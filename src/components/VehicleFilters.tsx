
import React, { useState, useEffect } from 'react';
import SearchFilters from '@/components/SearchFilters';
import FilterPopup from '@/components/FilterPopup';

interface FilterState {
  vehicleType: string;
  priceRange: [number, number];
  year: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  condition: string;
  brand: string;
  location: string;
}

interface VehicleFiltersProps {
  vehicles: any[];
  onFilteredVehiclesChange: (vehicles: any[]) => void;
  onLoadingChange: (loading: boolean) => void;
  isFilterPopupOpen: boolean;
  onFilterPopupToggle: (open: boolean) => void;
}

const VehicleFilters: React.FC<VehicleFiltersProps> = ({
  vehicles,
  onFilteredVehiclesChange,
  onLoadingChange,
  isFilterPopupOpen,
  onFilterPopupToggle
}) => {
  const [currentFilters, setCurrentFilters] = useState<FilterState>({
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

  // Initialize filtered vehicles
  useEffect(() => {
    onFilteredVehiclesChange(vehicles);
  }, [vehicles, onFilteredVehiclesChange]);

  const applyFilters = (filters: FilterState) => {
    console.log('VehicleFilters: Applying filters:', filters);
    onLoadingChange(true);
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
      
      console.log('VehicleFilters: Filtered results:', filtered.length, 'vehicles');
      onFilteredVehiclesChange(filtered);
      onLoadingChange(false);
    }, 1000);
  };

  const clearFilters = () => {
    console.log('VehicleFilters: Clearing filters');
    onLoadingChange(true);
    const clearedFilters = {
      vehicleType: '',
      priceRange: [0, 100000] as [number, number],
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
      onFilteredVehiclesChange(vehicles);
      onLoadingChange(false);
    }, 500);
  };

  return (
    <>
      <SearchFilters 
        onFiltersChange={applyFilters}
        onClearFilters={clearFilters}
        initialFilters={currentFilters}
      />

      <FilterPopup
        isOpen={isFilterPopupOpen}
        onClose={() => {
          console.log('VehicleFilters: Closing filter popup');
          onFilterPopupToggle(false);
        }}
        onApplyFilters={(filters) => {
          console.log('VehicleFilters: Apply filters from popup:', filters);
          applyFilters(filters);
          onFilterPopupToggle(false);
        }}
        onClearFilters={clearFilters}
        initialFilters={currentFilters}
      />
    </>
  );
};

export default VehicleFilters;
