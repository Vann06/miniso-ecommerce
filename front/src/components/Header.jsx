import {Link} from 'react-router-dom';
import React from 'react';
import '../styles/header.css';
import logo from '../assets/logo.png'; 
import heart from '../assets/heart-full.png';
import cart from '../assets/shopping-cart.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="Miniso" className="header-logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/about">About</Link>
        <Link to="/">Shop</Link>
        <Link to="/favorites">
          <img src={heart} alt="Favoritos" className="nav-icon" />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="Carrito" className="nav-icon" />
        </Link>
      </nav>
    </header>
  );
}
