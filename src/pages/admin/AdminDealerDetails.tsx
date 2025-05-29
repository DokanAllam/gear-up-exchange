
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Star, Car, Award, Users, Globe, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AdminDealerDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [dealerData, setDealerData] = useState({
    id: id || '1',
    name: 'Premium Auto Gallery',
    email: 'info@premiumautogallery.com',
    phone: '+1 (555) 123-4567',
    location: 'Downtown Manhattan, NY',
    address: '123 Auto Plaza, New York, NY 10001',
    website: 'www.premiumautogallery.com',
    status: 'active',
    rating: 4.8,
    totalVehicles: 150,
    totalSales: 285,
    joinDate: '2023-01-15',
    licenseNumber: 'DL12345',
    businessType: 'Franchise',
    description: 'Premium Auto Gallery has been serving New York with the finest selection of luxury and sports vehicles for over a decade.',
    specialties: ['Luxury Cars', 'Sports Cars', 'Electric Vehicles']
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Dealer Updated",
      description: `${dealerData.name} has been updated successfully.`,
    });
  };

  const handleStatusChange = (newStatus: string) => {
    setDealerData(prev => ({ ...prev, status: newStatus }));
    toast({
      title: "Status Updated",
      description: `Dealer status changed to ${newStatus}.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/admin/dealers" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dealers</span>
          </Link>
          <h1 className="text-3xl font-bold">Dealer Details</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className={getStatusColor(dealerData.status)}>
            {dealerData.status}
          </Badge>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="btn-primary">
              <Edit className="h-4 w-4 mr-2" />
              Edit Dealer
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave} className="btn-primary">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Dealer Name</Label>
                    <Input
                      id="name"
                      value={dealerData.name}
                      onChange={(e) => setDealerData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={dealerData.email}
                      onChange={(e) => setDealerData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={dealerData.phone}
                      onChange={(e) => setDealerData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={dealerData.website}
                      onChange={(e) => setDealerData(prev => ({ ...prev, website: e.target.value }))}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={dealerData.address}
                      onChange={(e) => setDealerData(prev => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <Input
                      id="licenseNumber"
                      value={dealerData.licenseNumber}
                      onChange={(e) => setDealerData(prev => ({ ...prev, licenseNumber: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select 
                      value={dealerData.businessType} 
                      onValueChange={(value) => setDealerData(prev => ({ ...prev, businessType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Franchise">Franchise</SelectItem>
                        <SelectItem value="Independent">Independent</SelectItem>
                        <SelectItem value="Corporate">Corporate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={dealerData.description}
                      onChange={(e) => setDealerData(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{dealerData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>{dealerData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>{dealerData.website}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{dealerData.location}</span>
                  </div>
                  <div className="md:col-span-2">
                    <strong>Address:</strong> {dealerData.address}
                  </div>
                  <div>
                    <strong>License Number:</strong> {dealerData.licenseNumber}
                  </div>
                  <div>
                    <strong>Business Type:</strong> {dealerData.businessType}
                  </div>
                  <div className="md:col-span-2">
                    <strong>Description:</strong>
                    <p className="mt-2 text-gray-700">{dealerData.description}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{dealerData.totalVehicles}</div>
                  <div className="text-sm text-gray-600">Total Vehicles</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{dealerData.totalSales}</div>
                  <div className="text-sm text-gray-600">Total Sales</div>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{dealerData.rating}</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">342</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specialties */}
          <Card>
            <CardHeader>
              <CardTitle>Specialties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {dealerData.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Management */}
          <Card>
            <CardHeader>
              <CardTitle>Status Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Current Status</Label>
                <Badge className={`mt-2 ${getStatusColor(dealerData.status)}`}>
                  {dealerData.status}
                </Badge>
              </div>
              <div className="space-y-2">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleStatusChange('active')}
                  disabled={dealerData.status === 'active'}
                >
                  Activate Dealer
                </Button>
                <Button 
                  variant="destructive"
                  className="w-full"
                  onClick={() => handleStatusChange('suspended')}
                  disabled={dealerData.status === 'suspended'}
                >
                  Suspend Dealer
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full">
                View Vehicles
              </Button>
              <Button variant="outline" className="w-full">
                View Sales History
              </Button>
              <Button variant="outline" className="w-full">
                Send Message
              </Button>
              <Button variant="outline" className="w-full">
                Generate Report
              </Button>
            </CardContent>
          </Card>

          {/* Account Information */}
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong>Joined:</strong> {dealerData.joinDate}
              </div>
              <div>
                <strong>Last Login:</strong> 2 hours ago
              </div>
              <div>
                <strong>Account Type:</strong> Premium
              </div>
              <div>
                <strong>Verification:</strong> Verified
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDealerDetails;
