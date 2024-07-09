import { useState } from 'react'

import './App.css'
import Navbar from './Components/Header/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registersignup from './Components/register/Registersignup'
import RegistersignupAdmin from './Components/register/RegistersignupAdmin';
import Home from './Components/HomePage/Home';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Cart from './Components/Cart/Cart';
 

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogin = (data) => {
    setUser(data);
    console.log(data,'asdfgbnm');
  };

  const addToCart = (product) => {
    if (user) {
      product.quantity=1
      setCart((prevCart) => [...prevCart, product]);
    }
    else{
      alert("Please Login to add to cart")
    }
    
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product._id !== productToRemove._id)
    );
  };


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <>
      <Router>
        <div className='mainDiv'>
          <Navbar user={user} cart={cart} toggleCart={toggleCart}/>
          <Routes>
            <Route path="/home" element={<Home onLogin={handleLogin} addToCart={addToCart}/>} />
            <Route path="/" element={<Home onLogin={handleLogin} addToCart={addToCart}/>} />
            <Route path="/signin" element={<Registersignup onLogin={handleLogin} />} />
            <Route path="/admin" element={<RegistersignupAdmin />} /> /admin/dashboard
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />

            

          </Routes>
        </div>
      </Router>
      {isCartOpen && <Cart cart={cart} removeFromCart={removeFromCart} user={user} />}
    </>
  )
}

export default App
