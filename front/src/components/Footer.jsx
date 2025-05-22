import '../styles/footer.css';
import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
<><div className="footer-waves">
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#ec1c24" fillOpacity="1" d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,101.3C840,75,960,85,1080,112C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <path fill="#ec1c24" fillOpacity="0.5" d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,149.3C840,139,960,149,1080,160C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
    </svg>
    </div>
    <footer className="footer">
      <div className="footer-left"> <img src={logo} alt="Miniso Logo" className="footer-logo" /> </div>
      <div className="footer-right">
        <h3>CONTACTO</h3>
        <p>Diagonal 6, 13-01 Zona 10, Oakland Mall, Guatemala</p>
        <p> hola@miniso.com.gt</p>
        <p> +502 2336-5701 | +502 3760-2892</p>
      </div>
      <div className="footer-bottom"> <p>MINISO Guatemala © 2025 Todos los derechos reservados.</p></div>
    </footer> </>
  );
}
