
import React from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { User, Settings, Calendar, ArrowRight, Trophy, BookOpen, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="min-h-screen bg-unico-dark">
      <Header />
      <div className="container mx-auto pt-20 pb-20 px-4">
        {/* Hero Section - Responsivo */}
        <div className="flex flex-col items-center mb-8 text-center">
          <Avatar className="h-20 w-20 md:h-24 md:w-24 mb-4 ring-2 ring-unico-blue/30">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80" />
            <AvatarFallback className="bg-unico-blue text-unico-light text-lg">JS</AvatarFallback>
          </Avatar>
          <h1 className="text-xl md:text-2xl font-bold text-unico-light">João Silva</h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="px-3 py-1 bg-gradient-to-r from-unico-blue/20 to-purple-600/20 rounded-full border border-unico-blue/30">
              <span className="text-unico-light text-sm font-medium">Plano Premium</span>
            </div>
          </div>
          <p className="text-unico-silver text-sm mt-2 max-w-md">
            Membro desde março de 2024 • Transformando negócios com IA
          </p>
        </div>

        {/* Stats Cards - Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="bg-unico-darkblue/60 border border-unico-blue/20 rounded-xl overflow-hidden">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-unico-blue mx-auto mb-2" />
              <h3 className="text-lg font-bold text-unico-light">12</h3>
              <p className="text-xs text-unico-silver">Cursos Concluídos</p>
            </CardContent>
          </Card>
          
          <Card className="bg-unico-darkblue/60 border border-unico-blue/20 rounded-xl overflow-hidden">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-unico-blue mx-auto mb-2" />
              <h3 className="text-lg font-bold text-unico-light">48h</h3>
              <p className="text-xs text-unico-silver">Tempo de Estudo</p>
            </CardContent>
          </Card>
          
          <Card className="bg-unico-darkblue/60 border border-unico-blue/20 rounded-xl overflow-hidden">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-unico-blue mx-auto mb-2" />
              <h3 className="text-lg font-bold text-unico-light">8</h3>
              <p className="text-xs text-unico-silver">Certificados</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu de Configurações - Melhor organizado */}
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl font-semibold text-unico-light px-2">Configurações da conta</h2>
          
          <Card className="bg-card border border-unico-blue/20 rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y divide-unico-blue/10">
                <div className="flex items-center justify-between p-4 hover:bg-unico-blue/5 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <div className="p-2 bg-unico-blue/10 rounded-lg mr-4">
                      <User className="h-5 w-5 text-unico-blue" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-unico-light">Dados pessoais</span>
                      <p className="text-xs text-unico-silver mt-0.5">Gerencie suas informações</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-unico-silver" />
                </div>
                
                <div className="flex items-center justify-between p-4 hover:bg-unico-blue/5 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <div className="p-2 bg-unico-blue/10 rounded-lg mr-4">
                      <Settings className="h-5 w-5 text-unico-blue" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-unico-light">Preferências</span>
                      <p className="text-xs text-unico-silver mt-0.5">Notificações e privacidade</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-unico-silver" />
                </div>
                
                <div className="flex items-center justify-between p-4 hover:bg-unico-blue/5 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <div className="p-2 bg-unico-blue/10 rounded-lg mr-4">
                      <Calendar className="h-5 w-5 text-unico-blue" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-unico-light">Assinatura</span>
                      <p className="text-xs text-unico-silver mt-0.5">Plano Premium ativo</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-unico-silver" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ações Rápidas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-unico-blue/10 to-purple-600/10 border border-unico-blue/20 rounded-xl overflow-hidden">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-unico-light mb-2">Suporte</h3>
                <p className="text-xs text-unico-silver mb-3">Precisa de ajuda? Entre em contato</p>
                <button className="w-full bg-unico-blue/20 hover:bg-unico-blue/30 text-unico-light px-4 py-2 rounded-lg text-sm transition-colors">
                  Falar com Suporte
                </button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-600/10 to-unico-blue/10 border border-unico-blue/20 rounded-xl overflow-hidden">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-unico-light mb-2">Indicar Amigos</h3>
                <p className="text-xs text-unico-silver mb-3">Ganhe benefícios exclusivos</p>
                <button className="w-full bg-unico-blue/20 hover:bg-unico-blue/30 text-unico-light px-4 py-2 rounded-lg text-sm transition-colors">
                  Compartilhar Link
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;
