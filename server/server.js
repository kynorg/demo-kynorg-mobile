const express = require('express');
const morgan = require('morgan');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use('/users', require('./routes/User'));

app.get('/', (req, res) => {
  res.send('Hello KynOrg Mobile!');
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('kynorgmobile.com listening at http://%s:%s', host, port);
});
