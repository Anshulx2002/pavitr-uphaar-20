import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Product } from '@/data/products';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('availability', 'in stock')
        .order('id');

      if (error) throw error;
      
      // Map database columns to Product interface
      return (data || []).map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.original_price,
        image: product.image,
        rating: product.rating,
        description: product.description,
        badge: product.badge,
        category: product.category,
        availability: product.availability as "in stock" | "out of stock" | "preorder",
        condition: product.condition as "new" | "refurbished" | "used",
        brand: product.brand
      })) as Product[];
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)
        .eq('availability', 'in stock')
        .order('id');

      if (error) throw error;
      
      return (data || []).map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.original_price,
        image: product.image,
        rating: product.rating,
        description: product.description,
        badge: product.badge,
        category: product.category,
        availability: product.availability as "in stock" | "out of stock" | "preorder",
        condition: product.condition as "new" | "refurbished" | "used",
        brand: product.brand
      })) as Product[];
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .in('badge', ['Best Seller', 'Premium', 'New Arrival', 'Festival Special'])
        .eq('availability', 'in stock')
        .order('id')
        .limit(8);

      if (error) throw error;
      
      return (data || []).map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.original_price,
        image: product.image,
        rating: product.rating,
        description: product.description,
        badge: product.badge,
        category: product.category,
        availability: product.availability as "in stock" | "out of stock" | "preorder",
        condition: product.condition as "new" | "refurbished" | "used",
        brand: product.brand
      })) as Product[];
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductById = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      if (!data) return null;
      
      return {
        id: data.id,
        name: data.name,
        price: data.price,
        originalPrice: data.original_price,
        image: data.image,
        rating: data.rating,
        description: data.description,
        badge: data.badge,
        category: data.category,
        availability: data.availability as "in stock" | "out of stock" | "preorder",
        condition: data.condition as "new" | "refurbished" | "used",
        brand: data.brand
      } as Product;
    },
    staleTime: 1000 * 60 * 5,
  });
};