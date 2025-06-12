
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trainings = [
  {
    id: "ai-intro",
    title: "Introdução à Inteligência Artificial",
    instructor: "Ricardo Silva",
    progress: 65,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "digital-marketing",
    title: "Marketing Digital Avançado",
    instructor: "Ana Costa",
    progress: 32,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "automation",
    title: "Automação de Processos",
    instructor: "Carlos Mendes",
    progress: 89,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=100&q=80",
  },
];

const MyTrainingsSection = () => {
  return (
    <section className="mb-24">
      <div className="px-4">
        <h2 className="text-xl font-semibold text-unico-light mb-4">Meus Treinamentos</h2>
        
        <Carousel className="w-full max-w-full">
          <div className="relative">
            <CarouselContent className="py-2 -ml-2 md:-ml-4">
              {trainings.map((training) => (
                <CarouselItem key={training.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="bg-card border border-unico-blue/20 hover:border-unico-blue/40 rounded-xl overflow-hidden transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center p-3">
                        <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-lg border border-unico-blue/20 flex-shrink-0">
                          <AvatarImage src={training.image} alt={training.instructor} className="object-cover" />
                          <AvatarFallback className="bg-unico-blue/20 text-unico-light text-xs">{training.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3 flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-unico-light line-clamp-2">{training.title}</h3>
                          <p className="text-xs text-unico-silver mt-1 truncate">{training.instructor}</p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-unico-silver">Progresso</span>
                              <span className="text-xs text-unico-light">{training.progress}%</span>
                            </div>
                            <Progress value={training.progress} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-2 mt-2">
              <CarouselPrevious className="relative static h-8 w-8 translate-y-0 left-0 rounded-full bg-unico-blue/20 hover:bg-unico-blue/40 text-unico-light">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="relative static h-8 w-8 translate-y-0 right-0 rounded-full bg-unico-blue/20 hover:bg-unico-blue/40 text-unico-light">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </div>
            
            <div className="flex justify-center gap-1 my-2">
              {[...Array(Math.min(3, Math.ceil(trainings.length / 2)))].map((_, i) => (
                <div key={i} className="h-1 w-6 rounded-full bg-unico-blue/20" />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default MyTrainingsSection;
