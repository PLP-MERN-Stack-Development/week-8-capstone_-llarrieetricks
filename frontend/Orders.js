// src/components/Orders.js
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error('Error fetching orders:', err));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id}: {order.items.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
