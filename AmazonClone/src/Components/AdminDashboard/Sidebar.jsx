import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar">

                <button className="sidebar-button"> Search Product</button>
                <button className="sidebar-button">Add Product</button>
                <button className="sidebar-button">Update Product</button>
                <button className="sidebar-button">Delete Product</button>
            </div>
        </div>
    );
};

export default Sidebar;
