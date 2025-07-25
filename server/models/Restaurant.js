const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  cuisine: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', RestaurantSchema);
