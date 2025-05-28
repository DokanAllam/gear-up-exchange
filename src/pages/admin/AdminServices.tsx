
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
  Wrench, 
  MapPin, 
  Phone, 
  Mail,
  Star,
  Calendar,
  Clock
} from 'lucide-react';

const AdminServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock service data
  const services = [
    {
      id: '1',
      name: 'AutoCare Pro',
      email: 'info@autocarpro.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      address: '123 Service St, New York, NY 10001',
      status: 'active',
      rating: 4.7,
      totalBookings: 156,
      completedServices: 142,
      joinDate: '2023-02-10',
      licenseNumber: 'SL12345',
      serviceTypes: ['Oil Change', 'Brake Service', 'Tire Service'],
      operatingHours: '8:00 AM - 6:00 PM'
    },
    {
      id: '2',
      name: 'Quick Fix Auto',
      email: 'contact@quickfixauto.com',
      phone: '+1 (555) 987-6543',
      location: 'Los Angeles, CA',
      address: '456 Repair Ave, Los Angeles, CA 90001',
      status: 'pending',
      rating: 0,
      totalBookings: 0,
      completedServices: 0,
      joinDate: '2024-01-15',
      licenseNumber: 'SL67890',
      serviceTypes: ['General Repair', 'Diagnostics'],
      operatingHours: '9:00 AM - 7:00 PM'
    },
    {
      id: '3',
      name: 'Premium Motors Service',
      email: 'service@premiummotors.com',
      phone: '+1 (555) 456-7890',
      location: 'Chicago, IL',
      address: '789 Auto Lane, Chicago, IL 60601',
      status: 'suspended',
      rating: 3.8,
      totalBookings: 89,
      completedServices: 76,
      joinDate: '2023-08-05',
      licenseNumber: 'SL11111',
      serviceTypes: ['Luxury Car Service', 'Detailing'],
      operatingHours: '10:00 AM - 8:00 PM'
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

  const handleViewService = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleApproveService = (serviceId) => {
    console.log('Approving service:', serviceId);
  };

  const handleRejectService = (serviceId) => {
    console.log('Rejecting service:', serviceId);
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Center Management</h1>
        <p className="text-gray-600">Manage and monitor service center accounts</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search service centers..."
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
                <p className="text-sm font-medium text-gray-600">Total Service Centers</p>
                <p className="text-2xl font-bold">{services.length}</p>
              </div>
              <Wrench className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Centers</p>
                <p className="text-2xl font-bold">{services.filter(s => s.status === 'active').length}</p>
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
                <p className="text-2xl font-bold">{services.filter(s => s.status === 'pending').length}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold">{services.reduce((sum, s) => sum + s.totalBookings, 0)}</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Service Centers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Service Center</th>
                  <th className="text-left p-4">Contact</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Bookings</th>
                  <th className="text-left p-4">Rating</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service) => (
                  <tr key={service.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-500">ID: {service.id}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div>{service.email}</div>
                        <div className="text-gray-500">{service.phone}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="text-sm">{service.location}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(service.status)}>
                        {service.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div>Total: {service.totalBookings}</div>
                        <div className="text-gray-500">Completed: {service.completedServices}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      {service.rating > 0 ? (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                          <span>{service.rating}</span>
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
                          onClick={() => handleViewService(service)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {service.status === 'pending' && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-200 hover:bg-green-50"
                              onClick={() => handleApproveService(service.id)}
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() => handleRejectService(service.id)}
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

      {/* Service Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Service Center Details - {selectedService?.name}</DialogTitle>
          </DialogHeader>
          {selectedService && (
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Basic Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Name:</strong> {selectedService.name}</div>
                      <div><strong>Email:</strong> {selectedService.email}</div>
                      <div><strong>Phone:</strong> {selectedService.phone}</div>
                      <div><strong>License Number:</strong> {selectedService.licenseNumber}</div>
                      <div><strong>Operating Hours:</strong> {selectedService.operatingHours}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Address & Status</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Address:</strong> {selectedService.address}</div>
                      <div><strong>Join Date:</strong> {selectedService.joinDate}</div>
                      <div><strong>Status:</strong> 
                        <Badge className={`ml-2 ${getStatusColor(selectedService.status)}`}>
                          {selectedService.status}
                        </Badge>
                      </div>
                      <div><strong>Total Bookings:</strong> {selectedService.totalBookings}</div>
                      <div><strong>Completed Services:</strong> {selectedService.completedServices}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="services">
                <div>
                  <h4 className="font-semibold mb-3">Service Types Offered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.serviceTypes.map((type, index) => (
                      <Badge key={index} variant="outline">{type}</Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="bookings">
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Booking Management</h3>
                  <p className="text-gray-600">Booking details coming soon...</p>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminServices;
