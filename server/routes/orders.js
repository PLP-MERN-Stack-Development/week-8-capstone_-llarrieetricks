const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 101, items: ['Burger', 'Fries'] },
    { id: 102, items: ['Pizza'] },
  ]);
});

module.exports = router;
