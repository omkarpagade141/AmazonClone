import { useState } from 'react'

import './App.css'
import Navbar from './Components/Header/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registersignup from './Components/register/Registersignup'
import RegistersignupAdmin from './Components/register/RegistersignupAdmin';
import Home from './Components/HomePage/Home';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
 

function App() {


  return (
    <>
      <Router>
        <div >
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Registersignup />} />
            <Route path="/admin" element={<RegistersignupAdmin />} /> /admin/dashboard
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />



          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
