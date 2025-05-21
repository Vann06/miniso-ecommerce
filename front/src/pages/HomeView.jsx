import React, { useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';    
import Slider from '../components/Slider';
import About from '../components/About';
import axios from 'axios';
import '../styles/home.css';

export default function HomeView() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/products')
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
    }, []);

    const handleAddToCart = (product) => {
        // Aquí puedes implementar la lógica para agregar el producto al carrito
        console.log('Producto agregado al carrito:', product);
    };

    const handleFavorite = (product) => {
        // Aquí puedes implementar la lógica para agregar el producto a favoritos
        console.log('Producto agregado a favoritos:', product);
    }
    return (
        <div className="home">
            <Header />
            <main className="main-content">
                <Slider />
                <About />
                <div className ="product-grid">     
                    {products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onAddToCart={handleAddToCart} 
                            onFavorite={handleFavorite}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}