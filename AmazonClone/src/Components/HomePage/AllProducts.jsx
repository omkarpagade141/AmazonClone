import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllProducts.css';

function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:4000/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    return (
      <div className="products-container">
      
      <div className="products-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-category">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
    );
  
}

export default AllProducts
