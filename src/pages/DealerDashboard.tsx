
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, Eye, MessageSquare, TrendingUp, Plus, Edit, Trash2 } from 'lucide-react';

const DealerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Active Listings', value: '24', change: '+3 this week', icon: Car },
    { title: 'Total Views', value: '1,847', change: '+12% this month', icon: Eye },
    { title: 'Inquiries', value: '43', change: '+8 new', icon: MessageSquare },
    { title: 'Sales This Month', value: '7', change: '+40% vs last month', icon: TrendingUp },
  ];

  const vehicles = [
    { id: 1, name: '2023 BMW X5', price: '$65,000', views: 245, inquiries: 8, status: 'active' },
    { id: 2, name: '2022 Mercedes C-Class', price: '$48,000', views: 189, inquiries: 5, status: 'active' },
    { id: 3, name: '2024 Audi A4', price: '$52,000', views: 156, inquiries: 3, status: 'pending' },
  ];

  const inquiries = [
    { customer: 'John Smith', vehicle: '2023 BMW X5', message: 'Interested in scheduling a test drive', time: '2 hours ago' },
    { customer: 'Sarah Johnson', vehicle: '2022 Mercedes C-Class', message: 'Can you provide more details about the warranty?', time: '4 hours ago' },
    { customer: 'Mike Wilson', vehicle: '2024 Audi A4', message: 'Is the price negotiable?', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary">Dealer Dashboard</h1>
              <p className="text-gray-600">Premium Motors Dealership</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Demo Account
              </Badge>
              <Button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Vehicle
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
            <TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Inquiries</CardTitle>
                  <CardDescription>Latest customer inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inquiries.slice(0, 3).map((inquiry, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-medium text-secondary">{inquiry.customer}</p>
                          <span className="text-xs text-gray-500">{inquiry.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{inquiry.vehicle}</p>
                        <p className="text-sm text-gray-700">{inquiry.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Vehicles</CardTitle>
                  <CardDescription>Your most viewed listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {vehicles.map((vehicle) => (
                      <div key={vehicle.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-secondary">{vehicle.name}</p>
                          <p className="text-sm text-gray-600">{vehicle.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{vehicle.views} views</p>
                          <p className="text-xs text-gray-500">{vehicle.inquiries} inquiries</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vehicles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Vehicle Listings</CardTitle>
                <CardDescription>Manage your vehicle inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-secondary">{vehicle.name}</p>
                        <p className="text-sm text-gray-600">{vehicle.price}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs text-gray-500">{vehicle.views} views</span>
                          <span className="text-xs text-gray-500">{vehicle.inquiries} inquiries</span>
                          <Badge variant={vehicle.status === 'active' ? 'default' : 'secondary'}>
                            {vehicle.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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

export default DealerDashboard;
