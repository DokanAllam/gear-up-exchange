
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
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
  Clock,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

const AdminServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    licenseNumber: '',
    operatingHours: '',
    serviceTypes: [] as string[]
  });
  const { toast } = useToast();

  // Mock service data
  const [services, setServices] = useState([
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
  ]);

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

  const handleViewService = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleAddService = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      licenseNumber: '',
      operatingHours: '',
      serviceTypes: []
    });
    setIsAddModalOpen(true);
  };

  const handleEditService = (service: any) => {
    setSelectedService(service);
    setFormData({
      name: service.name,
      email: service.email,
      phone: service.phone,
      address: service.address,
      licenseNumber: service.licenseNumber,
      operatingHours: service.operatingHours,
      serviceTypes: service.serviceTypes
    });
    setIsEditModalOpen(true);
  };

  const handleDeleteService = (service: any) => {
    setSelectedService(service);
    setIsDeleteModalOpen(true);
  };

  const handleApproveService = (service: any) => {
    setSelectedService(service);
    setIsApproveModalOpen(true);
  };

  const handleRejectService = (service: any) => {
    setSelectedService(service);
    setIsRejectModalOpen(true);
  };

  const confirmApproveService = () => {
    if (selectedService) {
      setServices(services.map(s => 
        s.id === selectedService.id ? { ...s, status: 'active' } : s
      ));
      toast({
        title: "Service Center Approved",
        description: `${selectedService.name} has been approved successfully.`,
      });
      setIsApproveModalOpen(false);
      setSelectedService(null);
    }
  };

  const confirmRejectService = () => {
    if (selectedService) {
      setServices(services.map(s => 
        s.id === selectedService.id ? { ...s, status: 'suspended' } : s
      ));
      toast({
        title: "Service Center Rejected",
        description: `${selectedService.name} has been rejected.`,
      });
      setIsRejectModalOpen(false);
      setSelectedService(null);
    }
  };

  const confirmDeleteService = () => {
    if (selectedService) {
      setServices(services.filter(s => s.id !== selectedService.id));
      toast({
        title: "Service Center Deleted",
        description: `${selectedService.name} has been deleted successfully.`,
      });
      setIsDeleteModalOpen(false);
      setSelectedService(null);
    }
  };

  const handleSaveService = () => {
    if (selectedService) {
      // Edit existing service
      setServices(services.map(s => 
        s.id === selectedService.id ? {
          ...s,
          ...formData,
          location: formData.address.split(',').slice(-2).join(',').trim()
        } : s
      ));
      toast({
        title: "Service Center Updated",
        description: `${formData.name} has been updated successfully.`,
      });
      setIsEditModalOpen(false);
    } else {
      // Add new service
      const newService = {
        id: (services.length + 1).toString(),
        ...formData,
        location: formData.address.split(',').slice(-2).join(',').trim(),
        status: 'pending',
        rating: 0,
        totalBookings: 0,
        completedServices: 0,
        joinDate: new Date().toISOString().split('T')[0]
      };
      setServices([...services, newService]);
      toast({
        title: "Service Center Added",
        description: `${formData.name} has been added successfully.`,
      });
      setIsAddModalOpen(false);
    }
    setSelectedService(null);
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ServiceForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Service Center Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="AutoCare Pro"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="info@autocarpro.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <Label htmlFor="licenseNumber">License Number</Label>
          <Input
            id="licenseNumber"
            value={formData.licenseNumber}
            onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
            placeholder="SL12345"
          />
        </div>
        <div>
          <Label htmlFor="operatingHours">Operating Hours</Label>
          <Input
            id="operatingHours"
            value={formData.operatingHours}
            onChange={(e) => setFormData({...formData, operatingHours: e.target.value})}
            placeholder="8:00 AM - 6:00 PM"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
          placeholder="123 Service St, New York, NY 10001"
          rows={3}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Service Center Management</h1>
          <p className="text-gray-600">Manage and monitor service center accounts</p>
        </div>
        <Button onClick={handleAddService} className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Service Center
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditService(service)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        {service.status === 'pending' && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-200 hover:bg-green-50"
                              onClick={() => handleApproveService(service)}
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() => handleRejectService(service)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteService(service)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
                    {selectedService.serviceTypes.map((type: string, index: number) => (
                      <Badge key={index} variant="outline">{type}</Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="bookings">
                <div className="space-y-4">
                  <h4 className="font-semibold">Recent Bookings</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Booking ID</th>
                          <th className="text-left p-2">Customer</th>
                          <th className="text-left p-2">Service</th>
                          <th className="text-left p-2">Date</th>
                          <th className="text-left p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">#BK001</td>
                          <td className="p-2">John Doe</td>
                          <td className="p-2">Oil Change</td>
                          <td className="p-2">2024-01-20</td>
                          <td className="p-2">
                            <Badge className="bg-green-100 text-green-800">Completed</Badge>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">#BK002</td>
                          <td className="p-2">Jane Smith</td>
                          <td className="p-2">Brake Service</td>
                          <td className="p-2">2024-01-22</td>
                          <td className="p-2">
                            <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>

      {/* Add/Edit Service Modal */}
      <Dialog open={isAddModalOpen || isEditModalOpen} onOpenChange={(open) => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
      }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedService ? 'Edit Service Center' : 'Add New Service Center'}</DialogTitle>
          </DialogHeader>
          <ServiceForm />
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={() => {
              setIsAddModalOpen(false);
              setIsEditModalOpen(false);
            }}>
              Cancel
            </Button>
            <Button onClick={handleSaveService} className="bg-primary hover:bg-primary/90">
              {selectedService ? 'Update Service Center' : 'Add Service Center'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modals */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Are you sure you want to delete this service center?</p>
            {selectedService && (
              <div className="p-4 bg-gray-50 rounded">
                <strong>{selectedService.name}</strong>
                <p className="text-sm text-gray-600">{selectedService.email}</p>
              </div>
            )}
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={confirmDeleteService}>Delete</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isApproveModalOpen} onOpenChange={setIsApproveModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Approval</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Are you sure you want to approve this service center?</p>
            {selectedService && (
              <div className="p-4 bg-gray-50 rounded">
                <strong>{selectedService.name}</strong>
                <p className="text-sm text-gray-600">{selectedService.email}</p>
              </div>
            )}
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsApproveModalOpen(false)}>Cancel</Button>
              <Button onClick={confirmApproveService} className="bg-green-600 hover:bg-green-700 text-white">Approve</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isRejectModalOpen} onOpenChange={setIsRejectModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Rejection</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Are you sure you want to reject this service center?</p>
            {selectedService && (
              <div className="p-4 bg-gray-50 rounded">
                <strong>{selectedService.name}</strong>
                <p className="text-sm text-gray-600">{selectedService.email}</p>
              </div>
            )}
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsRejectModalOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={confirmRejectService}>Reject</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminServices;
