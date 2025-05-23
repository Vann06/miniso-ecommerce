import React from 'react';
import '../styles/productCard.css';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import AddToCartButton from './AddToCartButton';
import FavoriteButton from './FavoriteButtonFloating';
import ReviewStars from './ReviewStars';

export default function ProductCard({ product, onAddToCart, onClick }) {
  return (
    <div className="product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <FavoriteButton />
      <ProductImage imageUrl={product.imageUrl} name={product.name} />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <ReviewStars rating={product.rating} />
        <div className="product-bottom-row">
          <p className="product-price">${product.price.toFixed(2)}</p>
          <AddToCartButton onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }} />
        </div>
      </div>
    </div>
  );
}
