-- Create products table
CREATE TABLE public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  rating NUMERIC DEFAULT 4.5,
  description TEXT NOT NULL,
  badge TEXT,
  availability TEXT DEFAULT 'in stock',
  condition TEXT DEFAULT 'new',
  brand TEXT DEFAULT 'Pavitra Uphaar',
  google_category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (products are publicly visible on the website)
CREATE POLICY "Anyone can view products" 
ON public.products 
FOR SELECT 
USING (true);

-- Create policy for authenticated users to insert products (for admin panel)
CREATE POLICY "Authenticated users can insert products" 
ON public.products 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Create policy for authenticated users to update products
CREATE POLICY "Authenticated users can update products" 
ON public.products 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create policy for authenticated users to delete products
CREATE POLICY "Authenticated users can delete products" 
ON public.products 
FOR DELETE 
USING (auth.role() = 'authenticated');

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster category queries
CREATE INDEX idx_products_category ON public.products(category);

-- Create index for faster availability queries
CREATE INDEX idx_products_availability ON public.products(availability);