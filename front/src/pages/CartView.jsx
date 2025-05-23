import '../styles/cart.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartSummary from '../components/CartSummary';
import CartItem from '../components/CartItem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecommendationList from '../components/RecommendationList';

export default function CartView() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/cart')
      .then(res => setCartItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const increaseQuantity = (item) => {};
  const decreaseQuantity = (item) => {};
  const removeItem = (item) => {};
  const checkout = () => {};
  const clearCart = () => {};

  return (
    <div className="cart-view">
      <Header />
      <main className="cart-main">
        <div className="cart-summary-section">
          <CartSummary
            cartItems={cartItems}
            onClearCart={clearCart}
            onCheckout={checkout}
          />
        </div>
        <div className="cart-items-section">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartItem
                key={item._id || item.id}
                item={item}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />
            ))
          ) : (
            <p>Carrito vacío :c</p>
          )}
        </div>
      </main>

      <RecommendationList />

      <Footer />
    </div>
  );
}
