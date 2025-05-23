import React, { useMemo } from 'react';
import ProductCard from './ProductCard';
import '../styles/recommendationList.css';
import NavigableProductCard from './CardNavigate';

export default function RecommendationList({ currentProductId, allProducts }) {
  const recommended = useMemo(() => {
    const filtered = allProducts.filter(
      p => p._id !== currentProductId
    );
    return filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [allProducts, currentProductId]);

  return (
    <section className="recommendations">
      <h3>Sugerencias</h3>
      <div className="recommendation-grid">
        {recommended.map(product => (
          <NavigableProductCard
            key={product._id}
            product={product}
            onAddToCart={() => {}}
          />
        ))}
      </div>
    </section>
  );
}
