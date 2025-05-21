import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

import '../styles/favorites.css';

export default function FavoritesView() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/favorites')
            .then(res => setFavorites(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleRemoveFromFavorites = (productId) => {
        console.log('Producto eliminado de favoritos:', productId);
    };

    return (
        <div className="favorites">
            <Header />
            <main className="main-content">
                
            </main>
            <Footer />
        </div>
    );


}