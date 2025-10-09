-- Fix function search path for update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Enable RLS on orders table (was missing)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Orders policies: Users can view their own orders
CREATE POLICY "Users can view their own orders"
  ON public.orders
  FOR SELECT
  USING (auth.uid() = user_id);

-- Orders policies: Users can insert their own orders
CREATE POLICY "Users can insert their own orders"
  ON public.orders
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);