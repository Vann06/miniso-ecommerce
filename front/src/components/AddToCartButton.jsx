import React from 'react';

export default function AddToCartButton({ onClick }) {
  return (
    <div className="product-actions">
      <button className="add-to-cart" onClick={onClick}>
        Add
      </button>
    </div>
  );
}
