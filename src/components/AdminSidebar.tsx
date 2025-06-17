
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Users,
  Car,
  Building2,
  Wrench,
  CheckCircle,
  MessageSquare,
  BarChart3,
  FileText,
  Shield,
  Settings,
  Home
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';

const adminMenuItems = [
  {
    title: 'Dashboard',
    url: '/admin/overview',
    icon: Home
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: Users
  },
  {
    title: 'Vehicles',
    url: '/admin/vehicles',
    icon: Car
  },
  {
    title: 'Dealers',
    url: '/admin/dealers',
    icon: Building2
  },
  {
    title: 'Services',
    url: '/admin/services',
    icon: Wrench
  },
  {
    title: 'Approvals',
    url: '/admin/approvals',
    icon: CheckCircle
  },
  {
    title: 'Community',
    url: '/admin/community',
    icon: MessageSquare
  },
  {
    title: 'Analytics',
    url: '/admin/analytics',
    icon: BarChart3
  },
  {
    title: 'Content',
    url: '/admin/content',
    icon: FileText
  },
  {
    title: 'Roles',
    url: '/admin/roles',
    icon: Shield
  },
  {
    title: 'Security',
    url: '/admin/security',
    icon: Shield
  },
  {
    title: 'System',
    url: '/admin/system',
    icon: Settings
  }
];

const AdminSidebar = () => {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={active}>
                      <NavLink 
                        to={item.url} 
                        className={`flex items-center ${
                          active 
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                            : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;
