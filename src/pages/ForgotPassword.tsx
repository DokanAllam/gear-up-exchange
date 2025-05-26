
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, CheckCircle, RefreshCw } from 'lucide-react';

const ForgotPassword = () => {
  const [step, setStep] = useState<'email' | 'sent' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('sent');
    }, 2000);
  };

  const handleResendCode = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to login page
      window.location.href = '/login';
    }, 2000);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resetCode.length === 6) {
      setStep('reset');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            {/* Back to Login */}
            <Link 
              to="/login" 
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Login</span>
            </Link>

            {/* Email Step */}
            {step === 'email' && (
              <Card className="animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Forgot Password?</CardTitle>
                  <p className="text-gray-600">
                    No worries! Enter your email address and we'll send you a reset link.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-primary" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Reset Link'
                      )}
                    </Button>
                  </form>
                  
                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                      Remember your password?{' '}
                      <Link to="/login" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Email Sent Step */}
            {step === 'sent' && (
              <Card className="animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-2xl">Check Your Email</CardTitle>
                  <p className="text-gray-600">
                    We've sent a password reset link to{' '}
                    <span className="font-medium text-secondary">{email}</span>
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <strong>Email not received?</strong> Check your spam folder or try resending the link.
                      </p>
                    </div>
                    
                    <form onSubmit={handleCodeSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="resetCode">Reset Code (Optional)</Label>
                        <Input
                          id="resetCode"
                          value={resetCode}
                          onChange={(e) => setResetCode(e.target.value)}
                          placeholder="Enter 6-digit code from email"
                          maxLength={6}
                          className="mt-1 text-center text-lg tracking-widest"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Enter the code if you received it via email
                        </p>
                      </div>
                      
                      {resetCode.length === 6 && (
                        <Button type="submit" className="w-full btn-primary">
                          Verify Code
                        </Button>
                      )}
                    </form>
                    
                    <div className="flex flex-col space-y-2">
                      <Button 
                        variant="outline" 
                        onClick={handleResendCode}
                        disabled={isLoading}
                        className="w-full"
                      >
                        {isLoading ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Resending...
                          </>
                        ) : (
                          'Resend Email'
                        )}
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        onClick={() => setStep('email')}
                        className="w-full"
                      >
                        Use Different Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reset Password Step */}
            {step === 'reset' && (
              <Card className="animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Reset Password</CardTitle>
                  <p className="text-gray-600">
                    Enter your new password below
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleResetSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        required
                        minLength={8}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        required
                        minLength={8}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 font-medium mb-2">Password requirements:</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${newPassword.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span>At least 8 characters</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${/[A-Z]/.test(newPassword) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span>One uppercase letter</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${/[0-9]/.test(newPassword) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span>One number</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-primary" 
                      disabled={isLoading || newPassword !== confirmPassword || newPassword.length < 8}
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        'Update Password'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Security Notice */}
            <Card className="mt-6 bg-amber-50 border-amber-200">
              <CardContent className="p-4">
                <p className="text-sm text-amber-800">
                  <strong>Security tip:</strong> For your account safety, make sure you're on the official AutoHub website and never share your password with anyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
