import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, ExternalLink, CheckCircle, XCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ReviewProps {
  review: {
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
  };
}

const ReviewCard = ({ review }: ReviewProps) => {
  const formattedDate = formatDistanceToNow(new Date(review.created_at), {
    addSuffix: true,
    locale: ptBR,
  });

  const productImage = review.produtos?.imagens_urls?.[0] || 
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center";

  return (
    <article className="bg-card rounded-xl border shadow-card hover:shadow-tech transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={productImage}
          alt={review.produtos?.nome || "Produto"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Category Badge */}
        <Badge variant="secondary" className="absolute top-3 left-3">
          {review.produtos?.categoria_principal || "Tecnologia"}
        </Badge>

        {/* Rating Badge */}
        {review.produtos?.nota_media && (
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{review.produtos.nota_media}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        {review.produtos?.nome && (
          <h4 className="text-sm font-medium text-muted-foreground mb-2 line-clamp-1">
            {review.produtos.nome}
          </h4>
        )}

        {/* Review Title */}
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {review.titulo_review}
        </h3>

        {/* Introduction */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {review.introducao}
        </p>

        {/* Pros & Cons Preview */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Pros */}
          <div>
            <div className="flex items-center gap-1 mb-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs font-medium text-green-700 dark:text-green-400">
                Prós ({review.pros?.length || 0})
              </span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              {review.pros?.slice(0, 2).map((pro, index) => (
                <li key={index} className="flex items-start gap-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="line-clamp-1">{pro}</span>
                </li>
              ))}
              {review.pros?.length > 2 && (
                <li className="text-xs text-muted-foreground/70">
                  +{review.pros.length - 2} mais...
                </li>
              )}
            </ul>
          </div>

          {/* Cons */}
          <div>
            <div className="flex items-center gap-1 mb-2">
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="text-xs font-medium text-red-700 dark:text-red-400">
                Contras ({review.contras?.length || 0})
              </span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              {review.contras?.slice(0, 2).map((contra, index) => (
                <li key={index} className="flex items-start gap-1">
                  <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="line-clamp-1">{contra}</span>
                </li>
              ))}
              {review.contras?.length > 2 && (
                <li className="text-xs text-muted-foreground/70">
                  +{review.contras.length - 2} mais...
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Price & Date */}
        <div className="flex items-center justify-between mb-4">
          {review.produtos?.preco_atual && (
            <div className="text-2xl font-bold text-primary">
              R$ {review.produtos.preco_atual.toFixed(2).replace('.', ',')}
            </div>
          )}
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button className="flex-1" size="sm">
            Ler Review Completo
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          
          {review.produtos?.url_amazon && (
            <Button variant="amazon" size="sm" asChild>
              <a href={review.produtos.url_amazon} target="_blank" rel="noopener noreferrer">
                Amazon
              </a>
            </Button>
          )}
        </div>

        {/* Review Stats */}
        {review.produtos?.numero_avaliacoes && (
          <div className="mt-3 pt-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Baseado em {review.produtos.numero_avaliacoes.toLocaleString()} avaliações na Amazon
            </p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ReviewCard;