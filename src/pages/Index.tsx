
import React from "react";
import Header from "@/components/Header";
import CampaignCarousel from "@/components/CampaignCarousel";
import FreeAccessSection from "@/components/FreeAccessSection";
import SolutionsSection from "@/components/SolutionsSection";
import MyTrainingsSection from "@/components/MyTrainingsSection";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-unico-dark">
      <Header />
      <div className="container mx-auto pt-16 pb-4">
        <CampaignCarousel />
        <FreeAccessSection />
        <SolutionsSection />
        <MyTrainingsSection />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Index;
