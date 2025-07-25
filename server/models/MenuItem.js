const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: Number,
  description: String,
  image: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', MenuItemSchema);
