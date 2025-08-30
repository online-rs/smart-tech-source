import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      name: "Kit SmartHome Pro - Hub + Lâmpadas + Tomadas Inteligentes",
      price: "R$ 299,90",
      originalPrice: "R$ 399,90",
      rating: 4.8,
      reviewCount: 1247,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
      category: "Casa Inteligente",
      description: "Kit completo para automação residencial com controle via app e assistente de voz.",
      features: [
        "Hub central com Wi-Fi 6",
        "4 lâmpadas LED smart RGB",
        "3 tomadas inteligentes",
        "App para iOS e Android"
      ]
    },
    {
      name: "Fone ProSound X5 - Cancelamento de Ruído Ativo",
      price: "R$ 189,90",
      originalPrice: "R$ 249,90",
      rating: 4.6,
      reviewCount: 892,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
      category: "Gadgets",
      description: "Fone premium com cancelamento ativo de ruído e bateria de até 30 horas.",
      features: [
        "Cancelamento ativo de ruído",
        "Bateria de 30h de reprodução",
        "Bluetooth 5.2 multipoint",
        "Microfone com IA para chamadas"
      ]
    },
    {
      name: "Câmera Guardiã 360 - Segurança Inteligente",
      price: "R$ 159,90",
      originalPrice: "R$ 199,90",
      rating: 4.7,
      reviewCount: 643,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center",
      category: "Casa Inteligente",
      description: "Câmera de segurança com rotação 360°, visão noturna e detecção inteligente.",
      features: [
        "Rotação 360° e inclinação 90°",
        "Resolução Full HD 1080p",
        "Visão noturna infravermelha",
        "Detecção de movimento IA"
      ]
    },
    {
      name: "Mesa ErgoDesk Ajustável - Home Office Premium",
      price: "R$ 899,90",
      originalPrice: "R$ 1.199,90",
      rating: 4.9,
      reviewCount: 356,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
      category: "Home Office",
      description: "Mesa ergonômica com ajuste elétrico de altura e superfície anti-reflexo.",
      features: [
        "Ajuste elétrico de altura",
        "Superfície 120x60cm",
        "Painel de controle touch",
        "Cabo management integrado"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos em 
            <span className="bg-gradient-tech bg-clip-text text-transparent"> Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleção especial dos melhores produtos de tecnologia com ofertas exclusivas e reviews detalhados.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="default" size="lg" className="group">
            Ver Todos os Produtos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;