import React, { useState } from 'react';
import '../styles/productCard.css';
import ProductImage from './ProductImage';
import ReviewStars from './ReviewStars';
import AddToCartButton from './AddToCartButton';
import FavoriteButton from './FavoriteButtonFloating';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onClick }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart({ ...product, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      {added && <div className="cart-toast">Producto agregado</div>}
      <FavoriteButton />
      <ProductImage imageUrl={product.imageUrl} name={product.name} />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <ReviewStars rating={product.rating} />
        <div className="product-bottom-row">
          <p className="product-price">GTQ{product.price.toFixed(2)}</p>
          <AddToCartButton onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
