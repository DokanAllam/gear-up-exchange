
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Wrench, Star, CheckCircle, AlertCircle } from 'lucide-react';

const ServiceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Pending Bookings', value: '12', change: '+3 today', icon: Calendar },
    { title: 'In Progress', value: '8', change: '2 due today', icon: Wrench },
    { title: 'Completed Today', value: '15', change: '+25% vs yesterday', icon: CheckCircle },
    { title: 'Average Rating', value: '4.8', change: '⭐ 234 reviews', icon: Star },
  ];

  const bookings = [
    { id: 1, customer: 'John Smith', service: 'Oil Change', vehicle: '2020 Honda Civic', time: '09:00 AM', status: 'confirmed' },
    { id: 2, customer: 'Sarah Wilson', service: 'Brake Inspection', vehicle: '2019 Toyota Camry', time: '11:30 AM', status: 'in-progress' },
    { id: 3, customer: 'Mike Johnson', service: 'Engine Diagnostics', vehicle: '2021 BMW X3', time: '02:00 PM', status: 'pending' },
  ];

  const services = [
    { name: 'Oil Change', price: '$45', duration: '30 min', bookings: 45 },
    { name: 'Brake Service', price: '$120', duration: '60 min', bookings: 23 },
    { name: 'Engine Diagnostics', price: '$80', duration: '45 min', bookings: 18 },
    { name: 'Tire Rotation', price: '$35', duration: '20 min', bookings: 31 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary">Service Center Dashboard</h1>
              <p className="text-gray-600">Quick Fix Auto Service</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Demo Account
              </Badge>
              <Button className="btn-primary">
                <Calendar className="h-4 w-4 mr-2" />
                New Booking
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                      <p className="text-sm text-primary">{stat.change}</p>
                    </div>
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                  <CardDescription>Upcoming service appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-secondary">{booking.customer}</p>
                          <p className="text-sm text-gray-600">{booking.service} - {booking.vehicle}</p>
                          <div className="flex items-center mt-1">
                            <Clock className="h-3 w-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-500">{booking.time}</span>
                          </div>
                        </div>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Services</CardTitle>
                  <CardDescription>Most requested services this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-secondary">{service.name}</p>
                          <p className="text-sm text-gray-600">{service.price} • {service.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{service.bookings}</p>
                          <p className="text-xs text-gray-500">bookings</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>Manage customer service appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-secondary">{booking.customer}</p>
                        <p className="text-sm text-gray-600">{booking.service}</p>
                        <p className="text-sm text-gray-500">{booking.vehicle} • {booking.time}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" className="btn-primary">Update</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ServiceDashboard;
