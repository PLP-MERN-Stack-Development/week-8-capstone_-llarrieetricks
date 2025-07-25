const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/order'); // Adjust path as needed

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Route for orders
app.use('/api/orders', orderRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
