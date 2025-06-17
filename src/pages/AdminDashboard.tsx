
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/AdminSidebar';
import AdminOverview from './admin/AdminOverview';
import AdminUsers from './admin/AdminUsers';
import AdminVehicles from './admin/AdminVehicles';
import AdminDealers from './admin/AdminDealers';
import AdminDealerDetails from './admin/AdminDealerDetails';
import AdminServices from './admin/AdminServices';
import AdminApprovals from './admin/AdminApprovals';
import AdminCommunity from './admin/AdminCommunity';
import AdminAnalytics from './admin/AdminAnalytics';
import AdminContent from './admin/AdminContent';
import AdminRoles from './admin/AdminRoles';
import AdminSecurity from './admin/AdminSecurity';
import AdminSystem from './admin/AdminSystem';

const AdminDashboard = () => {
  console.log('AdminDashboard rendering');
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 w-full">
        <AdminSidebar />
        <main className="flex-1 w-full overflow-auto">
          <div className="w-full h-full">
            <Routes>
              <Route path="/" element={<Navigate to="/admin/overview" replace />} />
              <Route path="/overview" element={<AdminOverview />} />
              <Route path="/users" element={<AdminUsers />} />
              <Route path="/vehicles" element={<AdminVehicles />} />
              <Route path="/dealers" element={<AdminDealers />} />
              <Route path="/dealers/:id" element={<AdminDealerDetails />} />
              <Route path="/services" element={<AdminServices />} />
              <Route path="/approvals" element={<AdminApprovals />} />
              <Route path="/community" element={<AdminCommunity />} />
              <Route path="/analytics" element={<AdminAnalytics />} />
              <Route path="/content" element={<AdminContent />} />
              <Route path="/roles" element={<AdminRoles />} />
              <Route path="/security" element={<AdminSecurity />} />
              <Route path="/system" element={<AdminSystem />} />
            </Routes>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
