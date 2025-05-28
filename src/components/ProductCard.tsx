
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  description: string;
  inStock: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  category,
  description,
  inStock,
  isOnSale = false
}: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to wishlist",
      description: `${name} has been added to your wishlist.`,
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-primary/30 overflow-hidden">
      <Link to={`/store/product/${id}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isOnSale && (
            <Badge className="absolute top-3 left-3 bg-red-500 text-white">
              Sale
            </Badge>
          )}
          {!inStock && (
            <Badge className="absolute top-3 right-3 bg-gray-500 text-white">
              Out of Stock
            </Badge>
          )}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleAddToWishlist}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-sm text-gray-500">({reviewCount} reviews)</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">${originalPrice}</span>
            )}
          </div>
        </CardContent>
      </Link>
      
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full btn-primary"
          onClick={handleAddToCart}
          disabled={!inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
