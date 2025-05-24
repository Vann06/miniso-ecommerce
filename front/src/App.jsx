import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './pages/HomeView';
import About from './components/About';
import FavoritesView from './pages/FavoritesView';
import ProductDetailView from './pages/ProductDetailView';
import CartView from './pages/CartView';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetailView />} />
        <Route path="/favorites" element={<FavoritesView />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>

    </>
  );
}

export default App;
