
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import OffersSection from '@/components/OffersSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Package } from 'lucide-react';

const Store = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock products data
  const products = [
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
    },
    {
      id: '5',
      name: 'Brake Pads Set',
      price: 78.99,
      image: '/placeholder.svg',
      rating: 4.5,
      reviewCount: 67,
      category: 'Brakes',
      description: 'Premium ceramic brake pads for superior stopping power and durability.',
      inStock: true
    },
    {
      id: '6',
      name: 'Car Air Freshener',
      price: 12.99,
      image: '/placeholder.svg',
      rating: 4.3,
      reviewCount: 312,
      category: 'Accessories',
      description: 'Long-lasting vanilla scented car air freshener.',
      inStock: true
    }
  ];

  const categories = ['all', 'Interior', 'Lighting', 'Accessories', 'Maintenance', 'Brakes'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Page Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 flex items-center justify-center">
              <Package className="h-10 w-10 text-primary mr-3" />
              AutoHub Store
            </h1>
            <p className="text-xl text-gray-600">
              Quality automotive parts and accessories for your vehicle
            </p>
          </div>

          {/* Offers Section */}
          <OffersSection />

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.slice(1).map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Store;
