import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import axios from 'axios';
import '../styles/cart.css';

export default function CartView() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/cart')
            .then(res => setCartItems(res.data))
            .catch(err => console.error(err));
    }, []);

    const increaseQuantity = (item) => {

    };

    const decreaseQuantity = (item) => {

    };

    const removeItem = (item) => {
        console.log('Producto eliminado del carrito:', item);
    };

    const checkout = () => {

    };
    const clearCart = () =>{

    };
    return (
        <div className="cart-view">
            <Header />
            <div className="cart-items-section">
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onIncrease={increaseQuantity}
                            onDecrease={decreaseQuantity}
                            onRemove={removeItem}
                        />
                    ))
                ) : (
                    <p>Cart is empty :c</p>
                )}
            </div>
            <CartSummary
                cartItems={cartItems}
                onClearCart={clearCart}
                onCheckout={checkout}
            />
            <Footer />
        </div>
    );
}