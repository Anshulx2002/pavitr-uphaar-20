-- Drop the existing policy
DROP POLICY IF EXISTS "Users can view their own orders" ON orders;

-- Create new policy that allows viewing orders by user_id OR email
CREATE POLICY "Users can view their own orders" 
ON orders 
FOR SELECT 
USING (
  auth.uid() = user_id 
  OR 
  (auth.jwt() ->> 'email') = customer_email
);