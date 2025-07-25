// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [{ name: String, quantity: Number }],
  totalPrice: Number,
  status: { type: String, default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
