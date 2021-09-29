const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
  try {
    /* const response = await User.sync({ force: true }); // To create the table if it does not exist
    res.send("TABLE HAS BEEN CREATED"); */
    const response = await User.findAll() // show all data in the table
    res.json(response)
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = router
