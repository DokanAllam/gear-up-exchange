
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarContent, AvatarFallback } from '@/components/ui/avatar';
import { ThumbsUp, ThumbsDown, MessageSquare, Star, Clock, ArrowLeft, Flag, Share2 } from 'lucide-react';

const QuestionDetail = () => {
  const { id } = useParams();
  const [newAnswer, setNewAnswer] = useState('');

  // Mock data - in real app, fetch based on id
  const question = {
    id: 1,
    title: 'Best maintenance schedule for BMW X5 2023?',
    content: 'I just bought a new BMW X5 and want to make sure I follow the best maintenance schedule. The dealer gave me basic info, but I want to know what experienced BMW owners recommend. Should I stick to dealer service or can I go to independent shops? What are the key services I should never skip?',
    author: 'CarExpert21',
    authorRating: 4.8,
    authorBadge: 'BMW Enthusiast',
    category: 'BMW',
    answers: 12,
    views: 234,
    likes: 8,
    time: '2 hours ago',
    tags: ['bmw', 'maintenance', 'x5', '2023'],
    isAnswered: true
  };

  const answers = [
    {
      id: 1,
      content: 'Great question! I\'ve owned 3 BMW X5s over the years. For the 2023 model, I highly recommend sticking to BMW\'s maintenance schedule but you don\'t necessarily need to use the dealer for everything. Here\'s what I do:\n\n1. Oil changes every 10,000 miles (BMW\'s interval)\n2. Brake fluid every 2 years\n3. Transmission service every 60,000 miles\n4. Air filter and cabin filter annually\n\nFor independent shops, make sure they use BMW-approved oils and parts. I use a BMW specialist who charges 30% less than the dealer.',
      author: 'BMWMaster2000',
      authorRating: 4.9,
      authorBadge: 'BMW Expert',
      authorAnswers: 234,
      likes: 15,
      dislikes: 1,
      time: '1 hour ago',
      isAccepted: true
    },
    {
      id: 2,
      content: 'I agree with the previous answer but want to add a few things. The 2023 X5 has some specific maintenance items:\n\n- The newer engines are very sensitive to oil quality\n- Don\'t skip the engine air filter - it affects performance significantly\n- Consider carbon cleaning service around 50,000 miles\n\nAlso, keep all receipts if you\'re still under warranty!',
      author: 'AutoTechPro',
      authorRating: 4.7,
      authorBadge: 'Certified Mechanic',
      authorAnswers: 156,
      likes: 8,
      dislikes: 0,
      time: '30 minutes ago',
      isAccepted: false
    }
  ];

  const relatedQuestions = [
    { title: 'BMW X5 vs Mercedes GLE reliability?', answers: 8 },
    { title: 'Cost of BMW maintenance after warranty?', answers: 12 },
    { title: 'Independent BMW shop recommendations?', answers: 6 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/community" className="flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Community
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Question */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h1 className="text-2xl font-bold text-secondary mb-4">{question.title}</h1>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {question.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">{question.content}</p>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-white">
                          {question.author.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-secondary">{question.author}</span>
                          <Badge variant="outline" className="text-xs">
                            {question.authorBadge}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span>{question.authorRating}</span>
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          <span>{question.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{question.likes}</span>
                      </div>
                      <span>{question.views} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Answers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    {question.answers} Answers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {answers.map((answer) => (
                    <div key={answer.id} className={`p-4 rounded-lg border ${answer.isAccepted ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                      {answer.isAccepted && (
                        <Badge className="bg-green-600 text-white mb-3">
                          ✓ Accepted Answer
                        </Badge>
                      )}
                      
                      <div className="whitespace-pre-line text-gray-700 mb-4">
                        {answer.content}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback className="bg-secondary text-white">
                              {answer.author.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-secondary">{answer.author}</span>
                              <Badge variant="outline" className="text-xs">
                                {answer.authorBadge}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span>{answer.authorRating}</span>
                              <span>•</span>
                              <span>{answer.authorAnswers} answers</span>
                              <span>•</span>
                              <span>{answer.time}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {answer.likes}
                          </Button>
                          <Button variant="outline" size="sm">
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            {answer.dislikes}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Add Answer */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Answer</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Share your knowledge and help the community..."
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    className="min-h-32 mb-4"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                      Please be respectful and provide helpful, accurate information.
                    </p>
                    <Button className="btn-primary">
                      Post Answer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Question Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Question Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Asked</span>
                    <span className="font-medium">{question.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Viewed</span>
                    <span className="font-medium">{question.views} times</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Answers</span>
                    <span className="font-medium">{question.answers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <Badge variant="secondary">{question.category}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Related Questions */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {relatedQuestions.map((q, index) => (
                      <Link key={index} to="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="font-medium text-secondary text-sm mb-1">{q.title}</p>
                        <p className="text-xs text-gray-600">{q.answers} answers</p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ask Question CTA */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Have a Question?</h3>
                  <p className="text-sm mb-4 text-primary-foreground/80">
                    Get help from our community of automotive experts
                  </p>
                  <Link to="/community/ask">
                    <Button variant="secondary" className="w-full">
                      Ask a Question
                    </Button>
                  </Link>
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

export default QuestionDetail;
