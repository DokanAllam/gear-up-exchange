
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Calendar, DollarSign, Phone } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviewCount: number;
  services: string[];
  description: string;
  price: string;
  availability: string;
}

const ServiceCard = ({
  name,
  image,
  location,
  rating,
  reviewCount,
  services,
  description,
  price,
  availability
}: ServiceCardProps) => {
  return (
    <Card className="card-hover bg-white border-0 shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-green-500 text-white">
          {availability}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-secondary">{name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-semibold text-secondary">{rating}</span>
            <span className="text-gray-500 text-sm">({reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-primary">
            <DollarSign className="h-4 w-4 mr-1" />
            <span className="font-semibold">{price}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {services.map((service) => (
            <Badge key={service} variant="secondary" className="text-xs">
              {service}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-2">
          <Button className="flex-1 btn-primary">
            <Calendar className="h-4 w-4 mr-2" />
            Book Now
          </Button>
          <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
