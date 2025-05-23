import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existing = cartItems.find(item => item._id === product._id);
    if (existing) {
      setCartItems(prev =>
        prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: Math.min(item.quantity + product.quantity, 9) }
            : item
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  const removeItem = (item) => {
    setCartItems(prev => prev.filter(p => p._id !== item._id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increase = (item) => {
    setCartItems(prev =>
      prev.map(p =>
        p._id === item._id && p.quantity < 9 ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decrease = (item) => {
    setCartItems(prev =>
      prev.map(p =>
        p._id === item._id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, clearCart, increase, decrease }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
