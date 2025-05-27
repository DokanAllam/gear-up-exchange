
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WishlistButtonProps {
  itemId: string;
  itemType: 'vehicle' | 'dealer' | 'service';
  initialWishlisted?: boolean;
}

const WishlistButton = ({ itemId, itemType, initialWishlisted = false }: WishlistButtonProps) => {
  const [isWishlisted, setIsWishlisted] = useState(initialWishlisted);
  const { toast } = useToast();

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${itemType} has been ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleWishlist}
      className={`${
        isWishlisted 
          ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
          : 'border-gray-300 text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
    </Button>
  );
};

export default WishlistButton;
