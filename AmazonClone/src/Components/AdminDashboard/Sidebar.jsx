import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen ,setActiveComponent }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar">

                <button className="sidebar-button" onClick={() => setActiveComponent('Component1')}> Search Product</button>
                <button className="sidebar-button" onClick={() => setActiveComponent('Component2')}>Add Product</button>
                <button className="sidebar-button">Update Product</button>
                <button className="sidebar-button">Delete Product</button>
            </div>
        </div>
    );
};

export default Sidebar;
