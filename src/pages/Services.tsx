
import React, { useState, useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Wrench, Calendar, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceType, setServiceType] = useState('all');
  const [location, setLocation] = useState('all');
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: '1',
      name: 'AutoCare Pro',
      image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop',
      location: 'New York, NY',
      rating: 4.8,
      reviewCount: 156,
      services: ['Oil Change', 'Brake Service', 'Engine Repair'],
      description: 'Professional automotive service center with certified technicians.',
      price: '$50-200',
      availability: 'Available Today'
    },
    {
      id: '2',
      name: 'Quick Fix Motors',
      image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c0c416?w=400&h=300&fit=crop',
      location: 'Los Angeles, CA',
      rating: 4.6,
      reviewCount: 89,
      services: ['AC Repair', 'Tire Service', 'Battery Replacement'],
      description: 'Fast and reliable service for all your vehicle maintenance needs.',
      price: '$30-150',
      availability: 'Book Ahead'
    },
    {
      id: '3',
      name: 'Bike Service Hub',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      location: 'Miami, FL',
      rating: 4.9,
      reviewCount: 203,
      services: ['Motorcycle Service', 'Bike Maintenance', 'Custom Modifications'],
      description: 'Specialized in motorcycle and bike servicing with expert mechanics.',
      price: '$40-300',
      availability: 'Available Tomorrow'
    }
  ];

  const serviceOffers = [
    {
      id: '1',
      serviceName: 'AutoCare Pro',
      serviceId: '1',
      offerTitle: 'First Service Discount',
      description: '20% off your first service appointment',
      validUntil: '2024-02-29',
      image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      serviceName: 'Quick Fix Motors',
      serviceId: '2',
      offerTitle: 'Free Diagnostic',
      description: 'Complimentary diagnostic check with any service',
      validUntil: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c0c416?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      serviceName: 'Premium Service Center',
      serviceId: '3',
      offerTitle: 'Express Service',
      description: 'Free pickup and drop-off service within city limits',
      validUntil: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    }
  ];

  const filteredServices = services.filter(service => {
    if (location !== 'all' && !service.location.toLowerCase().includes(location.toLowerCase())) return false;
    if (searchQuery && !service.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const handleOfferBooking = (serviceId: string) => {
    navigate(`/services/${serviceId}?tab=booking&offer=true`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Service Centers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book maintenance and repair services with trusted service centers. Keep your vehicle in perfect condition.
            </p>
          </div>

          {/* Special Offers Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-secondary flex items-center">
                <Gift className="h-6 w-6 mr-2 text-primary" />
                Service Offers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceOffers.map((offer, index) => (
                <Card key={offer.id} className="card-hover bg-white border-0 shadow-lg overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.offerTitle}
                      className="w-full h-40 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                      Limited Time
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{offer.offerTitle}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {offer.serviceName}</p>
                    <p className="text-gray-700 mb-3">{offer.description}</p>
                    <p className="text-sm text-green-600 font-medium mb-3">
                      Valid until: {new Date(offer.validUntil).toLocaleDateString()}
                    </p>
                    <Button 
                      onClick={() => handleOfferBooking(offer.serviceId)}
                      className="w-full btn-primary"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
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
                  Search Service Centers
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by service center name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Service Type
                </label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="repair">Repair</SelectItem>
                    <SelectItem value="customization">Customization</SelectItem>
                  </SelectContent>
                </Select>
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
            </div>
          </div>

          {/* Partner Program CTA */}
          <div className="bg-gradient-secondary rounded-2xl p-8 mb-8 text-white animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">Register Your Service Center</h2>
                <p className="text-lg opacity-90">
                  Join our platform and accept bookings from customers
                </p>
              </div>
              <Button className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-3">
                Register Now
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <p className="text-lg text-gray-600">
              Showing <span className="font-semibold text-secondary">{filteredServices.length}</span> service centers
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <Wrench className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-2">No service centers found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setLocation('all');
                  setServiceType('all');
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

export default Services;
