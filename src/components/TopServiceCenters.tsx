
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopServiceCenters = () => {
  const topServices = [
    {
      id: '1',
      name: 'AutoCare Pro',
      image: '/placeholder.svg',
      location: 'New York, NY',
      rating: 4.8,
      reviewCount: 156,
      services: ['Oil Change', 'Brake Service', 'Engine Repair'],
      price: '$50-200',
      availability: 'Available Today',
      offer: '20% off first service'
    },
    {
      id: '2',
      name: 'Quick Fix Motors',
      image: '/placeholder.svg',
      location: 'Los Angeles, CA',
      rating: 4.6,
      reviewCount: 89,
      services: ['AC Repair', 'Tire Service', 'Battery Replacement'],
      price: '$30-150',
      availability: 'Book Ahead',
      offer: 'Free diagnostic check'
    },
    {
      id: '3',
      name: 'Bike Service Hub',
      image: '/placeholder.svg',
      location: 'Miami, FL',
      rating: 4.9,
      reviewCount: 203,
      services: ['Motorcycle Service', 'Bike Maintenance', 'Custom Modifications'],
      price: '$40-300',
      availability: 'Available Tomorrow',
      offer: 'Complimentary pickup & drop'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Top Service Centers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book with our most trusted and professional service centers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topServices.map((service, index) => (
            <Card key={service.id} className="card-hover bg-white border-0 shadow-lg overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                  {service.availability}
                </Badge>
                {service.offer && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                    Special Offer
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-secondary">{service.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-secondary">{service.rating}</span>
                    <span className="text-gray-500 text-sm">({service.reviewCount})</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{service.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-primary">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="font-semibold">{service.price}</span>
                  </div>
                </div>

                {service.offer && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                    <p className="text-orange-700 font-medium text-sm">{service.offer}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1 mb-4">
                  {service.services.map((serviceType) => (
                    <Badge key={serviceType} variant="secondary" className="text-xs">
                      {serviceType}
                    </Badge>
                  ))}
                </div>

                <Link to={`/services/${service.id}`}>
                  <Button className="w-full btn-primary">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Link to="/services">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Service Centers
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopServiceCenters;
