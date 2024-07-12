import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/loader';
import './AllOrders.css'

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  const [loaderStatus, setLoaderStatus] = useState(false)

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
      if (response.status == 201) {
        alert('order status updated')
      } else {
        alert('order status not updated')
      }
      setOrders(orders.map(order => order._id === orderId ? response.data : order));
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
    setLoaderStatus(false)
  };

  return (
    <div className='mainDiv'>
      {loaderStatus && <Loader />}
      <table className='orderTable'>
        <tr>
          <th>Total Orders</th>
          <th>Pending orders</th>
        </tr>
        <tr>
          <td>{orders.length}</td>
          <td>{orders.filter((order)=>{
            return order.status == 'pending'
          }).length}</td>
        </tr>
      </table>
      {orders.length > 0 ? (
        <>
          
          <table className='orderTable'>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
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
                  <td>{order.createdAt}</td>
                  <td><p>{order.userId.name}</p>{order.userId.email}</td>
                  <td>
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>price</th>
                        </tr>
                      </thead>

                      {order.items.map((item) => (
                        <tr key={item._id}>
                          <td>{item.productId.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.productId.price}</td>
                        </tr>
                      ))}
                    </table>

                  </td>
                  <td>{order.totalPrice}</td>
                  <td>{order.status}</td>
                  <td>
                    <select  onChange={(e) => {

                      updateOrderStatus(order._id, e.target.value)
                    }}>
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h1 className='noOrder'> no orders</h1>
      )}
    </div>
  );
};

export default AllOrders;
