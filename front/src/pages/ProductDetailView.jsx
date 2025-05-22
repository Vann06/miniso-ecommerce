import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductInfo from '../components/ProductInfo';
import ProductImageGallery from '../components/ProductImageGallery';
import RecommendationList from '../components/RecommendationList';

export default function ProductDetailView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error al cargar producto:', err));

    axios.get(`http://localhost:3001/api/products`)
      .then(res => setAllProducts(res.data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="product-detail">
      <ProductImageGallery imageUrl={product.imageUrl} />
      <ProductInfo product={product} onAddToCart={() => console.log('agregar')} />
      <RecommendationList currentProductId={product._id} allProducts={allProducts} />
    </div>
  );
}
