import { Button } from "@/components/ui/button";
import { 
  Home, 
  Smartphone, 
  Monitor, 
  Headphones, 
  Camera, 
  Gamepad2, 
  Laptop, 
  Speaker,
  ArrowRight 
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Casa Inteligente",
      icon: Home,
      description: "Automação, hubs, lâmpadas e sensores",
      productCount: "150+ produtos",
      gradient: "bg-gradient-tech"
    },
    {
      name: "Smartphones",
      icon: Smartphone,
      description: "Celulares, acessórios e proteção",
      productCount: "200+ produtos",
      gradient: "bg-gradient-smart"
    },
    {
      name: "Monitores",
      icon: Monitor,
      description: "Monitores gamers, 4K e ultrawide",
      productCount: "80+ produtos",
      gradient: "bg-gradient-tech"
    },
    {
      name: "Fones de Ouvido",
      icon: Headphones,
      description: "Bluetooth, com fio e gaming",
      productCount: "120+ produtos",
      gradient: "bg-gradient-smart"
    },
    {
      name: "Câmeras",
      icon: Camera,
      description: "Segurança, webcams e fotografia",
      productCount: "60+ produtos",
      gradient: "bg-gradient-tech"
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Consoles, periféricos e acessórios",
      productCount: "90+ produtos",
      gradient: "bg-gradient-smart"
    },
    {
      name: "Notebooks",
      icon: Laptop,
      description: "Laptops, ultrabooks e gaming",
      productCount: "70+ produtos",
      gradient: "bg-gradient-tech"
    },
    {
      name: "Audio",
      icon: Speaker,
      description: "Caixas de som, soundbars e hi-fi",
      productCount: "85+ produtos",
      gradient: "bg-gradient-smart"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore por 
            <span className="bg-gradient-smart bg-clip-text text-transparent"> Categoria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que procura navegando pelas categorias especializadas de tecnologia.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border rounded-xl p-6 hover:shadow-tech transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 ${category.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                <p className="text-xs font-medium text-primary">
                  {category.productCount}
                </p>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todas as Categorias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;