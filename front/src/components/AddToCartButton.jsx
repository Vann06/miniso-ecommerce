import React from 'react';
import cartIcon from '../assets/add-to-cart.png'; // debe existir

export default function AddToCartButton({ onClick }) {
  return (
    <button className="btn-cart" onClick={onClick}>
      <img src={cartIcon} alt="Agregar al carrito" className="cart-icon" />
    </button>
  );
}
