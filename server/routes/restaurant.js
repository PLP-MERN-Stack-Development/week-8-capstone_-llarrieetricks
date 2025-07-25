const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Menu = require('../models/Menu');

// Add new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add menu item to a restaurant
router.post('/:restaurantId/menu', async (req, res) => {
  try {
    const menu = new Menu({
      ...req.body,
      restaurantId: req.params.restaurantId
    });
    await menu.save();
    res.status(201).json(menu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all menu items for a restaurant
router.get('/:restaurantId/menu', async (req, res) => {
  try {
    const menuItems = await Menu.find({ restaurantId: req.params.restaurantId });
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
