import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

// Pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Vehicles from '@/pages/Vehicles';
import VehicleDetail from '@/pages/VehicleDetail';
import Dealers from '@/pages/Dealers';
import DealerDetail from '@/pages/DealerDetail';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Store from '@/pages/Store';
import ProductDetail from '@/pages/ProductDetail';
import Community from '@/pages/Community';
import QuestionDetail from '@/pages/QuestionDetail';
import Careers from '@/pages/Careers';
import JobDetail from '@/pages/JobDetail';
import Contact from '@/pages/Contact';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import Profile from '@/pages/Profile';
import Sell from '@/pages/Sell';
import EditVehicle from '@/pages/EditVehicle';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Wishlist from '@/pages/Wishlist';
import Notifications from '@/pages/Notifications';
import DealerApplication from '@/pages/DealerApplication';
import ServiceApplication from '@/pages/ServiceApplication';
import DealerDashboard from '@/pages/DealerDashboard';
import ServiceDashboard from '@/pages/ServiceDashboard';
import LearnMore from '@/pages/LearnMore';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';
import NotFound from '@/pages/NotFound';

// Admin Pages
import AdminSidebar from '@/components/AdminSidebar';
import AdminDashboard from '@/pages/AdminDashboard';
import AdminOverview from '@/pages/admin/AdminOverview';
import AdminUsers from '@/pages/admin/AdminUsers';
import AdminDealers from '@/pages/admin/AdminDealers';
import AdminDealerDetails from '@/pages/admin/AdminDealerDetails';
import AdminVehicles from '@/pages/admin/AdminVehicles';
import AdminServices from '@/pages/admin/AdminServices';
import AdminAnalytics from '@/pages/admin/AdminAnalytics';
import AdminApprovals from '@/pages/admin/AdminApprovals';
import AdminCommunity from '@/pages/admin/AdminCommunity';
import AdminContent from '@/pages/admin/AdminContent';
import AdminRoles from '@/pages/admin/AdminRoles';
import AdminSecurity from '@/pages/admin/AdminSecurity';
import AdminSystem from '@/pages/admin/AdminSystem';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<VehicleDetail />} />
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/dealers/:id" element={<DealerDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/product/:id" element={<ProductDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:id" element={<QuestionDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/edit-vehicle/:id" element={<EditVehicle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/dealer-application" element={<DealerApplication />} />
          <Route path="/service-application" element={<ServiceApplication />} />
          <Route path="/dealer-dashboard" element={<DealerDashboard />} />
          <Route path="/service-dashboard" element={<ServiceDashboard />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminDashboard />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
