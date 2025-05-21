
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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
        <div className="grid grid-cols-1 gap-4">
          {freeAccessItems.map((item) => (
            <Card key={item.id} className="bg-unico-darkblue/60 border border-unico-blue/20 rounded-xl overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="flex items-center">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeAccessSection;
