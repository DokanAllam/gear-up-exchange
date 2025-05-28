
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import VehicleCard from '@/components/VehicleCard';
import DealerCard from '@/components/DealerCard';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Car, Users, Wrench, Package } from 'lucide-react';

const Wishlist = () => {
  // Mock wishlist data
  const wishlistVehicles = [
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
    }
  ];

  const wishlistDealers = [
    {
      id: '1',
      name: 'Premium Auto Gallery',
      image: '/placeholder.svg',
      location: 'New York, NY',
      rating: 4.8,
      reviewCount: 245,
      vehicleCount: 120,
      specialties: ['Luxury Cars', 'Sports Cars'],
      description: 'Specializing in premium luxury and sports vehicles with over 15 years of experience.',
      isPartner: true
    }
  ];

  const wishlistServices = [
    {
      id: '1',
      name: 'AutoCare Pro',
      image: '/placeholder.svg',
      location: 'New York, NY',
      rating: 4.8,
      reviewCount: 156,
      services: ['Oil Change', 'Brake Service', 'Engine Repair'],
      description: 'Professional automotive service center with certified technicians.',
      price: '$50-200',
      availability: 'Available Today'
    }
  ];

  const wishlistProducts = [
    {
      id: '1',
      name: 'Premium Car Floor Mats',
      price: 89.99,
      originalPrice: 119.99,
      image: '/placeholder.svg',
      rating: 4.8,
      reviewCount: 124,
      category: 'Interior',
      description: 'High-quality all-weather floor mats designed for maximum protection and style.',
      inStock: true,
      isOnSale: true
    },
    {
      id: '2',
      name: 'LED Headlight Bulbs H7',
      price: 45.99,
      image: '/placeholder.svg',
      rating: 4.7,
      reviewCount: 89,
      category: 'Lighting',
      description: 'Ultra-bright LED headlight bulbs with 6000K white light and long lifespan.',
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 flex items-center justify-center">
              <Heart className="h-10 w-10 text-red-500 mr-3" />
              My Wishlist
            </h1>
            <p className="text-xl text-gray-600">
              Your saved vehicles, dealers, services, and products
            </p>
          </div>

          <Tabs defaultValue="vehicles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="vehicles" className="flex items-center space-x-2">
                <Car className="h-4 w-4" />
                <span>Vehicles ({wishlistVehicles.length})</span>
              </TabsTrigger>
              <TabsTrigger value="dealers" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Dealers ({wishlistDealers.length})</span>
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center space-x-2">
                <Wrench className="h-4 w-4" />
                <span>Services ({wishlistServices.length})</span>
              </TabsTrigger>
              <TabsTrigger value="products" className="flex items-center space-x-2">
                <Package className="h-4 w-4" />
                <span>Products ({wishlistProducts.length})</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vehicles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} {...vehicle} />
                ))}
              </div>
              {wishlistVehicles.length === 0 && (
                <div className="text-center py-16">
                  <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-secondary mb-2">No vehicles saved</h3>
                  <p className="text-gray-600 mb-6">Start browsing and save your favorite vehicles</p>
                  <Button className="btn-primary">Browse Vehicles</Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="dealers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistDealers.map((dealer) => (
                  <DealerCard key={dealer.id} {...dealer} />
                ))}
              </div>
              {wishlistDealers.length === 0 && (
                <div className="text-center py-16">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-secondary mb-2">No dealers saved</h3>
                  <p className="text-gray-600 mb-6">Save your favorite dealers for easy access</p>
                  <Button className="btn-primary">Browse Dealers</Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="services">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
              {wishlistServices.length === 0 && (
                <div className="text-center py-16">
                  <Wrench className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-secondary mb-2">No services saved</h3>
                  <p className="text-gray-600 mb-6">Save your favorite service centers</p>
                  <Button className="btn-primary">Browse Services</Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="products">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              {wishlistProducts.length === 0 && (
                <div className="text-center py-16">
                  <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-secondary mb-2">No products saved</h3>
                  <p className="text-gray-600 mb-6">Save your favorite products</p>
                  <Button className="btn-primary">Browse Products</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
