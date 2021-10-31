const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');

const { v4: uuidv4 } = require('uuid');
const DIR = 'public';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    const fileName = `${uuidv4()}.${ext}`;
    cb(null, fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

router.get('/', async (req, res) => {
  let response = await Product.sync();
  response = await Product.findAll();
  res.send(response);
});

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // console.log(req.file); // Here you will get the file
    const { name, price, description } = req.body;
    const filename = req.file.filename;
    const product = await Product.create({
      productName: name,
      price: price,
      description: description,
      image: filename,
    });
    return res.status(200).send(`${product.productName} has been added`);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
