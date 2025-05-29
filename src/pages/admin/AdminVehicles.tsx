import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Edit, Trash2, Eye, CheckCircle, XCircle, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminVehicles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [vehicleImages, setVehicleImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    year: '',
    brand: '',
    model: '',
    variant: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    condition: '',
    location: '',
    description: '',
    dealer: ''
  });
  const { toast } = useToast();

  const [vehicles, setVehicles] = useState([
    {
      id: '1',
      title: '2023 BMW M3 Competition',
      price: 75000,
      dealer: 'BMW Manhattan',
      status: 'Approved',
      condition: 'Used',
      dateAdded: '2024-01-15',
      views: 245,
      year: 2023,
      mileage: '5000 km',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      brand: 'BMW',
      model: 'M3',
      variant: 'Competition',
      location: 'New York, NY',
      description: 'Excellent condition BMW M3 with low mileage.',
      images: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400'
      ]
    },
    {
      id: '2',
      title: '2024 Tesla Model S',
      price: 95000,
      dealer: 'Tesla Store',
      status: 'Pending',
      condition: 'New',
      dateAdded: '2024-01-18',
      views: 189,
      year: 2024,
      mileage: '0 km',
      fuelType: 'Electric',
      transmission: 'Automatic',
      brand: 'Tesla',
      model: 'Model S',
      variant: 'Standard',
      location: 'Los Angeles, CA',
      description: 'Brand new Tesla Model S with autopilot.',
      images: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400'
      ]
    },
    {
      id: '3',
      title: '2022 Ford Mustang',
      price: 45000,
      dealer: 'Ford Dealer',
      status: 'Rejected',
      condition: 'Used',
      dateAdded: '2024-01-12',
      views: 156,
      year: 2022,
      mileage: '15000 km',
      fuelType: 'Petrol',
      transmission: 'Manual',
      brand: 'Ford',
      model: 'Mustang',
      variant: 'GT',
      location: 'Chicago, IL',
      description: 'Performance Ford Mustang in great condition.',
      images: [
        'https://images.unsplash.com/photo-1594736797933-d0401ba2e65a?w=400'
      ]
    }
  ]);

  const handleViewVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsViewModalOpen(true);
  };

  const handleEditVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setFormData({
      title: vehicle.title,
      price: vehicle.price.toString(),
      year: vehicle.year.toString(),
      brand: vehicle.brand,
      model: vehicle.model,
      variant: vehicle.variant,
      mileage: vehicle.mileage,
      fuelType: vehicle.fuelType,
      transmission: vehicle.transmission,
      condition: vehicle.condition,
      location: vehicle.location,
      description: vehicle.description,
      dealer: vehicle.dealer
    });
    setVehicleImages(vehicle.images || []);
    setIsEditModalOpen(true);
  };

  const handleDeleteVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsDeleteModalOpen(true);
  };

  const handleApproveVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsApproveModalOpen(true);
  };

  const handleRejectVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsRejectModalOpen(true);
  };

  const handleAddVehicle = () => {
    setFormData({
      title: '',
      price: '',
      year: '',
      brand: '',
      model: '',
      variant: '',
      mileage: '',
      fuelType: '',
      transmission: '',
      condition: '',
      location: '',
      description: '',
      dealer: ''
    });
    setVehicleImages([]);
    setIsAddModalOpen(true);
  };

  const confirmDeleteVehicle = () => {
    if (selectedVehicle) {
      setVehicles(vehicles.filter(v => v.id !== selectedVehicle.id));
      toast({
        title: "Vehicle Deleted",
        description: `${selectedVehicle.title} has been deleted successfully.`,
      });
      setIsDeleteModalOpen(false);
      setSelectedVehicle(null);
    }
  };

  const confirmApproveVehicle = () => {
    if (selectedVehicle) {
      setVehicles(vehicles.map(v => 
        v.id === selectedVehicle.id ? { ...v, status: 'Approved' } : v
      ));
      toast({
        title: "Vehicle Approved",
        description: `${selectedVehicle.title} has been approved.`,
      });
      setIsApproveModalOpen(false);
      setSelectedVehicle(null);
    }
  };

  const confirmRejectVehicle = () => {
    if (selectedVehicle) {
      setVehicles(vehicles.map(v => 
        v.id === selectedVehicle.id ? { ...v, status: 'Rejected' } : v
      ));
      toast({
        title: "Vehicle Rejected",
        description: `${selectedVehicle.title} has been rejected.`,
      });
      setIsRejectModalOpen(false);
      setSelectedVehicle(null);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setVehicleImages(prev => [...prev, e.target.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setVehicleImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSaveVehicle = () => {
    if (selectedVehicle) {
      // Edit existing vehicle
      setVehicles(vehicles.map(v => 
        v.id === selectedVehicle.id ? {
          ...v,
          ...formData,
          price: parseFloat(formData.price),
          year: parseInt(formData.year),
          images: vehicleImages
        } : v
      ));
      toast({
        title: "Vehicle Updated",
        description: `${formData.title} has been updated successfully.`,
      });
      setIsEditModalOpen(false);
    } else {
      // Add new vehicle
      const newVehicle = {
        id: (vehicles.length + 1).toString(),
        ...formData,
        price: parseFloat(formData.price),
        year: parseInt(formData.year),
        status: 'Pending',
        dateAdded: new Date().toISOString().split('T')[0],
        views: 0,
        images: vehicleImages
      };
      setVehicles([...vehicles, newVehicle]);
      toast({
        title: "Vehicle Added",
        description: `${formData.title} has been added successfully.`,
      });
      setIsAddModalOpen(false);
    }
    setSelectedVehicle(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Used': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const VehicleForm = () => (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto">
      {/* Images Section */}
      <div>
        <Label className="text-base font-medium mb-4 block">Vehicle Images</Label>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {vehicleImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Vehicle ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          <label className="border-2 border-dashed border-gray-300 rounded-lg h-24 flex flex-col items-center justify-center cursor-pointer hover:border-primary">
            <Upload className="h-6 w-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">Add Image</span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            placeholder="e.g., 2023 BMW M3"
          />
        </div>
        <div>
          <Label htmlFor="price">Price ($)</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            placeholder="75000"
          />
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            type="number"
            value={formData.year}
            onChange={(e) => setFormData({...formData, year: e.target.value})}
            placeholder="2023"
          />
        </div>
        <div>
          <Label htmlFor="brand">Brand</Label>
          <Select value={formData.brand} onValueChange={(value) => setFormData({...formData, brand: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Mercedes">Mercedes</SelectItem>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Ford">Ford</SelectItem>
              <SelectItem value="Tesla">Tesla</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="model">Model</Label>
          <Input
            id="model"
            value={formData.model}
            onChange={(e) => setFormData({...formData, model: e.target.value})}
            placeholder="M3"
          />
        </div>
        <div>
          <Label htmlFor="variant">Variant</Label>
          <Input
            id="variant"
            value={formData.variant}
            onChange={(e) => setFormData({...formData, variant: e.target.value})}
            placeholder="Competition"
          />
        </div>
        <div>
          <Label htmlFor="mileage">Mileage</Label>
          <Input
            id="mileage"
            value={formData.mileage}
            onChange={(e) => setFormData({...formData, mileage: e.target.value})}
            placeholder="5000 km"
          />
        </div>
        <div>
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Select value={formData.fuelType} onValueChange={(value) => setFormData({...formData, fuelType: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select fuel type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Petrol">Petrol</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="transmission">Transmission</Label>
          <Select value={formData.transmission} onValueChange={(value) => setFormData({...formData, transmission: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select transmission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Manual">Manual</SelectItem>
              <SelectItem value="Automatic">Automatic</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="condition">Condition</Label>
          <Select value={formData.condition} onValueChange={(value) => setFormData({...formData, condition: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Used">Used</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            placeholder="New York, NY"
          />
        </div>
        <div>
          <Label htmlFor="dealer">Dealer</Label>
          <Input
            id="dealer"
            value={formData.dealer}
            onChange={(e) => setFormData({...formData, dealer: e.target.value})}
            placeholder="BMW Manhattan"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          placeholder="Describe the vehicle..."
          rows={3}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Vehicle Management</h1>
        <Button className="btn-primary" onClick={handleAddVehicle}>
          <Plus className="h-4 w-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">2,456</div>
            <p className="text-gray-600">Total Vehicles</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">2,234</div>
            <p className="text-gray-600">Approved</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">156</div>
            <p className="text-gray-600">Pending Review</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">66</div>
            <p className="text-gray-600">Rejected</p>
          </CardContent>
        </Card>
      </div>

      {/* Vehicles Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Vehicles</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Dealer</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.title}</TableCell>
                  <TableCell>${vehicle.price.toLocaleString()}</TableCell>
                  <TableCell>{vehicle.dealer}</TableCell>
                  <TableCell>
                    <Badge className={getConditionColor(vehicle.condition)}>
                      {vehicle.condition}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(vehicle.status)}>
                      {vehicle.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{vehicle.dateAdded}</TableCell>
                  <TableCell>{vehicle.views}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleViewVehicle(vehicle)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleEditVehicle(vehicle)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      {vehicle.status === 'Pending' && (
                        <>
                          <Button variant="outline" size="icon" onClick={() => handleApproveVehicle(vehicle)}>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button variant="outline" size="icon" onClick={() => handleRejectVehicle(vehicle)}>
                            <XCircle className="h-4 w-4 text-red-600" />
                          </Button>
                        </>
                      )}
                      <Button variant="outline" size="icon" onClick={() => handleDeleteVehicle(vehicle)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View Vehicle Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Vehicle Details</DialogTitle>
          </DialogHeader>
          {selectedVehicle && (
            <div className="space-y-6">
              {/* Images */}
              {selectedVehicle.images && selectedVehicle.images.length > 0 && (
                <div>
                  <h4 className="font-medium mb-3">Images</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedVehicle.images.map((image: string, index: number) => (
                      <img key={index} src={image} alt={`Vehicle ${index + 1}`} className="w-full h-32 object-cover rounded" />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div><strong>Title:</strong> {selectedVehicle.title}</div>
                <div><strong>Price:</strong> ${selectedVehicle.price.toLocaleString()}</div>
                <div><strong>Year:</strong> {selectedVehicle.year}</div>
                <div><strong>Brand:</strong> {selectedVehicle.brand}</div>
                <div><strong>Model:</strong> {selectedVehicle.model}</div>
                <div><strong>Variant:</strong> {selectedVehicle.variant}</div>
                <div><strong>Mileage:</strong> {selectedVehicle.mileage}</div>
                <div><strong>Fuel Type:</strong> {selectedVehicle.fuelType}</div>
                <div><strong>Transmission:</strong> {selectedVehicle.transmission}</div>
                <div><strong>Condition:</strong> 
                  <Badge className={`ml-2 ${getConditionColor(selectedVehicle.condition)}`}>
                    {selectedVehicle.condition}
                  </Badge>
                </div>
                <div><strong>Location:</strong> {selectedVehicle.location}</div>
                <div><strong>Dealer:</strong> {selectedVehicle.dealer}</div>
                <div><strong>Status:</strong> 
                  <Badge className={`ml-2 ${getStatusColor(selectedVehicle.status)}`}>
                    {selectedVehicle.status}
                  </Badge>
                </div>
                <div><strong>Views:</strong> {selectedVehicle.views}</div>
              </div>
              
              {selectedVehicle.description && (
                <div>
                  <strong>Description:</strong>
                  <p className="mt-2 text-gray-700">{selectedVehicle.description}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add/Edit Vehicle Modal */}
      <Dialog open={isEditModalOpen || isAddModalOpen} onOpenChange={(open) => {
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
      }}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}</DialogTitle>
          </DialogHeader>
          <VehicleForm />
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={() => {
              setIsEditModalOpen(false);
              setIsAddModalOpen(false);
            }}>
              Cancel
            </Button>
            <Button onClick={handleSaveVehicle} className="btn-primary">
              {selectedVehicle ? 'Update Vehicle' : 'Add Vehicle'}
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
            <p>Are you sure you want to delete this vehicle?</p>
            {selectedVehicle && (
              <div className="p-4 bg-gray-50 rounded">
                <strong>{selectedVehicle.title}</strong>
                <p className="text-sm text-gray-600">{selectedVehicle.dealer}</p>
              </div>
            )}
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={confirmDeleteVehicle}>Delete</Button>
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
            <p>Are you sure you want to approve this vehicle?</p>
            {selectedVehicle && (
              <div className="p-4 bg-gray-50 rounded">
                <strong>{selectedVehicle.title}</strong>
                <p className="text-sm text-gray-600">{selectedVehicle.dealer}</p>
              </div>
            )}
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsApproveModalOpen(false)}>Cancel</Button>
              <Button onClick={confirmApproveVehicle} className="bg-green-600 hover:bg-green-700 text-white">Approve</Button>
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
            <p>Are you sure you want to reject this vehicle?</p>
            {selectedVehicle && (
              <div className="p-4 bg-gray-50 rounded">
                <strong>{selectedVehicle.title}</strong>
                <p className="text-sm text-gray-600">{selectedVehicle.dealer}</p>
              </div>
            )}
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsRejectModalOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={confirmRejectVehicle}>Reject</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminVehicles;
