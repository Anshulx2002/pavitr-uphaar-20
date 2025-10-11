-- Allow anyone to view all orders (for admin view)
CREATE POLICY "Anyone can view all orders"
ON public.orders
FOR SELECT
TO public
USING (true);

-- Allow anyone to update order status (for admin view)
CREATE POLICY "Anyone can update order status"
ON public.orders
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);