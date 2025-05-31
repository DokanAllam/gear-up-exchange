
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
      
      onFilteredVehiclesChange(filtered);
      onLoadingChange(false);
    }, 1000);
  };

  const clearFilters = () => {
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

  return (
    <>
      <SearchFilters 
        onFiltersChange={applyFilters}
        onClearFilters={clearFilters}
      />

      <FilterPopup
        isOpen={isFilterPopupOpen}
        onClose={() => onFilterPopupToggle(false)}
        onApplyFilters={(filters) => {
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
