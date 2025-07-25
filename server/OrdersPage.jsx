import React, { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error('Error fetching orders:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="mb-2 p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">Order #{order.id}</h2>
          <ul className="list-disc ml-5">
            {order.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
