import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import ReviewCard from "@/components/ReviewCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Review {
  id: string;
  titulo_review: string;
  introducao: string;
  pros: string[];
  contras: string[];
  depoimentos_reais: string[];
  created_at: string;
  produto_id: string;
  produtos?: {
    nome: string;
    categoria_principal: string;
    imagens_urls: string[];
    preco_atual: number;
    url_amazon: string;
    nota_media: number;
    numero_avaliacoes: number;
  };
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchReviews();
    fetchCategories();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          *,
          produtos (
            nome,
            categoria_principal,
            imagens_urls,
            preco_atual,
            url_amazon,
            nota_media,
            numero_avaliacoes
          )
        `)
        .eq("status", "Publicado")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("produtos")
        .select("categoria_principal")
        .not("categoria_principal", "is", null);

      if (error) throw error;
      
      const uniqueCategories = [...new Set(data?.map(item => item.categoria_principal))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = 
      review.titulo_review.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.produtos?.nome.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      categoryFilter === "all" || 
      review.produtos?.categoria_principal === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reviews
            <span className="bg-gradient-tech bg-clip-text text-transparent"> Detalhados</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Análises completas e imparciais dos melhores produtos de tecnologia, 
            automação residencial e gadgets inovadores.
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar reviews ou produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Categorias</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        {!loading && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''} encontrado{filteredReviews.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Reviews Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-video rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">Nenhum review encontrado</h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou termos de busca.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
              }}
              variant="outline"
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Reviews;