-- Create products table
CREATE TABLE public.produtos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  asin TEXT UNIQUE,
  descricao_curta TEXT,
  descricao_longa TEXT,
  especificacoes_tecnicas JSONB,
  preco_atual NUMERIC(10,2),
  url_amazon TEXT,
  imagens_urls TEXT[],
  categoria_principal TEXT,
  subcategorias TEXT[],
  palavras_chave_seo TEXT[],
  nota_media NUMERIC(3,2),
  numero_avaliacoes INTEGER,
  data_atualizacao TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  produto_id UUID NOT NULL REFERENCES public.produtos(id) ON DELETE CASCADE,
  titulo_review TEXT NOT NULL,
  introducao TEXT,
  pros TEXT[],
  contras TEXT[],
  depoimentos_reais TEXT[],
  status TEXT NOT NULL DEFAULT 'Rascunho' CHECK (status IN ('Rascunho', 'Publicado')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create comparativos table
CREATE TABLE public.comparativos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  produtos_ids UUID[] NOT NULL,
  caracteristicas_comparadas TEXT[],
  conclusao_comparativo TEXT,
  titulo TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comparativos ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (affiliate site needs public access)
CREATE POLICY "Public can view published products" 
ON public.produtos 
FOR SELECT 
USING (true);

CREATE POLICY "Public can view published reviews" 
ON public.reviews 
FOR SELECT 
USING (status = 'Publicado');

CREATE POLICY "Public can view comparativos" 
ON public.comparativos 
FOR SELECT 
USING (true);

-- Admin policies for content management
CREATE POLICY "Admins can manage all products" 
ON public.produtos 
FOR ALL 
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can manage all reviews" 
ON public.reviews 
FOR ALL 
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can manage all comparativos" 
ON public.comparativos 
FOR ALL 
USING (is_admin(auth.uid()));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_produtos_updated_at
BEFORE UPDATE ON public.produtos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at
BEFORE UPDATE ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_comparativos_updated_at
BEFORE UPDATE ON public.comparativos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_produtos_categoria ON public.produtos(categoria_principal);
CREATE INDEX idx_produtos_asin ON public.produtos(asin);
CREATE INDEX idx_reviews_produto_id ON public.reviews(produto_id);
CREATE INDEX idx_reviews_status ON public.reviews(status);