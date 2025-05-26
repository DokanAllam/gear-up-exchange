
import React from 'react';
import { Car, Users, MapPin, Star, Calendar, Fuel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface VehicleCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  year: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  location: string;
  rating: number;
  reviewCount: number;
  condition: 'new' | 'used';
  dealerName?: string;
  type: 'car' | 'bike' | 'motorcycle';
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  title,
  price,
  image,
  year,
  mileage,
  fuelType,
  transmission,
  location,
  rating,
  reviewCount,
  condition,
  dealerName,
  type
}) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'car':
        return <Car className="h-4 w-4" />;
      case 'bike':
      case 'motorcycle':
        return <Car className="h-4 w-4" />;
      default:
        return <Car className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge 
            variant={condition === 'new' ? 'default' : 'secondary'}
            className={condition === 'new' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}
          >
            {condition.toUpperCase()}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
            <span className="flex items-center space-x-1">
              {getTypeIcon()}
              <span className="capitalize">{type}</span>
            </span>
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Price */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gradient">
              ${price.toLocaleString()}
            </span>
            {dealerName && (
              <span className="text-sm text-gray-600 flex items-center">
                <Users className="h-3 w-3 mr-1" />
                {dealerName}
              </span>
            )}
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Car className="h-4 w-4 text-primary" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="h-4 w-4 text-primary" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{transmission}</span>
          </div>
        </div>

        {/* Location and Rating */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center space-x-1 text-gray-600">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500">({reviewCount})</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link to={`/vehicles/${id}`} className="flex-1">
            <Button className="w-full btn-primary">
              View Details
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => console.log('Contact seller:', id)}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
