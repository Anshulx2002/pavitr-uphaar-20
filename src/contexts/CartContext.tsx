import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  description: string;
  badge?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  user: User | null;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth and cart
  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          loadCartFromSupabase(session.user.id);
        } else {
          setCartItems([]);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadCartFromSupabase(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadCartFromSupabase = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      const items: CartItem[] = data.map(item => ({
        id: item.product_id,
        name: item.product_name,
        price: Number(item.product_price),
        originalPrice: item.product_original_price ? Number(item.product_original_price) : undefined,
        image: item.product_image,
        quantity: item.quantity,
        description: item.product_description,
        badge: item.product_badge || undefined,
      }));

      setCartItems(items);
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (product: Omit<CartItem, 'quantity'>) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to add items to cart",
        variant: "destructive",
      });
      return;
    }

    try {
      const existingItem = cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + 1 })
          .eq('user_id', user.id)
          .eq('product_id', product.id);

        if (error) throw error;

        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );

        toast({
          title: "Updated Cart",
          description: `${product.name} quantity increased`,
        });
      } else {
        const { error } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            product_id: product.id,
            product_name: product.name,
            product_price: product.price,
            product_original_price: product.originalPrice,
            product_image: product.image,
            product_description: product.description,
            product_badge: product.badge,
            quantity: 1,
          });

        if (error) throw error;

        setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);

        toast({
          title: "Added to Cart",
          description: `${product.name} has been added to your cart`,
        });
      }
    } catch (error: any) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to add item to cart",
        variant: "destructive",
      });
    }
  };

  const removeFromCart = async (id: number) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', id);

      if (error) throw error;

      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateQuantity = async (id: number, quantity: number) => {
    if (!user) return;

    if (quantity === 0) {
      removeFromCart(id);
    } else {
      try {
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity })
          .eq('user_id', user.id)
          .eq('product_id', id);

        if (error) throw error;

        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        );
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    user,
    isLoading,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};