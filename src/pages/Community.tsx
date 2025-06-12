
import React from "react";
import { Users, Heart, MessageCircle, Share2, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ResponsiveLayout from "@/components/ResponsiveLayout";

const communityPosts = [
  {
    id: "post1",
    author: "Rafael Oliveira",
    authorRole: "Empreendedor Digital",
    authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
    timeAgo: "2h atrás",
    content: "Acabei de implementar a solução de atendimento automatizado da UNICO IA e os resultados foram impressionantes! Reduzimos o tempo de resposta em 70% e aumentamos a satisfação dos clientes.",
    likes: 47,
    comments: 8,
    shares: 5,
    hasFeaturedImage: false
  },
  {
    id: "post2",
    author: "Amanda Costa",
    authorRole: "Marketing Digital",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
    timeAgo: "5h atrás",
    content: "Pessoal, alguém já testou o novo recurso de geração de imagens da plataforma? Estou pensando em utilizá-lo para a campanha do próximo mês.",
    likes: 23,
    comments: 15,
    shares: 2,
    hasFeaturedImage: true,
    featuredImage: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "post3",
    author: "Carlos Mendonça",
    authorRole: "E-commerce",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    timeAgo: "1d atrás",
    content: "Estou organizando um meetup sobre IA aplicada a pequenos negócios na próxima semana em São Paulo. Quem tiver interesse, comente abaixo que envio mais informações!",
    likes: 68,
    comments: 34,
    shares: 12,
    hasFeaturedImage: false,
    eventDate: "28/05/2025"
  },
  {
    id: "post4",
    author: "Juliana Silveira",
    authorRole: "Startup Founder",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    timeAgo: "2d atrás",
    content: "Acabei de finalizar o curso de Marketing Digital Avançado aqui na plataforma. Super recomendo! O módulo sobre SEO mudou completamente minha estratégia.",
    likes: 42,
    comments: 7,
    shares: 3,
    hasFeaturedImage: false
  },
];

const Community = () => {
  return (
    <ResponsiveLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <Users className="h-16 w-16 text-unico-blue mb-4" />
          <h1 className="text-2xl font-bold text-unico-light">Comunidade</h1>
          <p className="text-unico-silver text-center mt-2 max-w-sm">
            Conecte-se com outros empreendedores e compartilhe experiências.
          </p>
        </div>

        <div className="mb-4">
          <Card className="bg-unico-darkblue/60 border border-unico-blue/20 rounded-xl overflow-hidden">
            <CardContent className="p-3">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-unico-blue/20 text-unico-light">EU</AvatarFallback>
                </Avatar>
                <div className="flex-1 bg-unico-darkblue/80 rounded-full px-4 py-2 border border-unico-blue/10">
                  <p className="text-unico-silver text-sm">Compartilhe algo com a comunidade...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <ScrollArea className="h-[55vh] w-full">
          <div className="space-y-4">
            {communityPosts.map((post) => (
              <Card key={post.id} className="bg-unico-darkblue/60 border border-unico-blue/20 rounded-xl overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <Avatar className="h-12 w-12 rounded-full border border-unico-blue/20">
                      <AvatarImage src={post.authorImage} alt={post.author} className="object-cover" />
                      <AvatarFallback className="bg-unico-blue/20 text-unico-light">{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-unico-light">{post.author}</h3>
                      <div className="flex items-center text-unico-silver">
                        <p className="text-xs">{post.authorRole}</p>
                        <span className="mx-1.5">•</span>
                        <p className="text-xs">{post.timeAgo}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-unico-light mb-3">{post.content}</p>
                  
                  {post.hasFeaturedImage && (
                    <div className="mb-3 rounded-lg overflow-hidden">
                      <img src={post.featuredImage} alt="Post content" className="w-full h-48 object-cover" />
                    </div>
                  )}

                  {post.eventDate && (
                    <div className="mb-3 flex items-center bg-unico-blue/10 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-unico-blue mr-2" />
                      <span className="text-sm text-unico-light">Evento: {post.eventDate}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-0 border-t border-unico-blue/10">
                  <div className="w-full grid grid-cols-3">
                    <Button variant="ghost" className="flex items-center justify-center py-2 text-unico-silver hover:bg-unico-blue/10 rounded-none">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-xs">{post.likes}</span>
                    </Button>
                    <Button variant="ghost" className="flex items-center justify-center py-2 text-unico-silver hover:bg-unico-blue/10 rounded-none">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-xs">{post.comments}</span>
                    </Button>
                    <Button variant="ghost" className="flex items-center justify-center py-2 text-unico-silver hover:bg-unico-blue/10 rounded-none">
                      <Share2 className="h-4 w-4 mr-1" />
                      <span className="text-xs">{post.shares}</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </ResponsiveLayout>
  );
};

export default Community;
