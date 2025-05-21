
import React from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Users } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-unico-dark">
      <Header />
      <div className="container mx-auto pt-24 pb-20 flex flex-col items-center justify-center">
        <Users className="h-16 w-16 text-unico-blue mb-4" />
        <h1 className="text-2xl font-bold text-unico-light">Comunidade</h1>
        <p className="text-unico-silver text-center mt-4 max-w-sm">
          Conecte-se com outros empreendedores e compartilhe experiências.
        </p>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Community;
