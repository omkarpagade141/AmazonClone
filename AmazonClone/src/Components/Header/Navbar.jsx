import React from 'react'
import './Navbar.css'
import AmazonLogo from './amazon_logo.png'
import { NavLink } from 'react-router-dom'
import Home from '../HomePage/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'


function Navbar({ user, cart,toggleCart  }) {
    return (
        <div className='navDiv'>
            <header>
                <div className="logo">
                    <NavLink to='/home'><img src={AmazonLogo} alt="Amazon Logo" /></NavLink>
                </div>
                <div className="deliverAddress navLinkHover">
                    <div className="addressChange">
                        <p className="first">Deliver to <span>Pune</span></p>
                        <p>Change location</p>
                    </div>

                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
                <div className="navLinks ">
                    <div className="navLinkHover">
                        <NavLink to="/signin">{user ? <span>Welcome, {user.name}</span> : <span>sign In</span>}</NavLink>
                    </div>
                    <div className="navLinkHover">
                        <NavLink to="#">Returns & Orders</NavLink>
                    </div>
                    <div className="navLinkHover cartBtn">


                        <button to="#" onClick={toggleCart}>
                            <ShoppingCartIcon />
                            <span>Cart: {cart.length} </span>
                        </button>
                    </div>



                </div>
            </header>
            <nav className="mainNav">
                <a href="#">Today's Deals</a>
                <a href="#">Customer Service</a>
                <a href="#">Gift Cards</a>
                <a href="#">Sell</a>
            </nav>

        </div>
    )
}

export default Navbar
