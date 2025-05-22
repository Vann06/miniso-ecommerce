import React from 'react';
import '../styles/quantitySlider.css';

export default function QuantitySlider({ quantity, setQuantity }) {
  return (
    <div className="quantity-slider">
      <label htmlFor="qty">Cantidad</label>
      <div className="slider-wrapper">
        <input type="range" id="qty" min="1" max="9" value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <div className="slider-bubble" style={{ left: `${(quantity - 1) * 12.5}%` }}> {quantity} </div>
      </div>
    </div>
  );
}
