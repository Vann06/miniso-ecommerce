import React from 'react';

export default function ProductPrice({ price, discountPrice }) {
  return discountPrice ? (
    <p>
      <span className="price-old">${price.toFixed(2)}</span>
      <span className="price-discount">${discountPrice.toFixed(2)}</span>
    </p>
  ) : (
    <p className="price">Q{price.toFixed(2)}</p>
  );
}
