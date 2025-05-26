
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Star, Wrench, Award, Users, Calendar, CheckCircle } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ServiceDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('services');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    serviceType: '',
    preferredDate: '',
    notes: ''
  });

  // Mock service center data
  const serviceCenter = {
    id: '1',
    name: 'AutoCare Pro Service Center',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=800',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150',
    rating: 4.9,
    reviews: 287,
    location: 'Brooklyn, NY',
    address: '456 Service Street, Brooklyn, NY 11201',
    phone: '+1 (555) 987-6543',
    email: 'service@autocareprony.com',
    established: '2015',
    certifications: ['ASE Certified', 'AAA Approved', 'Better Business Bureau A+'],
    description: 'AutoCare Pro has been providing reliable automotive service and repair for over 8 years. Our certified technicians use the latest diagnostic equipment and genuine parts.',
    hours: {
      'Monday - Friday': '7:00 AM - 7:00 PM',
      'Saturday': '8:00 AM - 5:00 PM',
      'Sunday': 'Closed'
    },
    stats: {
      completedServices: 2500,
      certifiedTechs: 12,
      yearsInBusiness: 9,
      satisfaction: '99%'
    },
    specialties: ['Engine Diagnostics', 'Brake Service', 'Oil Changes', 'Transmission Repair', 'AC Service'],
    gallery: [
      'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400',
      'https://images.unsplash.com/photo-1632823471565-1ecdf8b57cd0?w=400',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
    ]
  };

  const services = [
    {
      category: 'Maintenance',
      items: [
        { name: 'Oil Change', price: '$49.99', duration: '30 min' },
        { name: 'Brake Inspection', price: '$59.99', duration: '45 min' },
        { name: 'Tire Rotation', price: '$39.99', duration: '30 min' },
        { name: 'Battery Test', price: '$29.99', duration: '20 min' }
      ]
    },
    {
      category: 'Repairs',
      items: [
        { name: 'Brake Pad Replacement', price: '$199.99', duration: '2 hours' },
        { name: 'Engine Diagnostics', price: '$129.99', duration: '1 hour' },
        { name: 'Transmission Service', price: '$299.99', duration: '3 hours' },
        { name: 'AC Repair', price: '$249.99', duration: '2.5 hours' }
      ]
    }
  ];

  const reviews = [
    {
      id: '1',
      customer: 'David Wilson',
      rating: 5,
      date: '2024-01-20',
      comment: 'Excellent service! They diagnosed my engine problem quickly and fixed it at a fair price. Very professional team.',
      service: 'Engine Diagnostics'
    },
    {
      id: '2',
      customer: 'Lisa Rodriguez',
      rating: 5,
      date: '2024-01-18',
      comment: 'Been coming here for years. Always honest, reliable, and they complete work on time. Highly recommend!',
      service: 'Oil Change & Inspection'
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingForm);
    // Handle booking submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom section-padding">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>/</span>
          <span>Service Center Details</span>
        </div>

        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Service Centers</span>
        </Link>

        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="relative h-64 rounded-t-lg overflow-hidden">
              <img src={serviceCenter.image} alt={serviceCenter.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{serviceCenter.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{serviceCenter.rating}</span>
                    <span>({serviceCenter.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{serviceCenter.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{serviceCenter.stats.completedServices}+</div>
                  <div className="text-sm text-gray-600">Services Completed</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{serviceCenter.stats.certifiedTechs}</div>
                  <div className="text-sm text-gray-600">Certified Technicians</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{serviceCenter.stats.yearsInBusiness}</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">{serviceCenter.stats.satisfaction}</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="book">Book Now</TabsTrigger>
              </TabsList>
              
              <TabsContent value="services" className="mt-6">
                <div className="space-y-6">
                  {services.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {category.items.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                              <div>
                                <h4 className="font-semibold">{service.name}</h4>
                                <p className="text-sm text-gray-600">Duration: {service.duration}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary">{service.price}</div>
                                <Button size="sm" className="mt-2">Book Now</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {serviceCenter.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">{serviceCenter.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {serviceCenter.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline">{specialty}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                      <div className="space-y-2">
                        {serviceCenter.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Gallery</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {serviceCenter.gallery.map((image, index) => (
                            <img key={index} src={image} alt={`Gallery ${index + 1}`} className="w-full h-24 object-cover rounded" />
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                        <div className="space-y-2">
                          {Object.entries(serviceCenter.hours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between">
                              <span className="font-medium">{day}</span>
                              <span className="text-gray-600">{hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold">{review.customer}</h4>
                            <p className="text-sm text-gray-600">Service: {review.service}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-sm text-gray-600">{review.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="text-center">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="book" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Book a Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="vehicleMake">Vehicle Make</Label>
                          <Input
                            id="vehicleMake"
                            value={bookingForm.vehicleMake}
                            onChange={(e) => setBookingForm({...bookingForm, vehicleMake: e.target.value})}
                            placeholder="e.g. Toyota"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="vehicleModel">Vehicle Model</Label>
                          <Input
                            id="vehicleModel"
                            value={bookingForm.vehicleModel}
                            onChange={(e) => setBookingForm({...bookingForm, vehicleModel: e.target.value})}
                            placeholder="e.g. Camry"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="vehicleYear">Year</Label>
                          <Input
                            id="vehicleYear"
                            value={bookingForm.vehicleYear}
                            onChange={(e) => setBookingForm({...bookingForm, vehicleYear: e.target.value})}
                            placeholder="e.g. 2020"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="serviceType">Service Type</Label>
                          <select
                            id="serviceType"
                            className="w-full p-2 border rounded-lg"
                            value={bookingForm.serviceType}
                            onChange={(e) => setBookingForm({...bookingForm, serviceType: e.target.value})}
                            required
                          >
                            <option value="">Select Service</option>
                            <option value="oil-change">Oil Change</option>
                            <option value="brake-service">Brake Service</option>
                            <option value="diagnostics">Engine Diagnostics</option>
                            <option value="ac-service">AC Service</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={bookingForm.preferredDate}
                            onChange={(e) => setBookingForm({...bookingForm, preferredDate: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                          id="notes"
                          value={bookingForm.notes}
                          onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})}
                          placeholder="Describe any issues or special requests..."
                          rows={4}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full btn-primary">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">{serviceCenter.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">{serviceCenter.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">{serviceCenter.email}</span>
                </div>
                <div className="space-y-2 pt-4">
                  <Button className="w-full btn-primary">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(serviceCenter.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="font-medium">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Quote */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <select className="w-full p-2 border rounded-lg">
                    <option>Select Service</option>
                    <option>Oil Change - $49.99</option>
                    <option>Brake Inspection - $59.99</option>
                    <option>Diagnostics - $129.99</option>
                  </select>
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
