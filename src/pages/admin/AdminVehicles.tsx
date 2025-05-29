
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Plus, Edit, Trash2, Eye, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminVehicles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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
      transmission: 'Automatic'
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
      transmission: 'Automatic'
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
      transmission: 'Manual'
    }
  ]);

  const handleViewVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsViewModalOpen(true);
  };

  const handleEditVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsEditModalOpen(true);
  };

  const handleDeleteVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsDeleteModalOpen(true);
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

  const handleApproveVehicle = (vehicleId: string) => {
    setVehicles(vehicles.map(v => 
      v.id === vehicleId ? { ...v, status: 'Approved' } : v
    ));
    toast({
      title: "Vehicle Approved",
      description: `Vehicle ${vehicleId} has been approved.`,
    });
  };

  const handleRejectVehicle = (vehicleId: string) => {
    setVehicles(vehicles.map(v => 
      v.id === vehicleId ? { ...v, status: 'Rejected' } : v
    ));
    toast({
      title: "Vehicle Rejected",
      description: `Vehicle ${vehicleId} has been rejected.`,
    });
  };

  const handleAddVehicle = () => {
    setIsAddModalOpen(true);
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

  return (
    <div className="p-6 space-y-6">
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
                          <Button variant="outline" size="icon" onClick={() => handleApproveVehicle(vehicle.id)}>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button variant="outline" size="icon" onClick={() => handleRejectVehicle(vehicle.id)}>
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
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Vehicle Details</DialogTitle>
          </DialogHeader>
          {selectedVehicle && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><strong>Title:</strong> {selectedVehicle.title}</div>
                <div><strong>Price:</strong> ${selectedVehicle.price.toLocaleString()}</div>
                <div><strong>Year:</strong> {selectedVehicle.year}</div>
                <div><strong>Mileage:</strong> {selectedVehicle.mileage}</div>
                <div><strong>Fuel Type:</strong> {selectedVehicle.fuelType}</div>
                <div><strong>Transmission:</strong> {selectedVehicle.transmission}</div>
                <div><strong>Dealer:</strong> {selectedVehicle.dealer}</div>
                <div><strong>Status:</strong> 
                  <Badge className={`ml-2 ${getStatusColor(selectedVehicle.status)}`}>
                    {selectedVehicle.status}
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Vehicle Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Vehicle</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-gray-600">Edit vehicle form will be implemented here...</p>
            <Button className="mt-4" onClick={() => setIsEditModalOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Vehicle Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Vehicle</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-gray-600">Add vehicle form will be implemented here...</p>
            <Button className="mt-4" onClick={() => setIsAddModalOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
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
              <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={confirmDeleteVehicle}>
                Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminVehicles;
