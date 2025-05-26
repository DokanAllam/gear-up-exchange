
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Camera, DollarSign, CheckCircle } from 'lucide-react';

const Sell = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    condition: '',
    location: '',
    contactEmail: '',
    contactPhone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Sell Your Vehicle
            </h1>
            <p className="text-xl text-gray-600">
              Create a listing and reach thousands of potential buyers
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-scale-in">
            <Card className="text-center p-6 border-0 shadow-lg">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Best Prices</h3>
              <p className="text-gray-600">Get competitive offers from verified buyers</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Easy Listing</h3>
              <p className="text-gray-600">Simple process to create attractive listings</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Verified buyers and secure transactions</p>
            </Card>
          </div>

          {/* Listing Form */}
          <Card className="shadow-xl border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Create Your Listing</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Vehicle Type *
                    </label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="bike">Bike</SelectItem>
                        <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Condition *
                    </label>
                    <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="used">Used</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Title *
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., 2023 BMW M3 Competition"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </div>

                {/* Vehicle Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Make *
                    </label>
                    <Input
                      type="text"
                      placeholder="BMW"
                      value={formData.make}
                      onChange={(e) => handleInputChange('make', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Model *
                    </label>
                    <Input
                      type="text"
                      placeholder="M3"
                      value={formData.model}
                      onChange={(e) => handleInputChange('model', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Year *
                    </label>
                    <Input
                      type="number"
                      placeholder="2023"
                      value={formData.year}
                      onChange={(e) => handleInputChange('year', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Price ($) *
                    </label>
                    <Input
                      type="number"
                      placeholder="75000"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Mileage (km) *
                    </label>
                    <Input
                      type="number"
                      placeholder="5000"
                      value={formData.mileage}
                      onChange={(e) => handleInputChange('mileage', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Fuel Type *
                    </label>
                    <Select value={formData.fuelType} onValueChange={(value) => handleInputChange('fuelType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Transmission *
                    </label>
                    <Select value={formData.transmission} onValueChange={(value) => handleInputChange('transmission', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select transmission" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manual">Manual</SelectItem>
                        <SelectItem value="automatic">Automatic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Location *
                    </label>
                    <Input
                      type="text"
                      placeholder="New York, NY"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Description *
                  </label>
                  <Textarea
                    placeholder="Describe your vehicle's features, condition, and any additional details..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                {/* Photos Upload */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Photos
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Drag and drop photos or click to browse</p>
                    <p className="text-sm text-gray-500">Upload up to 10 photos (JPG, PNG)</p>
                    <Button type="button" variant="outline" className="mt-4">
                      Choose Files
                    </Button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Contact Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Contact Phone *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button type="submit" className="btn-primary px-12 py-4 text-lg">
                    Create Listing
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;
