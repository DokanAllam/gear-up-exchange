
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, HelpCircle, Wrench, ArrowRight } from 'lucide-react';

const CommunitySection = () => {
  const communityStats = [
    { title: 'Active Members', value: '25K+', icon: Users },
    { title: 'Questions Answered', value: '50K+', icon: MessageSquare },
    { title: 'Expert Mechanics', value: '500+', icon: Wrench },
    { title: 'Daily Discussions', value: '100+', icon: HelpCircle },
  ];

  const featuredQuestions = [
    {
      title: 'Best maintenance schedule for BMW X5?',
      category: 'BMW',
      answers: 12,
      author: 'CarExpert21',
      time: '2 hours ago'
    },
    {
      title: 'Strange noise from Honda Civic engine',
      category: 'Honda',
      answers: 8,
      author: 'MechPro',
      time: '4 hours ago'
    },
    {
      title: 'Motorcycle winter storage tips',
      category: 'Maintenance',
      answers: 15,
      author: 'BikerDude',
      time: '6 hours ago'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Join Our
            <span className="block text-gradient bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with fellow car enthusiasts, ask questions, and get expert advice from mechanics and experienced drivers.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="card-hover text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Featured Questions */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-secondary mb-6">Recent Questions</h3>
            <div className="space-y-4 mb-8">
              {featuredQuestions.map((question, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-secondary hover:text-primary cursor-pointer transition-colors">
                        {question.title}
                      </h4>
                      <Badge variant="secondary" className="ml-2">
                        {question.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span>by {question.author}</span>
                        <span>{question.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{question.answers} answers</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Link to="/community">
              <Button className="btn-primary w-full">
                Join the Discussion
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Community Features */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Ask Any Question</h3>
              <p className="text-gray-600 mb-4">
                Get help with car buying decisions, maintenance tips, and troubleshooting from our community of experts.
              </p>
              <Link to="/community/ask">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Ask a Question
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Share Your Expertise</h3>
              <p className="text-gray-600 mb-4">
                Help fellow enthusiasts by sharing your knowledge and experience. Build your reputation in the community.
              </p>
              <Link to="/community">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Start Helping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
