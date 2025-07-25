const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  items: [
    {
      name: String,
      price: Number,
      description: String
    }
  ]
});

module.exports = mongoose.model('Menu', menuSchema);
