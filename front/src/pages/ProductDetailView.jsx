import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function ProductDetailView() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/products/1'); // Cambia '1' por el ID del producto que quieras obtener
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <Header />
            <main className="main-content">
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </main>
            <Footer />
        </div>
    );
}