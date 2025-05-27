
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminContent = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Content Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Content Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Content management functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContent;
