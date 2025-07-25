// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });
  })
  .catch((err) => console.error(err));
