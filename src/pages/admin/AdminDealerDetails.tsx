
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Edit, Save, X, Building, MapPin, Phone, Mail, Star, Car, Calendar, Clock, Globe, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDealerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  // Mock dealer data - would come from API in real app
  const [dealer, setDealer] = useState({
    id: id || '1',
    name: 'Premium Auto Dealers',
    email: 'info@premiumauto.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    address: '123 Main St, New York, NY 10001',
    status: 'active',
    rating: 4.8,
    totalVehicles: 45,
    totalSales: 234,
    joinDate: '2023-01-15',
    licenseNumber: 'DL12345',
    businessType: 'Franchise',
    website: 'www.premiumauto.com',
    description: 'Premium Auto Dealers has been serving the New York area for over 20 years, specializing in luxury and premium vehicles.',
    bankAccount: '**** **** **** 1234',
    taxId: 'TAX123456789',
    insurancePolicy: 'INS987654321'
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Dealer Updated",
      description: "Dealer information has been updated successfully.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/admin/dealers')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dealers
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{dealer.name}</h1>
            <p className="text-gray-600">Dealer ID: {dealer.id}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Dealer
            </Button>
          )}
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Status</p>
                <Badge className={getStatusColor(dealer.status)}>
                  {dealer.status}
                </Badge>
              </div>
              <Building className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Vehicles</p>
                <p className="text-2xl font-bold">{dealer.totalVehicles}</p>
              </div>
              <Car className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold">{dealer.totalSales}</p>
              </div>
              <CreditCard className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rating</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-xl font-bold">{dealer.rating}</span>
                </div>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information */}
      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Dealer Name</label>
                    {isEditing ? (
                      <Input 
                        value={dealer.name} 
                        onChange={(e) => setDealer({...dealer, name: e.target.value})}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 font-medium">{dealer.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Business Type</label>
                    {isEditing ? (
                      <Input 
                        value={dealer.businessType} 
                        onChange={(e) => setDealer({...dealer, businessType: e.target.value})}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 font-medium">{dealer.businessType}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">License Number</label>
                    {isEditing ? (
                      <Input 
                        value={dealer.licenseNumber} 
                        onChange={(e) => setDealer({...dealer, licenseNumber: e.target.value})}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 font-medium">{dealer.licenseNumber}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Join Date</label>
                    <p className="mt-1 font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {dealer.joinDate}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Description</label>
                  {isEditing ? (
                    <textarea 
                      value={dealer.description} 
                      onChange={(e) => setDealer({...dealer, description: e.target.value})}
                      className="mt-1 w-full p-2 border rounded-md"
                      rows={3}
                    />
                  ) : (
                    <p className="mt-1 text-gray-700">{dealer.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  {isEditing ? (
                    <Input 
                      value={dealer.email} 
                      onChange={(e) => setDealer({...dealer, email: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 font-medium flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-gray-400" />
                      {dealer.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  {isEditing ? (
                    <Input 
                      value={dealer.phone} 
                      onChange={(e) => setDealer({...dealer, phone: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 font-medium flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-gray-400" />
                      {dealer.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Website</label>
                  {isEditing ? (
                    <Input 
                      value={dealer.website} 
                      onChange={(e) => setDealer({...dealer, website: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 font-medium flex items-center">
                      <Globe className="h-4 w-4 mr-1 text-gray-400" />
                      {dealer.website}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Address</label>
                  {isEditing ? (
                    <Input 
                      value={dealer.address} 
                      onChange={(e) => setDealer({...dealer, address: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 font-medium flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {dealer.address}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vehicles">
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Vehicle Management</h3>
                <p className="text-gray-600">Detailed vehicle listings will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial">
          <Card>
            <CardHeader>
              <CardTitle>Financial Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Bank Account</label>
                  <p className="mt-1 font-medium">{dealer.bankAccount}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Tax ID</label>
                  <p className="mt-1 font-medium">{dealer.taxId}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Insurance Policy</label>
                  <p className="mt-1 font-medium">{dealer.insurancePolicy}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Total Sales</label>
                  <p className="mt-1 font-medium text-green-600">${(dealer.totalSales * 1000).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
                <p className="text-gray-600">Recent dealer activities will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDealerDetails;
