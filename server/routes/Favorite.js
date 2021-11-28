const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');



router.get('/', async (req, res) => {
  let response = await Favorite.sync();
  response = await Favorite.findAll();
  res.send(response);
});

module.exports = router;