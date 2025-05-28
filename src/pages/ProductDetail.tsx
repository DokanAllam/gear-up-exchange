import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import ProductReviews from '@/components/ProductReviews';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShoppingCart, Heart, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { toast } = useToast();

  // Mock product data
  const product = {
    id: '1',
    name: 'Premium Car Floor Mats',
    price: 89.99,
    originalPrice: 119.99,
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    rating: 4.8,
    reviewCount: 124,
    category: 'Interior',
    description: 'High-quality all-weather floor mats designed for maximum protection and style. Made from durable rubber compound that resists wear and provides excellent grip.',
    inStock: true,
    isOnSale: true,
    features: [
      'All-weather protection',
      'Custom fit design',
      'Anti-slip backing',
      'Easy to clean',
      'Durable rubber construction'
    ],
    specifications: {
      'Material': 'Premium Rubber',
      'Color': 'Black',
      'Warranty': '2 Years',
      'Compatibility': 'Universal Fit',
      'Weight': '2.5 kg'
    }
  };

  // Mock reviews data
  const reviews = [
    {
      id: '1',
      userName: 'John Smith',
      rating: 5,
      comment: 'Excellent quality floor mats! Perfect fit and great protection.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '2',
      userName: 'Sarah Johnson',
      rating: 4,
      comment: 'Good quality, easy to clean. Slightly expensive but worth it.',
      date: '2024-01-10',
      verified: true
    },
    {
      id: '3',
      userName: 'Mike Wilson',
      rating: 5,
      comment: 'Perfect for my car! Great material and fits perfectly.',
      date: '2024-01-05',
      verified: false
    }
  ];

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-white">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                {product.isOnSale && (
                  <Badge className="ml-2 bg-red-500 text-white">
                    Sale
                  </Badge>
                )}
                <h1 className="text-3xl font-bold text-secondary mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                  {product.isOnSale && (
                    <Badge className="bg-green-500 text-white">
                      Save ${(product.originalPrice! - product.price).toFixed(2)}
                    </Badge>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">Quantity:</span>
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      className="btn-primary flex-1"
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleAddToWishlist}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Truck className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium">Free Shipping</div>
                    <div className="text-sm text-gray-500">Orders over $50</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <RotateCcw className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium">30-Day Returns</div>
                    <div className="text-sm text-gray-500">Easy returns</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium">2-Year Warranty</div>
                    <div className="text-sm text-gray-500">Quality guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="qa">Q&A</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-600">{key}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <ProductReviews 
                productId={product.id}
                reviews={reviews}
                averageRating={product.rating}
              />
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Shipping Information</h3>
                      <p className="text-gray-600">Free shipping on orders over $50. Standard delivery takes 3-5 business days.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Returns & Exchanges</h3>
                      <p className="text-gray-600">30-day return policy. Items must be in original condition and packaging.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="qa" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold mb-2">Questions & Answers</h3>
                    <p className="text-gray-600">Q&A section coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
