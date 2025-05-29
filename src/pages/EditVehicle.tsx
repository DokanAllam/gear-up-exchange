
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X, Save, AlertCircle } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [images, setImages] = useState([]);
  const [vehicleData, setVehicleData] = useState({
    title: '',
    price: '',
    year: '',
    brand: '',
    model: '',
    variant: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    location: '',
    description: '',
    status: 'active',
    rejectionReason: ''
  });

  // Load vehicle data (mock data for now)
  useEffect(() => {
    // Mock vehicle data based on ID
    const mockVehicle = {
      id: id,
      title: '2019 Honda Civic',
      price: '18500',
      year: '2019',
      brand: 'Honda',
      model: 'Civic',
      variant: 'LX',
      mileage: '45000',
      fuelType: 'Gasoline',
      transmission: 'Manual',
      location: 'New York, NY',
      description: 'Well-maintained Honda Civic with low mileage',
      status: id === '2' ? 'rejected' : 'active',
      rejectionReason: id === '2' ? 'Images quality is poor. Please upload clearer photos of the vehicle.' : ''
    };

    setVehicleData(mockVehicle);
    setImages([
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400'
    ]);
  }, [id]);

  const handleInputChange = (field, value) => {
    setVehicleData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files) as File[];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImages(prev => [...prev, e.target.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    toast({
      title: "Vehicle updated",
      description: "Your vehicle listing has been updated successfully.",
    });
    navigate('/profile');
  };

  const handleSubmitForReview = () => {
    toast({
      title: "Submitted for review",
      description: "Your vehicle listing has been submitted for admin review.",
    });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom section-padding">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/profile')}
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Profile</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Edit Vehicle Listing</CardTitle>
                <Badge className={vehicleData.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
                  {vehicleData.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Rejection Reason */}
              {vehicleData.status === 'rejected' && vehicleData.rejectionReason && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <h4 className="font-medium text-red-800">Rejection Reason</h4>
                  </div>
                  <p className="text-red-700">{vehicleData.rejectionReason}</p>
                </div>
              )}

              {/* Images Section */}
              <div>
                <Label className="text-lg font-medium mb-4 block">Vehicle Images</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Vehicle ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <label className="border-2 border-dashed border-gray-300 rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:border-primary">
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Add Image</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={vehicleData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g., 2019 Honda Civic"
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={vehicleData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="18500"
                  />
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    value={vehicleData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                    placeholder="2019"
                  />
                </div>
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Select value={vehicleData.brand} onValueChange={(value) => handleInputChange('brand', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Honda">Honda</SelectItem>
                      <SelectItem value="Toyota">Toyota</SelectItem>
                      <SelectItem value="Ford">Ford</SelectItem>
                      <SelectItem value="BMW">BMW</SelectItem>
                      <SelectItem value="Mercedes">Mercedes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="model">Model</Label>
                  <Input
                    id="model"
                    value={vehicleData.model}
                    onChange={(e) => handleInputChange('model', e.target.value)}
                    placeholder="Civic"
                  />
                </div>
                <div>
                  <Label htmlFor="variant">Variant</Label>
                  <Input
                    id="variant"
                    value={vehicleData.variant}
                    onChange={(e) => handleInputChange('variant', e.target.value)}
                    placeholder="LX"
                  />
                </div>
                <div>
                  <Label htmlFor="mileage">Mileage</Label>
                  <Input
                    id="mileage"
                    type="number"
                    value={vehicleData.mileage}
                    onChange={(e) => handleInputChange('mileage', e.target.value)}
                    placeholder="45000"
                  />
                </div>
                <div>
                  <Label htmlFor="fuelType">Fuel Type</Label>
                  <Select value={vehicleData.fuelType} onValueChange={(value) => handleInputChange('fuelType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fuel type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Gasoline">Gasoline</SelectItem>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="transmission">Transmission</Label>
                  <Select value={vehicleData.transmission} onValueChange={(value) => handleInputChange('transmission', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transmission" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Manual">Manual</SelectItem>
                      <SelectItem value="Automatic">Automatic</SelectItem>
                      <SelectItem value="CVT">CVT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={vehicleData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="New York, NY"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={vehicleData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your vehicle..."
                  rows={4}
                />
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t">
                <Button variant="outline" onClick={() => navigate('/profile')}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="btn-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                {vehicleData.status === 'rejected' && (
                  <Button onClick={handleSubmitForReview} className="bg-green-600 hover:bg-green-700 text-white">
                    Submit for Review
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditVehicle;
