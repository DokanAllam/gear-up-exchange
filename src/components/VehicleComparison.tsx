
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Star, Calendar, Fuel, Users } from 'lucide-react';

interface Vehicle {
  id: string;
  title: string;
  price: number;
  image: string;
  year: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  rating: number;
  reviewCount: number;
}

interface VehicleComparisonProps {
  vehicles: Vehicle[];
  onRemoveVehicle: (id: string) => void;
  onAddVehicle: () => void;
}

const VehicleComparison = ({ vehicles, onRemoveVehicle, onAddVehicle }: VehicleComparisonProps) => {
  if (vehicles.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Vehicle Comparison</span>
          <Button onClick={onAddVehicle} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Vehicle
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="relative border rounded-lg p-4">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => onRemoveVehicle(vehicle.id)}
              >
                <X className="h-4 w-4" />
              </Button>
              
              <img
                src={vehicle.image}
                alt={vehicle.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              
              <h4 className="font-semibold text-lg mb-2 line-clamp-2">{vehicle.title}</h4>
              <p className="text-2xl font-bold text-primary mb-4">${vehicle.price.toLocaleString()}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Year:</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>{vehicle.year}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mileage:</span>
                  <span>{vehicle.mileage}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Fuel:</span>
                  <div className="flex items-center">
                    <Fuel className="h-4 w-4 mr-1 text-primary" />
                    <span>{vehicle.fuelType}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Transmission:</span>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-primary" />
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    <span>{vehicle.rating} ({vehicle.reviewCount})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleComparison;
