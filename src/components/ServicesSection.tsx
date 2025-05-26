
import React from 'react';
import { Car, Users, User, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: 'Buy & Sell Vehicles',
      description: 'Browse thousands of cars, bikes, and motorcycles. List your vehicle with easy-to-use tools.',
      features: ['Verified listings', 'Price comparison', 'Instant messaging'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Dealer Partnerships',
      description: 'Join our network of trusted dealers. Build your online showroom and reach more customers.',
      features: ['Online showroom', 'Lead management', 'Analytics dashboard'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: User,
      title: 'Service Centers',
      description: 'Book maintenance and repairs with certified service centers. Track your service history.',
      features: ['Online booking', 'Service tracking', 'Certified technicians'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Verified & Trusted',
      description: 'All dealers and service centers are verified for your peace of mind.'
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Compare prices across multiple dealers to get the best deals.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Complete Automotive
            <span className="block text-gradient">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for buying, selling, and maintaining vehicles in one platform
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="card-hover border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-secondary">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-primary">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-3xl p-8 md:p-12 text-white animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AutoHub?
            </h3>
            <p className="text-xl text-gray-300">
              Join thousands of satisfied customers who trust us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  className="text-center animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
