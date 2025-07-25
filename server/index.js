const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Import routes
const orderRoutes = require('./routes/orders');
const restaurantRoutes = require('./routes/restaurants');

// Use routes
app.use('/api/orders', orderRoutes);
app.use('/api/restaurants', restaurantRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
