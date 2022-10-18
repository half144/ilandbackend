const express = require("express");
const app = express();
const products = require("./products");
const port = process.env.PORT || 3000


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
