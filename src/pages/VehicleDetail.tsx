
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Phone, Mail, MapPin, Calendar, Gauge, Fuel, Users, Star, Shield, Camera } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarContent, AvatarImage } from '@/components/ui/avatar';

const VehicleDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock vehicle data
  const vehicle = {
    id: '1',
    title: '2022 Toyota Camry Hybrid LE',
    price: 28500,
    originalPrice: 32000,
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800'
    ],
    year: 2022,
    brand: 'Toyota',
    model: 'Camry',
    variant: 'Hybrid LE',
    mileage: 15000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    location: 'New York, NY',
    description: 'This well-maintained Toyota Camry Hybrid offers excellent fuel economy and reliability. Perfect for daily commuting with modern features and safety technology.',
    features: [
      'Apple CarPlay & Android Auto',
      'Adaptive Cruise Control',
      'Lane Departure Warning',
      'Backup Camera',
      'Bluetooth Connectivity',
      'Keyless Entry',
      'Push Button Start',
      'Dual Zone Climate Control'
    ],
    seller: {
      name: 'John Smith',
      rating: 4.8,
      reviews: 127,
      memberSince: '2019',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com'
    },
    specs: {
      engine: '2.5L 4-Cylinder Hybrid',
      power: '208 HP',
      torque: '163 lb-ft',
      mpg: '51 city / 53 highway',
      seats: 5,
      drivetrain: 'FWD'
    }
  };

  const relatedVehicles = [
    { id: '2', title: '2021 Honda Accord', price: 26500, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400' },
    { id: '3', title: '2023 Nissan Altima', price: 29000, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400' },
    { id: '4', title: '2022 Hyundai Sonata', price: 27500, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom section-padding">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/vehicles" className="hover:text-primary transition-colors">Vehicles</Link>
          <span>/</span>
          <span>Vehicle Details</span>
        </div>

        {/* Back Button */}
        <Link to="/vehicles" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Listings</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={vehicle.images[currentImageIndex]}
                    alt={vehicle.title}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white/90 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    Verified
                  </Badge>
                </div>
                <div className="flex space-x-2 p-4 overflow-x-auto">
                  {vehicle.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${vehicle.title} ${index + 1}`}
                      className={`w-20 h-20 object-cover rounded cursor-pointer transition-all ${
                        currentImageIndex === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Details */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-secondary">{vehicle.title}</CardTitle>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{vehicle.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Listed 3 days ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">${vehicle.price.toLocaleString()}</div>
                    {vehicle.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">${vehicle.originalPrice.toLocaleString()}</div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-semibold">{vehicle.year}</div>
                        <div className="text-sm text-gray-600">Year</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Gauge className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-semibold">{vehicle.mileage.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Miles</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Fuel className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-semibold">{vehicle.fuelType}</div>
                        <div className="text-sm text-gray-600">Fuel Type</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-semibold">{vehicle.specs.seats}</div>
                        <div className="text-sm text-gray-600">Seats</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Description</h3>
                      <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specs" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(vehicle.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Seller Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={vehicle.seller.image} alt={vehicle.seller.name} />
                    <AvatarContent>{vehicle.seller.name.charAt(0)}</AvatarContent>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{vehicle.seller.name}</div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{vehicle.seller.rating}</span>
                      <span>({vehicle.seller.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Member since {vehicle.seller.memberSince}
                </div>
                <div className="space-y-3">
                  <Button className="w-full btn-primary">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Seller
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Calculate EMI */}
            <Card>
              <CardHeader>
                <CardTitle>Calculate EMI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Loan Amount</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-lg mt-1"
                      defaultValue={`$${vehicle.price.toLocaleString()}`}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Interest Rate (%)</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-lg mt-1"
                      defaultValue="7.5"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tenure (Years)</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-lg mt-1"
                      defaultValue="5"
                    />
                  </div>
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                    Calculate EMI
                  </Button>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-primary">$542/month</div>
                    <div className="text-sm text-gray-600">Estimated EMI</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Vehicles */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Similar Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVehicles.map((vehicle) => (
                <Link key={vehicle.id} to={`/vehicles/${vehicle.id}`} className="block">
                  <div className="bg-white rounded-lg border hover:shadow-lg transition-all duration-300 card-hover">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{vehicle.title}</h3>
                      <div className="text-xl font-bold text-primary">${vehicle.price.toLocaleString()}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleDetail;
