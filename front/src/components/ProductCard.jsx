import React, { useState } from 'react';
import '../styles/productCard.css';
import heartEmpty from '../assets/heart-empty.png';
import heartFull from '../assets/heart-full.png';

export default function ProductCard({ product, onAddToCart }) {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <div className="product-card">
      <button className="favorite-icon" onClick={toggleFavorito}>
        <img
          src={favorito ? heartFull : heartEmpty}
          alt="Favorito"
          className="heart-icon"
        />
      </button>

      <img src={product.imageUrl} alt={product.name} className="product-img" />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>

      <div className="product-actions">
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          🛒 Add
        </button>
      </div>
    </div>
  );
}
