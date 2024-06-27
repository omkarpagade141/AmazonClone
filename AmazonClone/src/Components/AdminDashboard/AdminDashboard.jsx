import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';
import SearchProduct from './SearchProduct';

const AdminDashboard = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



   

    return (
        <>

        
            <div className="adminNav">
                <button className="toggle-button" onClick={toggleSidebar}>
                    {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>
            </div>
            <SearchProduct/>


            <Sidebar isOpen={isSidebarOpen} />
             
           
        </>
    );
};

export default AdminDashboard;
