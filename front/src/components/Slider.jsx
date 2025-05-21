import React, { useState } from 'react';
import '../styles/slider.css';
import slide1 from '../assets/banner.png';
import slide2 from '../assets/banner2.jpg';
import slide3 from '../assets/banner3.jpg';
import slide4 from '../assets/banner4.jpg';

const slides = [slide1, slide2, slide3, slide4];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="slider-container">
      <div className="slider-img-wrapper">
        <img src={slides[current]} alt="slide" className="slider-img" />

        <button className="slider-arrow left" onClick={prev}>❮</button>
        <button className="slider-arrow right" onClick={next}>❯</button>

        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>

         <svg className="slider-wave-bottom" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,229.3C672,224,768,192,864,165.3C960,139,1056,117,1152,133.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          <path fill="#ffffff" fillOpacity="0.6" d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,250.7C672,256,768,224,864,208C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>

        
      </div>
    </div>
  );
}
