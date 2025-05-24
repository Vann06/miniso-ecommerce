import React, { useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';    
import Slider from '../components/Slider';
import About from '../components/About';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

export default function HomeView() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/api/products')
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
    }, []);

     useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#product') {
      const section = document.getElementById('product');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

    const handleAddToCart = (product) => {
        console.log('Producto agregado al carrito:', product);
    };

    return (
        <div className="home">
            <Header />
            <main className="main-content">
                <Slider />
                <About />
                <div id="product" className="product-grid">
                    {products.map(product => (
                        <ProductCard
                        key={product._id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        onClick={() => navigate(`/product/${product._id}`)}
                        />
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    );
}