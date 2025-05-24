import React from 'react';
import '../styles/cartSummary.css';

export default function CartSummary({ cartItems, onClearCart, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => {
    const actualPrice = item.discount && item.discount > 0 ? item.discount: item.price;
    return sum + actualPrice * item.quantity;
  } , 0);
  const ahorro = cartItems.reduce((sum,item) => {
    if(item.discount && item.discount > 0 && item.discount < item.price) {
      const ahorroPorUnidad = item.price - item.discount;
      return sum + ahorroPorUnidad * item.quantity;
    }
    return sum;
  }, 0);
  const shipping = 4.99;
  const total = subtotal+shipping;
  const isError = total > 999.99
 return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Subtotal: Q{subtotal.toFixed(2)}</p>
      <p>Shipping: Q{shipping}</p>
      <p className="ahorro">Ahorro total: -Q{ahorro.toFixed(2)}</p>
      <p>Total: Q{total.toFixed(2)}</p>
      {isError && ( <p className="error-message"> ERROR: El total excede Q999.99</p>)}
      <div className="cart-actions">
        <button className="checkout-btn" onClick={onCheckout} disabled={isError}> Finalizar Compra </button>
        <button className="clear-btn" onClick={onClearCart}> Vaciar Carrito</button>
      </div>
    </div>
  );
}
