import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Car, 
  Settings, 
  Calendar,
  MapPin,
  Star,
  Edit,
  Save,
  X,
  Package,
  Clock,
  CheckCircle,
  Truck,
  Eye,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const { toast } = useToast();

  // Mock user data
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    memberSince: '2023',
    totalPurchases: 3
  });

  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 89.99,
      items: [
        {
          name: 'Premium Car Floor Mats',
          price: 89.99,
          quantity: 1,
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'shipped',
      total: 135.98,
      items: [
        {
          name: 'LED Headlight Bulbs H7',
          price: 45.99,
          quantity: 2,
          image: '/placeholder.svg'
        },
        {
          name: 'Car Phone Mount',
          price: 24.99,
          quantity: 1,
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'processing',
      total: 78.99,
      items: [
        {
          name: 'Brake Pads Set',
          price: 78.99,
          quantity: 1,
          image: '/placeholder.svg'
        }
      ]
    }
  ];

  // Mock vehicle listings data
  const vehicleListings = [
    {
      id: '1',
      title: '2019 Honda Civic',
      price: 18500,
      image: '/placeholder.svg',
      status: 'active',
      views: 234,
      inquiries: 12,
      datePosted: '2024-01-10',
      description: 'Well-maintained Honda Civic with low mileage',
      mileage: '45,000',
      year: '2019',
      rejectionReason: null
    },
    {
      id: '2',
      title: '2018 Toyota Camry',
      price: 16800,
      image: '/placeholder.svg',
      status: 'rejected',
      views: 0,
      inquiries: 0,
      datePosted: '2024-01-08',
      description: 'Reliable Toyota Camry in excellent condition',
      mileage: '52,000',
      year: '2018',
      rejectionReason: 'Images quality is poor. Please upload clearer photos of the vehicle.'
    }
  ];

  // Mock service bookings data
  const serviceBookings = [
    {
      id: '1',
      serviceName: 'AutoCare Pro',
      serviceType: 'Oil Change',
      date: '2024-01-20',
      time: '10:00 AM',
      status: 'confirmed',
      price: 75,
      location: 'New York, NY',
      address: '123 Main St, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      notes: 'Please use synthetic oil'
    },
    {
      id: '2',
      serviceName: 'Quick Fix Auto',
      serviceType: 'Brake Inspection',
      date: '2024-01-25',
      time: '2:00 PM',
      status: 'pending',
      price: 50,
      location: 'Brooklyn, NY',
      address: '456 Oak Ave, Brooklyn, NY 11201',
      phone: '+1 (555) 987-6543',
      notes: 'Brake pads making noise'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'shipped':
        return <Truck className="h-4 w-4 text-blue-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <Package className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsVehicleModalOpen(true);
  };

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
    setIsBookingModalOpen(true);
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setIsOrderModalOpen(true);
  };

  const handleCancelBooking = (bookingId) => {
    toast({
      title: "Booking cancelled",
      description: "Your service booking has been cancelled successfully.",
    });
    setIsBookingModalOpen(false);
  };

  const handleCancelOrder = (orderId) => {
    toast({
      title: "Order cancelled",
      description: "Your order has been cancelled successfully.",
    });
    setIsOrderModalOpen(false);
  };

  const handleSubmitReview = () => {
    toast({
      title: "Review submitted",
      description: "Thank you for your review!",
    });
    setIsOrderModalOpen(false);
    setReviewText('');
    setReviewRating(5);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-secondary">{userInfo.name}</h1>
                  <p className="text-gray-600 flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {userInfo.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Member since {userInfo.memberSince}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2"
              >
                <Edit className="h-4 w-4" />
                <span>Edit Profile</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Car className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">{vehicleListings.length}</div>
                  <div className="text-sm text-gray-600">Active Listings</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">{serviceBookings.length}</div>
                  <div className="text-sm text-gray-600">Service Bookings</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Package className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">{orders.length}</div>
                  <div className="text-sm text-gray-600">Total Orders</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
              <TabsTrigger value="bookings">Service Bookings</TabsTrigger>
              <TabsTrigger value="orders">My Orders</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Personal Information */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={userInfo.location}
                            onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <Button onClick={handleSaveProfile} className="btn-primary">
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-gray-600">Full Name</Label>
                        <p className="text-lg font-medium">{userInfo.name}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Email</Label>
                        <p className="text-lg font-medium">{userInfo.email}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Phone</Label>
                        <p className="text-lg font-medium">{userInfo.phone}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Location</Label>
                        <p className="text-lg font-medium">{userInfo.location}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* My Vehicles */}
            <TabsContent value="vehicles">
              <div className="space-y-6">
                {vehicleListings.map((vehicle) => (
                  <Card 
                    key={vehicle.id} 
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleVehicleClick(vehicle)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{vehicle.title}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(vehicle.status)}>
                            {vehicle.status}
                          </Badge>
                          {vehicle.status === 'rejected' && (
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-gray-600">Price</Label>
                          <p className="text-lg font-medium">${vehicle.price}</p>
                        </div>
                        <div>
                          <Label className="text-gray-600">Views</Label>
                          <p className="text-lg font-medium">{vehicle.views}</p>
                        </div>
                        <div>
                          <Label className="text-gray-600">Inquiries</Label>
                          <p className="text-lg font-medium">{vehicle.inquiries}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {vehicleListings.length === 0 && (
                  <div className="text-center py-16">
                    <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-secondary mb-2">No vehicle listings yet</h3>
                    <p className="text-gray-600 mb-6">List your vehicle for sale to reach potential buyers</p>
                    <Button className="btn-primary">List a Vehicle</Button>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Service Bookings */}
            <TabsContent value="bookings">
              <div className="space-y-6">
                {serviceBookings.map((booking) => (
                  <Card 
                    key={booking.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleBookingClick(booking)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{booking.serviceName}</CardTitle>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-gray-600">Service Type</Label>
                          <p className="text-lg font-medium">{booking.serviceType}</p>
                        </div>
                        <div>
                          <Label className="text-gray-600">Date & Time</Label>
                          <p className="text-lg font-medium">
                            {new Date(booking.date).toLocaleDateString()} - {booking.time}
                          </p>
                        </div>
                        <div>
                          <Label className="text-gray-600">Location</Label>
                          <p className="text-lg font-medium">{booking.location}</p>
                        </div>
                        <div>
                          <Label className="text-gray-600">Price</Label>
                          <p className="text-lg font-medium">${booking.price}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {serviceBookings.length === 0 && (
                  <div className="text-center py-16">
                    <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-secondary mb-2">No service bookings yet</h3>
                    <p className="text-gray-600 mb-6">Book a service for your vehicle</p>
                    <Button className="btn-primary">Book a Service</Button>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* My Orders */}
            <TabsContent value="orders">
              <div className="space-y-6">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                          <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            {getStatusIcon(order.status)}
                            <Badge className={getStatusColor(order.status)}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-xl font-bold text-primary">${order.total}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">${item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <div className="flex space-x-4">
                          {order.status === 'delivered' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleOrderClick(order)}
                            >
                              Leave Review
                            </Button>
                          )}
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleOrderClick(order)}
                          >
                            View Details
                          </Button>
                        </div>
                        {order.status !== 'delivered' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleCancelOrder(order.id)}
                          >
                            Cancel Order
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {orders.length === 0 && (
                  <div className="text-center py-16">
                    <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-secondary mb-2">No orders yet</h3>
                    <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
                    <Button className="btn-primary">Browse Store</Button>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-8">
                    <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Settings</h3>
                    <p className="text-gray-600">Account settings coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Vehicle Edit Modal */}
      <Dialog open={isVehicleModalOpen} onOpenChange={setIsVehicleModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Vehicle Details - {selectedVehicle?.title}</DialogTitle>
          </DialogHeader>
          {selectedVehicle && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Status</Label>
                  <Badge className={getStatusColor(selectedVehicle.status)}>
                    {selectedVehicle.status}
                  </Badge>
                </div>
                <div>
                  <Label>Price</Label>
                  <p className="font-medium">${selectedVehicle.price}</p>
                </div>
                <div>
                  <Label>Year</Label>
                  <p className="font-medium">{selectedVehicle.year}</p>
                </div>
                <div>
                  <Label>Mileage</Label>
                  <p className="font-medium">{selectedVehicle.mileage} miles</p>
                </div>
              </div>
              
              <div>
                <Label>Description</Label>
                <Textarea 
                  value={selectedVehicle.description}
                  readOnly
                  className="bg-gray-50"
                />
              </div>

              {selectedVehicle.status === 'rejected' && selectedVehicle.rejectionReason && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <h4 className="font-medium text-red-800">Rejection Reason</h4>
                  </div>
                  <p className="text-red-700">{selectedVehicle.rejectionReason}</p>
                </div>
              )}

              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setIsVehicleModalOpen(false)}>
                  Close
                </Button>
                <Button className="btn-primary">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Listing
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Service Booking Details Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Booking Details - {selectedBooking?.serviceName}</DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Service Type</Label>
                  <p className="font-medium">{selectedBooking.serviceType}</p>
                </div>
                <div>
                  <Label>Status</Label>
                  <Badge className={getStatusColor(selectedBooking.status)}>
                    {selectedBooking.status}
                  </Badge>
                </div>
                <div>
                  <Label>Date & Time</Label>
                  <p className="font-medium">{new Date(selectedBooking.date).toLocaleDateString()} at {selectedBooking.time}</p>
                </div>
                <div>
                  <Label>Price</Label>
                  <p className="font-medium">${selectedBooking.price}</p>
                </div>
              </div>

              <div>
                <Label>Service Center</Label>
                <p className="font-medium">{selectedBooking.serviceName}</p>
                <p className="text-gray-600">{selectedBooking.address}</p>
                <p className="text-gray-600">{selectedBooking.phone}</p>
              </div>

              {selectedBooking.notes && (
                <div>
                  <Label>Special Notes</Label>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{selectedBooking.notes}</p>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setIsBookingModalOpen(false)}>
                  Close
                </Button>
                <div className="space-x-4">
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Reschedule
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleCancelBooking(selectedBooking.id)}
                  >
                    Cancel Booking
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Order Details Modal */}
      <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Order Details - #{selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Order Date</Label>
                  <p className="font-medium">{new Date(selectedOrder.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <Label>Status</Label>
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <Label>Total Amount</Label>
                  <p className="font-medium text-lg">${selectedOrder.total}</p>
                </div>
              </div>

              <div>
                <Label className="text-lg font-medium">Order Items</Label>
                <div className="space-y-3 mt-3">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="font-medium">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedOrder.status === 'delivered' && (
                <div className="border-t pt-6">
                  <Label className="text-lg font-medium">Leave a Review</Label>
                  <div className="space-y-4 mt-3">
                    <div>
                      <Label>Rating</Label>
                      <div className="flex space-x-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            className={`h-6 w-6 cursor-pointer ${
                              star <= reviewRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                            onClick={() => setReviewRating(star)}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label>Review</Label>
                      <Textarea 
                        placeholder="Share your experience with this product..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <Button onClick={handleSubmitReview} className="btn-primary">
                      Submit Review
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex justify-between border-t pt-6">
                <Button variant="outline" onClick={() => setIsOrderModalOpen(false)}>
                  Close
                </Button>
                {selectedOrder.status !== 'delivered' && (
                  <Button 
                    variant="outline" 
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleCancelOrder(selectedOrder.id)}
                  >
                    Cancel Order
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Profile;
