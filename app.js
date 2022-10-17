const express = require("express");
const app = express();
const products = require("./products");

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

app.listen(3000, () => {
  console.log("listen on 3000");
});
