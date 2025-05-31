
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { X, DollarSign, Calendar, Fuel, Settings, Car, MapPin } from 'lucide-react';

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

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterState) => void;
  onClearFilters: () => void;
  initialFilters?: FilterState;
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  isOpen,
  onClose,
  onApplyFilters,
  onClearFilters,
  initialFilters
}) => {
  console.log('FilterPopup rendering, isOpen:', isOpen);
  
  const [filters, setFilters] = useState<FilterState>(
    initialFilters || {
      vehicleType: '',
      priceRange: [0, 100000],
      year: '',
      mileage: '',
      fuelType: '',
      transmission: '',
      condition: '',
      brand: '',
      location: ''
    }
  );

  // Update filters when initialFilters change
  useEffect(() => {
    if (initialFilters) {
      console.log('Updating filters with initialFilters:', initialFilters);
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  const brands = ['BMW', 'Mercedes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Audi', 'Porsche', 'Tesla', 'Harley Davidson'];
  const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  const transmissions = ['Manual', 'Automatic'];
  const conditions = ['New', 'Used'];

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    console.log('Filter change:', key, value);
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    console.log('Applying filters:', filters);
    onApplyFilters(filters);
  };

  const handleClear = () => {
    console.log('Clearing filters');
    const clearedFilters: FilterState = {
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
    setFilters(clearedFilters);
    onClearFilters();
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.vehicleType) count++;
    if (filters.brand) count++;
    if (filters.condition) count++;
    if (filters.fuelType) count++;
    if (filters.year) count++;
    if (filters.location) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 100000) count++;
    return count;
  };

  console.log('FilterPopup about to render Dialog');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car className="h-5 w-5 text-primary" />
              <span>Vehicle Filters</span>
              {getActiveFiltersCount() > 0 && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {getActiveFiltersCount()} active
                </Badge>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={filters.vehicleType === 'car' ? 'default' : 'outline'} 
              className="cursor-pointer px-3 py-1 hover:bg-primary/10 transition-colors"
              onClick={() => handleFilterChange('vehicleType', filters.vehicleType === 'car' ? '' : 'car')}
            >
              <Car className="h-3 w-3 mr-1" />
              Cars
            </Badge>
            <Badge 
              variant={filters.vehicleType === 'motorcycle' ? 'default' : 'outline'} 
              className="cursor-pointer px-3 py-1 hover:bg-primary/10 transition-colors"
              onClick={() => handleFilterChange('vehicleType', filters.vehicleType === 'motorcycle' ? '' : 'motorcycle')}
            >
              Motorcycles
            </Badge>
            <Badge 
              variant={filters.condition === 'new' ? 'default' : 'outline'} 
              className="cursor-pointer px-3 py-1 hover:bg-primary/10 transition-colors"
              onClick={() => handleFilterChange('condition', filters.condition === 'new' ? '' : 'new')}
            >
              New
            </Badge>
            <Badge 
              variant={filters.condition === 'used' ? 'default' : 'outline'} 
              className="cursor-pointer px-3 py-1 hover:bg-primary/10 transition-colors"
              onClick={() => handleFilterChange('condition', filters.condition === 'used' ? '' : 'used')}
            >
              Used
            </Badge>
            <Badge 
              variant={filters.fuelType === 'Electric' ? 'default' : 'outline'} 
              className="cursor-pointer px-3 py-1 hover:bg-primary/10 transition-colors"
              onClick={() => handleFilterChange('fuelType', filters.fuelType === 'Electric' ? '' : 'Electric')}
            >
              <Fuel className="h-3 w-3 mr-1" />
              Electric
            </Badge>
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Car className="h-4 w-4 mr-2 text-primary" />
                Vehicle Type
              </label>
              <Select value={filters.vehicleType} onValueChange={(value) => handleFilterChange('vehicleType', value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-primary transition-colors">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="car">Cars</SelectItem>
                  <SelectItem value="bike">Bikes</SelectItem>
                  <SelectItem value="motorcycle">Motorcycles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Settings className="h-4 w-4 mr-2 text-primary" />
                Brand
              </label>
              <Select value={filters.brand} onValueChange={(value) => handleFilterChange('brand', value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-primary transition-colors">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="">All Brands</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Condition
              </label>
              <Select value={filters.condition} onValueChange={(value) => handleFilterChange('condition', value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-primary transition-colors">
                  <SelectValue placeholder="All Conditions" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="">All Conditions</SelectItem>
                  {conditions.map((condition) => (
                    <SelectItem key={condition} value={condition.toLowerCase()}>{condition}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Fuel className="h-4 w-4 mr-2 text-primary" />
                Fuel Type
              </label>
              <Select value={filters.fuelType} onValueChange={(value) => handleFilterChange('fuelType', value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-primary transition-colors">
                  <SelectValue placeholder="All Fuel Types" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="">All Fuel Types</SelectItem>
                  {fuelTypes.map((fuel) => (
                    <SelectItem key={fuel} value={fuel}>{fuel}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Transmission
              </label>
              <Select value={filters.transmission} onValueChange={(value) => handleFilterChange('transmission', value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-primary transition-colors">
                  <SelectValue placeholder="All Transmissions" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="">All Transmissions</SelectItem>
                  {transmissions.map((transmission) => (
                    <SelectItem key={transmission} value={transmission}>{transmission}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                Year
              </label>
              <Input
                type="number"
                placeholder="e.g. 2020"
                value={filters.year}
                onChange={(e) => handleFilterChange('year', e.target.value)}
                className="h-11 border-gray-200 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Location
              </label>
              <Input
                placeholder="City, State"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="h-11 border-gray-200 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              Price Range: ${filters.priceRange[0].toLocaleString()} - ${filters.priceRange[1].toLocaleString()}
            </label>
            <div className="px-3">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => handleFilterChange('priceRange', value as [number, number])}
                max={200000}
                min={0}
                step={5000}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$200,000</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <Button 
            variant="outline" 
            onClick={handleClear}
            className="border-red-200 text-red-600 hover:bg-red-50"
          >
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleApply}
              className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90"
            >
              Apply Filters ({getActiveFiltersCount()})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterPopup;
