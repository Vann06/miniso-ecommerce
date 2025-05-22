import React from 'react';

export default function SliderDots({ current, setCurrent, slides }) {
  return (
    <div className="slider-dots">
      {slides.map((_, i) => (
        <span
          key={i}
          className={`slider-dot ${i === current ? 'active' : ''}`}
          onClick={() => setCurrent(i)}
        ></span>
      ))}
    </div>
  );
}
