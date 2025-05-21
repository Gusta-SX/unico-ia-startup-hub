
import React from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { User, Settings, Calendar, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="min-h-screen bg-unico-dark">
      <Header />
      <div className="container mx-auto pt-20 pb-20">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80" />
            <AvatarFallback className="bg-unico-blue text-unico-light">JD</AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-bold text-unico-light">João Silva</h1>
          <p className="text-unico-silver text-sm">Plano Premium</p>
        </div>

        <div className="container-padding">
          <h2 className="text-lg font-semibold text-unico-light mb-4">Configurações da conta</h2>
          
          <Card className="bg-card border border-unico-blue/20 rounded-xl overflow-hidden mb-4">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-4 border-b border-unico-blue/10">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-unico-blue mr-3" />
                  <span className="text-sm text-unico-light">Dados pessoais</span>
                </div>
                <ArrowRight className="h-4 w-4 text-unico-silver" />
              </div>
              <div className="flex items-center justify-between p-4 border-b border-unico-blue/10">
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-unico-blue mr-3" />
                  <span className="text-sm text-unico-light">Preferências</span>
                </div>
                <ArrowRight className="h-4 w-4 text-unico-silver" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-unico-blue mr-3" />
                  <span className="text-sm text-unico-light">Assinatura</span>
                </div>
                <ArrowRight className="h-4 w-4 text-unico-silver" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;
