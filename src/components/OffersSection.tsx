
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Percent, Clock, Star } from 'lucide-react';

const OffersSection = () => {
  const offers = [
    {
      id: '1',
      title: 'Flash Sale - 50% Off',
      description: 'Limited time offer on selected car accessories',
      discount: '50%',
      validUntil: '2024-02-01',
      image: '/placeholder.svg',
      type: 'flash'
    },
    {
      id: '2',
      title: 'Buy 2 Get 1 Free',
      description: 'On all car care products',
      discount: 'BOGO',
      validUntil: '2024-01-31',
      image: '/placeholder.svg',
      type: 'bundle'
    },
    {
      id: '3',
      title: 'Free Shipping Weekend',
      description: 'Free shipping on all orders this weekend',
      discount: 'Free Ship',
      validUntil: '2024-01-28',
      image: '/placeholder.svg',
      type: 'shipping'
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <Percent className="h-6 w-6 text-primary mr-2" />
        <h2 className="text-2xl font-bold text-secondary">Special Offers</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                {offer.discount}
              </Badge>
              <div className="absolute top-3 right-3 flex items-center bg-white rounded-full px-2 py-1">
                <Clock className="h-3 w-3 text-gray-500 mr-1" />
                <span className="text-xs text-gray-600">Until {offer.validUntil}</span>
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
              
              <Button className="w-full btn-primary">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
