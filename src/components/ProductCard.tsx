import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  amazonUrl?: string;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  category,
  description,
  features,
  amazonUrl = "#"
}: ProductCardProps) => {
  const discount = originalPrice 
    ? Math.round(((parseFloat(originalPrice.replace('R$', '').replace('.', '').replace(',', '.')) - parseFloat(price.replace('R$', '').replace('.', '').replace(',', '.'))) / parseFloat(originalPrice.replace('R$', '').replace('.', '').replace(',', '.'))) * 100)
    : null;

  return (
    <div className="bg-card rounded-xl border shadow-card hover:shadow-tech transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${category}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Category Badge */}
        <Badge variant="secondary" className="absolute top-3 left-3">
          {category}
        </Badge>
        
        {/* Discount Badge */}
        {discount && (
          <Badge className="absolute top-3 right-3 bg-amazon text-amazon-foreground">
            -{discount}%
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Features */}
        <div className="mb-4">
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-primary">{price}</div>
            {originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="amazon" className="flex-1" asChild>
            <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
              Comprar na Amazon
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;