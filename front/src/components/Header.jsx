import {Link} from 'react-router-dom';
import '../styles/header.css';
import React from 'react';
import logo from '../assets/logo.png'; 
import heart from '../assets/heart-full.png';
import cart from '../assets/shopping-cart.png';
import {useCart} from '../context/CartContext';
import github from '../assets/github.png';

export default function Header() {
  const {cartItems} = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity,0);
  return (
    <header className="main-header">
      <div className="header-left"> <Link to="/"> <img src={logo} alt="Miniso" className="header-logo" /> </Link> </div>
      <nav className="header-nav">
        <Link to="/about" className="nav-icon">About</Link>
        <Link to="/#product">Shop</Link>
        <Link to="/favorites"> <img src={heart} alt="Favoritos" className="nav-icon" /> </Link>
        <div className="cart-icon-wrapper">
          <Link to="/cart">  <img src={cart} alt="Carrito" className="nav-icon" /> </Link>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </div>
        <Link to= "https://github.com/Vann06/miniso-ecommerce">
        <img src={github} alt="Github" className="nav-icon"/>
        </Link>
      </nav>
    </header>
  );
}
