import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeleteProduct.css';
import Loader from '../Loader/loader';

function DeleteProduct() {
  
    const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [loaderStatus, setLoaderStatus]=useState(false)

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoaderStatus(true)
    try {
      const response = await axios.get('http://localhost:4000/products');
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error('API response is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoaderStatus(false)
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteClick = async (productId) => {
    setLoaderStatus(true)
    try {
       const response=await axios.delete(`http://localhost:4000/admincrud/deleteproduct/${productId}`);
       console.log(response);
       if (response.status==201) {
        alert("Product deleted successfully");
       }
       else{
        alert("Product not deleted");
       }
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
    setLoaderStatus(false)
  };

  return (
    <div className="admin-dashboard">
      <h1>Delete Product</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product._id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
             
            <button onClick={() => handleDeleteClick(product._id)}>Delete</button>
          </div>
        ))}
      </div>
      {loaderStatus && <Loader/>}
    </div>
  );
  
}

export default DeleteProduct
