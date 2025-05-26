
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Star, Car, Award, Users, Globe } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DealerDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('inventory');

  // Mock dealer data
  const dealer = {
    id: '1',
    name: 'Premium Auto Gallery',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150',
    rating: 4.8,
    reviews: 342,
    location: 'Downtown Manhattan, NY',
    address: '123 Auto Plaza, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'info@premiumautogallery.com',
    website: 'www.premiumautogallery.com',
    established: '2010',
    specialties: ['Luxury Cars', 'Sports Cars', 'Electric Vehicles'],
    description: 'Premium Auto Gallery has been serving New York with the finest selection of luxury and sports vehicles for over a decade. We pride ourselves on exceptional customer service and transparent pricing.',
    hours: {
      'Monday - Friday': '9:00 AM - 8:00 PM',
      'Saturday': '9:00 AM - 6:00 PM',
      'Sunday': '11:00 AM - 5:00 PM'
    },
    stats: {
      totalVehicles: 150,
      soldThisYear: 285,
      yearsInBusiness: 14,
      satisfaction: '98%'
    },
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400'
    ]
  };

  const inventory = [
    { id: '1', title: '2023 BMW M4 Competition', price: 75900, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400', status: 'Available' },
    { id: '2', title: '2022 Mercedes-Benz C300', price: 52500, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400', status: 'Available' },
    { id: '3', title: '2023 Audi A4 Premium', price: 48900, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400', status: 'Sold' },
    { id: '4', title: '2022 Tesla Model S', price: 94990, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400', status: 'Available' }
  ];

  const reviews = [
    {
      id: '1',
      customer: 'Sarah Johnson',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent service! The team was very professional and helped me find the perfect car within my budget.',
      vehicle: '2022 BMW X3'
    },
    {
      id: '2',
      customer: 'Michael Chen',
      rating: 5,
      date: '2024-01-10',
      comment: 'Outstanding experience from start to finish. Transparent pricing and no hidden fees. Highly recommended!',
      vehicle: '2023 Mercedes C-Class'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom section-padding">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/dealers" className="hover:text-primary transition-colors">Dealers</Link>
          <span>/</span>
          <span>Dealer Details</span>
        </div>

        {/* Back Button */}
        <Link to="/dealers" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dealers</span>
        </Link>

        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="relative h-64 rounded-t-lg overflow-hidden">
              <img src={dealer.image} alt={dealer.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{dealer.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{dealer.rating}</span>
                    <span>({dealer.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{dealer.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{dealer.stats.totalVehicles}</div>
                  <div className="text-sm text-gray-600">Vehicles in Stock</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{dealer.stats.soldThisYear}</div>
                  <div className="text-sm text-gray-600">Sold This Year</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{dealer.stats.yearsInBusiness}</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{dealer.stats.satisfaction}</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="inventory" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {inventory.map((vehicle) => (
                    <Card key={vehicle.id} className="card-hover">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img src={vehicle.image} alt={vehicle.title} className="w-full h-48 object-cover rounded-t-lg" />
                          <Badge className={`absolute top-3 right-3 ${vehicle.status === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}>
                            {vehicle.status}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{vehicle.title}</h3>
                          <div className="text-xl font-bold text-primary mb-3">${vehicle.price.toLocaleString()}</div>
                          <Button className="w-full" disabled={vehicle.status === 'Sold'}>
                            {vehicle.status === 'Available' ? 'View Details' : 'Sold Out'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">
                    View All Inventory ({dealer.stats.totalVehicles} vehicles)
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {dealer.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">{dealer.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {dealer.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline">{specialty}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Gallery</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {dealer.gallery.map((image, index) => (
                            <img key={index} src={image} alt={`Gallery ${index + 1}`} className="w-full h-24 object-cover rounded" />
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                        <div className="space-y-2">
                          {Object.entries(dealer.hours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between">
                              <span className="font-medium">{day}</span>
                              <span className="text-gray-600">{hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold">{review.customer}</h4>
                            <p className="text-sm text-gray-600">Purchased: {review.vehicle}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-sm text-gray-600">{review.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="text-center">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">{dealer.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">{dealer.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">{dealer.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm">{dealer.website}</span>
                </div>
                <div className="space-y-2 pt-4">
                  <Button className="w-full btn-primary">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Dealer
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(dealer.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="font-medium">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DealerDetail;
