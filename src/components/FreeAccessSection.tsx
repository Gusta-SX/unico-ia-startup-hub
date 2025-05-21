
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const freeAccessItems = [
  {
    id: "podcasts",
    title: "Podcasts",
    description: "Dicas e entrevistas sobre negócios e tecnologia",
    icon: "🎙️",
  },
  {
    id: "story",
    title: "Nossa História",
    description: "Como a UNICO IA está transformando o mercado",
    icon: "📖",
  },
  {
    id: "videos",
    title: "Vídeos Introdutórios",
    description: "Conteúdo essencial para iniciantes em IA",
    icon: "🎬",
  },
];

const FreeAccessSection = () => {
  return (
    <section className="mb-8">
      <div className="container-padding">
        <h2 className="text-xl font-semibold text-unico-light mb-4">Acesso Gratuito</h2>
        
        <Carousel className="w-full">
          <div className="relative">
            <CarouselContent className="py-4">
              {freeAccessItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-unico-darkblue/60 border border-unico-blue/20 hover:border-unico-blue/40 rounded-xl overflow-hidden card-shadow h-full transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center h-full">
                        <div className="p-4 text-3xl bg-unico-blue/10 h-full flex items-center justify-center">
                          <span>{item.icon}</span>
                        </div>
                        <div className="flex-1 p-4">
                          <h3 className="text-lg font-medium text-unico-light">{item.title}</h3>
                          <p className="text-sm text-unico-silver mt-1">{item.description}</p>
                        </div>
                        <div className="p-4">
                          <button className="h-8 w-8 rounded-full bg-unico-blue/20 flex items-center justify-center text-unico-light hover:bg-unico-blue/40 transition-colors">
                            <ArrowRight className="h-4 w-4" />
                          </button>
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
              {[...Array(Math.min(3, Math.ceil(freeAccessItems.length / 2)))].map((_, i) => (
                <div key={i} className="h-1 w-6 rounded-full bg-unico-blue/20" />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FreeAccessSection;
