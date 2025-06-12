
import React from "react";
import { Home, Download, Film, Users, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      label: "Início",
      icon: Home,
      path: "/",
    },
    {
      label: "Downloads",
      icon: Download,
      path: "/downloads",
    },
    {
      label: "Clips",
      icon: Film,
      path: "/clips",
    },
    {
      label: "Comunidade",
      icon: Users,
      path: "/community",
    },
    {
      label: "Perfil",
      icon: User,
      path: "/profile",
    },
  ];

  return (
    <Sidebar className="border-r border-unico-blue/20">
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-bold text-unico-light">
          <span className="text-unico-blue">UNICO</span> IA
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton 
                    asChild
                    isActive={currentPath === item.path}
                    className={`w-full justify-start text-left p-3 rounded-lg transition-colors ${
                      currentPath === item.path 
                        ? "bg-unico-blue/20 text-unico-blue border border-unico-blue/30" 
                        : "text-unico-silver hover:bg-unico-blue/10 hover:text-unico-light"
                    }`}
                  >
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
