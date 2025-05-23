import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function CardNavigate({ product, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <ProductCard
      product={product}
      onAddToCart={onAddToCart}
      onClick={() => navigate(`/product/${product._id}`)}
    />
  );
}
