const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { env } = require("./environment/environment");
const router = express.Router();
const path = require('path');
const routes = require("./route");
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', function (req, res) {
  res.status(200).send({ a: 'Welcome Rahul_SuperUser15.' });
});
app.use(express.static(path.join(__dirname, '../public')));

//Mapping all modules path and path-handler
routes.map(route => {
  app.use(route.path, route.handler);
});


app.listen(port, () => {
  console.log(`Server started at  ${port}, ${process.env.NODE_ENV}, Database - ${process.env.MONGODB_URI}`);
});
