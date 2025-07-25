const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  address: String,
  phone: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    }
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ['pending', 'preparing', 'delivered'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
