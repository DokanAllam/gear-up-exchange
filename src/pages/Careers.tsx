
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, Briefcase, Heart, Zap, Award } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description: 'Professional development budget, conferences, and skill-building opportunities'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, unlimited PTO, and family-friendly policies'
    },
    {
      icon: Award,
      title: 'Competitive Package',
      description: 'Competitive salary, equity options, and performance bonuses'
    }
  ];

  const jobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Join our engineering team to build cutting-edge user interfaces for our automotive marketplace platform.',
      requirements: ['React/TypeScript', '5+ years experience', 'UI/UX skills'],
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Lead product strategy and roadmap for our dealer partnership and service center features.',
      requirements: ['Product management', 'Automotive industry', 'Data-driven'],
      posted: '1 week ago'
    },
    {
      id: '3',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $130k',
      description: 'Design intuitive and beautiful experiences for buyers, sellers, and service providers.',
      requirements: ['Figma/Sketch', 'User research', 'Design systems'],
      posted: '3 days ago'
    },
    {
      id: '4',
      title: 'Sales Manager',
      department: 'Sales',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$90k - $120k + Commission',
      description: 'Drive dealer acquisition and partnerships across the West Coast market.',
      requirements: ['B2B sales', 'Automotive background', 'Team leadership'],
      posted: '5 days ago'
    },
    {
      id: '5',
      title: 'Customer Success Specialist',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60k - $80k',
      description: 'Ensure exceptional customer experience and drive user engagement and retention.',
      requirements: ['Customer service', 'Communication skills', 'Problem-solving'],
      posted: '1 day ago'
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $150k',
      description: 'Build and maintain scalable infrastructure to support our growing platform.',
      requirements: ['AWS/Docker', 'CI/CD', 'Monitoring'],
      posted: '4 days ago'
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Sales', 'Customer Success'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Help us revolutionize the automotive marketplace. We're looking for passionate individuals who want to make a real impact in the automotive industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    View Open Positions
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Learn About Culture
                  </Button>
                </div>
              </div>
              <div className="animate-slide-in-right">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                  alt="AutoHub Team"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Why Work at AutoHub?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we provide a platform for growth, innovation, and meaningful impact.
              </p>
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

        {/* Job Listings */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">Find your next opportunity with us</p>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? 'default' : 'outline'}
                  onClick={() => setSelectedDepartment(dept)}
                  className={selectedDepartment === dept ? 'bg-primary text-white' : ''}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </Button>
              ))}
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="card-hover">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} variant="secondary">{req}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                      <Link to={`/careers/${job.id}`}>
                        <Button>Apply Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No positions found for the selected department.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedDepartment('all')}
                  className="mt-4"
                >
                  View All Positions
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Company Culture */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Culture</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold mb-1">Innovation-Driven</h3>
                      <p className="text-gray-600">We encourage creative thinking and new ideas to solve complex problems in the automotive industry.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold mb-1">Collaborative Environment</h3>
                      <p className="text-gray-600">Our team works together across departments to achieve common goals and support each other's growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold mb-1">Customer-Centric</h3>
                      <p className="text-gray-600">Every decision we make is guided by what's best for our users and the automotive community.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold mb-1">Growth Mindset</h3>
                      <p className="text-gray-600">We invest in our team's professional development and provide opportunities for career advancement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300"
                  alt="Office environment"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Send Your Resume
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                Subscribe to Job Alerts
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
