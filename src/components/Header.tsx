
import React from "react";
import { Search, Bell, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Downloads", path: "/downloads" },
    { label: "Clips", path: "/clips" },
    { label: "Comunidade", path: "/community" },
    { label: "Perfil", path: "/profile" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 glass-effect border-b border-white/10 py-3">
      <div className="container-padding flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Sidebar Trigger - apenas no desktop */}
          <div className="hidden lg:block">
            <SidebarTrigger className="text-unico-light hover:bg-unico-blue/10" />
          </div>
          
          <h1 className="text-2xl font-bold text-unico-light">
            <span className="text-unico-blue">UNICO</span> IA
          </h1>

          {/* Navigation Menu - apenas no desktop e tablets */}
          <div className="hidden md:block lg:hidden">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <Link to={item.path}>
                      <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} ${
                          currentPath === item.path 
                            ? "bg-unico-blue/20 text-unico-blue" 
                            : "text-unico-light hover:bg-unico-blue/10"
                        }`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-unico-light hover:bg-unico-blue/10">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-unico-light hover:bg-unico-blue/10 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 bg-unico-blue text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
