'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for basket items
type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string; // Add color property
};

// Define the context type
type BasketContextType = {
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (id: number, color: string) => void; // Color for unique items
};

// Create context
const BasketContext = createContext<BasketContextType | undefined>(undefined);

// Provider component
export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (item: BasketItem) => {
    setBasket((prevBasket) => {
      // Check if the item with the same id and color already exists
      const existingItem = prevBasket.find(
        (basketItem) => basketItem.id === item.id && basketItem.color === item.color
      );

      if (existingItem) {
        // Update quantity if item already exists
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id && basketItem.color === item.color
            ? { ...basketItem, quantity: basketItem.quantity + item.quantity }
            : basketItem
        );
      }

      // Add new item to the basket
      return [...prevBasket, item];
    });
  };

  const removeFromBasket = (id: number, color: string) => {
    setBasket((prevBasket) =>
      prevBasket.filter(
        (basketItem) => basketItem.id !== id || basketItem.color !== color
      )
    );
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

// Hook to use the basket context
export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};