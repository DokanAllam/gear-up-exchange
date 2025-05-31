
import React from 'react';
import VehicleCard from '@/components/VehicleCard';
import VehicleComparison from '@/components/VehicleComparison';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';

interface VehicleGridProps {
  vehicles: any[];
  viewMode: 'grid' | 'list';
  loading: boolean;
  comparisonVehicles: any[];
  onAddToComparison: (vehicle: any) => void;
  onRemoveFromComparison: (vehicleId: string) => void;
  onClearFilters: () => void;
}

const VehicleGrid: React.FC<VehicleGridProps> = ({
  vehicles,
  viewMode,
  loading,
  comparisonVehicles,
  onAddToComparison,
  onRemoveFromComparison,
  onClearFilters
}) => {
  if (loading) {
    return <LoadingSpinner text="Loading vehicles..." />;
  }

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600 mb-4">No vehicles found matching your filters</p>
        <Button onClick={onClearFilters} variant="outline">
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <>
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
                onClick={() => onAddToComparison(vehicle)}
                disabled={comparisonVehicles.length >= 3 || comparisonVehicles.find(v => v.id === vehicle.id)}
              >
                Add to Compare
              </Button>
            </div>
          </div>
        ))}
      </div>

      <VehicleComparison
        vehicles={comparisonVehicles}
        onRemoveVehicle={onRemoveFromComparison}
        onAddVehicle={() => {}}
      />

      {vehicles.length > 0 && (
        <div className="text-center mt-8">
          <Button className="btn-primary">
            Load More Vehicles
          </Button>
        </div>
      )}
    </>
  );
};

export default VehicleGrid;
