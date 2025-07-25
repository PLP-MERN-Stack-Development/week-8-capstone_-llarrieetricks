import express from 'express';

const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Order route working fine ✅' });
});

// You can add more routes like:
// router.post('/', createOrder);
// router.get('/:id', getOrderById);
// etc.

export default router; // ✅ Export default router
