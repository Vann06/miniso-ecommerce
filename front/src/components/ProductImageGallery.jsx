import React, { useState, useEffect } from 'react';
import '../styles/productImageGallery.css'

export default function ProductImageGallery({ product }) {
  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.imageUrl];
  const [selected, setSelected] = useState(images[0]);

  useEffect(() => {
    setSelected(images[0]);
  }, [product]);

  return (
    <div className="product-gallery">
      <img src={selected} alt={product.name} className="product-main-image" />
      {images.length > 1 && (
        <div className="thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className={`thumb ${img === selected ? 'active' : ''}`}
              onClick={() => setSelected(img)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
