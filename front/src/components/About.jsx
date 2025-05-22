import React from 'react';
import '../styles/about.css';
import lifeIsForFun from '../assets/lifeisforfun.png'; 
export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <img src={lifeIsForFun} alt="Life is for fun" className="about-logo" />
        <h2 className="about-title">Productos originales, diseño japonés y estilo divertido.</h2>
        <p className="about-paragraph">
          En MINISO creemos que la vida está hecha para disfrutarse. Por eso ofrecemos productos originales, con estética japonesa y funcionalidad para el día a día. Desde peluches, artículos del hogar, belleza, papelería y más.
        </p>
        <p className="about-paragraph">
          Nuestro compromiso es brindarte una experiencia accesible, estética y práctica en cada rincón de tu vida.
        </p>
        <a href="/shop" className="about-btn">Explorar Tienda →</a>
      </div>
    </section>
  );
}
