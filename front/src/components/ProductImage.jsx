import React from 'react';

export default function ProductImage({ imageUrl, name }) {
  return <img src={imageUrl} alt={name} className="product-img" />;
}
