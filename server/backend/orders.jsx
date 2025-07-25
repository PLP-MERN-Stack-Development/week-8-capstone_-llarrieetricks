// frontend/src/pages/Orders.jsx

import React, { useEffect, useState } from 'react';
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../api/orders';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    product: '',
    quantity: '',
    price: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch orders
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      console.error('Error fetching orders:', err.message);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editMode) {
        await updateOrder(editId, formData);
      } else {
        await createOrder(formData);
      }

      setFormData({ product: '', quantity: '', price: '' });
      setEditMode(false);
      setEditId(null);
      fetchOrders();
    } catch (err) {
      console.error('Error submitting form:', err.message);
    }
  };

  // Handle edit
  const handleEdit = (order) => {
    setFormData({
      product: order.product,
      quantity: order.quantity,
      price: order.price,
    });
    setEditMode(true);
    setEditId(order._id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await deleteOrder(id);
      fetchOrders();
    } catch (err) {
      console.error('Error deleting order:', err.message);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Orders</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          name="product"
          placeholder="Product"
          value={formData.product}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editMode ? 'Update Order' : 'Create Order'}
        </button>
      </form>

      <div>
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders found.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li
                key={order._id}
                className="border p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Product:</strong> {order.product}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {order.quantity}
                  </p>
                  <p>
                    <strong>Price:</strong> ${order.price}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(order)}
                    className="px-3 py-1 bg-yellow-400 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Orders;
