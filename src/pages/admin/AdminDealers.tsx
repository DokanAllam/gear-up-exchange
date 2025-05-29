
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Eye, 
  Check, 
  X, 
  Building, 
  MapPin, 
  Phone, 
  Mail,
  Star,
  Car,
  Calendar,
  Clock
} from 'lucide-react';

const AdminDealers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock dealer data
  const dealers = [
    {
      id: '1',
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
      website: 'www.premiumauto.com'
    },
    {
      id: '2',
      name: 'City Motors',
      email: 'contact@citymotors.com',
      phone: '+1 (555) 987-6543',
      location: 'Los Angeles, CA',
      address: '456 Oak Ave, Los Angeles, CA 90001',
      status: 'pending',
      rating: 0,
      totalVehicles: 0,
      totalSales: 0,
      joinDate: '2024-01-10',
      licenseNumber: 'DL67890',
      businessType: 'Independent',
      website: 'www.citymotors.com'
    },
    {
      id: '3',
      name: 'Luxury Cars Inc',
      email: 'sales@luxurycars.com',
      phone: '+1 (555) 456-7890',
      location: 'Miami, FL',
      address: '789 Pine St, Miami, FL 33101',
      status: 'suspended',
      rating: 3.2,
      totalVehicles: 12,
      totalSales: 89,
      joinDate: '2023-06-20',
      licenseNumber: 'DL11111',
      businessType: 'Independent',
      website: 'www.luxurycars.com'
    }
  ];

  const getStatusColor = (status) => {
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

  const handleViewDealer = (dealer) => {
    setSelectedDealer(dealer);
    setIsModalOpen(true);
  };

  const handleApproveDealer = (dealerId) => {
    console.log('Approving dealer:', dealerId);
  };

  const handleRejectDealer = (dealerId) => {
    console.log('Rejecting dealer:', dealerId);
  };

  const filteredDealers = dealers.filter(dealer =>
    dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dealer Management</h1>
        <p className="text-gray-600">Manage and monitor dealer accounts</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search dealers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Dealers</p>
                <p className="text-2xl font-bold">{dealers.length}</p>
              </div>
              <Building className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Dealers</p>
                <p className="text-2xl font-bold">{dealers.filter(d => d.status === 'active').length}</p>
              </div>
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                <p className="text-2xl font-bold">{dealers.filter(d => d.status === 'pending').length}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Suspended</p>
                <p className="text-2xl font-bold">{dealers.filter(d => d.status === 'suspended').length}</p>
              </div>
              <X className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dealers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Dealers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Dealer</th>
                  <th className="text-left p-4">Contact</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Vehicles</th>
                  <th className="text-left p-4">Rating</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDealers.map((dealer) => (
                  <tr key={dealer.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{dealer.name}</div>
                        <div className="text-sm text-gray-500">ID: {dealer.id}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div>{dealer.email}</div>
                        <div className="text-gray-500">{dealer.phone}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="text-sm">{dealer.location}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(dealer.status)}>
                        {dealer.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Car className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{dealer.totalVehicles}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {dealer.rating > 0 ? (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                          <span>{dealer.rating}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400">No ratings</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDealer(dealer)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {dealer.status === 'pending' && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-200 hover:bg-green-50"
                              onClick={() => handleApproveDealer(dealer.id)}
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() => handleRejectDealer(dealer.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Dealer Details - {selectedDealer?.name}</DialogTitle>
          </DialogHeader>
          {selectedDealer && (
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Basic Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Name:</strong> {selectedDealer.name}</div>
                      <div><strong>Email:</strong> {selectedDealer.email}</div>
                      <div><strong>Phone:</strong> {selectedDealer.phone}</div>
                      <div><strong>Website:</strong> {selectedDealer.website}</div>
                      <div><strong>Business Type:</strong> {selectedDealer.businessType}</div>
                      <div><strong>License Number:</strong> {selectedDealer.licenseNumber}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Address & Status</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Address:</strong> {selectedDealer.address}</div>
                      <div><strong>Join Date:</strong> {selectedDealer.joinDate}</div>
                      <div><strong>Status:</strong> 
                        <Badge className={`ml-2 ${getStatusColor(selectedDealer.status)}`}>
                          {selectedDealer.status}
                        </Badge>
                      </div>
                      <div><strong>Total Sales:</strong> {selectedDealer.totalSales}</div>
                      <div><strong>Active Vehicles:</strong> {selectedDealer.totalVehicles}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="vehicles">
                <div className="text-center py-8">
                  <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Vehicle Listings</h3>
                  <p className="text-gray-600">Vehicle management coming soon...</p>
                </div>
              </TabsContent>
              
              <TabsContent value="activity">
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
                  <p className="text-gray-600">Activity tracking coming soon...</p>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDealers;
