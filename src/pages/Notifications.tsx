
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Car, MessageSquare, Calendar, Check, Trash2, Settings } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'vehicle',
      title: 'New Vehicle Match',
      message: 'A 2023 BMW M3 matching your criteria is now available',
      timestamp: '2 hours ago',
      read: false,
      icon: Car
    },
    {
      id: '2',
      type: 'service',
      title: 'Service Reminder',
      message: 'Your service appointment is scheduled for tomorrow at 2:00 PM',
      timestamp: '4 hours ago',
      read: false,
      icon: Calendar
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message',
      message: 'John Doe sent you a message about the BMW M3',
      timestamp: '1 day ago',
      read: true,
      icon: MessageSquare
    },
    {
      id: '4',
      type: 'vehicle',
      title: 'Price Drop Alert',
      message: 'The Tesla Model S you\'re watching dropped by $5,000',
      timestamp: '2 days ago',
      read: true,
      icon: Car
    },
    {
      id: '5',
      type: 'service',
      title: 'Service Complete',
      message: 'Your oil change service has been completed successfully',
      timestamp: '3 days ago',
      read: true,
      icon: Calendar
    }
  ]);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'vehicle':
        return 'bg-blue-100 text-blue-600';
      case 'service':
        return 'bg-green-100 text-green-600';
      case 'message':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-3xl font-bold text-secondary">Notifications</h1>
                  <p className="text-gray-600">
                    Stay updated with your latest activities
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {unreadCount > 0 && (
                  <Button onClick={markAllAsRead} variant="outline">
                    <Check className="h-4 w-4 mr-2" />
                    Mark All Read
                  </Button>
                )}
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
            {unreadCount > 0 && (
              <Badge className="mt-3 bg-red-500 text-white">
                {unreadCount} unread notifications
              </Badge>
            )}
          </div>

          {/* Notifications */}
          <Card className="animate-scale-in shadow-lg border-0">
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                  <TabsTrigger value="vehicle">Vehicles</TabsTrigger>
                  <TabsTrigger value="service">Services</TabsTrigger>
                  <TabsTrigger value="message">Messages</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="space-y-4">
                    {notifications.map((notification) => {
                      const Icon = notification.icon;
                      return (
                        <div
                          key={notification.id}
                          className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                            notification.read 
                              ? 'bg-white border-gray-200' 
                              : 'bg-blue-50 border-blue-200'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg ${getTypeColor(notification.type)}`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-secondary">
                                  {notification.title}
                                </h3>
                                <p className="text-gray-600 mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                  {notification.timestamp}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {!notification.read && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 hover:bg-red-50"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="unread">
                  <div className="space-y-4">
                    {notifications.filter(n => !n.read).map((notification) => {
                      const Icon = notification.icon;
                      return (
                        <div
                          key={notification.id}
                          className="p-4 rounded-lg border bg-blue-50 border-blue-200 transition-all duration-200 hover:shadow-md"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg ${getTypeColor(notification.type)}`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-secondary">
                                  {notification.title}
                                </h3>
                                <p className="text-gray-600 mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                  {notification.timestamp}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => markAsRead(notification.id)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 hover:bg-red-50"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {notifications.filter(n => !n.read).length === 0 && (
                      <div className="text-center py-8">
                        <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600">No unread notifications</h3>
                        <p className="text-gray-500">You're all caught up!</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {['vehicle', 'service', 'message'].map((type) => (
                  <TabsContent key={type} value={type}>
                    <div className="space-y-4">
                      {notifications.filter(n => n.type === type).map((notification) => {
                        const Icon = notification.icon;
                        return (
                          <div
                            key={notification.id}
                            className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                              notification.read 
                                ? 'bg-white border-gray-200' 
                                : 'bg-blue-50 border-blue-200'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start space-x-3">
                                <div className={`p-2 rounded-lg ${getTypeColor(notification.type)}`}>
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-secondary">
                                    {notification.title}
                                  </h3>
                                  <p className="text-gray-600 mt-1">
                                    {notification.message}
                                  </p>
                                  <p className="text-sm text-gray-500 mt-2">
                                    {notification.timestamp}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                {!notification.read && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => markAsRead(notification.id)}
                                  >
                                    <Check className="h-4 w-4" />
                                  </Button>
                                )}
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 hover:bg-red-50"
                                  onClick={() => deleteNotification(notification.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notifications;
