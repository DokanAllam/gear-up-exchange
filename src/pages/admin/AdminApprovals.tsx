
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Check, 
  X, 
  Eye, 
  Clock,
  Car,
  Building,
  Wrench,
  User,
  Calendar,
  AlertCircle
} from 'lucide-react';

const AdminApprovals = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  // Mock pending approvals data
  const pendingVehicles = [
    {
      id: '1',
      type: 'vehicle',
      title: '2020 BMW X5',
      seller: 'John Smith',
      submittedDate: '2024-01-20',
      price: '$45,000',
      location: 'New York, NY',
      status: 'pending',
      images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400']
    },
    {
      id: '2',
      type: 'vehicle',
      title: '2019 Audi A4',
      seller: 'Sarah Johnson',
      submittedDate: '2024-01-19',
      price: '$32,000',
      location: 'Los Angeles, CA',
      status: 'pending',
      images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400']
    }
  ];

  const pendingDealers = [
    {
      id: '1',
      type: 'dealer',
      name: 'Elite Auto Sales',
      email: 'info@eliteauto.com',
      submittedDate: '2024-01-18',
      location: 'Miami, FL',
      businessType: 'Independent',
      status: 'pending'
    },
    {
      id: '2',
      type: 'dealer',
      name: 'Metro Car Center',
      email: 'contact@metrocar.com',
      submittedDate: '2024-01-17',
      location: 'Dallas, TX',
      businessType: 'Franchise',
      status: 'pending'
    }
  ];

  const pendingServices = [
    {
      id: '1',
      type: 'service',
      name: 'Express Auto Repair',
      email: 'service@expressauto.com',
      submittedDate: '2024-01-16',
      location: 'Phoenix, AZ',
      serviceTypes: ['Oil Change', 'Brake Service'],
      status: 'pending'
    }
  ];

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleApprove = (itemId, type) => {
    console.log(`Approving ${type}:`, itemId);
    setIsModalOpen(false);
  };

  const handleReject = (itemId, type) => {
    console.log(`Rejecting ${type}:`, itemId, 'Reason:', rejectionReason);
    setIsModalOpen(false);
    setRejectionReason('');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalPending = pendingVehicles.length + pendingDealers.length + pendingServices.length;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Approval Center</h1>
        <p className="text-gray-600">Review and approve pending submissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Pending</p>
                <p className="text-2xl font-bold">{totalPending}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Vehicles</p>
                <p className="text-2xl font-bold">{pendingVehicles.length}</p>
              </div>
              <Car className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Dealers</p>
                <p className="text-2xl font-bold">{pendingDealers.length}</p>
              </div>
              <Building className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Services</p>
                <p className="text-2xl font-bold">{pendingServices.length}</p>
              </div>
              <Wrench className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approval Tabs */}
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="vehicles" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="vehicles">Vehicle Listings ({pendingVehicles.length})</TabsTrigger>
              <TabsTrigger value="dealers">Dealers ({pendingDealers.length})</TabsTrigger>
              <TabsTrigger value="services">Services ({pendingServices.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="vehicles" className="mt-6">
              <div className="space-y-4">
                {pendingVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={vehicle.images[0]}
                          alt={vehicle.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium">{vehicle.title}</h3>
                          <p className="text-sm text-gray-600">Seller: {vehicle.seller}</p>
                          <p className="text-sm text-gray-600">Location: {vehicle.location}</p>
                          <p className="text-sm text-gray-600">Submitted: {vehicle.submittedDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-lg font-bold">{vehicle.price}</div>
                          <Badge className={getStatusColor(vehicle.status)}>
                            {vehicle.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewItem(vehicle)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-200 hover:bg-green-50"
                            onClick={() => handleApprove(vehicle.id, 'vehicle')}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleViewItem(vehicle)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dealers" className="mt-6">
              <div className="space-y-4">
                {pendingDealers.map((dealer) => (
                  <div key={dealer.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Building className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{dealer.name}</h3>
                          <p className="text-sm text-gray-600">Email: {dealer.email}</p>
                          <p className="text-sm text-gray-600">Location: {dealer.location}</p>
                          <p className="text-sm text-gray-600">Type: {dealer.businessType}</p>
                          <p className="text-sm text-gray-600">Submitted: {dealer.submittedDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(dealer.status)}>
                          {dealer.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewItem(dealer)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-200 hover:bg-green-50"
                            onClick={() => handleApprove(dealer.id, 'dealer')}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleViewItem(dealer)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="space-y-4">
                {pendingServices.map((service) => (
                  <div key={service.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Wrench className="h-8 w-8 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-gray-600">Email: {service.email}</p>
                          <p className="text-sm text-gray-600">Location: {service.location}</p>
                          <p className="text-sm text-gray-600">Services: {service.serviceTypes.join(', ')}</p>
                          <p className="text-sm text-gray-600">Submitted: {service.submittedDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewItem(service)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-200 hover:bg-green-50"
                            onClick={() => handleApprove(service.id, 'service')}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleViewItem(service)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Item Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Review {selectedItem?.type === 'vehicle' ? 'Vehicle Listing' : 
                     selectedItem?.type === 'dealer' ? 'Dealer Application' : 'Service Application'}
            </DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-6">
              {selectedItem.type === 'vehicle' && (
                <div>
                  <img
                    src={selectedItem.images[0]}
                    alt={selectedItem.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div><strong>Price:</strong> {selectedItem.price}</div>
                    <div><strong>Seller:</strong> {selectedItem.seller}</div>
                    <div><strong>Location:</strong> {selectedItem.location}</div>
                    <div><strong>Submitted:</strong> {selectedItem.submittedDate}</div>
                  </div>
                </div>
              )}

              {selectedItem.type === 'dealer' && (
                <div>
                  <h3 className="text-xl font-bold">{selectedItem.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div><strong>Email:</strong> {selectedItem.email}</div>
                    <div><strong>Business Type:</strong> {selectedItem.businessType}</div>
                    <div><strong>Location:</strong> {selectedItem.location}</div>
                    <div><strong>Submitted:</strong> {selectedItem.submittedDate}</div>
                  </div>
                </div>
              )}

              {selectedItem.type === 'service' && (
                <div>
                  <h3 className="text-xl font-bold">{selectedItem.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div><strong>Email:</strong> {selectedItem.email}</div>
                    <div><strong>Location:</strong> {selectedItem.location}</div>
                    <div><strong>Submitted:</strong> {selectedItem.submittedDate}</div>
                  </div>
                  <div className="mt-4">
                    <strong>Service Types:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedItem.serviceTypes.map((type, index) => (
                        <Badge key={index} variant="outline">{type}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Rejection Reason (if rejecting)</label>
                <Textarea
                  placeholder="Provide a reason for rejection..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleApprove(selectedItem.id, selectedItem.type)}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Approve
                </Button>
                <Button
                  variant="outline"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  onClick={() => handleReject(selectedItem.id, selectedItem.type)}
                >
                  <X className="h-4 w-4 mr-2" />
                  Reject
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminApprovals;
