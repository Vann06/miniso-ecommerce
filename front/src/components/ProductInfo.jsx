import React, { useState } from 'react';
import '../styles/productInfo.css';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import QuantitySlider from './QuantitySlider';
import FavoriteButton from './FavoriteButton';

export default function ProductInfo({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-info">
      <ProductTitle name={product.name} description={product.description} rating={product.rating} />
      <ProductPrice price={product.price} discountPrice={product.discountPrice} />
      <QuantitySlider quantity={quantity} setQuantity={setQuantity} />
      <div className="options">
        <button onClick={() => onAddToCart({ ...product, quantity })}>+ Agregar {quantity} al carrito</button>
        <FavoriteButton />
      </div>
    </div>
  );
}
