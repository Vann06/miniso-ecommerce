import React from 'react';
import '../styles/cartSummary.css';

export default function CartSummary({ cartItems, onClearCart, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 4.99;
  const total = subtotal+shipping;
  const isError = total > 999.99
 return (
    <div className="cart-summary">
      <h2>Resumen</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Shipping: ${shipping}</p>
      <p>Total: ${total.toFixed(2)}</p>
      {isError && ( <p className="error-message"> ERROR: El total excede $999.99</p>)}
      <div className="cart-actions">
        <button className="checkout-btn" onClick={onCheckout} disabled={isError}> Finalizar Compra </button>
        <button className="clear-btn" onClick={onClearCart}> Vaciar Carrito</button>
      </div>
    </div>
  );
}
