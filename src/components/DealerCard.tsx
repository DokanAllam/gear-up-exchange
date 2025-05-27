
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Car, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import WishlistButton from './WishlistButton';
import ShareButton from './ShareButton';

interface DealerCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviewCount: number;
  vehicleCount: number;
  specialties: string[];
  description: string;
  isPartner: boolean;
}

const DealerCard = ({
  id,
  name,
  image,
  location,
  rating,
  reviewCount,
  vehicleCount,
  specialties,
  description,
  isPartner
}: DealerCardProps) => {
  return (
    <Card className="card-hover bg-white border-0 shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {isPartner && (
          <Badge className="absolute top-4 left-4 bg-primary text-white">
            Partner
          </Badge>
        )}
        <div className="absolute top-4 right-4 flex space-x-2">
          <WishlistButton itemId={id} itemType="dealer" />
          <ShareButton url={`/dealers/${id}`} title={name} />
        </div>
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
            <Car className="h-4 w-4 mr-1" />
            <span className="font-semibold">{vehicleCount} vehicles</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-2">
          <Link to={`/dealers/${id}`} className="flex-1">
            <Button className="w-full btn-primary">
              View Showroom
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealerCard;
