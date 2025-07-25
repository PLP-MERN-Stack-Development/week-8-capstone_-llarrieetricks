const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: "Mama’s Kitchen" },
    { id: 2, name: "Kuku Zone" },
  ]);
});

module.exports = router;
