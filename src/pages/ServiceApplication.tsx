
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Wrench, CheckCircle, Upload, Calendar, Users, TrendingUp, Clock } from 'lucide-react';

const ServiceApplication = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    serviceType: '',
    yearsInBusiness: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    website: '',
    services: [],
    description: '',
    licenseNumber: '',
    operatingHours: '',
    acceptTerms: false
  });

  const benefits = [
    {
      icon: Users,
      title: 'More Customers',
      description: 'Connect with 100K+ vehicle owners needing services'
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Automated booking system to manage appointments'
    },
    {
      icon: TrendingUp,
      title: 'Grow Revenue',
      description: 'Service centers see 35% increase in bookings'
    },
    {
      icon: Wrench,
      title: 'Showcase Expertise',
      description: 'Build trust with customer reviews and certifications'
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: '$79/month',
      features: [
        'Online booking system',
        'Customer management',
        'Basic analytics',
        'Mobile app access',
        'Email notifications'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      features: [
        'Advanced booking features',
        'SMS notifications',
        'Detailed analytics',
        'Customer review system',
        'Service history tracking',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      features: [
        'Multi-location support',
        'API integration',
        'Custom branding',
        'Advanced reporting',
        'Dedicated account manager',
        'Marketing tools'
      ],
      popular: false
    }
  ];

  const serviceTypes = [
    'General Auto Repair', 'Oil Change & Maintenance', 'Brake Service',
    'Engine Repair', 'Transmission Service', 'Tire Service',
    'Battery & Electrical', 'Air Conditioning', 'Body Shop',
    'Motorcycle Service', 'Truck & Fleet Service', 'Mobile Service'
  ];

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Join AutoHub as a
              <span className="block text-gradient bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Service Partner
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with vehicle owners in your area and grow your service business with our powerful platform
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-secondary mb-8">Service Partner Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">{pkg.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Service Center Application</CardTitle>
              <CardDescription className="text-center">
                Complete the form below to join our network of trusted service providers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Business Information */}
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      placeholder="Your service center name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceType">Primary Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general-repair">General Auto Repair</SelectItem>
                        <SelectItem value="quick-service">Quick Service (Oil/Tire)</SelectItem>
                        <SelectItem value="specialty">Specialty Service</SelectItem>
                        <SelectItem value="body-shop">Body Shop</SelectItem>
                        <SelectItem value="mobile">Mobile Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                    <Select value={formData.yearsInBusiness} onValueChange={(value) => handleInputChange('yearsInBusiness', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-20">11-20 years</SelectItem>
                        <SelectItem value="20+">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="licenseNumber">Business License Number *</Label>
                    <Input
                      id="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                      placeholder="License number"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="business@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>
              </div>

              {/* Business Address */}
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Service Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="123 Service Street"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <Label htmlFor="operatingHours">Operating Hours *</Label>
                    <Input
                      id="operatingHours"
                      value={formData.operatingHours}
                      onChange={(e) => handleInputChange('operatingHours', e.target.value)}
                      placeholder="Mon-Fri 8AM-6PM"
                    />
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Services Offered</h3>
                <p className="text-gray-600 mb-4">Select all services your business provides</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceTypes.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <Label htmlFor={service} className="text-sm">{service}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Description */}
              <div>
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Tell us about your service center, specialties, equipment, and what makes you unique..."
                  className="min-h-24"
                />
              </div>

              {/* Document Upload */}
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Required Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Business License</p>
                    <Button variant="outline">Choose File</Button>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Insurance Certificate</p>
                    <Button variant="outline">Choose File</Button>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Certifications</p>
                    <Button variant="outline">Choose File</Button>
                    <p className="text-xs text-gray-500 mt-1">ASE, Manufacturer certs, etc.</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Shop Photos</p>
                    <Button variant="outline">Choose Files</Button>
                    <p className="text-xs text-gray-500 mt-1">Interior/exterior photos</p>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange('acceptTerms', checked)}
                />
                <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                  I agree to the <a href="#" className="text-primary hover:underline">Service Partner Terms</a> and 
                  <a href="#" className="text-primary hover:underline ml-1">Privacy Policy</a>. 
                  I understand that AutoHub will review my application and may require additional documentation.
                </Label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button className="btn-primary px-12 py-3 text-lg">
                  Submit Application
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Applications are typically reviewed within 2-3 business days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceApplication;
