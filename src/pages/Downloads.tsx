
import React from "react";
import { Download, FileType, FileText, FileImage, File, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import ResponsiveLayout from "@/components/ResponsiveLayout";

const downloadItems = [
  {
    id: "ebook1",
    title: "Guia de IA para Pequenas Empresas",
    type: "E-book",
    size: "4.2 MB",
    date: "14/05/2025",
    icon: <FileText className="h-10 w-10 text-unico-blue" />,
    progress: 100,
  },
  {
    id: "presentation1",
    title: "Apresentação: Transformação Digital 2025",
    type: "Apresentação",
    size: "12.8 MB",
    date: "10/05/2025",
    icon: <FileType className="h-10 w-10 text-unico-blue" />,
    progress: 100,
  },
  {
    id: "worksheet1",
    title: "Planilha de Análise de Mercado",
    type: "Planilha",
    size: "1.5 MB",
    date: "05/05/2025",
    icon: <File className="h-10 w-10 text-unico-blue" />,
    progress: 100,
  },
  {
    id: "template1",
    title: "Template de Instagram para Negócios",
    type: "Imagem",
    size: "8.7 MB",
    date: "01/05/2025",
    icon: <FileImage className="h-10 w-10 text-unico-blue" />,
    progress: 100,
  },
  {
    id: "video1",
    title: "Webinar: Estratégias de Vendas Online",
    type: "Vídeo",
    size: "256 MB",
    date: "20/04/2025",
    icon: <Play className="h-10 w-10 text-unico-blue" />,
    progress: 65,
  },
];

const Downloads = () => {
  return (
    <ResponsiveLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <Download className="h-16 w-16 text-unico-blue mb-4" />
          <h1 className="text-2xl font-bold text-unico-light">Downloads</h1>
          <p className="text-unico-silver text-center mt-2 max-w-sm">
            Aqui você encontrará todos os seus materiais baixados para acesso offline.
          </p>
        </div>

        <ScrollArea className="h-[60vh] w-full">
          <div className="space-y-4">
            {downloadItems.map((item) => (
              <Card key={item.id} className="bg-unico-darkblue/60 border border-unico-blue/20 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className="p-4 bg-unico-blue/10 h-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="text-md font-medium text-unico-light">{item.title}</h3>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-unico-silver">{item.type} • {item.size}</span>
                        <span className="text-xs text-unico-silver">{item.date}</span>
                      </div>
                      {item.progress < 100 && (
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-unico-silver">Baixando...</span>
                            <span className="text-xs text-unico-light">{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className="h-1.5" />
                        </div>
                      )}
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

export default Downloads;
