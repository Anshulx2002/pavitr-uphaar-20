-- Add addresses field to profiles table to store multiple shipping addresses
ALTER TABLE public.profiles 
ADD COLUMN addresses JSONB DEFAULT '[]'::jsonb;