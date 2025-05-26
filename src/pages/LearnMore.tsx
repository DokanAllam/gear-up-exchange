
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Users, Wrench, Community, Shield, Zap, Globe, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const ecosystemFeatures = [
    {
      icon: Car,
      title: 'Vehicle Marketplace',
      description: 'Buy and sell cars, bikes, and motorcycles with confidence',
      features: ['Advanced search filters', 'Verified listings', 'Price comparison tools', 'Vehicle history reports'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Dealer Network',
      description: 'Connect with certified dealers for premium vehicle selection',
      features: ['Verified dealer profiles', 'Inventory management', 'Lead generation', 'Analytics dashboard'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: 'Service Centers',
      description: 'Book maintenance and repairs with trusted service providers',
      features: ['Online booking system', 'Service history tracking', 'Real-time updates', 'Quality assurance'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Community,
      title: 'Community Hub',
      description: 'Connect with automotive enthusiasts and experts',
      features: ['Discussion forums', 'Expert advice', 'User reviews', 'Knowledge sharing'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Verified users, secure transactions, and fraud protection ensure safe dealings.'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Streamlined processes save time and make automotive transactions effortless.'
    },
    {
      icon: Globe,
      title: 'Wide Reach',
      description: 'Access to nationwide network of buyers, sellers, dealers, and service centers.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous verification processes ensure high-quality listings and services.'
    }
  ];

  const statistics = [
    { number: '50K+', label: 'Active Users', icon: Users },
    { number: '25K+', label: 'Vehicles Listed', icon: Car },
    { number: '500+', label: 'Verified Dealers', icon: Award },
    { number: '1000+', label: 'Service Centers', icon: Wrench },
    { number: '98%', label: 'Customer Satisfaction', icon: TrendingUp },
    { number: '50+', label: 'Cities Covered', icon: Globe }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Create Account',
      description: 'Sign up for free and complete your profile with verification'
    },
    {
      step: '2',
      title: 'Browse or List',
      description: 'Search for vehicles or list your own with detailed information'
    },
    {
      step: '3',
      title: 'Connect',
      description: 'Contact sellers, dealers, or book services directly through the platform'
    },
    {
      step: '4',
      title: 'Complete Transaction',
      description: 'Finalize deals securely with our built-in protection and support'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">AutoHub Ecosystem</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
              Discover how our comprehensive automotive marketplace connects buyers, sellers, dealers, and service centers in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {statistics.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center animate-scale-in">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-secondary">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ecosystem Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Complete Automotive Ecosystem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for your automotive journey, all in one place
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ecosystemFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="card-hover">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.features.map((item, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">How AutoHub Works</h2>
              <p className="text-xl text-gray-600">Simple steps to get started with our platform</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Why Choose AutoHub?</h2>
              <p className="text-xl text-gray-600">The advantages that set us apart</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Advanced Platform Features</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">AI-Powered Recommendations</h3>
                      <p className="text-gray-600">Smart algorithms suggest the best matches based on your preferences and behavior.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Real-Time Notifications</h3>
                      <p className="text-gray-600">Stay updated with instant alerts for new listings, price drops, and service updates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Integrated Payment System</h3>
                      <p className="text-gray-600">Secure payment processing with escrow protection for high-value transactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Mobile-First Design</h3>
                      <p className="text-gray-600">Optimized mobile experience for browsing, listing, and managing transactions on the go.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=300"
                  alt="Platform features"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300"
                  alt="Technology"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Real results from our community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <h3 className="font-semibold mb-2">Faster Sales</h3>
                  <p className="text-gray-600">Vehicles sell 85% faster compared to traditional methods</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">$3.2K</div>
                  <h3 className="font-semibold mb-2">Average Savings</h3>
                  <p className="text-gray-600">Buyers save an average of $3,200 per transaction</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">150%</div>
                  <h3 className="font-semibold mb-2">Business Growth</h3>
                  <p className="text-gray-600">Dealers see 150% increase in qualified leads</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Automotive Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust AutoHub for their automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Start Free Today
                </Button>
              </Link>
              <Link to="/vehicles">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;
