// Cart.js
import React, { useEffect, useState } from 'react';
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Loader from '../Loader/loader';


const Cart = ({ cart, setCart, removeFromCart, user }) => {

  const [loaderStatus, setLoaderStatus] = useState(false)
  const [productQuentity, setProductQuentity] = useState(1)
  const [giveDiscount, setGiveDiscount] = useState(0)

  const total = cart.reduce((sum, product) =>
    (sum + product.price * product.quantity), 0);
  const discountamount = total * (parseInt(giveDiscount) / 100)
  const totalPrice = total - discountamount




  const decreaseQuantity = (product) => {
    if (product.quantity > 0) {
      cart.map(item => (
        item._id === product._id ? setProductQuentity(item.quantity -= 1) : null
      ))
    } else {
      removeFromCart(product)
    }
  }

  const manageDiscount = (e) => {
    setGiveDiscount(e.target.value)
  }

  const increaseQuantity = (product) => {
    if (product.quantity < 10) {
      cart.map(item => (
        item._id === product._id ? setProductQuentity(item.quantity += 1) : null
      ))

    } else {
      alert("You can't add more than 10 products")
    }

  }

  const placeOrder = async () => {
    setLoaderStatus(true)
    try {

      console.log(cart);
      const response = await axios.post('http://localhost:4000/user/orders', {
        "userId": `${user._id}`,
        "items": cart.map(product => ({
          "productId": `${product._id}`,
          "quantity": `${product.quantity}`
        })),
        "totalPrice": totalPrice
      }
      );
      if (response.status == 201) {
        alert('Order placed successfully')
      } else {
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
        {loaderStatus && <Loader />}
        <h2>Cart</h2>
        {cart.length > 0 ? (
          <>
            <table className='cartTable'>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Remove</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button onClick={() => removeFromCart(product)} className="btn btn-danger">remove</button></td>
                    <td>
                      <button onClick={() => decreaseQuantity(product)} className="btn btn-success">-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => increaseQuantity(product)} className="btn btn-success">+</button>
                    </td>
                    <td>{product.quantity * product.price}</td>

                  </tr>




                ))}
              </tbody>
            </table>
            <div className="total-price">Total Price: {total.toFixed(2)}</div>
            <div className="total-price">Discounted Price: {discountamount.toFixed(2)}</div>
            <div className="total-price">Net Price: {totalPrice.toFixed(2)}</div>
            <div className="discounts">

              <select name="" id="" onChange={manageDiscount} value={giveDiscount}>
                <option value="0">select discount</option>
                <option value="0">No discount</option>
                <option value="10">10% discount</option>
                <option value="20">20% discount</option>
                <option value="30">30% discount</option>
                <option value="40">40% discount</option>
              </select>
              <input type="text" placeholder='enter discount %' value={giveDiscount} onChange={manageDiscount} />


            </div>
            <button onClick={placeOrder} className='placeOrderBtn'>Place Order</button>
          </>

        ) : (
          <p>No products in cart</p>
        )}


      </div>
    </div>

  );
};

export default Cart;
