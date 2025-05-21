
import React from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Film } from "lucide-react";

const Clips = () => {
  return (
    <div className="min-h-screen bg-unico-dark">
      <Header />
      <div className="container mx-auto pt-24 pb-20 flex flex-col items-center justify-center">
        <Film className="h-16 w-16 text-unico-blue mb-4" />
        <h1 className="text-2xl font-bold text-unico-light">Clips</h1>
        <p className="text-unico-silver text-center mt-4 max-w-sm">
          Assista a pequenos vídeos e tutoriais sobre nossos produtos e soluções.
        </p>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Clips;
