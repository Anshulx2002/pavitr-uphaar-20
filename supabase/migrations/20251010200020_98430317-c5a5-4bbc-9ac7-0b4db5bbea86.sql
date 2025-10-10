-- Add status tracking to orders table
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS status_updated_at timestamp with time zone DEFAULT now();

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_orders_user_id_created_at ON public.orders(user_id, created_at DESC);

-- Update existing orders to have status_updated_at
UPDATE public.orders 
SET status_updated_at = updated_at 
WHERE status_updated_at IS NULL;

-- Create trigger to update status_updated_at when status changes
CREATE OR REPLACE FUNCTION public.update_order_status_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status IS DISTINCT FROM OLD.status THEN
    NEW.status_updated_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER update_order_status_timestamp
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_order_status_timestamp();