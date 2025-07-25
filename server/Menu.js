// server/models/Menu.js

const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  }
});

const menuSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  items: [menuItemSchema]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Menu', menuSchema);
