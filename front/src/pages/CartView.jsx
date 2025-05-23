import { useCart } from '../context/CartContext';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecommendationList from '../components/RecommendationList';
import CartSummary from '../components/CartSummary';
import CartItem from '../components/CartItem';

export default function CartView() {
  const { cartItems, removeItem, clearCart, increase, decrease } = useCart();

  const checkout = () => {
    alert('¡Gracias por tu compra :3!');
    clearCart();
  };

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
                key={item._id}
                item={item}
                onIncrease={increase}
                onDecrease={decrease}
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
