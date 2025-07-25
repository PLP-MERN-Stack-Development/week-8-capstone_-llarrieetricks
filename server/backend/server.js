import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import orderRoutes from './routes/orderRoutes.js'; // ✅ Corrected import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use('/api/orders', orderRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('MongoDB connection failed:', error.message);
});
