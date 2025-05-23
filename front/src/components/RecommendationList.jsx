import React, { useMemo } from 'react';
import NavigableProductCard from './CardNavigate';
import { useProductHistory } from '../context/ProductHistoryContext';
import '../styles/recommendationList.css';

export default function RecommendationList() {
  const { historyRef } = useProductHistory();

  const recommended = useMemo(() => {
    return historyRef.current.slice().reverse().slice(0, 3);
  }, [historyRef.current]);

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
