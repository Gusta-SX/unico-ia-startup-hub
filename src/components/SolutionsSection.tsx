
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: "content",
    title: "Criação de Conteúdo",
    description: "Textos, imagens e vídeos otimizados para conversão",
    icon: "✍️",
  },
  {
    id: "automation",
    title: "Automação de Atendimento",
    description: "Chatbots inteligentes para suporte 24/7",
    icon: "🤖",
  },
  {
    id: "crm",
    title: "CRMs",
    description: "Gestão completa do relacionamento com clientes",
    icon: "📊",
  },
  {
    id: "traffic",
    title: "Gestão de Tráfego",
    description: "Estratégias para atrair visitantes qualificados",
    icon: "🚦",
  },
  {
    id: "landing",
    title: "Landing Pages",
    description: "Páginas de alta conversão para suas campanhas",
    icon: "🏬",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Soluções completas para lojas virtuais",
    icon: "🛒",
  },
];

const SolutionsSection = () => {
  return (
    <section className="mb-8">
      <div className="container-padding">
        <h2 className="text-xl font-semibold text-unico-light mb-4">Soluções e Produtos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {solutions.map((solution) => (
            <Card key={solution.id} className="bg-card border border-unico-blue/20 rounded-xl overflow-hidden h-[180px] flex flex-col">
              <CardContent className="p-4 flex-1">
                <div className="text-2xl mb-2">{solution.icon}</div>
                <h3 className="text-md font-medium text-unico-light">{solution.title}</h3>
                <p className="text-xs text-unico-silver mt-1 line-clamp-2">{solution.description}</p>
              </CardContent>
              <CardFooter className="p-3 pt-0 border-t border-unico-blue/10">
                <Button 
                  className="w-full text-xs h-8 bg-unico-blue/20 hover:bg-unico-blue text-unico-light" 
                  variant="secondary"
                >
                  Contratar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
