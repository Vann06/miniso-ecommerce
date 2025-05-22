import React, { useState } from 'react';
import '../styles/slider.css';
import slide1 from '../assets/banner.jpg';
import slide2 from '../assets/banner2.jpg';
import slide3 from '../assets/banner3.jpg';
import slide4 from '../assets/banner4.jpg';
import slide5 from '../assets/banner5.jpg';
import SliderImage from './SliderImage';
import SliderDots from './SliderDots';
import SliderWave from './SliderWave';
const slides = [slide1, slide2, slide3, slide4, slide5];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="slider-container">
      <SliderImage current={current} setCurrent={setCurrent} slides={slides} />
      <SliderDots current={current} setCurrent={setCurrent} slides={slides} />
      <SliderWave />
    </div>
  );
}
