
import React from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Download } from "lucide-react";

const Downloads = () => {
  return (
    <div className="min-h-screen bg-unico-dark">
      <Header />
      <div className="container mx-auto pt-24 pb-20 flex flex-col items-center justify-center">
        <Download className="h-16 w-16 text-unico-blue mb-4" />
        <h1 className="text-2xl font-bold text-unico-light">Downloads</h1>
        <p className="text-unico-silver text-center mt-4 max-w-sm">
          Aqui você encontrará todos os seus materiais baixados para acesso offline.
        </p>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Downloads;
