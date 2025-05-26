import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import api from '../api'; 
import { useNavigate } from 'react-router-dom';

import '../styles/favorites.css';

export default function FavoritesView() {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    

    useEffect(() => {
        api.get('/products')
            .then(res => {
                const favoritos = res.data.filter(product => product.favorite === true);
                setFavorites(favoritos);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="favorites">
            <Header />
            <main className="main-content">
                <h2 className="centered-title">
                    Mis Favoritos
                </h2>
                <div className="product-grid">
                    {favorites.length === 0 ? (
                        <p> No hay productos :c </p>
                    ):(
                        favorites.map(product => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            onAddToCart={() => {}}
                            onClick={() => navigate(`/product/${product._id}`)}
                        />
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}