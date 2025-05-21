
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const solutions = [
  {
    id: "content",
    title: "Criação de Conteúdo",
    description: "Textos, imagens e vídeos otimizados para conversão",
    icon: "✍️",
    price: "R$ 1.200,00",
    details: "Nossa equipe de especialistas vai criar conteúdo otimizado para aumentar suas conversões. Incluímos textos persuasivos, imagens profissionais e vídeos de alta qualidade.",
    demoLink: "https://exemplo.unicoia.com/conteudo"
  },
  {
    id: "automation",
    title: "Automação de Atendimento",
    description: "Chatbots inteligentes para suporte 24/7",
    icon: "🤖",
    price: "R$ 1.800,00",
    details: "Implemente chatbots inteligentes que respondem automaticamente às dúvidas mais comuns dos seus clientes, 24 horas por dia, 7 dias por semana.",
    demoLink: "https://exemplo.unicoia.com/chatbot"
  },
  {
    id: "crm",
    title: "CRMs",
    description: "Gestão completa do relacionamento com clientes",
    icon: "📊",
    price: "R$ 2.500,00",
    details: "Sistema completo para gerenciar seu relacionamento com clientes, desde o primeiro contato até o pós-venda, aumentando a retenção e o valor médio de compra.",
    demoLink: "https://exemplo.unicoia.com/crm"
  },
  {
    id: "traffic",
    title: "Gestão de Tráfego",
    description: "Estratégias para atrair visitantes qualificados",
    icon: "🚦",
    price: "R$ 1.950,00",
    details: "Nossa estratégia de tráfego pago combina anúncios otimizados nas principais plataformas para atrair visitantes qualificados ao seu site ou loja virtual.",
    demoLink: "https://exemplo.unicoia.com/trafego"
  },
  {
    id: "landing",
    title: "Landing Pages",
    description: "Páginas de alta conversão para suas campanhas",
    icon: "🏬",
    price: "R$ 1.400,00",
    details: "Criamos páginas otimizadas para maximizar as conversões das suas campanhas, com design profissional e elementos persuasivos.",
    demoLink: "https://exemplo.unicoia.com/landing"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Soluções completas para lojas virtuais",
    icon: "🛒",
    price: "R$ 3.200,00",
    details: "Desenvolvemos sua loja virtual completa, com design atraente, funcionalidades avançadas e integração com meios de pagamento e logística.",
    demoLink: "https://exemplo.unicoia.com/ecommerce"
  },
];

const SolutionsSection = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const openModal = (solutionId: string) => {
    setSelectedSolution(solutionId);
  };

  const currentSolution = solutions.find(solution => solution.id === selectedSolution);

  return (
    <section className="mb-8">
      <div className="container-padding">
        <h2 className="text-xl font-semibold text-unico-light mb-4">Soluções e Produtos</h2>
        
        <Carousel className="w-full">
          <div className="relative">
            <CarouselContent className="py-4">
              {solutions.map((solution) => (
                <CarouselItem key={solution.id} className="md:basis-1/3 lg:basis-1/4">
                  <Card className="bg-card border border-unico-blue/20 rounded-xl overflow-hidden h-[180px] flex flex-col m-1 hover:border-unico-blue/40 transition-all duration-300">
                    <CardContent className="p-4 flex-1">
                      <div className="text-2xl mb-2">{solution.icon}</div>
                      <h3 className="text-md font-medium text-unico-light">{solution.title}</h3>
                      <p className="text-xs text-unico-silver mt-1 line-clamp-2">{solution.description}</p>
                    </CardContent>
                    <CardFooter className="p-3 pt-0 border-t border-unico-blue/10">
                      <Button 
                        className="w-full text-xs h-8 bg-unico-blue/20 hover:bg-unico-blue text-unico-light" 
                        variant="secondary"
                        onClick={() => openModal(solution.id)}
                      >
                        Contratar
                      </Button>
                    </CardFooter>
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
              {[...Array(Math.min(3, Math.ceil(solutions.length / 3)))].map((_, i) => (
                <div key={i} className="h-1 w-6 rounded-full bg-unico-blue/20" />
              ))}
            </div>
          </div>
        </Carousel>
      </div>

      {/* Solution Details Modal */}
      <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        <DialogContent className="bg-card border border-unico-blue/20 text-unico-light max-w-md">
          {currentSolution && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="text-3xl bg-unico-blue/20 h-12 w-12 rounded-lg flex items-center justify-center">
                    {currentSolution.icon}
                  </div>
                  <DialogTitle className="text-xl text-unico-light">{currentSolution.title}</DialogTitle>
                </div>
                <DialogDescription className="text-unico-silver mt-2">
                  {currentSolution.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-2 space-y-4">
                <p className="text-sm text-unico-light">{currentSolution.details}</p>
                
                <div className="bg-unico-blue/10 p-3 rounded-lg">
                  <p className="text-sm text-unico-silver">Investimento:</p>
                  <p className="text-xl font-semibold text-unico-light">{currentSolution.price}</p>
                  <p className="text-xs text-unico-silver mt-1">Pagamento único ou em até 12x</p>
                </div>
              </div>
              
              <DialogFooter className="flex gap-2 mt-4">
                <a 
                  href={currentSolution.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-unico-blue underline hover:text-opacity-80 transition-colors"
                >
                  Ver exemplo
                </a>
                <DialogClose asChild>
                  <Button variant="secondary" className="bg-unico-gray text-unico-light">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button className="bg-unico-blue text-white hover:bg-unico-blue/90">
                  Adquirir agora
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SolutionsSection;
