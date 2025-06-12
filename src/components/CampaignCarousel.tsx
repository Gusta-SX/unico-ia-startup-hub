
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const campaignData = [
  {
    id: 1,
    title: "Impulsione seus resultados com IA",
    description: "Descubra como nossas soluções podem transformar seu negócio",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    color: "from-unico-blue to-purple-600",
  },
  {
    id: 2,
    title: "Novos treinamentos disponíveis",
    description: "Aprenda as melhores técnicas para escalar seu negócio",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    color: "from-cyan-500 to-unico-blue",
  },
  {
    id: 3,
    title: "Automação inteligente",
    description: "Reduza custos e aumente a produtividade agora",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    color: "from-unico-darkblue to-unico-blue",
  },
];

const CampaignCarousel = () => {
  return (
    <div className="w-full mb-6 mt-4 md:mt-16 px-4">
      <Carousel className="w-full max-w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {campaignData.map((campaign) => (
            <CarouselItem key={campaign.id} className="pl-2 md:pl-4">
              <Card className="overflow-hidden rounded-xl border-0 h-40 sm:h-48">
                <div className="relative w-full h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${campaign.color} opacity-80`}></div>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${campaign.image})`, mixBlendMode: "overlay" }}
                  ></div>
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg md:text-2xl font-bold text-white leading-tight">{campaign.title}</h2>
                      <p className="text-white/80 mt-1 md:mt-2 text-sm md:text-base max-w-[90%] md:max-w-[80%]">{campaign.description}</p>
                    </div>
                    <div>
                      <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg backdrop-blur-sm transition-all text-sm md:text-base">
                        Saiba mais
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 hidden md:flex" />
        <CarouselNext className="right-2 hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default CampaignCarousel;
