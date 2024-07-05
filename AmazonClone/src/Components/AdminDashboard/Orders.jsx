import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/loader';
import './AllOrders.css'

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('');
  const [loaderStatus, setLoaderStatus]=useState(false)

  useEffect(() => {
    fetchOrders();
  }, []);

  const calculateTotalProducts = () => {
     let totalProducts = 0;
    orders.forEach(order => {
     
      order.items.forEach(item => {
        totalProducts += item.quantity;
         
      });
       order.totalProducts = totalProducts;
    });
    return totalProducts

  }


  const fetchOrders = async () => {
    setLoaderStatus(true)
    try {
      const response = await axios.get('http://localhost:4000/allorders');
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
    setLoaderStatus(false)
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    setLoaderStatus(true)
    try {
      const response = await axios.put(`http://localhost:4000/allorders/updateorderstatus/${orderId}`, { status: newStatus });
      console.log(response.data);
      if (response.status==201) {
        alert('order status updated')
      }else{
        alert('order status not updated')
      }
      setOrders(orders.map(order => order._id === orderId ? response.data : order));
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
    setLoaderStatus(false)
  };

  return (
    <div>
      {loaderStatus && <Loader/>}
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Products</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.userId.name}</td>
              <td>
                
                  <div >
                    {calculateTotalProducts(order.items)}
                     
                  </div>
                 
              </td>
              <td>${order.totalPrice}</td>
              <td>{order.status}</td>
              <td>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                <button onClick={() => updateOrderStatus(order._id, status)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
