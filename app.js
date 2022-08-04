const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res) => {
  res.send(`<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>`);
});

app.post("/product", (req, res) => {
  console.log(`:::req.body:::`, req.body);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});

app.listen(3000);