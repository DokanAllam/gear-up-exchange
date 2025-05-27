
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Car, 
  Building2, 
  Wrench, 
  TrendingUp, 
  DollarSign,
  Activity,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar
} from 'lucide-react';

const AdminOverview = () => {
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

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground mt-1">Welcome back, Administrator • Last login: Today, 9:30 AM</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold mb-2">{stat.value}</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
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
                  <div key={index} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">by {activity.user}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Users className="h-4 w-4 mr-3" />
                Manage Users
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Car className="h-4 w-4 mr-3" />
                Review Listings
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Building2 className="h-4 w-4 mr-3" />
                Approve Dealers
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <CheckCircle className="h-4 w-4 mr-3" />
                Pending Approvals
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Today's Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">New Users</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">New Listings</span>
                <span className="font-semibold">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pending Approvals</span>
                <Badge variant="destructive" className="h-5">8</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Revenue</span>
                <span className="font-semibold text-green-600">$12,450</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
