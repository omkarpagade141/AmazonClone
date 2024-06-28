import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';
import SearchProduct from './SearchProduct';
import AddProduct from './AddProduct';

const AdminDashboard = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [activeComponent, setActiveComponent] = useState('Component1');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Component1':
        return <SearchProduct/>;
      case 'Component2':
        return <AddProduct />;
      default:
        return <SearchProduct />;
    }
  };



   

    return (
        <>

        
            <div className="adminNav">
                <button className="toggle-button" onClick={toggleSidebar}>
                    {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>
            </div>
            {renderComponent()}
            


            <Sidebar isOpen={isSidebarOpen} setActiveComponent={setActiveComponent} />
             
           
        </>
    );
};

export default AdminDashboard;
