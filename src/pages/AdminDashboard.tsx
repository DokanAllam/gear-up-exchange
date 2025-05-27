
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/AdminSidebar';
import AdminOverview from '@/pages/admin/AdminOverview';
import AdminUsers from '@/pages/admin/AdminUsers';
import AdminVehicles from '@/pages/admin/AdminVehicles';
import AdminDealers from '@/pages/admin/AdminDealers';
import AdminServices from '@/pages/admin/AdminServices';
import AdminApprovals from '@/pages/admin/AdminApprovals';
import AdminCommunity from '@/pages/admin/AdminCommunity';
import AdminAnalytics from '@/pages/admin/AdminAnalytics';
import AdminContent from '@/pages/admin/AdminContent';
import AdminRoles from '@/pages/admin/AdminRoles';
import AdminSecurity from '@/pages/admin/AdminSecurity';
import AdminSystem from '@/pages/admin/AdminSystem';

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            </div>
          </header>
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<AdminOverview />} />
              <Route path="/users" element={<AdminUsers />} />
              <Route path="/vehicles" element={<AdminVehicles />} />
              <Route path="/dealers" element={<AdminDealers />} />
              <Route path="/services" element={<AdminServices />} />
              <Route path="/approvals" element={<AdminApprovals />} />
              <Route path="/community" element={<AdminCommunity />} />
              <Route path="/analytics" element={<AdminAnalytics />} />
              <Route path="/content" element={<AdminContent />} />
              <Route path="/roles" element={<AdminRoles />} />
              <Route path="/security" element={<AdminSecurity />} />
              <Route path="/system" element={<AdminSystem />} />
            </Routes>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
