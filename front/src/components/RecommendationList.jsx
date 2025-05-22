import React, { useMemo } from 'react';
import ProductCard from './ProductCard';

export default function RecommendationList({ currentProductId, allProducts }) {
  const recommended = useMemo(() => {
    const filtered = allProducts.filter(p => p.id !== currentProductId);
    return filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [allProducts, currentProductId]);

  return (
    <section className="recommendations">
      <h3>Sugerencias</h3>
      <div className="recommendation-grid">
        {recommended.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
