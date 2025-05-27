
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Car, 
  Building2, 
  Wrench, 
  TrendingUp, 
  DollarSign, 
  Eye, 
  MessageSquare,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Settings,
  Ban,
  CheckCircle,
  XCircle,
  AlertTriangle,
  PieChart,
  BarChart3,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  Activity
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const stats = [
    { 
      title: 'Total Users', 
      value: '12,345', 
      change: '+12%', 
      icon: Users, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      title: 'Active Listings', 
      value: '3,456', 
      change: '+8%', 
      icon: Car, 
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      title: 'Partner Dealers', 
      value: '245', 
      change: '+15%', 
      icon: Building2, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      title: 'Service Centers', 
      value: '189', 
      change: '+10%', 
      icon: Wrench, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
  ];

  const recentUsers = [
    { 
      id: '1',
      name: 'John Smith', 
      email: 'john@example.com', 
      type: 'Buyer', 
      joined: '2024-01-15',
      status: 'active',
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=John'
    },
    { 
      id: '2',
      name: 'AutoMax Dealers', 
      email: 'info@automax.com', 
      type: 'Dealer', 
      joined: '2024-01-14',
      status: 'pending',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AutoMax'
    },
    { 
      id: '3',
      name: 'Quick Service', 
      email: 'contact@quickservice.com', 
      type: 'Service', 
      joined: '2024-01-13',
      status: 'active',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Quick'
    },
  ];

  const pendingApprovals = [
    { 
      id: '1',
      name: 'Premium Motors', 
      type: 'Dealer', 
      documents: 5, 
      status: 'pending',
      submittedDate: '2024-01-10',
      location: 'New York, NY'
    },
    { 
      id: '2',
      name: 'Elite Service Center', 
      type: 'Service', 
      documents: 3, 
      status: 'pending',
      submittedDate: '2024-01-12',
      location: 'Los Angeles, CA'
    },
    { 
      id: '3',
      name: 'City Auto Hub', 
      type: 'Dealer', 
      documents: 4, 
      status: 'pending',
      submittedDate: '2024-01-11',
      location: 'Chicago, IL'
    },
  ];

  const systemActivity = [
    { action: 'New user registration', user: 'Sarah Johnson', time: '2 minutes ago', type: 'info' },
    { action: 'Dealer application submitted', user: 'Metro Motors', time: '15 minutes ago', type: 'warning' },
    { action: 'Listing approved', user: 'AutoDeals Inc', time: '1 hour ago', type: 'success' },
    { action: 'Payment processed', user: 'John Smith', time: '2 hours ago', type: 'success' },
    { action: 'Report submitted', user: 'Anonymous', time: '3 hours ago', type: 'error' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-blue-600" />;
    }
  };

  const handleUserAction = (userId: string, action: string) => {
    console.log(`Performing ${action} on user ${userId}`);
    // Implementation would go here
  };

  const handleApprovalAction = (applicationId: string, action: string) => {
    console.log(`${action} application ${applicationId}`);
    // Implementation would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Welcome back, Administrator • Last login: Today, 9:30 AM</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                System Online
              </Badge>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button className="btn-primary">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-secondary mb-2">{stat.value}</p>
                      <div className="flex items-center">
                        <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                        <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                      </div>
                    </div>
                    <div className={`p-4 rounded-2xl ${stat.bgColor}`}>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Eye className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="listings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Car className="h-4 w-4 mr-2" />
              Listings
            </TabsTrigger>
            <TabsTrigger value="approvals" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <CheckCircle className="h-4 w-4 mr-2" />
              Approvals
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-primary" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription>Latest system activities and user actions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {systemActivity.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                          {getActivityIcon(activity.type)}
                          <div className="flex-1">
                            <p className="font-medium text-secondary">{activity.action}</p>
                            <p className="text-sm text-gray-600">by {activity.user}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Recent Users
                    </CardTitle>
                    <CardDescription>Latest user registrations and applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-4">
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                            <div>
                              <p className="font-medium text-secondary">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                              {user.type}
                            </Badge>
                            <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                              {user.status}
                            </Badge>
                            <p className="text-xs text-gray-500">{user.joined}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                      Quick Actions
                    </CardTitle>
                    <CardDescription>Common administrative tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full btn-primary justify-start">
                      <Users className="h-4 w-4 mr-3" />
                      Manage Users
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Car className="h-4 w-4 mr-3" />
                      Review Listings
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Building2 className="h-4 w-4 mr-3" />
                      Approve Dealers
                    </Button>
                    <Button className="w-full" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-3" />
                      Community Moderation
                    </Button>
                    <Button className="w-full" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-3" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      Today's Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">New Users</span>
                      <span className="font-semibold">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">New Listings</span>
                      <span className="font-semibold">45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pending Approvals</span>
                      <span className="font-semibold text-orange-600">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue</span>
                      <span className="font-semibold text-green-600">$12,450</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage all users, dealers, and service centers</CardDescription>
                  </div>
                  <Button className="btn-primary">
                    <Users className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
                        <div>
                          <p className="font-medium text-secondary">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{user.type}</Badge>
                            <span className="text-xs text-gray-500">Joined {user.joined}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                          {user.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleUserAction(user.id, 'view')}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUserAction(user.id, 'edit')}>
                              <Settings className="h-4 w-4 mr-2" />
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleUserAction(user.id, 'suspend')}>
                              <Ban className="h-4 w-4 mr-2" />
                              Suspend User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Approvals Tab */}
          <TabsContent value="approvals" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  Pending Approvals
                </CardTitle>
                <CardDescription>Dealer and service center applications awaiting review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-6 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-secondary text-lg">{application.name}</h3>
                          <Badge variant="secondary">{application.type}</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {application.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Submitted {application.submittedDate}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-2" />
                            {application.documents} documents
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="btn-primary">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                        <Button size="sm" variant="destructive">
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-primary" />
                    User Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Buyers</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-blue-200 rounded">
                          <div className="w-16 h-2 bg-blue-500 rounded"></div>
                        </div>
                        <span className="text-sm">80%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Dealers</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-green-200 rounded">
                          <div className="w-3 h-2 bg-green-500 rounded"></div>
                        </div>
                        <span className="text-sm">15%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Service Centers</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-orange-200 rounded">
                          <div className="w-1 h-2 bg-orange-500 rounded"></div>
                        </div>
                        <span className="text-sm">5%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Monthly Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-green-600">$45,230</div>
                    <div className="text-sm text-gray-600">+15% from last month</div>
                    <div className="space-y-2">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month, index) => (
                        <div key={month} className="flex items-center space-x-3">
                          <span className="w-8 text-sm">{month}</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded">
                            <div 
                              className="h-2 bg-gradient-to-r from-primary to-orange-500 rounded"
                              style={{ width: `${(index + 1) * 20}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">${(index + 1) * 9000}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
