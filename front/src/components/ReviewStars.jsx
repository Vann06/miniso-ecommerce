import React from 'react';

export default function ReviewStars({ rating = 0 }) {
  return (
    <div className="review-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? '⭐' : '☆'}</span>
      ))}
    </div>
  );
}
