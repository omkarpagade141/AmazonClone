import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('image', product.image); 

    try {
      const response = await axios.post('http://localhost:4000/admincrud/products/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input 
        type="text" 
        name="name" 
        value={product.name} 
        onChange={handleChange} 
        placeholder="Name" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
      <input 
        type="text" 
        name="description" 
        value={product.description} 
        onChange={handleChange} 
        placeholder="Description" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
      <input 
        type="number" 
        name="price" 
        value={product.price} 
        onChange={handleChange} 
        placeholder="Price" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
      <select 
        name="category" 
        value={product.category} 
        onChange={handleChange} 
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="HomeAppliances">Home Appliances</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
        <option value="books">Books</option>
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
      <input 
        type="file" 
        name="image" 
        onChange={handleFileChange} 
        className="block w-full text-gray-700 py-2 px-3 bg-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
    <div className="flex items-center justify-between">
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Product
      </button>
    </div>
  </form>
  
  );
};

export default AddProduct;
