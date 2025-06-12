
import React from "react";
import { Home, Download, Film, Users, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
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
    // Apenas aparece no mobile (md:hidden)
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-card border-t border-unico-blue/20 glass-effect md:hidden">
      <div className="grid h-full grid-cols-5">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`bottom-tab-icon p-1 ${
              currentPath === item.path ? "text-unico-blue" : "text-unico-silver"
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
