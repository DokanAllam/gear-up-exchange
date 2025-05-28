
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  // Mock data for featured products
  const featuredProducts = [
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
    },
    {
      id: '3',
      name: 'Car Phone Mount',
      price: 24.99,
      image: '/placeholder.svg',
      rating: 4.6,
      reviewCount: 203,
      category: 'Accessories',
      description: 'Universal magnetic car phone mount with 360-degree rotation.',
      inStock: true
    },
    {
      id: '4',
      name: 'Engine Oil 5W-30',
      price: 32.99,
      image: '/placeholder.svg',
      rating: 4.9,
      reviewCount: 156,
      category: 'Maintenance',
      description: 'High-performance synthetic engine oil for optimal engine protection.',
      inStock: false
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Package className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              Our Products
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality automotive parts and accessories for your vehicle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Link to="/store">
            <Button className="btn-primary text-lg px-8 py-4 group">
              Browse All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
