const express = require('express');
const morgan = require('morgan');
// database connection
/* const db =  require("./config/database"); */
const app = express();

app.use(morgan('combined'));
// confirm database connection
/* db.authenticate()
    .then(()=> console.log("Database Connected"))
    .catch((err) => console.error(`Error ${err}`));
*/
// users routes
app.use('/users', require('./routes/User'));

app.get('/', (req, res) => {
  res.send('Hello KynOrg Mobile!');
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('kynorgmobile.com listening at http://%s:%s', host, port);
});
