import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-smart-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart home technology showcase featuring IoT devices and automation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Descubra o Futuro da 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Tecnologia</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Reviews detalhados, guias de compra especializados e as melhores ofertas de produtos de 
            tecnologia, automação residencial e casa inteligente. Tudo em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Ver Melhores Produtos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Guias de Compra
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur rounded-lg border">
              <div className="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Reviews Especializados</h3>
                <p className="text-sm text-muted-foreground">Análises técnicas detalhadas</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur rounded-lg border">
              <div className="w-10 h-10 bg-gradient-smart rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Ofertas Exclusivas</h3>
                <p className="text-sm text-muted-foreground">Preços atualizados em tempo real</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur rounded-lg border">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Compra Segura</h3>
                <p className="text-sm text-muted-foreground">Direto da Amazon oficial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;