
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Users, TrendingUp, Plus, Search, Filter, Star, Clock, ThumbsUp } from 'lucide-react';

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'buying-advice', label: 'Buying Advice' },
    { value: 'bmw', label: 'BMW' },
    { value: 'honda', label: 'Honda' },
    { value: 'toyota', label: 'Toyota' },
    { value: 'motorcycles', label: 'Motorcycles' },
    { value: 'electric', label: 'Electric Vehicles' },
  ];

  const questions = [
    {
      id: 1,
      title: 'Best maintenance schedule for BMW X5 2023?',
      content: 'I just bought a new BMW X5 and want to make sure I follow the best maintenance schedule. What do you recommend?',
      author: 'CarExpert21',
      authorRating: 4.8,
      category: 'BMW',
      answers: 12,
      views: 234,
      likes: 8,
      time: '2 hours ago',
      tags: ['bmw', 'maintenance', 'x5'],
      isAnswered: true
    },
    {
      id: 2,
      title: 'Strange noise coming from Honda Civic engine',
      content: 'My 2020 Honda Civic has been making a weird rattling noise when I start it. Has anyone experienced this?',
      author: 'MechPro',
      authorRating: 4.9,
      category: 'Honda',
      answers: 8,
      views: 156,
      likes: 5,
      time: '4 hours ago',
      tags: ['honda', 'civic', 'engine-noise'],
      isAnswered: false
    },
    {
      id: 3,
      title: 'Motorcycle winter storage tips needed',
      content: 'Winter is coming and I need to store my Harley. What are the best practices for winter motorcycle storage?',
      author: 'BikerDude',
      authorRating: 4.7,
      category: 'Motorcycles',
      answers: 15,
      views: 287,
      likes: 12,
      time: '6 hours ago',
      tags: ['motorcycle', 'storage', 'winter'],
      isAnswered: true
    },
    {
      id: 4,
      title: 'Electric car charging at home - installation costs?',
      content: 'Looking to install a Level 2 charger at home for my new Tesla. What should I expect for installation costs?',
      author: 'EVEnthusiast',
      authorRating: 4.6,
      category: 'Electric Vehicles',
      answers: 6,
      views: 198,
      likes: 9,
      time: '8 hours ago',
      tags: ['electric', 'charging', 'tesla'],
      isAnswered: false
    },
    {
      id: 5,
      title: 'Should I buy a used Toyota Camry or Honda Accord?',
      content: 'Looking for a reliable used sedan under $20k. Torn between Camry and Accord. What would you choose?',
      author: 'FirstTimeBuyer',
      authorRating: 4.2,
      category: 'Buying Advice',
      answers: 23,
      views: 445,
      likes: 18,
      time: '12 hours ago',
      tags: ['toyota', 'honda', 'buying-advice'],
      isAnswered: true
    }
  ];

  const topContributors = [
    { name: 'MasterMechanic', points: 2840, answers: 156, rating: 4.9 },
    { name: 'CarGuru2023', points: 2156, answers: 134, rating: 4.8 },
    { name: 'AutoExpert', points: 1876, answers: 98, rating: 4.9 },
    { name: 'WrenchWizard', points: 1654, answers: 87, rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              AutoHub Community
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with car enthusiasts, get expert advice, and share your automotive knowledge
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/community/ask">
                <Button className="btn-primary">
                  <Plus className="h-5 w-5 mr-2" />
                  Ask a Question
                </Button>
              </Link>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Users className="h-5 w-5 mr-2" />
                Browse Experts
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="recent" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  <TabsTrigger value="answered">Answered</TabsTrigger>
                </TabsList>

                <TabsContent value="recent" className="space-y-4">
                  {questions.map((question) => (
                    <Card key={question.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <Link to={`/community/question/${question.id}`}>
                              <h3 className="text-lg font-semibold text-secondary hover:text-primary cursor-pointer transition-colors mb-2">
                                {question.title}
                              </h3>
                            </Link>
                            <p className="text-gray-600 mb-3 line-clamp-2">{question.content}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {question.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {question.isAnswered && (
                            <Badge className="bg-green-100 text-green-800 ml-4">
                              Answered
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <span>by</span>
                              <span className="font-medium text-primary">{question.author}</span>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                <span className="ml-1">{question.authorRating}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{question.time}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{question.answers}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{question.likes}</span>
                            </div>
                            <span>{question.views} views</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="trending" className="space-y-4">
                  {questions.filter(q => q.views > 200).map((question) => (
                    <Card key={question.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-primary mr-2" />
                          <Badge className="bg-primary text-white">Trending</Badge>
                        </div>
                        <Link to={`/community/question/${question.id}`}>
                          <h3 className="text-lg font-semibold text-secondary hover:text-primary cursor-pointer transition-colors mb-2">
                            {question.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-3">{question.content}</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>by {question.author} • {question.time}</span>
                          <div className="flex items-center space-x-4">
                            <span>{question.answers} answers</span>
                            <span>{question.views} views</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Top Contributors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topContributors.map((contributor, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-secondary">{contributor.name}</p>
                          <p className="text-sm text-gray-600">{contributor.answers} answers</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-primary">{contributor.points}</p>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                            <span className="text-xs">{contributor.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Questions Today</span>
                    <span className="font-bold text-primary">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Answers Today</span>
                    <span className="font-bold text-primary">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Members</span>
                    <span className="font-bold text-primary">25,843</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Expert Mechanics</span>
                    <span className="font-bold text-primary">1,234</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
