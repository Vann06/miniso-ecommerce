import { useCart } from '../context/CartContext';
import React,{useEffect,}from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecommendationList from '../components/RecommendationList';
import CartSummary from '../components/CartSummary';
import CartItem from '../components/CartItem';
import emptyCart from '../assets/cart.png';
import '../styles/cart.css';

export default function CartView() {
  const { cartItems, removeItem, clearCart, increase, decrease } = useCart();

  const checkout = () => {
    alert('¡Gracias por tu compra :3!');
    clearCart();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
             <div className="empty-cart">
              <img src={emptyCart} alt="Carrito vacío" className="empty-cart-img" />
              <p>¡Tu carrito está vacío! :c</p>
              <a href="/" className="back-to-shop">Volver a la tienda</a>
            </div>
            
            
          )}
        </div>
      </main>

      <RecommendationList />
      <Footer />
    </div>
  );
}
