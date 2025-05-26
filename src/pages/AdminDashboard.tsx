
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Car, Building2, Wrench, TrendingUp, DollarSign, Eye, MessageSquare } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Users', value: '12,345', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Active Listings', value: '3,456', change: '+8%', icon: Car, color: 'text-green-600' },
    { title: 'Partner Dealers', value: '245', change: '+15%', icon: Building2, color: 'text-purple-600' },
    { title: 'Service Centers', value: '189', change: '+10%', icon: Wrench, color: 'text-orange-600' },
  ];

  const recentUsers = [
    { name: 'John Smith', email: 'john@example.com', type: 'Buyer', joined: '2024-01-15' },
    { name: 'AutoMax Dealers', email: 'info@automax.com', type: 'Dealer', joined: '2024-01-14' },
    { name: 'Quick Service', email: 'contact@quickservice.com', type: 'Service', joined: '2024-01-13' },
  ];

  const pendingApprovals = [
    { name: 'Premium Motors', type: 'Dealer', documents: 5, status: 'pending' },
    { name: 'Elite Service Center', type: 'Service', documents: 3, status: 'pending' },
    { name: 'City Auto Hub', type: 'Dealer', documents: 4, status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, Administrator</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Demo Account
              </Badge>
              <Button variant="outline">Settings</Button>
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
                      <p className="text-sm text-green-600">{stat.change} from last month</p>
                    </div>
                    <Icon className={`h-12 w-12 ${stat.color}`} />
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
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                  <CardDescription>Latest user registrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-secondary">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">{user.type}</Badge>
                          <p className="text-xs text-gray-500 mt-1">{user.joined}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full btn-primary">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Users
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Car className="h-4 w-4 mr-2" />
                    Review Listings
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Building2 className="h-4 w-4 mr-2" />
                    Approve Dealers
                  </Button>
                  <Button className="w-full" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Community Moderation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Dealer and service center applications awaiting review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((application, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-secondary">{application.name}</p>
                        <p className="text-sm text-gray-600">{application.type} Application</p>
                        <p className="text-xs text-gray-500">{application.documents} documents submitted</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="btn-primary">Approve</Button>
                        <Button size="sm" variant="outline">Review</Button>
                        <Button size="sm" variant="destructive">Reject</Button>
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

export default AdminDashboard;
