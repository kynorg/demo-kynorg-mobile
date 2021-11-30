const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');



router.get('/', async (req, res) => {
  let response = await Cart.sync();
  response = await Cart.findAll();
  res.send(response);
});

module.exports = router;