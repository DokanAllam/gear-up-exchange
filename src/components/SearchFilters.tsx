
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Filter, X, ChevronDown, ChevronUp, MapPin, DollarSign, Calendar, Fuel, Settings, Car } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SearchFiltersProps {
  onFiltersChange?: (filters: FilterState) => void;
  onClearFilters?: () => void;
}

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

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFiltersChange, onClearFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
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

  const brands = ['BMW', 'Mercedes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Audi', 'Porsche'];
  const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  const transmissions = ['Manual', 'Automatic'];
  const conditions = ['New', 'Used'];

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const clearAllFilters = () => {
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
    if (onClearFilters) {
      onClearFilters();
    }
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

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Card className="mb-6 shadow-lg border-0 bg-gradient-to-r from-white to-gray-50">
      <CardContent className="p-0">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-primary/5 to-orange-500/5 border-b">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Filter className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Search Filters</h3>
                <p className="text-sm text-gray-600">
                  {activeFiltersCount > 0 ? `${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied` : 'No filters applied'}
                </p>
              </div>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {activeFiltersCount}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary/20 hover:bg-primary/5 transition-all duration-200"
                >
                  {isOpen ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Hide Filters
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show Filters
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
              
              {activeFiltersCount > 0 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearAllFilters}
                  className="border-red-200 text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              )}
            </div>
          </div>

          <CollapsibleContent>
            <div className="p-6 space-y-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge 
                  variant={filters.vehicleType === 'car' ? 'default' : 'outline'} 
                  className="cursor-pointer px-3 py-1 hover:bg-primary/10 transition-colors"
                  onClick={() => handleFilterChange('vehicleType', filters.vehicleType === 'car' ? '' : 'car')}
                >
                  <Car className="h-3 w-3 mr-1" />
                  Cars
                </Badge>
                <Badge 
                  variant={filters.condition === 'new' ? 'default' : 'outline'} 
                  className="cursor-pointer px-3 py-1 hover:bg-primary/10 transition-colors"
                  onClick={() => handleFilterChange('condition', filters.condition === 'new' ? '' : 'new')}
                >
                  New
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Car className="h-4 w-4 mr-2 text-primary" />
                    Vehicle Type
                  </label>
                  <Select value={filters.vehicleType} onValueChange={(value) => handleFilterChange('vehicleType', value)}>
                    <SelectTrigger className="h-11 border-gray-200 focus:border-primary transition-colors">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
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
                    <SelectContent>
                      <SelectItem value="">All Brands</SelectItem>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Badge className="h-4 w-4 mr-2 text-primary" />
                    Condition
                  </label>
                  <Select value={filters.condition} onValueChange={(value) => handleFilterChange('condition', value)}>
                    <SelectTrigger className="h-11 border-gray-200 focus:border-primary transition-colors">
                      <SelectValue placeholder="All Conditions" />
                    </SelectTrigger>
                    <SelectContent>
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
                    <SelectContent>
                      <SelectItem value="">All Fuel Types</SelectItem>
                      {fuelTypes.map((fuel) => (
                        <SelectItem key={fuel} value={fuel}>{fuel}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 space-y-3">
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

              <div className="flex justify-end pt-4 border-t">
                <Button 
                  className="px-8 py-2 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 transition-all duration-200"
                  onClick={() => onFiltersChange && onFiltersChange(filters)}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
