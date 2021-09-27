const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan('combined'));

//database connection
const db = require("./config/database");

//confirm database connection
/*db.authenticate()
    .then(()=> console.log("Database Connected"))
    .catch((err) => console.error(`Error ${err}`));
*/


//users routes 
app.use("/users", require("./routes/User"));

app.get("/", function(req, res) {
  res.send("Hello KynOrg Mobile!");
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log("kynorgmobile.com listening at http://%s:%s", host, port);
});
