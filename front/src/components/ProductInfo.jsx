import React, { useState } from 'react';
import '../styles/productInfo.css';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import QuantitySlider from './QuantitySlider';
import FavoriteButton from './FavoriteButton';
import { useCart } from '../context/CartContext';

export default function ProductInfo({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useCart();

  return (
    <div className="product-info">
      <ProductTitle name={product.name} description={product.description} rating={product.rating} />
      <ProductPrice price={product.price} discountPrice={product.discountPrice} />
      <QuantitySlider quantity={quantity} setQuantity={setQuantity} />
      <div className="options">
         <button
          className="button-cart"
          onClick={() => addToCart({ ...product, quantity })}
        >
          + Agregar {quantity} al carrito
        </button>
        <FavoriteButton />
      </div>
    </div>
  );
}
