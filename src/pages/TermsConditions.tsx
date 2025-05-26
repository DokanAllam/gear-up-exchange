
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, Shield, UserCheck, AlertTriangle } from 'lucide-react';

const TermsConditions = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: UserCheck,
      content: 'By accessing and using AutoHub marketplace, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.'
    },
    {
      title: 'User Responsibilities',
      icon: Shield,
      content: 'Users are responsible for providing accurate information, maintaining account security, and complying with all applicable laws when using our platform.'
    },
    {
      title: 'Platform Usage',
      icon: ScrollText,
      content: 'Our platform is designed for legitimate vehicle buying, selling, and service booking. Any misuse or fraudulent activity will result in account termination.'
    },
    {
      title: 'Prohibited Activities',
      icon: AlertTriangle,
      content: 'Users are prohibited from posting false information, engaging in fraudulent activities, violating intellectual property rights, or using the platform for illegal purposes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using AutoHub marketplace services.
          </p>
          <div className="text-sm text-gray-500 mt-4">
            Last updated: January 1, 2024
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                  <p className="text-sm text-gray-600">{section.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Terms */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                These Terms of Service ("Terms") govern your use of AutoHub's website and services operated by AutoHub Inc. ("us", "we", or "our"). Our Privacy Policy also governs your use of the Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
              </p>
              <p>
                Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Platform Services</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h4>2.1 Marketplace Services</h4>
              <p>
                AutoHub provides an online marketplace that allows users to:
              </p>
              <ul>
                <li>List vehicles for sale (cars, bikes, motorcycles)</li>
                <li>Browse and purchase vehicles from other users</li>
                <li>Connect with certified dealers and service centers</li>
                <li>Book automotive services and maintenance</li>
                <li>Access community forums and resources</li>
              </ul>
              
              <h4>2.2 User Accounts</h4>
              <p>
                To access certain features of our Service, you must create an account. You are responsible for safeguarding your account information and for all activities that occur under your account.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Obligations</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h4>3.1 Accurate Information</h4>
              <p>
                You agree to provide accurate, current, and complete information about yourself and any vehicles you list. You must promptly update any information to keep it accurate and current.
              </p>
              
              <h4>3.2 Compliance with Laws</h4>
              <p>
                You agree to use the Service only for lawful purposes and in accordance with applicable laws and regulations, including but not limited to:
              </p>
              <ul>
                <li>Vehicle registration and title transfer requirements</li>
                <li>Sales tax obligations</li>
                <li>Consumer protection laws</li>
                <li>Anti-fraud regulations</li>
              </ul>
              
              <h4>3.3 Account Security</h4>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>You may not use our Service:</p>
              <ul>
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations or laws</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To collect or track the personal information of others</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the Service</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Transactions and Payments</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h4>5.1 Transaction Facilitation</h4>
              <p>
                AutoHub acts as a platform to facilitate connections between buyers and sellers. We are not a party to any transaction between users.
              </p>
              
              <h4>5.2 Payment Processing</h4>
              <p>
                All payments for vehicles or services are processed through secure third-party payment processors. AutoHub does not store or have access to your payment information.
              </p>
              
              <h4>5.3 Fees and Charges</h4>
              <p>
                Certain services may be subject to fees. All applicable fees will be clearly disclosed before you complete any transaction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of AutoHub Inc. and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, AutoHub Inc.:
              </p>
              <ul>
                <li>Excludes all representations and warranties relating to this website and its contents</li>
                <li>Does not warrant the accuracy, completeness, or reliability of vehicle listings</li>
                <li>Is not responsible for transactions between users</li>
                <li>Does not guarantee the quality or condition of listed vehicles</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                In no event shall AutoHub Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p>
                If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul>
                <li>By email: legal@autohub.com</li>
                <li>By phone: +1 (555) 123-4567</li>
                <li>By mail: 123 Auto Street, NY 10001</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
