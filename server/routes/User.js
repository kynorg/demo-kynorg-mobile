const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const saltRounds = 10;

router.get('/', async (req, res) => {
  try {
    User.sync();
    const response = await User.findAll();
    res.json(response);
  } catch (error) {
    console.error(error.message);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { username, password, type } = req.body; // remove type if creating a client account
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const [user, created] = await User.findOrCreate({
        where: { username: username },
        defaults: {
          username: username,
          password: hash,
          accountType: type, // remove if creating a client account
        },
      });
      created
        ? res.send({
            username: user.username,
            id: user.id,
            type: user.accountType,
          })
        : res.send({ message: 'Username Already Taken' });
    });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username: username },
      attributes: ['username', 'password', 'accountType'],
    });
    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.status(200).send({
          username: user.username,
          id: user.id,
          type: user.accountType,
        });
      } else {
        res.send({ message: 'Incorrect Password' });
      }
    } else {
      res.status(404).send({ message: 'username does not exist' });
    }
  } catch (err) {
    res.status(422).send(err.message);
  }
});

module.exports = router;
