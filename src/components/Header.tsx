
import React from "react";
import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 glass-effect border-b border-white/10 py-3">
      <div className="container-padding flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-unico-light">
            <span className="text-unico-blue">UNICO</span> IA
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-unico-light">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-unico-light">
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
