// Cart.js
import React, { useState } from 'react';
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Loader from '../Loader/loader';


const Cart = ({ cart,setCart ,removeFromCart, user }) => {
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
  const [loaderStatus, setLoaderStatus]=useState(false)
  
   


  const placeOrder = async () => {
    setLoaderStatus(true)
    try {
     
      console.log(cart);
      const response = await axios.post('http://localhost:4000/user/orders', {
        "userId": `${user._id}`,
        "items": cart.map(product => ({
          "productId": `${product._id}`,
          "quantity": 1
        })),
        "totalPrice": totalPrice
      }
      );
      if (response.status==201) {
        alert('Order placed successfully')  
      }else{
        alert('Something went wrong')
      }
      console.log('Order placed:', response.data);
      setCart([]);
      setTotal(0);
    } catch (error) {
      console.error('Order failed:', error);
    }
    setLoaderStatus(false)
  };

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        {loaderStatus && <Loader/>}
        <h2>Cart</h2>
        {cart.length > 0 ? (
          <ol className="cart-list">
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product)}><DeleteIcon/></button>
                
              </li>
            ))}
          </ol>
        ) : (
          <p>No products in cart</p>
        )}
        <div className="total-price">Total Price: ${totalPrice}</div>
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
