import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductInfo from '../components/ProductInfo';
import ProductImageGallery from '../components/ProductImageGallery';
import RecommendationList from '../components/RecommendationList';
import { useProductHistory } from '../context/ProductHistoryContext';
import '../styles/productDetail.css'
import api from '../api'; 

export default function ProductDetailView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const { addToHistory } = useProductHistory();

  
  useEffect(() => {
    if (product) addToHistory(product);
  }, [product]);


  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error al cargar producto:', err));

    api.get(`/products`)
      .then(res => setAllProducts(res.data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="product-detail">
      <div className="product-detail-main">
        <ProductInfo product={product} onAddToCart={() => console.log('agregar')} />
        <ProductImageGallery product={product} />
      </div>
      <RecommendationList currentProductId={product._id} allProducts={allProducts} />
    </div>
  );
}


