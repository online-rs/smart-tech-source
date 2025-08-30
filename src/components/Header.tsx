import { Button } from "@/components/ui/button";
import { Search, Menu, Home, Cpu, Smartphone, Headphones } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-tech rounded-lg flex items-center justify-center">
            <Cpu className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-tech bg-clip-text text-transparent">
            Smart Tech Source
          </span>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            <span>Início</span>
          </a>
          <a href="/casa-inteligente" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
            <Cpu className="w-4 h-4" />
            <span>Casa Inteligente</span>
          </a>
          <a href="/gadgets" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
            <Smartphone className="w-4 h-4" />
            <span>Gadgets</span>
          </a>
          <a href="/reviews" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
            <Headphones className="w-4 h-4" />
            <span>Reviews</span>
          </a>
        </nav>

        {/* Search & Menu */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="search"
              placeholder="Buscar produtos..."
              className="pl-10 pr-4 py-2 w-64 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;