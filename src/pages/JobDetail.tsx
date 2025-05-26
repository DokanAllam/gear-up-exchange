
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Clock, DollarSign, Briefcase, Users, Upload } from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams();
  const [applicationForm, setApplicationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    experience: '',
    salary: '',
    startDate: ''
  });

  // Mock job data
  const job = {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$120k - $160k',
    posted: '2 days ago',
    description: 'Join our engineering team to build cutting-edge user interfaces for our automotive marketplace platform. You\'ll work on features that directly impact thousands of users buying and selling vehicles.',
    responsibilities: [
      'Develop and maintain responsive web applications using React and TypeScript',
      'Collaborate with designers to implement pixel-perfect user interfaces',
      'Optimize application performance and ensure cross-browser compatibility',
      'Write clean, maintainable code and participate in code reviews',
      'Mentor junior developers and contribute to technical documentation',
      'Work closely with backend engineers to integrate APIs',
      'Participate in agile development processes and sprint planning'
    ],
    requirements: [
      '5+ years of experience in frontend development',
      'Proficiency in React, TypeScript, and modern JavaScript',
      'Strong understanding of HTML, CSS, and responsive design',
      'Experience with state management libraries (Redux, Zustand)',
      'Knowledge of testing frameworks (Jest, Testing Library)',
      'Familiarity with build tools and CI/CD pipelines',
      'Strong problem-solving and communication skills',
      'Bachelor\'s degree in Computer Science or equivalent experience'
    ],
    niceToHave: [
      'Experience with Next.js or other React frameworks',
      'Knowledge of automotive industry or marketplace platforms',
      'Experience with design systems and component libraries',
      'Understanding of SEO and web performance optimization',
      'Familiarity with GraphQL and modern API patterns'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Comprehensive health, dental, and vision insurance',
      'Unlimited PTO and flexible work arrangements',
      'Professional development budget',
      'Top-tier equipment and workspace',
      'Team events and company retreats'
    ],
    team: {
      manager: 'Sarah Chen, Engineering Manager',
      size: '12 engineers',
      culture: 'Collaborative, innovative, and supportive environment'
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    // Handle application submission
  };

  const handleFileUpload = (type: string) => {
    // Handle file upload
    console.log(`Upload ${type}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom section-padding">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
          <span>/</span>
          <span>Job Details</span>
        </div>

        {/* Back Button */}
        <Link to="/careers" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Careers</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl mb-4">{job.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    {job.type}
                  </Badge>
                </div>
                <p className="text-lg text-gray-700 mt-4">{job.description}</p>
              </CardHeader>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Nice to Have */}
            <Card>
              <CardHeader>
                <CardTitle>Nice to Have</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Apply */}
            <Card>
              <CardHeader>
                <CardTitle>Apply for this Position</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full btn-primary mb-4">
                  Quick Apply
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Or fill out the detailed application form below
                </p>
              </CardContent>
            </Card>

            {/* Team Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Team Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium">Hiring Manager</div>
                  <div className="text-gray-600">{job.team.manager}</div>
                </div>
                <div>
                  <div className="font-medium">Team Size</div>
                  <div className="text-gray-600">{job.team.size}</div>
                </div>
                <div>
                  <div className="font-medium">Culture</div>
                  <div className="text-gray-600">{job.team.culture}</div>
                </div>
              </CardContent>
            </Card>

            {/* Share Job */}
            <Card>
              <CardHeader>
                <CardTitle>Share this Job</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Form */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Apply for {job.title}</CardTitle>
            <p className="text-gray-600">Fill out the form below to submit your application.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={applicationForm.firstName}
                      onChange={(e) => setApplicationForm({...applicationForm, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={applicationForm.lastName}
                      onChange={(e) => setApplicationForm({...applicationForm, lastName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <Input
                      id="linkedIn"
                      value={applicationForm.linkedIn}
                      onChange={(e) => setApplicationForm({...applicationForm, linkedIn: e.target.value})}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio/Website</Label>
                    <Input
                      id="portfolio"
                      value={applicationForm.portfolio}
                      onChange={(e) => setApplicationForm({...applicationForm, portfolio: e.target.value})}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Resume/CV</Label>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full mt-1"
                      onClick={() => handleFileUpload('resume')}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Resume
                    </Button>
                  </div>
                  <div>
                    <Label>Cover Letter (Optional)</Label>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full mt-1"
                      onClick={() => handleFileUpload('cover')}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Cover Letter
                    </Button>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience">Years of Relevant Experience</Label>
                    <select
                      id="experience"
                      className="w-full p-2 border rounded-lg"
                      value={applicationForm.experience}
                      onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="salary">Expected Salary</Label>
                      <Input
                        id="salary"
                        value={applicationForm.salary}
                        onChange={(e) => setApplicationForm({...applicationForm, salary: e.target.value})}
                        placeholder="$120,000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="startDate">Available Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={applicationForm.startDate}
                        onChange={(e) => setApplicationForm({...applicationForm, startDate: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      value={applicationForm.coverLetter}
                      onChange={(e) => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      rows={6}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button type="submit" className="btn-primary">
                  Submit Application
                </Button>
                <Button type="button" variant="outline">
                  Save Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;
