
import React from "react";
import { Film, Play, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ResponsiveLayout from "@/components/ResponsiveLayout";

const clipItems = [
  {
    id: "clip1",
    title: "Como implementar IA no atendimento ao cliente",
    duration: "4:28",
    views: "2.3K",
    thumbnail: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?auto=format&fit=crop&w=800&q=80",
    instructor: "Maria Santos",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "clip2",
    title: "Análise de dados para pequenos negócios",
    duration: "5:15",
    views: "1.8K",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    instructor: "João Oliveira",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "clip3",
    title: "Automação de tarefas repetitivas",
    duration: "3:42",
    views: "3.1K",
    thumbnail: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80",
    instructor: "Carla Mendes",
    instructorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "clip4",
    title: "Usando ChatGPT para melhorar seu marketing",
    duration: "6:18",
    views: "4.5K",
    thumbnail: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?auto=format&fit=crop&w=800&q=80",
    instructor: "Roberto Alves",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "clip5",
    title: "Ferramentas de IA para criação de conteúdo",
    duration: "5:54",
    views: "2.7K",
    thumbnail: "https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&w=800&q=80",
    instructor: "Luciana Ferreira",
    instructorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
  },
];

const Clips = () => {
  return (
    <ResponsiveLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <Film className="h-16 w-16 text-unico-blue mb-4" />
          <h1 className="text-2xl font-bold text-unico-light">Clips</h1>
          <p className="text-unico-silver text-center mt-2 max-w-sm">
            Assista a pequenos vídeos e tutoriais sobre nossos produtos e soluções.
          </p>
        </div>

        <ScrollArea className="h-[60vh] w-full">
          <div className="space-y-4">
            {clipItems.map((clip) => (
              <Card key={clip.id} className="bg-unico-darkblue/60 border border-unico-blue/20 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div 
                      className="h-40 w-full bg-cover bg-center" 
                      style={{ backgroundImage: `url(${clip.thumbnail})` }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-unico-blue/80 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded flex items-center">
                        <Clock className="h-3 w-3 text-white mr-1" />
                        <span className="text-xs text-white">{clip.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 rounded-full border border-unico-blue/20">
                        <AvatarImage src={clip.instructorImage} alt={clip.instructor} className="object-cover" />
                        <AvatarFallback className="bg-unico-blue/20 text-unico-light">{clip.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="ml-2 flex-1">
                        <h3 className="text-sm font-medium text-unico-light line-clamp-1">{clip.title}</h3>
                        <p className="text-xs text-unico-silver mt-0.5">{clip.instructor} • {clip.views} visualizações</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </ResponsiveLayout>
  );
};

export default Clips;
