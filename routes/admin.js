const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("./../helpers/path");

const products = [];

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add_product.html"));
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;