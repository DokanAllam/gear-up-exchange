
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Users, Award, Globe, Heart, Zap, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our customers and their automotive needs.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We build trust through honest practices, transparent pricing, and reliable service delivery.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously evolve our platform with cutting-edge technology to enhance user experience.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from user interface to customer support.'
    }
  ];

  const stats = [
    { icon: Users, number: '50K+', label: 'Active Users' },
    { icon: Car, number: '25K+', label: 'Vehicles Listed' },
    { icon: Award, number: '500+', label: 'Verified Dealers' },
    { icon: Globe, number: '50+', label: 'Cities Covered' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      bio: '15+ years in automotive industry with passion for technology innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: 'Former tech lead at major automotive companies, expert in marketplace platforms.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Operations specialist with deep understanding of automotive marketplace dynamics.'
    },
    {
      name: 'David Kim',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Marketing strategist focused on building authentic connections with automotive enthusiasts.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'AutoHub Founded', description: 'Started with a vision to revolutionize automotive marketplace' },
    { year: '2021', title: 'Platform Launch', description: 'Launched beta version with 100 initial users and dealers' },
    { year: '2022', title: 'Service Integration', description: 'Added service center partnerships and booking capabilities' },
    { year: '2023', title: 'Community Features', description: 'Introduced community forums and expert advice sections' },
    { year: '2024', title: 'AI Integration', description: 'Launched AI-powered vehicle recommendations and pricing tools' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl font-bold mb-6">About AutoHub</h1>
                <p className="text-xl mb-8 leading-relaxed">
                  We're revolutionizing the automotive marketplace by connecting buyers, sellers, dealers, and service centers in one comprehensive platform. Our mission is to make vehicle transactions and services accessible, transparent, and trustworthy for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/vehicles">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                      Explore Marketplace
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="animate-slide-in-right">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
                  alt="AutoHub Team"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center animate-scale-in">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're driven by a commitment to transform the automotive industry through innovation, transparency, and exceptional user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-orange-500/10 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  To create the most trusted and comprehensive automotive marketplace that empowers individuals and businesses to buy, sell, and service vehicles with confidence. We bridge the gap between traditional automotive services and modern digital convenience, ensuring every transaction is secure, transparent, and beneficial for all parties involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in AutoHub's evolution</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="card-hover">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                          <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The passionate people behind AutoHub's success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <div className="text-primary font-medium mb-3">{member.role}</div>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Join the AutoHub Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're buying, selling, or servicing vehicles, AutoHub provides the tools and community you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/community">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                  Join Community
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

export default About;
