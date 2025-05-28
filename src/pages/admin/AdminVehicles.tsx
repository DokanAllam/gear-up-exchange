
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Plus, Edit, Trash2, Eye, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminVehicles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const vehicles = [
    {
      id: '1',
      title: '2023 BMW M3 Competition',
      price: 75000,
      dealer: 'BMW Manhattan',
      status: 'Approved',
      condition: 'Used',
      dateAdded: '2024-01-15',
      views: 245
    },
    {
      id: '2',
      title: '2024 Tesla Model S',
      price: 95000,
      dealer: 'Tesla Store',
      status: 'Pending',
      condition: 'New',
      dateAdded: '2024-01-18',
      views: 189
    },
    {
      id: '3',
      title: '2022 Ford Mustang',
      price: 45000,
      dealer: 'Ford Dealer',
      status: 'Rejected',
      condition: 'Used',
      dateAdded: '2024-01-12',
      views: 156
    }
  ];

  const handleVehicleAction = (action: string, vehicleId: string) => {
    toast({
      title: `Vehicle ${action}`,
      description: `Vehicle ${vehicleId} has been ${action.toLowerCase()}.`,
    });
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
        <Button className="btn-primary">
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
                      <Button variant="outline" size="icon" onClick={() => handleVehicleAction('View', vehicle.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleVehicleAction('Edit', vehicle.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      {vehicle.status === 'Pending' && (
                        <>
                          <Button variant="outline" size="icon" onClick={() => handleVehicleAction('Approve', vehicle.id)}>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button variant="outline" size="icon" onClick={() => handleVehicleAction('Reject', vehicle.id)}>
                            <XCircle className="h-4 w-4 text-red-600" />
                          </Button>
                        </>
                      )}
                      <Button variant="outline" size="icon" onClick={() => handleVehicleAction('Delete', vehicle.id)}>
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
    </div>
  );
};

export default AdminVehicles;
