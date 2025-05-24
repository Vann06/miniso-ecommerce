
import React from 'react';

export default function ProductPrice({ price, discount }) {
  const hasDiscount = discount && discount > 0 && discount < price;

  return (
    <div className="product-price-column">
      {hasDiscount ? (
        <>
          <span className="price-old">GTQ {price?.toFixed(2)}</span>
          <span className="price-discount">GTQ {discount?.toFixed(2)}</span>
        </>
      ) : (
        <span className="price-normal">GTQ {price?.toFixed(2)}</span>
      )}
    </div>
  );
}
