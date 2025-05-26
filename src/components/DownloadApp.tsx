
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, Star } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary to-primary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Take AutoHub
              <span className="block text-gradient bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                On The Go
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Download our mobile app and browse vehicles, book services, and connect with dealers anywhere, anytime.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300">Browse 10,000+ vehicles on your phone</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300">Instant notifications for new listings</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300">Book services with one tap</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="btn-primary flex items-center justify-center space-x-3 h-14 px-8"
                onClick={() => window.open('#', '_blank')}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-200">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center justify-center space-x-3 h-14 px-8 border-white text-white hover:bg-white hover:text-secondary"
                onClick={() => window.open('#', '_blank')}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Download className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-75">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-gray-300">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-300">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-b from-secondary to-gray-800 rounded-[3rem] p-6 shadow-2xl">
              {/* Phone Screen */}
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-4 text-xs text-gray-600">
                    <span>9:41</span>
                    <span>100% 🔋</span>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4">
                    <div className="text-center mb-6">
                      <div className="bg-primary p-3 rounded-xl inline-block mb-2">
                        <Smartphone className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-secondary text-lg">AutoHub</h3>
                      <p className="text-sm text-gray-600">Find Your Perfect Vehicle</p>
                    </div>
                    
                    {/* Mock App Interface */}
                    <div className="space-y-3">
                      <div className="bg-gray-100 h-12 rounded-lg flex items-center px-3">
                        <div className="w-6 h-6 bg-primary/20 rounded mr-3"></div>
                        <div className="text-sm text-gray-600">Search vehicles...</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-primary/10 h-20 rounded-lg p-2">
                          <div className="text-xs font-medium text-primary">Cars</div>
                        </div>
                        <div className="bg-gray-100 h-20 rounded-lg p-2">
                          <div className="text-xs text-gray-600">Services</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-xl shadow-lg animate-bounce-subtle">
              <Star className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-primary p-3 rounded-xl shadow-lg animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
              <Download className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
