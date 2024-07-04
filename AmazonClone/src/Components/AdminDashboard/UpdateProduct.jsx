import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateProduct.css';
import Loader from '../Loader/loader';
 

function UpdateProduct() {
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
      setProducts(response.data);
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

  const handleUpdateProduct = async (updatedProduct) => {
    setLoaderStatus(true)

    try {
      const response=await axios.put(`http://localhost:4000/admincrud/updateproduct/${updatedProduct._id}`, updatedProduct);
      if (response.status==201) {
        alert("Product Updated Successfully");
      }
      else{
        alert("Product Not Updated");
      }
      
      fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
    setLoaderStatus(false)
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
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
            <button onClick={() => handleEditClick(product)}>Update</button>
          </div>
        ))}
      </div>
      {editingProduct && (
        <ProductEditForm
          product={editingProduct}
          onUpdateProduct={handleUpdateProduct}
        />
      )}
      {loaderStatus && <Loader/>}
    </div>
  );
};

const ProductEditForm = ({ product, onUpdateProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(updatedProduct);
  };

  return (
    <div className="product-edit-form">
       
      
      
      <h2>Edit Product</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={updatedProduct.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={updatedProduct.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="category"
          value={updatedProduct.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <button type="submit">Update Product</button>
      </form>
      
    </div>
  );
}

export default UpdateProduct
