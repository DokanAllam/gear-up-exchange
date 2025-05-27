
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminSystem = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">System Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>System management functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSystem;
