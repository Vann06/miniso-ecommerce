import React from 'react';
import '../styles/productDetail.css'

export default function ProductDetails({ name, price }) {
  return (
    <div className="product-detail">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  );
}
