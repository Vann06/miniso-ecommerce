import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import axios from 'axios';
import '../styles/cart.css';


export default function CartView() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/cart')
            .then(res => setCartItems(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleRemoveFromCart = (productId) => {
        console.log('Producto eliminado del carrito:', productId);
    };

    return (
        <div className="cart">
            <Header />
            <main className="main-content">
              
            </main>
            <Footer />
        </div>
    );
}