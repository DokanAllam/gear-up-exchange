
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Filter, 
  Eye, 
  MessageSquare, 
  Users, 
  Flag, 
  Trash2,
  User,
  Calendar,
  ThumbsUp,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const AdminCommunity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moderationNote, setModerationNote] = useState('');

  // Mock community data
  const questions = [
    {
      id: '1',
      title: 'Best oil change interval for BMW?',
      author: 'JohnDoe123',
      content: 'I have a 2020 BMW X3. What\'s the recommended oil change interval?',
      category: 'Maintenance',
      status: 'active',
      likes: 15,
      answers: 8,
      views: 245,
      createdAt: '2024-01-20',
      reported: false
    },
    {
      id: '2',
      title: 'Tesla charging stations in NYC',
      author: 'ElectricFan',
      content: 'Can anyone recommend the best Tesla charging locations in Manhattan?',
      category: 'Electric Vehicles',
      status: 'flagged',
      likes: 23,
      answers: 12,
      views: 156,
      createdAt: '2024-01-19',
      reported: true,
      reportReason: 'Spam content'
    },
    {
      id: '3',
      title: 'Used car buying tips',
      author: 'CarBuyer2024',
      content: 'First time buying a used car. What should I look out for?',
      category: 'Buying Guide',
      status: 'active',
      likes: 45,
      answers: 18,
      views: 567,
      createdAt: '2024-01-18',
      reported: false
    }
  ];

  const users = [
    {
      id: '1',
      username: 'JohnDoe123',
      email: 'john@example.com',
      joinDate: '2023-06-15',
      questionsPosted: 12,
      answersGiven: 34,
      reputation: 245,
      status: 'active',
      warnings: 0
    },
    {
      id: '2',
      username: 'ElectricFan',
      email: 'fan@example.com',
      joinDate: '2023-08-20',
      questionsPosted: 8,
      answersGiven: 15,
      reputation: 156,
      status: 'warned',
      warnings: 1
    },
    {
      id: '3',
      username: 'CarBuyer2024',
      email: 'buyer@example.com',
      joinDate: '2024-01-01',
      questionsPosted: 3,
      answersGiven: 7,
      reputation: 45,
      status: 'active',
      warnings: 0
    }
  ];

  const reports = [
    {
      id: '1',
      type: 'question',
      itemId: '2',
      itemTitle: 'Tesla charging stations in NYC',
      reporter: 'SafetyFirst',
      reason: 'Spam content',
      description: 'This question contains promotional links and seems like spam.',
      status: 'pending',
      reportedAt: '2024-01-21'
    },
    {
      id: '2',
      type: 'answer',
      itemId: 'a5',
      itemTitle: 'Response to oil change question',
      reporter: 'CarExpert',
      reason: 'Inappropriate content',
      description: 'Contains offensive language and personal attacks.',
      status: 'pending',
      reportedAt: '2024-01-20'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'flagged': return 'bg-red-100 text-red-800';
      case 'warned': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewItem = (item, type) => {
    setSelectedItem({ ...item, type });
    setIsModalOpen(true);
  };

  const handleModerate = (action, itemId) => {
    console.log(`${action} item:`, itemId, 'Note:', moderationNote);
    setIsModalOpen(false);
    setModerationNote('');
  };

  const filteredQuestions = questions.filter(q =>
    q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter(u =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Management</h1>
        <p className="text-gray-600">Manage community posts, users, and moderation</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Questions</p>
                <p className="text-2xl font-bold">{questions.length}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-600" />
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
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reports</p>
                <p className="text-2xl font-bold">{reports.filter(r => r.status === 'pending').length}</p>
              </div>
              <Flag className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Flagged Content</p>
                <p className="text-2xl font-bold">{questions.filter(q => q.status === 'flagged').length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search community content..."
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

      {/* Community Management Tabs */}
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="questions" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="questions">Questions ({questions.length})</TabsTrigger>
              <TabsTrigger value="users">Users ({users.length})</TabsTrigger>
              <TabsTrigger value="reports">Reports ({reports.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="mt-6">
              <div className="space-y-4">
                {filteredQuestions.map((question) => (
                  <Card key={question.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{question.title}</h3>
                            <Badge className={getStatusColor(question.status)}>
                              {question.status}
                            </Badge>
                            {question.reported && (
                              <Badge variant="outline" className="text-red-600 border-red-200">
                                <Flag className="h-3 w-3 mr-1" />
                                Reported
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{question.content}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {question.author}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {question.createdAt}
                            </span>
                            <span className="flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {question.likes}
                            </span>
                            <span className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              {question.answers} answers
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewItem(question, 'question')}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {question.status === 'flagged' && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-200 hover:bg-green-50"
                                onClick={() => handleModerate('approve', question.id)}
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-600 border-red-200 hover:bg-red-50"
                                onClick={() => handleModerate('remove', question.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="users" className="mt-6">
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <Card key={user.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium text-gray-900">{user.username}</h3>
                              <Badge className={getStatusColor(user.status)}>
                                {user.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                              <span>Joined: {user.joinDate}</span>
                              <span>Questions: {user.questionsPosted}</span>
                              <span>Answers: {user.answersGiven}</span>
                              <span>Reputation: {user.reputation}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewItem(user, 'user')}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {user.warnings > 0 && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-yellow-600 border-yellow-200 hover:bg-yellow-50"
                            >
                              <AlertTriangle className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-6">
              <div className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{report.itemTitle}</h3>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                            <Badge variant="outline">
                              {report.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Reason:</strong> {report.reason}
                          </p>
                          <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>Reported by: {report.reporter}</span>
                            <span>Date: {report.reportedAt}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewItem(report, 'report')}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-200 hover:bg-green-50"
                            onClick={() => handleModerate('dismiss', report.id)}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleModerate('action', report.id)}
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
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

      {/* Moderation Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {selectedItem?.type === 'question' && 'Question Details'}
              {selectedItem?.type === 'user' && 'User Details'}
              {selectedItem?.type === 'report' && 'Report Details'}
            </DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-6">
              {selectedItem.type === 'question' && (
                <div>
                  <h3 className="text-lg font-semibold">{selectedItem.title}</h3>
                  <p className="text-gray-600 mt-2">{selectedItem.content}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Author: {selectedItem.author}</p>
                    <p>Category: {selectedItem.category}</p>
                    <p>Created: {selectedItem.createdAt}</p>
                    <p>Engagement: {selectedItem.likes} likes, {selectedItem.answers} answers, {selectedItem.views} views</p>
                  </div>
                </div>
              )}

              {selectedItem.type === 'user' && (
                <div>
                  <h3 className="text-lg font-semibold">{selectedItem.username}</h3>
                  <div className="mt-4 space-y-2 text-sm">
                    <p><strong>Email:</strong> {selectedItem.email}</p>
                    <p><strong>Join Date:</strong> {selectedItem.joinDate}</p>
                    <p><strong>Questions Posted:</strong> {selectedItem.questionsPosted}</p>
                    <p><strong>Answers Given:</strong> {selectedItem.answersGiven}</p>
                    <p><strong>Reputation:</strong> {selectedItem.reputation}</p>
                    <p><strong>Warnings:</strong> {selectedItem.warnings}</p>
                  </div>
                </div>
              )}

              {selectedItem.type === 'report' && (
                <div>
                  <h3 className="text-lg font-semibold">{selectedItem.itemTitle}</h3>
                  <div className="mt-4 space-y-2 text-sm">
                    <p><strong>Type:</strong> {selectedItem.type}</p>
                    <p><strong>Reported by:</strong> {selectedItem.reporter}</p>
                    <p><strong>Reason:</strong> {selectedItem.reason}</p>
                    <p><strong>Description:</strong> {selectedItem.description}</p>
                    <p><strong>Date:</strong> {selectedItem.reportedAt}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Moderation Note</label>
                <Textarea
                  placeholder="Add a note for this moderation action..."
                  value={moderationNote}
                  onChange={(e) => setModerationNote(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleModerate('approve', selectedItem.id)}
                >
                  Approve
                </Button>
                <Button
                  variant="outline"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  onClick={() => handleModerate('remove', selectedItem.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCommunity;
