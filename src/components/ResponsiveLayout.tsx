import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";
interface ResponsiveLayoutProps {
  children: React.ReactNode;
}
const ResponsiveLayout = ({
  children
}: ResponsiveLayoutProps) => {
  return <SidebarProvider>
      <div className="min-h-screen flex w-full bg-unico-dark">
        {/* Sidebar - apenas no desktop */}
        <div className="hidden lg:block">
          <AppSidebar />
        </div>
        
        {/* Main Content */}
        <SidebarInset className="flex-1">
          <Header />
          <main className="pt-16 pb-4 md:pb-4 min-h-screen max-w-full ">
            {children}
          </main>
        </SidebarInset>
        
        {/* Bottom Navigation - apenas no mobile */}
        <BottomNavigation />
      </div>
    </SidebarProvider>;
};
export default ResponsiveLayout;