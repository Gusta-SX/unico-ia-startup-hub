import React from "react";
import CampaignCarousel from "@/components/CampaignCarousel";
import FreeAccessSection from "@/components/FreeAccessSection";
import SolutionsSection from "@/components/SolutionsSection";
import MyTrainingsSection from "@/components/MyTrainingsSection";
import ResponsiveLayout from "@/components/ResponsiveLayout";
const Index = () => {
  return <ResponsiveLayout>
      <div className="container mx-auto px-4 py-4 w-50">
        <CampaignCarousel />
        <FreeAccessSection />
        <SolutionsSection />
        <MyTrainingsSection />
      </div>
    </ResponsiveLayout>;
};
export default Index;