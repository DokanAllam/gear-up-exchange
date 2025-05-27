
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import DealerCard from '@/components/DealerCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Star, Users, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Dealers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const dealers = [
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
    },
    {
      id: '2',
      name: 'City Motors',
      image: '/placeholder.svg',
      location: 'Los Angeles, CA',
      rating: 4.6,
      reviewCount: 180,
      vehicleCount: 85,
      specialties: ['Family Cars', 'SUVs'],
      description: 'Your trusted family car dealer with competitive prices and excellent service.',
      isPartner: true
    },
    {
      id: '3',
      name: 'Bike Paradise',
      image: '/placeholder.svg',
      location: 'Miami, FL',
      rating: 4.9,
      reviewCount: 150,
      vehicleCount: 200,
      specialties: ['Motorcycles', 'Bikes'],
      description: 'The largest selection of motorcycles and bikes in the region.',
      isPartner: false
    }
  ];

  const dealerOffers = [
    {
      id: '1',
      dealerName: 'Premium Auto Gallery',
      offerTitle: 'Luxury Vehicle Sale',
      description: 'Up to 20% off on premium luxury vehicles',
      validUntil: '2024-02-28',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      dealerName: 'City Motors',
      offerTitle: 'Zero Down Payment',
      description: 'Get your dream car with zero down payment on approved credit',
      validUntil: '2024-02-15',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      dealerName: 'Elite Auto House',
      offerTitle: 'Extended Warranty',
      description: 'Free 3-year extended warranty on all certified pre-owned vehicles',
      validUntil: '2024-03-15',
      image: '/placeholder.svg'
    }
  ];

  const filteredDealers = dealers.filter(dealer => {
    if (location !== 'all' && !dealer.location.toLowerCase().includes(location.toLowerCase())) return false;
    if (searchQuery && !dealer.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Trusted Dealers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with verified dealers and explore their showrooms. Find the perfect vehicle from trusted partners.
            </p>
          </div>

          {/* Special Offers Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-secondary flex items-center">
                <Gift className="h-6 w-6 mr-2 text-primary" />
                Special Offers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealerOffers.map((offer, index) => (
                <Card key={offer.id} className="card-hover bg-white border-0 shadow-lg overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.offerTitle}
                      className="w-full h-40 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                      Limited Time
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{offer.offerTitle}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {offer.dealerName}</p>
                    <p className="text-gray-700 mb-3">{offer.description}</p>
                    <p className="text-sm text-orange-600 font-medium mb-3">
                      Valid until: {new Date(offer.validUntil).toLocaleDateString()}
                    </p>
                    <Button className="w-full btn-primary">
                      View Offer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-scale-in">
            <div className="flex flex-col lg:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Search Dealers
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by dealer name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Location
                </label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="new york">New York</SelectItem>
                    <SelectItem value="los angeles">Los Angeles</SelectItem>
                    <SelectItem value="miami">Miami</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="vehicles">Most Vehicles</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Partner Program CTA */}
          <div className="bg-gradient-primary rounded-2xl p-8 mb-8 text-white animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">Become a Partner Dealer</h2>
                <p className="text-lg opacity-90">
                  Join our network of trusted dealers and reach more customers
                </p>
              </div>
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3">
                Apply Now
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <p className="text-lg text-gray-600">
              Showing <span className="font-semibold text-secondary">{filteredDealers.length}</span> dealers
            </p>
          </div>

          {/* Dealers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDealers.map((dealer, index) => (
              <div
                key={dealer.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DealerCard {...dealer} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDealers.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-2">No dealers found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setLocation('all');
                }}
                className="btn-primary"
              >
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

export default Dealers;
