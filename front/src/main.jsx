import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductHistoryProvider } from './context/ProductHistoryContext';
import { CartProvider } from './context/CartContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductHistoryProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductHistoryProvider>
  </CartProvider>
  
 
);


