
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Search, Plus, Edit, Trash2, Eye, UserCheck, UserX } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  lastActive: string;
  phone?: string;
  address?: string;
}

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'view' | 'edit' | 'create'>('view');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Customer',
      status: 'Active',
      joinDate: '2024-01-15',
      lastActive: '2024-01-20',
      phone: '+1-555-0123',
      address: '123 Main St, New York, NY'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@dealer.com',
      role: 'Dealer',
      status: 'Active',
      joinDate: '2024-01-10',
      lastActive: '2024-01-19',
      phone: '+1-555-0456',
      address: '456 Oak Ave, Los Angeles, CA'
    },
    {
      id: '3',
      name: 'Bob Wilson',
      email: 'bob@service.com',
      role: 'Service Provider',
      status: 'Suspended',
      joinDate: '2024-01-05',
      lastActive: '2024-01-18',
      phone: '+1-555-0789',
      address: '789 Pine St, Chicago, IL'
    }
  ]);

  const handleUserAction = (action: string, userId: string) => {
    switch (action) {
      case 'View':
        const viewUser = users.find(u => u.id === userId);
        if (viewUser) {
          setSelectedUser(viewUser);
          setModalType('view');
          setIsModalOpen(true);
        }
        break;
      case 'Edit':
        const editUser = users.find(u => u.id === userId);
        if (editUser) {
          setSelectedUser(editUser);
          setModalType('edit');
          setIsModalOpen(true);
        }
        break;
      case 'Add':
        setSelectedUser(null);
        setModalType('create');
        setIsModalOpen(true);
        break;
      case 'Delete':
        setUserToDelete(userId);
        setIsDeleteDialogOpen(true);
        break;
      case 'Suspend':
        setUsers(users.map(u => u.id === userId ? {...u, status: 'Suspended'} : u));
        toast({
          title: 'User Suspended',
          description: `User has been suspended successfully.`,
        });
        break;
      case 'Activate':
        setUsers(users.map(u => u.id === userId ? {...u, status: 'Active'} : u));
        toast({
          title: 'User Activated',
          description: `User has been activated successfully.`,
        });
        break;
    }
  };

  const handleSaveUser = () => {
    if (modalType === 'create') {
      const newUser: User = {
        id: (users.length + 1).toString(),
        name: 'New User',
        email: 'new@example.com',
        role: 'Customer',
        status: 'Active',
        joinDate: new Date().toISOString().split('T')[0],
        lastActive: new Date().toISOString().split('T')[0]
      };
      setUsers([...users, newUser]);
      toast({
        title: 'User Created',
        description: 'New user has been created successfully.',
      });
    } else if (modalType === 'edit' && selectedUser) {
      setUsers(users.map(u => u.id === selectedUser.id ? selectedUser : u));
      toast({
        title: 'User Updated',
        description: 'User has been updated successfully.',
      });
    }
    setIsModalOpen(false);
  };

  const handleDeleteUser = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.id !== userToDelete));
      toast({
        title: 'User Deleted',
        description: 'User has been deleted successfully.',
        variant: 'destructive'
      });
    }
    setIsDeleteDialogOpen(false);
    setUserToDelete(null);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-purple-100 text-purple-800';
      case 'Dealer': return 'bg-blue-100 text-blue-800';
      case 'Service Provider': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button className="btn-primary" onClick={() => handleUserAction('Add', '')}>
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">{users.length}</div>
            <p className="text-gray-600">Total Users</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">{users.filter(u => u.status === 'Active').length}</div>
            <p className="text-gray-600">Active Users</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">{users.filter(u => u.status === 'Pending').length}</div>
            <p className="text-gray-600">Pending Approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">{users.filter(u => u.status === 'Suspended').length}</div>
            <p className="text-gray-600">Suspended</p>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Users</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search users..."
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
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className={getRoleColor(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleUserAction('View', user.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleUserAction('Edit', user.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      {user.status === 'Active' ? (
                        <Button variant="outline" size="icon" onClick={() => handleUserAction('Suspend', user.id)}>
                          <UserX className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button variant="outline" size="icon" onClick={() => handleUserAction('Activate', user.id)}>
                          <UserCheck className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="icon" onClick={() => handleUserAction('Delete', user.id)}>
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

      {/* User Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {modalType === 'create' && 'Add New User'}
              {modalType === 'edit' && 'Edit User'}
              {modalType === 'view' && 'User Details'}
            </DialogTitle>
            <DialogDescription>
              {modalType === 'view' && 'View user information'}
              {modalType === 'edit' && 'Update user information'}
              {modalType === 'create' && 'Create a new user account'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input
                id="name"
                value={selectedUser?.name || ''}
                onChange={(e) => selectedUser && setSelectedUser({...selectedUser, name: e.target.value})}
                className="col-span-3"
                disabled={modalType === 'view'}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">Email</Label>
              <Input
                id="email"
                value={selectedUser?.email || ''}
                onChange={(e) => selectedUser && setSelectedUser({...selectedUser, email: e.target.value})}
                className="col-span-3"
                disabled={modalType === 'view'}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">Role</Label>
              <Select
                value={selectedUser?.role || ''}
                onValueChange={(value) => selectedUser && setSelectedUser({...selectedUser, role: value})}
                disabled={modalType === 'view'}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Customer">Customer</SelectItem>
                  <SelectItem value="Dealer">Dealer</SelectItem>
                  <SelectItem value="Service Provider">Service Provider</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {modalType === 'view' && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Phone</Label>
                  <span className="col-span-3 text-sm">{selectedUser?.phone || 'N/A'}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Address</Label>
                  <span className="col-span-3 text-sm">{selectedUser?.address || 'N/A'}</span>
                </div>
              </>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            {modalType !== 'view' && (
              <Button onClick={handleSaveUser}>
                {modalType === 'create' ? 'Create User' : 'Save Changes'}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user account and remove all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteUser} className="bg-red-600 hover:bg-red-700">
              Delete User
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminUsers;
