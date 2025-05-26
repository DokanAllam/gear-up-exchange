
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageSquare, HeadphonesIcon, Users } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+1 (555) 123-4567',
      description: 'Available 24/7 for urgent matters'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@autohub.com',
      description: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: '123 Auto Street, NY 10001',
      description: 'Visit us during business hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-8PM EST',
      description: 'Saturday: 10AM-6PM EST'
    }
  ];

  const departments = [
    {
      icon: HeadphonesIcon,
      title: 'Customer Support',
      email: 'support@autohub.com',
      phone: '+1 (555) 123-4567',
      description: 'General inquiries and platform assistance'
    },
    {
      icon: Users,
      title: 'Dealer Partnerships',
      email: 'dealers@autohub.com',
      phone: '+1 (555) 123-4568',
      description: 'Partnership opportunities and dealer onboarding'
    },
    {
      icon: MessageSquare,
      title: 'Technical Support',
      email: 'tech@autohub.com',
      phone: '+1 (555) 123-4569',
      description: 'Technical issues and platform bugs'
    }
  ];

  const faqs = [
    {
      question: 'How do I list my vehicle for sale?',
      answer: 'Simply create an account, click "Sell Your Vehicle," and follow our step-by-step listing process. Include photos, details, and set your price.'
    },
    {
      question: 'Is there a fee for listing vehicles?',
      answer: 'Basic listings are free for individual sellers. We offer premium listing options with enhanced visibility for a small fee.'
    },
    {
      question: 'How do I become a verified dealer?',
      answer: 'Apply through our dealer application process. We verify your business credentials and once approved, you get access to dealer tools and features.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We support all major credit cards, bank transfers, and secure payment processing through our trusted payment partners.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in">
              Have questions? Need support? We're here to help you with all your automotive marketplace needs.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <div className="text-secondary font-medium mb-2">{info.details}</div>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Departments */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <select
                            id="category"
                            className="w-full p-2 border rounded-lg"
                            value={contactForm.category}
                            onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                            required
                          >
                            <option value="">Select Category</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="dealer">Dealer Partnership</option>
                            <option value="service">Service Center</option>
                            <option value="billing">Billing</option>
                            <option value="feedback">Feedback</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={contactForm.message}
                          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                          placeholder="Please describe your inquiry in detail..."
                          rows={6}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full btn-primary">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Departments */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Departments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {departments.map((dept, index) => {
                      const Icon = dept.icon;
                      return (
                        <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-start space-x-3">
                            <Icon className="h-6 w-6 text-primary mt-1" />
                            <div>
                              <h4 className="font-semibold mb-1">{dept.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                              <div className="text-sm">
                                <div className="text-primary font-medium">{dept.email}</div>
                                <div className="text-gray-600">{dept.phone}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Office Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold">AutoHub Headquarters</div>
                      <div className="text-gray-600">123 Auto Street</div>
                      <div className="text-gray-600">New York, NY 10001</div>
                      <div className="text-gray-600">United States</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-secondary">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
              <Button variant="outline" size="lg">
                View All FAQs
              </Button>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="section-padding bg-gray-100">
          <div className="container-custom text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-4">Support Hours</h3>
                <div className="space-y-2 text-lg">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">12:00 PM - 5:00 PM EST</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    🚨 Emergency support available 24/7 for critical issues
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
