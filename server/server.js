const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const Product = require('./routes/Product');
const User = require('./routes/User');
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use('/users', User);
app.use('/Products', Product);

app.get('/', (req, res) => {
  res.send('Hello KynOrg Mobile!');
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('kynorgmobile.com listening at http://%s:%s', host, port);
});
