import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders') // Backend must be running!
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            {order.customerName} - {order.foodItem} - Quantity: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
