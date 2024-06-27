import React, { useState } from 'react'

function SearchProduct() {


    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSearch = () => {
        // Implement the search functionality based on the selected category
        console.log(`Searching products in category: ${category}`);
    };





  return (
    <div className="container mx-auto mt-10">
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categorySelect">
                Select Product Category
            </label>
            <select
                id="categorySelect"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="HomeAppliances">Home Appliances</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
                <option value="books">Books</option>
            </select>
        </div>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSearch}
        >
            Search
        </button>
    </div>
</div>
  )
}

export default SearchProduct
