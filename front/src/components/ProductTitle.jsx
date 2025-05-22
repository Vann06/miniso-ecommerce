import React from 'react';
import ReviewStars from './ReviewStars';

export default function ProductTitle({ name, description, rating }) {
  return (
    <div className="product-title">
      <h2>{name}</h2>
      <p>{description}</p>
      <ReviewStars rating={rating} />
    </div>
  );
}
