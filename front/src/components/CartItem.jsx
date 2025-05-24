import React from 'react';
import '../styles/cartItem.css';

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="cart-item-bottom">
          <span className="price-unit">GTQ {item.price.toFixed(2)}</span>
          <div className="quantity-controls">
            <button onClick={() => onDecrease(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onIncrease(item)}>+</button>
          </div>
        </div>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item)}>×</button>
    </div>
  );
}
