
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Server, 
  Database, 
  Settings, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download,
  Upload,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Activity
} from 'lucide-react';

const AdminSystem = () => {
  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    autoBackup: true,
    emailNotifications: true,
    debugMode: false,
    apiRateLimit: 1000,
    sessionTimeout: 30,
    maxFileSize: 10
  });

  // Mock system data
  const systemHealth = {
    status: 'healthy',
    uptime: '15 days, 8 hours',
    responseTime: '125ms',
    errorRate: '0.02%',
    activeUsers: 1247
  };

  const serverMetrics = {
    cpu: 45,
    memory: 68,
    disk: 72,
    network: 23
  };

  const services = [
    { name: 'Web Server', status: 'running', version: '2.4.1', port: 80 },
    { name: 'Database', status: 'running', version: '8.0.32', port: 3306 },
    { name: 'Redis Cache', status: 'running', version: '7.0.5', port: 6379 },
    { name: 'Email Service', status: 'running', version: '1.2.3', port: 587 },
    { name: 'File Storage', status: 'warning', version: '3.1.0', port: 9000 }
  ];

  const backups = [
    { id: '1', name: 'Full System Backup', date: '2024-01-22 02:00', size: '2.3 GB', status: 'completed' },
    { id: '2', name: 'Database Backup', date: '2024-01-21 02:00', size: '850 MB', status: 'completed' },
    { id: '3', name: 'Full System Backup', date: '2024-01-20 02:00', size: '2.1 GB', status: 'completed' },
    { id: '4', name: 'Database Backup', date: '2024-01-19 02:00', size: '820 MB', status: 'failed' }
  ];

  const logs = [
    { level: 'info', message: 'User authentication successful', timestamp: '2024-01-22 14:30:15', source: 'auth' },
    { level: 'warning', message: 'High memory usage detected', timestamp: '2024-01-22 14:25:10', source: 'system' },
    { level: 'error', message: 'Failed to connect to external API', timestamp: '2024-01-22 14:20:05', source: 'api' },
    { level: 'info', message: 'Scheduled backup completed', timestamp: '2024-01-22 02:00:00', source: 'backup' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'running':
      case 'healthy':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLogLevelColor = (level) => {
    switch (level) {
      case 'info':
        return 'text-blue-600';
      case 'warning':
        return 'text-yellow-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const handleSettingChange = (key, value) => {
    setSystemSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">System Settings</h1>
          <p className="text-gray-600">Monitor and configure system-wide settings</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Logs
          </Button>
        </div>
      </div>

      {/* System Health Alert */}
      {systemHealth.status === 'warning' && (
        <Alert className="mb-6 border-yellow-200 bg-yellow-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            System performance is degraded. Check server metrics for details.
          </AlertDescription>
        </Alert>
      )}

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">System Status</p>
                <p className="text-2xl font-bold text-green-800 capitalize">{systemHealth.status}</p>
                <p className="text-xs text-green-600 mt-1">Uptime: {systemHealth.uptime}</p>
              </div>
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Response Time</p>
                <p className="text-2xl font-bold text-blue-800">{systemHealth.responseTime}</p>
                <p className="text-xs text-blue-600 mt-1">Average last hour</p>
              </div>
              <Activity className="h-10 w-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Active Users</p>
                <p className="text-2xl font-bold text-purple-800">{systemHealth.activeUsers}</p>
                <p className="text-xs text-purple-600 mt-1">Currently online</p>
              </div>
              <Network className="h-10 w-10 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700">Error Rate</p>
                <p className="text-2xl font-bold text-yellow-800">{systemHealth.errorRate}</p>
                <p className="text-xs text-yellow-600 mt-1">Last 24 hours</p>
              </div>
              <AlertTriangle className="h-10 w-10 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Management Tabs */}
      <Tabs defaultValue="settings" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="settings" className="flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="flex items-center">
            <Activity className="h-4 w-4 mr-2" />
            Monitoring
          </TabsTrigger>
          <TabsTrigger value="services" className="flex items-center">
            <Server className="h-4 w-4 mr-2" />
            Services
          </TabsTrigger>
          <TabsTrigger value="backups" className="flex items-center">
            <Database className="h-4 w-4 mr-2" />
            Backups
          </TabsTrigger>
          <TabsTrigger value="logs" className="flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="maintenance">Maintenance Mode</Label>
                    <p className="text-sm text-gray-600">Enable to put the system in maintenance mode</p>
                  </div>
                  <Switch
                    id="maintenance"
                    checked={systemSettings.maintenanceMode}
                    onCheckedChange={(checked) => handleSettingChange('maintenanceMode', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="autoBackup">Auto Backup</Label>
                    <p className="text-sm text-gray-600">Automatically backup system daily</p>
                  </div>
                  <Switch
                    id="autoBackup"
                    checked={systemSettings.autoBackup}
                    onCheckedChange={(checked) => handleSettingChange('autoBackup', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-gray-600">Send system alerts via email</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={systemSettings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="debugMode">Debug Mode</Label>
                    <p className="text-sm text-gray-600">Enable detailed logging and debugging</p>
                  </div>
                  <Switch
                    id="debugMode"
                    checked={systemSettings.debugMode}
                    onCheckedChange={(checked) => handleSettingChange('debugMode', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="apiRateLimit">API Rate Limit (requests/hour)</Label>
                  <Input
                    id="apiRateLimit"
                    type="number"
                    value={systemSettings.apiRateLimit}
                    onChange={(e) => handleSettingChange('apiRateLimit', parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={systemSettings.sessionTimeout}
                    onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="maxFileSize">Max File Upload Size (MB)</Label>
                  <Input
                    id="maxFileSize"
                    type="number"
                    value={systemSettings.maxFileSize}
                    onChange={(e) => handleSettingChange('maxFileSize', parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div className="pt-4">
                  <Button className="w-full">Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="monitoring" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Server Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm font-medium">CPU Usage</span>
                    </div>
                    <span className="text-sm text-gray-600">{serverMetrics.cpu}%</span>
                  </div>
                  <Progress value={serverMetrics.cpu} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <MemoryStick className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm font-medium">Memory Usage</span>
                    </div>
                    <span className="text-sm text-gray-600">{serverMetrics.memory}%</span>
                  </div>
                  <Progress value={serverMetrics.memory} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 mr-2 text-yellow-600" />
                      <span className="text-sm font-medium">Disk Usage</span>
                    </div>
                    <span className="text-sm text-gray-600">{serverMetrics.disk}%</span>
                  </div>
                  <Progress value={serverMetrics.disk} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Network className="h-4 w-4 mr-2 text-purple-600" />
                      <span className="text-sm font-medium">Network Usage</span>
                    </div>
                    <span className="text-sm text-gray-600">{serverMetrics.network}%</span>
                  </div>
                  <Progress value={serverMetrics.network} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-800">8</p>
                      <p className="text-sm text-blue-600">CPU Cores</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-800">32 GB</p>
                      <p className="text-sm text-green-600">Total RAM</p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <p className="text-2xl font-bold text-yellow-800">500 GB</p>
                      <p className="text-sm text-yellow-600">Storage</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-800">1 Gbps</p>
                      <p className="text-sm text-purple-600">Bandwidth</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Server className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-gray-600">v{service.version} • Port {service.port}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(service.status)}>
                        {service.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backups" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>System Backups</CardTitle>
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Create Backup
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {backups.map((backup) => (
                  <div key={backup.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Database className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{backup.name}</h3>
                        <p className="text-sm text-gray-600">{backup.date} • {backup.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(backup.status)}>
                        {backup.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>System Logs</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {logs.map((log, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 border rounded-lg hover:bg-gray-50">
                    <Badge className={`${getLogLevelColor(log.level)} bg-transparent border-current`}>
                      {log.level}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-sm">{log.message}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                        <span>{log.timestamp}</span>
                        <span>•</span>
                        <span>{log.source}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSystem;
