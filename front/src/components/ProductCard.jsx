import React from 'react';
import '../styles/productCard.css';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import AddToCartButton from './AddToCartButton';
import FavoriteButton from './FavoriteButton';

export default function ProductCard({ product, onAddToCart, onFavorite, onClick }) {
  return (
    <div className="product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <FavoriteButton />
      <ProductImage imageUrl={product.imageUrl} name={product.name} />
      <ProductDetails name={product.name} price={product.price} />
      <AddToCartButton onClick={(e) => {
        e.stopPropagation(); 
        onAddToCart(product);
      }} />
    </div>
  );
}
