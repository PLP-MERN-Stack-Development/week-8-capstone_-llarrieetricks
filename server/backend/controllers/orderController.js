// Sample controller functions
const createOrder = (req, res) => {
  res.status(201).json({ message: 'Order created successfully' });
};

const getOrders = (req, res) => {
  res.status(200).json({ orders: [] });
};

module.exports = {
  createOrder,
  getOrders,
};
