import React from 'react';

export default function ProductDetails({ name, price }) {
  return (
    <div className="product-info">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  );
}
