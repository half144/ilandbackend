const express = require("express");
const app = express();
const products = require("./products");
const port = process.env.PORT || 3000


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


app.get("/iphones", function (req, res) {
  res.json(products.iphones);
});

app.get("/mac", function (req, res) {
  res.json(products.mac);
});

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const product = products.products.find((e) => e.id == id);
  res.json(product);
});

app.listen(port, () => {
  console.log("listen on " + port);
});
