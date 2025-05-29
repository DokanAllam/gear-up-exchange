
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Shield,
  Users,
  Settings,
  Key,
  Lock,
  UserCheck
} from 'lucide-react';

const AdminRoles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('view'); // 'view', 'edit', 'create'

  // Mock roles and permissions data
  const roles = [
    {
      id: '1',
      name: 'Super Admin',
      description: 'Full system access with all permissions',
      userCount: 2,
      status: 'active',
      createdAt: '2023-01-15',
      permissions: ['user_management', 'content_management', 'system_settings', 'analytics', 'financial_data']
    },
    {
      id: '2',
      name: 'Admin',
      description: 'Administrative access with limited system permissions',
      userCount: 5,
      status: 'active',
      createdAt: '2023-02-10',
      permissions: ['user_management', 'content_management', 'analytics']
    },
    {
      id: '3',
      name: 'Moderator',
      description: 'Content moderation and community management',
      userCount: 12,
      status: 'active',
      createdAt: '2023-03-05',
      permissions: ['content_moderation', 'community_management']
    },
    {
      id: '4',
      name: 'Dealer Manager',
      description: 'Manage dealer accounts and applications',
      userCount: 8,
      status: 'active',
      createdAt: '2023-04-12',
      permissions: ['dealer_management', 'vehicle_approval']
    },
    {
      id: '5',
      name: 'Customer Support',
      description: 'Handle customer inquiries and basic user management',
      userCount: 15,
      status: 'active',
      createdAt: '2023-05-20',
      permissions: ['user_support', 'basic_user_management']
    }
  ];

  const allPermissions = [
    { id: 'user_management', name: 'User Management', category: 'Users' },
    { id: 'basic_user_management', name: 'Basic User Management', category: 'Users' },
    { id: 'user_support', name: 'User Support', category: 'Users' },
    { id: 'dealer_management', name: 'Dealer Management', category: 'Business' },
    { id: 'service_management', name: 'Service Management', category: 'Business' },
    { id: 'vehicle_approval', name: 'Vehicle Approval', category: 'Content' },
    { id: 'content_management', name: 'Content Management', category: 'Content' },
    { id: 'content_moderation', name: 'Content Moderation', category: 'Content' },
    { id: 'community_management', name: 'Community Management', category: 'Content' },
    { id: 'analytics', name: 'Analytics Access', category: 'Data' },
    { id: 'financial_data', name: 'Financial Data Access', category: 'Data' },
    { id: 'system_settings', name: 'System Settings', category: 'System' },
    { id: 'security_settings', name: 'Security Settings', category: 'System' }
  ];

  const users = [
    {
      id: '1',
      name: 'John Admin',
      email: 'john@automarket.com',
      role: 'Super Admin',
      status: 'active',
      lastLogin: '2024-01-22'
    },
    {
      id: '2',
      name: 'Sarah Manager',
      email: 'sarah@automarket.com',
      role: 'Admin',
      status: 'active',
      lastLogin: '2024-01-21'
    },
    {
      id: '3',
      name: 'Mike Moderator',
      email: 'mike@automarket.com',
      role: 'Moderator',
      status: 'active',
      lastLogin: '2024-01-20'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleOpenModal = (role, type) => {
    setSelectedRole(role);
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleAction = (action, itemId) => {
    console.log(`${action} item:`, itemId);
    setIsModalOpen(false);
  };

  const groupedPermissions = allPermissions.reduce((acc, permission) => {
    if (!acc[permission.category]) {
      acc[permission.category] = [];
    }
    acc[permission.category].push(permission);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Role Management</h1>
          <p className="text-gray-600">Manage user roles, permissions, and access control</p>
        </div>
        <Button onClick={() => handleOpenModal(null, 'create')}>
          <Plus className="h-4 w-4 mr-2" />
          Create Role
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Roles</p>
                <p className="text-2xl font-bold">{roles.length}</p>
              </div>
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold">{users.filter(u => u.status === 'active').length}</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Permissions</p>
                <p className="text-2xl font-bold">{allPermissions.length}</p>
              </div>
              <Key className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Security Level</p>
                <p className="text-2xl font-bold">High</p>
              </div>
              <Lock className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search roles or users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Role Management Tabs */}
      <Tabs defaultValue="roles" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="roles" className="flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            Roles
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="permissions" className="flex items-center">
            <Key className="h-4 w-4 mr-2" />
            Permissions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roles.map((role) => (
                  <Card key={role.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{role.name}</h3>
                            <Badge className={getStatusColor(role.status)}>
                              {role.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{role.description}</p>
                          <div className="text-xs text-gray-500 flex items-center space-x-4">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {role.userCount} users
                            </span>
                            <span className="flex items-center">
                              <Key className="h-3 w-3 mr-1" />
                              {role.permissions.length} permissions
                            </span>
                            <span>Created: {role.createdAt}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenModal(role, 'view')}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleOpenModal(role, 'edit')}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          {role.userCount === 0 && (
                            <Button variant="outline" size="sm" onClick={() => handleAction('delete', role.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Role Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">User</th>
                      <th className="text-left p-4">Email</th>
                      <th className="text-left p-4">Role</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Last Login</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                              <Users className="h-4 w-4 text-gray-500" />
                            </div>
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-gray-600">{user.email}</td>
                        <td className="p-4">
                          <Badge variant="outline">{user.role}</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm text-gray-600">{user.lastLogin}</td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
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
        </TabsContent>

        <TabsContent value="permissions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Permissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(groupedPermissions).map(([category, permissions]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {permissions.map((permission) => (
                        <Card key={permission.id} className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{permission.name}</p>
                              <p className="text-sm text-gray-600">ID: {permission.id}</p>
                            </div>
                            <Badge variant="outline">{permission.category}</Badge>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Role Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {modalType === 'create' && 'Create New Role'}
              {modalType === 'edit' && `Edit Role: ${selectedRole?.name}`}
              {modalType === 'view' && `Role Details: ${selectedRole?.name}`}
            </DialogTitle>
          </DialogHeader>
          
          {modalType !== 'view' && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="role-name">Role Name</Label>
                <Input id="role-name" defaultValue={selectedRole?.name} placeholder="Enter role name" />
              </div>
              
              <div>
                <Label htmlFor="role-description">Description</Label>
                <Textarea 
                  id="role-description" 
                  defaultValue={selectedRole?.description}
                  placeholder="Enter role description"
                  rows={3}
                />
              </div>
              
              <div>
                <Label className="text-base font-medium">Permissions</Label>
                <div className="mt-3 space-y-4">
                  {Object.entries(groupedPermissions).map(([category, permissions]) => (
                    <div key={category}>
                      <h4 className="font-medium text-gray-900 mb-2">{category}</h4>
                      <div className="space-y-2 pl-4">
                        {permissions.map((permission) => (
                          <div key={permission.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={permission.id}
                              defaultChecked={selectedRole?.permissions.includes(permission.id)}
                            />
                            <Label htmlFor={permission.id} className="text-sm">
                              {permission.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => handleAction('save', selectedRole?.id)}>
                  {modalType === 'create' ? 'Create Role' : 'Save Changes'}
                </Button>
              </div>
            </div>
          )}
          
          {modalType === 'view' && selectedRole && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">{selectedRole.name}</h3>
                <p className="text-gray-600 mt-1">{selectedRole.description}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Role Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Users assigned:</span>
                    <span className="ml-2 font-medium">{selectedRole.userCount}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Created:</span>
                    <span className="ml-2 font-medium">{selectedRole.createdAt}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <Badge className={`ml-2 ${getStatusColor(selectedRole.status)}`}>
                      {selectedRole.status}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-gray-600">Permissions:</span>
                    <span className="ml-2 font-medium">{selectedRole.permissions.length}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Assigned Permissions</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRole.permissions.map((permissionId) => {
                    const permission = allPermissions.find(p => p.id === permissionId);
                    return permission ? (
                      <Badge key={permissionId} variant="outline">
                        {permission.name}
                      </Badge>
                    ) : null;
                  })}
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => handleOpenModal(selectedRole, 'edit')}>
                  Edit Role
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminRoles;
