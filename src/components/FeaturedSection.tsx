
import React from 'react';
import VehicleCard from './VehicleCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

const FeaturedSection = () => {
  // Mock data for featured vehicles
  const featuredVehicles = [
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
    {
      id: '3',
      title: '2023 Tesla Model S Plaid',
      price: 95000,
      image: '/placeholder.svg',
      year: 2023,
      mileage: '8,000 km',
      fuelType: 'Electric',
      transmission: 'Automatic',
      location: 'San Francisco, CA',
      rating: 4.7,
      reviewCount: 15,
      condition: 'used' as const,
      dealerName: 'Tesla Bay Area',
      type: 'car' as const
    },
    {
      id: '4',
      title: '2024 Ducati Panigale V4',
      price: 32000,
      image: '/placeholder.svg',
      year: 2024,
      mileage: '0 km',
      fuelType: 'Petrol',
      transmission: 'Manual',
      location: 'Miami, FL',
      rating: 4.9,
      reviewCount: 6,
      condition: 'new' as const,
      dealerName: 'Ducati Miami',
      type: 'motorcycle' as const
    },
    {
      id: '5',
      title: '2022 Porsche 911 Turbo S',
      price: 185000,
      image: '/placeholder.svg',
      year: 2022,
      mileage: '12,000 km',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Chicago, IL',
      rating: 4.8,
      reviewCount: 20,
      condition: 'used' as const,
      dealerName: 'Porsche Chicago',
      type: 'car' as const
    },
    {
      id: '6',
      title: '2024 Yamaha YZF-R1',
      price: 18000,
      image: '/placeholder.svg',
      year: 2024,
      mileage: '0 km',
      fuelType: 'Petrol',
      transmission: 'Manual',
      location: 'Seattle, WA',
      rating: 4.6,
      reviewCount: 9,
      condition: 'new' as const,
      dealerName: 'Yamaha Seattle',
      type: 'motorcycle' as const
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              Featured Vehicles
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked premium vehicles from trusted dealers and verified sellers
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VehicleCard {...vehicle} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Button className="btn-primary text-lg px-8 py-4 group">
            View All Vehicles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
