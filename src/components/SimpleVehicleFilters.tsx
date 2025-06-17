
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Search } from 'lucide-react';

interface SimpleVehicleFiltersProps {
  vehicles: any[];
  onFilteredVehiclesChange: (vehicles: any[]) => void;
  onLoadingChange: (loading: boolean) => void;
}

const SimpleVehicleFilters: React.FC<SimpleVehicleFiltersProps> = ({
  vehicles,
  onFilteredVehiclesChange,
  onLoadingChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    onLoadingChange(true);
    
    setTimeout(() => {
      let filtered = vehicles.filter(vehicle => {
        // Search term filter
        if (searchTerm && !vehicle.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return false;
        }
        
        // Type filter
        if (selectedType && selectedType !== 'all' && vehicle.type !== selectedType) {
          return false;
        }
        
        // Brand filter
        if (selectedBrand && selectedBrand !== 'all' && vehicle.brand !== selectedBrand) {
          return false;
        }
        
        // Price filter
        if (maxPrice && vehicle.price > parseInt(maxPrice)) {
          return false;
        }
        
        return true;
      });
      
      onFilteredVehiclesChange(filtered);
      onLoadingChange(false);
    }, 500);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedBrand('');
    setMaxPrice('');
    onFilteredVehiclesChange(vehicles);
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Search & Filter Vehicles</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search vehicles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Vehicle Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="car">Cars</SelectItem>
              <SelectItem value="motorcycle">Motorcycles</SelectItem>
              <SelectItem value="bike">Bikes</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Tesla">Tesla</SelectItem>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Harley Davidson">Harley Davidson</SelectItem>
            </SelectContent>
          </Select>
          
          <Input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          
          <div className="flex space-x-2">
            <Button onClick={handleFilter} className="flex-1">
              Apply
            </Button>
            <Button onClick={handleClear} variant="outline">
              Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleVehicleFilters;
