
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Database, UserX, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  const principles = [
    {
      title: 'Data Protection',
      icon: Shield,
      content: 'We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      title: 'Transparency',
      icon: Eye,
      content: 'We clearly explain what information we collect, how we use it, and provide you with control over your data.'
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: 'Your data is encrypted and stored securely using industry-standard security protocols and practices.'
    },
    {
      title: 'Minimal Collection',
      icon: Database,
      content: 'We only collect information that is necessary to provide our services and improve your experience on our platform.'
    },
    {
      title: 'User Control',
      icon: UserX,
      content: 'You have the right to access, update, or delete your personal information at any time through your account settings.'
    },
    {
      title: 'No Selling',
      icon: Globe,
      content: 'We do not sell your personal information to third parties. Your data is used solely to improve our services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="text-sm text-gray-500 mt-4">
            Last updated: January 1, 2024
          </div>
        </div>

        {/* Privacy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Privacy Policy */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h4>1.1 Personal Information</h4>
              <p>When you use AutoHub, we may collect the following personal information:</p>
              <ul>
                <li>Name, email address, and phone number</li>
                <li>Profile picture and account preferences</li>
                <li>Vehicle information you choose to list</li>
                <li>Communication history within our platform</li>
                <li>Payment information (processed securely by third parties)</li>
              </ul>
              
              <h4>1.2 Automatically Collected Information</h4>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul>
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referral sources and search terms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We use your information for the following purposes:</p>
              
              <h4>2.1 Service Provision</h4>
              <ul>
                <li>Create and manage your account</li>
                <li>Process transactions and bookings</li>
                <li>Facilitate communication between users</li>
                <li>Provide customer support</li>
              </ul>
              
              <h4>2.2 Platform Improvement</h4>
              <ul>
                <li>Analyze usage patterns to improve our services</li>
                <li>Personalize your experience</li>
                <li>Develop new features and functionality</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
              
              <h4>2.3 Communications</h4>
              <ul>
                <li>Send important service updates and notifications</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Notify you about relevant marketplace activities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h4>3.1 With Other Users</h4>
              <p>
                When you list a vehicle or service, certain information becomes visible to other users, including your name, contact information, and listing details.
              </p>
              
              <h4>3.2 With Service Providers</h4>
              <p>
                We may share your information with trusted third-party service providers who help us operate our platform:
              </p>
              <ul>
                <li>Payment processors for transaction handling</li>
                <li>Cloud hosting providers for data storage</li>
                <li>Analytics services for platform improvement</li>
                <li>Customer support tools</li>
              </ul>
              
              <h4>3.3 Legal Requirements</h4>
              <p>
                We may disclose your information when required by law or to protect our rights, safety, or the rights and safety of others.
              </p>
              
              <h4>3.4 Business Transfers</h4>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul>
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h4>5.1 Account Management</h4>
              <p>You can access and update your personal information through your account settings.</p>
              
              <h4>5.2 Data Rights</h4>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Portability of your data</li>
                <li>Restriction of processing</li>
                <li>Objection to processing</li>
              </ul>
              
              <h4>5.3 Communication Preferences</h4>
              <p>
                You can opt out of marketing communications at any time by updating your preferences or clicking unsubscribe links in our emails.
              </p>
              
              <h4>5.4 Cookies</h4>
              <p>
                You can control cookie settings through your browser preferences. Note that disabling cookies may affect some functionality of our platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
              </p>
              <ul>
                <li>Account information: Until you delete your account</li>
                <li>Transaction records: 7 years for accounting purposes</li>
                <li>Communication logs: 3 years for customer support</li>
                <li>Usage analytics: Aggregated and anonymized permanently</li>
              </ul>
              <p>
                When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers, including:
              </p>
              <ul>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Standard contractual clauses</li>
                <li>Certification schemes</li>
                <li>Binding corporate rules</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice on our platform</li>
              </ul>
              <p>
                Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul>
                <li>Email: privacy@autohub.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Mail: Privacy Officer, AutoHub Inc., 123 Auto Street, NY 10001</li>
              </ul>
              <p>
                For data protection inquiries in the EU, you can also contact our Data Protection Officer at dpo@autohub.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
