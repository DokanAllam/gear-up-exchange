
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Car, Calendar, Star, Edit, MapPin, Phone, Mail } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    joinDate: 'January 2024'
  });

  const listings = [
    {
      id: '1',
      title: '2023 BMW M3 Competition',
      price: 75000,
      status: 'active',
      views: 245,
      date: '2024-01-15'
    },
    {
      id: '2',
      title: '2022 Audi A4',
      price: 45000,
      status: 'sold',
      views: 189,
      date: '2024-01-10'
    }
  ];

  const bookings = [
    {
      id: '1',
      serviceName: 'AutoCare Pro',
      service: 'Oil Change',
      date: '2024-01-20',
      status: 'completed',
      price: 75
    },
    {
      id: '2',
      serviceName: 'Quick Fix Motors',
      service: 'Brake Service',
      date: '2024-01-25',
      status: 'upcoming',
      price: 150
    }
  ];

  const reviews = [
    {
      id: '1',
      type: 'received',
      from: 'Mike Johnson',
      rating: 5,
      comment: 'Great seller, honest description and smooth transaction!',
      date: '2024-01-18'
    },
    {
      id: '2',
      type: 'given',
      to: 'AutoCare Pro',
      rating: 4,
      comment: 'Good service, professional staff.',
      date: '2024-01-20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8 shadow-lg border-0 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt={userInfo.name} />
                  <AvatarFallback className="text-2xl bg-primary text-white">
                    {userInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-4">
                      <Input
                        value={userInfo.name}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="text-xl font-bold"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          value={userInfo.email}
                          onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                        />
                        <Input
                          value={userInfo.phone}
                          onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      <Input
                        value={userInfo.location}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, location: e.target.value }))}
                      />
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-3xl font-bold text-secondary mb-2">{userInfo.name}</h1>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          <span>{userInfo.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{userInfo.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{userInfo.location}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          <span>Member since {userInfo.joinDate}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <Button 
                        onClick={() => setIsEditing(false)}
                        className="btn-primary"
                      >
                        Save
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={() => setIsEditing(true)}
                      className="btn-primary"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Content */}
          <Tabs defaultValue="listings" className="animate-scale-in">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit">
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="bookings">Service Bookings</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* My Listings */}
            <TabsContent value="listings" className="mt-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    My Vehicle Listings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {listings.map((listing) => (
                      <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold text-secondary">{listing.title}</h3>
                          <p className="text-gray-600">${listing.price.toLocaleString()}</p>
                          <p className="text-sm text-gray-500">Listed on {listing.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="font-semibold">{listing.views}</p>
                            <p className="text-sm text-gray-500">Views</p>
                          </div>
                          <Badge variant={listing.status === 'active' ? 'default' : 'secondary'}>
                            {listing.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Service Bookings */}
            <TabsContent value="bookings" className="mt-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Service Bookings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold text-secondary">{booking.serviceName}</h3>
                          <p className="text-gray-600">{booking.service}</p>
                          <p className="text-sm text-gray-500">Scheduled for {booking.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="font-semibold">${booking.price}</p>
                          </div>
                          <Badge variant={booking.status === 'completed' ? 'secondary' : 'default'}>
                            {booking.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews */}
            <TabsContent value="reviews" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      Reviews Received
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {reviews.filter(r => r.type === 'received').map((review) => (
                        <div key={review.id} className="p-4 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="font-semibold">{review.from}</span>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                          <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      Reviews Given
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {reviews.filter(r => r.type === 'given').map((review) => (
                        <div key={review.id} className="p-4 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="font-semibold">{review.to}</span>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                          <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings" className="mt-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          Email notifications for new messages
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          SMS notifications for bookings
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          Marketing emails
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          Show profile to other users
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          Allow contact from buyers
                        </label>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="btn-primary mr-4">
                        Save Settings
                      </Button>
                      <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        Delete Account
                      </Button>
                    </div>
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

export default Profile;
