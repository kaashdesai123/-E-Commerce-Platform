import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="App">
            <h1>E-Commerce Platform</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <img src={product.imageUrl} alt={product.name} width={100} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
