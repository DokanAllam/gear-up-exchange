import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
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
  AlertCircle,
  MapPin,
  Phone,
  Mail,
  Star,
  FileText
} from 'lucide-react';

const AdminApprovals = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  // Mock pending approvals data with enhanced details
  const pendingVehicles = [
    {
      id: '1',
      type: 'vehicle',
      title: '2020 BMW X5',
      seller: 'John Smith',
      sellerEmail: 'john.smith@email.com',
      sellerPhone: '+1 (555) 123-4567',
      submittedDate: '2024-01-20',
      price: '$45,000',
      year: 2020,
      mileage: '35,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      location: 'New York, NY',
      status: 'pending',
      description: 'Well-maintained BMW X5 with low mileage. Full service history available.',
      images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400'],
      features: ['Leather Seats', 'Navigation System', 'Sunroof', 'Backup Camera']
    },
    {
      id: '2',
      type: 'vehicle',
      title: '2019 Audi A4',
      seller: 'Sarah Johnson',
      sellerEmail: 'sarah.j@email.com',
      sellerPhone: '+1 (555) 987-6543',
      submittedDate: '2024-01-19',
      price: '$32,000',
      year: 2019,
      mileage: '28,000 km',
      fuelType: 'Gasoline',
      transmission: 'Manual',
      location: 'Los Angeles, CA',
      status: 'pending',
      description: 'Excellent condition Audi A4. Single owner, garage kept.',
      images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400'],
      features: ['Premium Sound System', 'Heated Seats', 'LED Headlights']
    }
  ];

  const pendingDealers = [
    {
      id: '1',
      type: 'dealer',
      name: 'Elite Auto Sales',
      email: 'info@eliteauto.com',
      phone: '+1 (555) 456-7890',
      submittedDate: '2024-01-18',
      location: 'Miami, FL',
      address: '123 Auto Street, Miami, FL 33101',
      businessType: 'Independent',
      licenseNumber: 'DL789456',
      website: 'www.eliteauto.com',
      yearsInBusiness: 8,
      status: 'pending',
      description: 'Established dealership specializing in luxury vehicles with excellent customer service.',
      documents: ['Business License', 'Insurance Certificate', 'Tax ID']
    },
    {
      id: '2',
      type: 'dealer',
      name: 'Metro Car Center',
      email: 'contact@metrocar.com',
      phone: '+1 (555) 321-0987',
      submittedDate: '2024-01-17',
      location: 'Dallas, TX',
      address: '456 Commerce Blvd, Dallas, TX 75201',
      businessType: 'Franchise',
      licenseNumber: 'DL123789',
      website: 'www.metrocar.com',
      yearsInBusiness: 12,
      status: 'pending',
      description: 'Multi-brand franchise dealership with extensive inventory and service center.',
      documents: ['Franchise Agreement', 'Business License', 'Insurance Certificate']
    }
  ];

  const pendingServices = [
    {
      id: '1',
      type: 'service',
      name: 'Express Auto Repair',
      email: 'service@expressauto.com',
      phone: '+1 (555) 654-3210',
      submittedDate: '2024-01-16',
      location: 'Phoenix, AZ',
      address: '789 Service Lane, Phoenix, AZ 85001',
      serviceTypes: ['Oil Change', 'Brake Service', 'Transmission Repair'],
      licenseNumber: 'SR456123',
      yearsInBusiness: 5,
      technicians: 8,
      operatingHours: '8:00 AM - 6:00 PM',
      status: 'pending',
      description: 'Full-service auto repair shop with certified technicians and modern equipment.',
      certifications: ['ASE Certified', 'AAA Approved', 'BBB Accredited']
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

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700">Total Pending</p>
                <p className="text-3xl font-bold text-yellow-800">{totalPending}</p>
                <p className="text-xs text-yellow-600 mt-1">Awaiting review</p>
              </div>
              <Clock className="h-10 w-10 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Pending Vehicles</p>
                <p className="text-3xl font-bold text-blue-800">{pendingVehicles.length}</p>
                <p className="text-xs text-blue-600 mt-1">Vehicle listings</p>
              </div>
              <Car className="h-10 w-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Pending Dealers</p>
                <p className="text-3xl font-bold text-green-800">{pendingDealers.length}</p>
                <p className="text-xs text-green-600 mt-1">Dealer applications</p>
              </div>
              <Building className="h-10 w-10 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Pending Services</p>
                <p className="text-3xl font-bold text-purple-800">{pendingServices.length}</p>
                <p className="text-xs text-purple-600 mt-1">Service applications</p>
              </div>
              <Wrench className="h-10 w-10 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Approval Tabs */}
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="vehicles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="vehicles" className="data-[state=active]:bg-blue-100">
                Vehicle Listings ({pendingVehicles.length})
              </TabsTrigger>
              <TabsTrigger value="dealers" className="data-[state=active]:bg-green-100">
                Dealers ({pendingDealers.length})
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-purple-100">
                Services ({pendingServices.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vehicles" className="mt-6">
              <div className="space-y-4">
                {pendingVehicles.map((vehicle) => (
                  <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <img
                            src={vehicle.images[0]}
                            alt={vehicle.title}
                            className="w-20 h-20 object-cover rounded-lg border"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{vehicle.title}</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 text-sm text-gray-600">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {vehicle.seller}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {vehicle.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {vehicle.submittedDate}
                              </div>
                              <div className="flex items-center">
                                <Car className="h-4 w-4 mr-1" />
                                {vehicle.year} • {vehicle.mileage}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">{vehicle.price}</div>
                            <Badge className={getStatusColor(vehicle.status)}>
                              {vehicle.status}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewItem(vehicle)}
                              className="hover:bg-blue-50"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white"
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* ... keep existing code for dealers and services tabs with enhanced design */}
            <TabsContent value="dealers" className="mt-6">
              <div className="space-y-4">
                {pendingDealers.map((dealer) => (
                  <Card key={dealer.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center">
                            <Building className="h-10 w-10 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{dealer.name}</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-1" />
                                {dealer.email}
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-1" />
                                {dealer.phone}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {dealer.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {dealer.submittedDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-700">{dealer.businessType}</div>
                            <Badge className={getStatusColor(dealer.status)}>
                              {dealer.status}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewItem(dealer)}
                              className="hover:bg-green-50"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white"
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="space-y-4">
                {pendingServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Wrench className="h-10 w-10 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-1" />
                                {service.email}
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-1" />
                                {service.phone}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {service.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {service.submittedDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-700">{service.technicians} Technicians</div>
                            <Badge className={getStatusColor(service.status)}>
                              {service.status}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewItem(service)}
                              className="hover:bg-purple-50"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white"
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Enhanced Item Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {selectedItem?.type === 'vehicle' && <Car className="h-5 w-5" />}
              {selectedItem?.type === 'dealer' && <Building className="h-5 w-5" />}
              {selectedItem?.type === 'service' && <Wrench className="h-5 w-5" />}
              <span>
                {selectedItem?.type === 'vehicle' ? 'Vehicle Listing Review' : 
                 selectedItem?.type === 'dealer' ? 'Dealer Application Review' : 'Service Application Review'}
              </span>
            </DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-6">
              {/* Vehicle Details */}
              {selectedItem.type === 'vehicle' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={selectedItem.images[0]}
                        alt={selectedItem.title}
                        className="w-full h-64 object-cover rounded-lg border"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                        <p className="text-3xl font-bold text-primary mt-2">{selectedItem.price}</p>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><strong>Year:</strong> {selectedItem.year}</div>
                        <div><strong>Mileage:</strong> {selectedItem.mileage}</div>
                        <div><strong>Fuel Type:</strong> {selectedItem.fuelType}</div>
                        <div><strong>Transmission:</strong> {selectedItem.transmission}</div>
                        <div><strong>Location:</strong> {selectedItem.location}</div>
                        <div><strong>Submitted:</strong> {selectedItem.submittedDate}</div>
                      </div>
                      <Separator />
                      <div>
                        <strong className="block mb-2">Features:</strong>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.features.map((feature, index) => (
                            <Badge key={index} variant="outline">{feature}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Description</Label>
                    <p className="mt-2 text-gray-600">{selectedItem.description}</p>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Seller Information</Label>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {selectedItem.seller}
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        {selectedItem.sellerEmail}
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        {selectedItem.sellerPhone}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Dealer Details */}
              {selectedItem.type === 'dealer' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedItem.name}</h3>
                    <p className="text-lg text-gray-600 mt-1">{selectedItem.businessType} Dealership</p>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-base font-semibold">Contact Information</Label>
                      <div className="mt-2 space-y-2 text-sm">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          {selectedItem.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {selectedItem.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {selectedItem.address}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-base font-semibold">Business Details</Label>
                      <div className="mt-2 space-y-2 text-sm">
                        <div><strong>License Number:</strong> {selectedItem.licenseNumber}</div>
                        <div><strong>Website:</strong> {selectedItem.website}</div>
                        <div><strong>Years in Business:</strong> {selectedItem.yearsInBusiness}</div>
                        <div><strong>Submitted:</strong> {selectedItem.submittedDate}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Description</Label>
                    <p className="mt-2 text-gray-600">{selectedItem.description}</p>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Documents Submitted</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedItem.documents.map((doc, index) => (
                        <Badge key={index} variant="outline" className="flex items-center">
                          <FileText className="h-3 w-3 mr-1" />
                          {doc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Service Details */}
              {selectedItem.type === 'service' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedItem.name}</h3>
                    <p className="text-lg text-gray-600 mt-1">Auto Service Center</p>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-base font-semibold">Contact Information</Label>
                      <div className="mt-2 space-y-2 text-sm">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          {selectedItem.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {selectedItem.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {selectedItem.address}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-base font-semibold">Business Details</Label>
                      <div className="mt-2 space-y-2 text-sm">
                        <div><strong>License Number:</strong> {selectedItem.licenseNumber}</div>
                        <div><strong>Years in Business:</strong> {selectedItem.yearsInBusiness}</div>
                        <div><strong>Technicians:</strong> {selectedItem.technicians}</div>
                        <div><strong>Operating Hours:</strong> {selectedItem.operatingHours}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Services Offered</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedItem.serviceTypes.map((type, index) => (
                        <Badge key={index} variant="outline">{type}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Certifications</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedItem.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Description</Label>
                    <p className="mt-2 text-gray-600">{selectedItem.description}</p>
                  </div>
                </div>
              )}

              <Separator />

              <div>
                <Label htmlFor="rejection-reason" className="text-base font-semibold">
                  Rejection Reason (if rejecting)
                </Label>
                <Textarea
                  id="rejection-reason"
                  placeholder="Provide a detailed reason for rejection..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-4 pt-4">
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
