
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopDealers = () => {
  const topDealers = [
    {
      id: '1',
      name: 'Premium Auto Gallery',
      image: '/placeholder.svg',
      location: 'New York, NY',
      rating: 4.8,
      reviewCount: 245,
      vehicleCount: 120,
      specialties: ['Luxury Cars', 'Sports Cars'],
      isPartner: true,
      offer: 'Up to 20% off on luxury vehicles'
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
      isPartner: true,
      offer: 'Zero down payment available'
    },
    {
      id: '3',
      name: 'Elite Auto House',
      image: '/placeholder.svg',
      location: 'Miami, FL',
      rating: 4.9,
      reviewCount: 150,
      vehicleCount: 200,
      specialties: ['Sports Cars', 'Convertibles'],
      isPartner: true,
      offer: 'Free extended warranty'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Top Rated Dealers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most trusted and highly-rated dealer partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topDealers.map((dealer, index) => (
            <Card key={dealer.id} className="card-hover bg-white border-0 shadow-lg overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={dealer.image}
                  alt={dealer.name}
                  className="w-full h-48 object-cover"
                />
                {dealer.isPartner && (
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    Partner
                  </Badge>
                )}
                {dealer.offer && (
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                    Special Offer
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-secondary">{dealer.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-secondary">{dealer.rating}</span>
                    <span className="text-gray-500 text-sm">({dealer.reviewCount})</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{dealer.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-primary">
                    <Car className="h-4 w-4 mr-1" />
                    <span className="font-semibold">{dealer.vehicleCount} vehicles</span>
                  </div>
                </div>

                {dealer.offer && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-700 font-medium text-sm">{dealer.offer}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1 mb-4">
                  {dealer.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <Link to={`/dealers/${dealer.id}`}>
                  <Button className="w-full btn-primary">
                    View Showroom
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Link to="/dealers">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Dealers
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopDealers;
