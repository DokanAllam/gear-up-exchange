
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  FileText,
  Image,
  Video,
  Globe,
  Mail,
  Bell,
  Settings
} from 'lucide-react';

const AdminContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContent, setSelectedContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('view'); // 'view', 'edit', 'create'

  // Mock content data
  const pages = [
    {
      id: '1',
      title: 'About Us',
      slug: '/about',
      status: 'published',
      lastModified: '2024-01-20',
      author: 'Admin',
      views: 1247
    },
    {
      id: '2',
      title: 'Privacy Policy',
      slug: '/privacy',
      status: 'published',
      lastModified: '2024-01-18',
      author: 'Legal Team',
      views: 892
    },
    {
      id: '3',
      title: 'Terms & Conditions',
      slug: '/terms',
      status: 'draft',
      lastModified: '2024-01-22',
      author: 'Legal Team',
      views: 0
    }
  ];

  const banners = [
    {
      id: '1',
      title: 'Summer Sale Banner',
      type: 'promotional',
      location: 'homepage-hero',
      status: 'active',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      clicks: 1234
    },
    {
      id: '2',
      title: 'New Dealer Program',
      type: 'informational',
      location: 'dealer-page',
      status: 'scheduled',
      startDate: '2024-02-01',
      endDate: '2024-12-31',
      clicks: 0
    }
  ];

  const notifications = [
    {
      id: '1',
      title: 'System Maintenance',
      message: 'Scheduled maintenance on Sunday 2AM-4AM EST',
      type: 'system',
      status: 'active',
      targetAudience: 'all-users',
      createdAt: '2024-01-20'
    },
    {
      id: '2',
      title: 'New Features Available',
      message: 'Check out our new vehicle comparison tool!',
      type: 'feature',
      status: 'scheduled',
      targetAudience: 'registered-users',
      createdAt: '2024-01-19'
    }
  ];

  const emails = [
    {
      id: '1',
      name: 'Welcome Email',
      subject: 'Welcome to AutoMarket!',
      type: 'transactional',
      status: 'active',
      lastSent: '2024-01-22',
      openRate: '65%',
      clickRate: '12%'
    },
    {
      id: '2',
      name: 'Weekly Newsletter',
      subject: 'This Week in AutoMarket',
      type: 'marketing',
      status: 'active',
      lastSent: '2024-01-21',
      openRate: '42%',
      clickRate: '8%'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleOpenModal = (content, type) => {
    setSelectedContent(content);
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleAction = (action, itemId) => {
    console.log(`${action} item:`, itemId);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h1>
          <p className="text-gray-600">Manage pages, banners, notifications, and email templates</p>
        </div>
        <Button onClick={() => handleOpenModal(null, 'create')}>
          <Plus className="h-4 w-4 mr-2" />
          Create Content
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Content Management Tabs */}
      <Tabs defaultValue="pages" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pages" className="flex items-center">
            <FileText className="h-4 w-4 mr-2" />
            Pages
          </TabsTrigger>
          <TabsTrigger value="banners" className="flex items-center">
            <Image className="h-4 w-4 mr-2" />
            Banners
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="emails" className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            Email Templates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Title</th>
                      <th className="text-left p-4">URL</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Last Modified</th>
                      <th className="text-left p-4">Views</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((page) => (
                      <tr key={page.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div>
                            <div className="font-medium">{page.title}</div>
                            <div className="text-sm text-gray-500">by {page.author}</div>
                          </div>
                        </td>
                        <td className="p-4">
                          <code className="bg-gray-100 px-2 py-1 rounded text-sm">{page.slug}</code>
                        </td>
                        <td className="p-4">
                          <Badge className={getStatusColor(page.status)}>
                            {page.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm text-gray-600">{page.lastModified}</td>
                        <td className="p-4 text-sm">{page.views}</td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={() => handleOpenModal(page, 'view')}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleOpenModal(page, 'edit')}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleAction('delete', page.id)}>
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
        </TabsContent>

        <TabsContent value="banners" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Banner Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {banners.map((banner) => (
                  <Card key={banner.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{banner.title}</h3>
                            <Badge className={getStatusColor(banner.status)}>
                              {banner.status}
                            </Badge>
                            <Badge variant="outline">{banner.type}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>Location: {banner.location}</p>
                            <p>Duration: {banner.startDate} - {banner.endDate}</p>
                            <p>Clicks: {banner.clicks}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenModal(banner, 'view')}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleOpenModal(banner, 'edit')}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleAction('delete', banner.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <Card key={notification.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{notification.title}</h3>
                            <Badge className={getStatusColor(notification.status)}>
                              {notification.status}
                            </Badge>
                            <Badge variant="outline">{notification.type}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                          <div className="text-xs text-gray-500">
                            <p>Target: {notification.targetAudience.replace('-', ' ')}</p>
                            <p>Created: {notification.createdAt}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenModal(notification, 'edit')}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleAction('delete', notification.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emails" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emails.map((email) => (
                  <Card key={email.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{email.name}</h3>
                            <Badge className={getStatusColor(email.status)}>
                              {email.status}
                            </Badge>
                            <Badge variant="outline">{email.type}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Subject: {email.subject}</p>
                          <div className="text-xs text-gray-500 flex space-x-4">
                            <span>Last sent: {email.lastSent}</span>
                            <span>Open rate: {email.openRate}</span>
                            <span>Click rate: {email.clickRate}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenModal(email, 'view')}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleOpenModal(email, 'edit')}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleAction('send-test', email.id)}>
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Content Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {modalType === 'create' && 'Create New Content'}
              {modalType === 'edit' && `Edit ${selectedContent?.title || 'Content'}`}
              {modalType === 'view' && `View ${selectedContent?.title || 'Content'}`}
            </DialogTitle>
          </DialogHeader>
          
          {modalType !== 'view' && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" defaultValue={selectedContent?.title} />
              </div>
              
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" rows={10} placeholder="Enter content here..." />
              </div>
              
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => handleAction('save', selectedContent?.id)}>
                  {modalType === 'create' ? 'Create' : 'Save Changes'}
                </Button>
              </div>
            </div>
          )}
          
          {modalType === 'view' && selectedContent && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">{selectedContent.title}</h3>
                <p className="text-gray-600 mt-2">Content preview would be displayed here...</p>
              </div>
              
              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminContent;
