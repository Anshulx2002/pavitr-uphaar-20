-- Add admin role for the authorized user
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'anshulvchadha@hotmail.com'
ON CONFLICT (user_id, role) DO NOTHING;