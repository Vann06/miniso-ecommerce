import React from 'react';
import '../styles/header.css';
import logo from '../assets/logo.png'; 
import heart from '../assets/heart-full.png';
import cart from '../assets/shopping-cart.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logo} alt="Miniso" className="header-logo" />
      </div>
      <nav className="header-nav">
        <a href="/about">About</a>
        <a href="/shop">Shop</a>
        <a href="/favorites">
            <img src={heart} alt="Favorites" className="header-favorites" />
        </a>
        <a href="/cart">
            <img src={cart} alt="Cart" className="header-cart" />
        </a>
      </nav>
    </header>
  );
}
