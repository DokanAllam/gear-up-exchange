
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, User, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Marketplace',
      links: [
        { label: 'Buy Cars', href: '/vehicles?type=car' },
        { label: 'Buy Bikes', href: '/vehicles?type=bike' },
        { label: 'Buy Motorcycles', href: '/vehicles?type=motorcycle' },
        { label: 'Sell Your Vehicle', href: '/sell' },
        { label: 'Vehicle Valuation', href: '/valuation' }
      ]
    },
    {
      title: 'For Business',
      links: [
        { label: 'Dealer Partnership', href: '/dealer-signup' },
        { label: 'Service Centers', href: '/service-signup' },
        { label: 'Business Solutions', href: '/business' },
        { label: 'API Access', href: '/api' },
        { label: 'Bulk Listings', href: '/bulk' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Safety Tips', href: '/safety' },
        { label: 'Financing', href: '/financing' },
        { label: 'Insurance', href: '/insurance' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-primary p-3 rounded-xl">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">AutoHub</h1>
                  <p className="text-sm text-gray-300">Buy • Sell • Service</p>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Your trusted partner for buying, selling, and servicing vehicles. 
                Connect with dealers, service centers, and fellow enthusiasts.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>support@autohub.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Auto Street, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-center md:text-left">
              <p>&copy; 2024 AutoHub. All rights reserved.</p>
              <p className="text-sm mt-1">Built with ❤️ for automotive enthusiasts</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-700 hover:bg-primary p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
