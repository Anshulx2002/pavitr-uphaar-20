import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { AddedToCartDialog } from '@/components/AddedToCartDialog';

declare global {
  interface Window {
    fbq: any;
  }
}

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
  showAddedDialog: boolean;
  addedProductName: string;
  setShowAddedDialog: (show: boolean) => void;
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
  const [showAddedDialog, setShowAddedDialog] = useState(false);
  const [addedProductName, setAddedProductName] = useState('');

  // Initialize auth and cart
  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          loadCartFromSupabase(session.user.id);
        } else {
          loadCartFromLocalStorage();
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadCartFromSupabase(session.user.id);
      } else {
        loadCartFromLocalStorage();
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadCartFromLocalStorage = () => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  };

  const saveCartToLocalStorage = (items: CartItem[]) => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  };

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
    try {
      const existingItem = cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        const newItems = cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        setCartItems(newItems);

        if (user) {
          await supabase
            .from('cart_items')
            .update({ quantity: existingItem.quantity + 1 })
            .eq('user_id', user.id)
            .eq('product_id', product.id);
        } else {
          saveCartToLocalStorage(newItems);
        }

        setAddedProductName(product.name);
        setShowAddedDialog(true);
      } else {
        const newItems = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(newItems);

        if (user) {
          await supabase
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
        } else {
          saveCartToLocalStorage(newItems);
        }

        setAddedProductName(product.name);
        setShowAddedDialog(true);
        
        // Track AddToCart event
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'AddToCart', {
            content_ids: [product.id],
            content_name: product.name,
            value: product.price,
            currency: 'INR'
          });
        }
      }
    } catch (error: any) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (id: number) => {
    try {
      const newItems = cartItems.filter(item => item.id !== id);
      setCartItems(newItems);

      if (user) {
        await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', id);
      } else {
        saveCartToLocalStorage(newItems);
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateQuantity = async (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      try {
        const newItems = cartItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
        setCartItems(newItems);

        if (user) {
          await supabase
            .from('cart_items')
            .update({ quantity })
            .eq('user_id', user.id)
            .eq('product_id', id);
        } else {
          saveCartToLocalStorage(newItems);
        }
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }
  };

  const clearCart = async () => {
    try {
      setCartItems([]);

      if (user) {
        await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.id);
      } else {
        localStorage.removeItem('cart');
      }
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
    showAddedDialog,
    addedProductName,
    setShowAddedDialog,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <AddedToCartDialog 
        isOpen={showAddedDialog}
        onClose={() => setShowAddedDialog(false)}
        productName={addedProductName}
      />
    </CartContext.Provider>
  );
};