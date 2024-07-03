import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductSearch.css'


const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchProducts(searchTerm);
    } else {
      setProducts([]);
    }
  }, [searchTerm]);

  const fetchProducts = async (query) => {
    try {
      const response = await axios.get(`http://localhost:4000/admincrud/search/${encodeURIComponent(query)}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="product-search">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
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
    </div>
  );
};

export default ProductSearch;
