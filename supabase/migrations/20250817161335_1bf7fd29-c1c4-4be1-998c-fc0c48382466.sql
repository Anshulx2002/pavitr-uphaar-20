-- Add user_id column to orders table to tie orders to authenticated users
ALTER TABLE public.orders 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Create index for better performance
CREATE INDEX idx_orders_user_id ON public.orders(user_id);

-- Enable Row Level Security on orders table
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only view their own orders
CREATE POLICY "Users can view their own orders" 
ON public.orders 
FOR SELECT 
USING (auth.uid() = user_id);

-- Policy: Users can only create orders for themselves
CREATE POLICY "Users can create their own orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Policy: Users can only update their own orders
CREATE POLICY "Users can update their own orders" 
ON public.orders 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Policy: Prevent deletion of orders for data integrity
-- (Optional: Remove this policy if you want users to be able to delete their orders)
CREATE POLICY "Prevent order deletion" 
ON public.orders 
FOR DELETE 
USING (false);