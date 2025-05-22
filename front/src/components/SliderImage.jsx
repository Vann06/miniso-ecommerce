import React from 'react';

export default function SliderImage({ current, setCurrent, slides }) {
  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="slider-img-wrapper">
      <img src={slides[current]} alt="slide" className="slider-img" />
      <button className="slider-arrow left" onClick={prev}>❮</button>
      <button className="slider-arrow right" onClick={next}>❯</button>
    </div>
  );
}
