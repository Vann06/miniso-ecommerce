import React, { createContext, useRef, useContext } from 'react';

const ProductHistoryContext = createContext();

export function ProductHistoryProvider({ children }) {
  const historyRef = useRef([]);

  const addToHistory = (product) => {
    const exists = historyRef.current.find(p => p._id === product._id);
    if (!exists) {
      historyRef.current.push(product);
    }
  };

  return (
    <ProductHistoryContext.Provider value={{ historyRef, addToHistory }}>
      {children}
    </ProductHistoryContext.Provider>
  );
}

export const useProductHistory = () => useContext(ProductHistoryContext);
