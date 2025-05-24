import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductHistoryProvider } from './context/ProductHistoryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ProductHistoryProvider>
          <App />
        </ProductHistoryProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
