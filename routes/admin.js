const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("./../helpers/path");

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add_product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(`:::req.body:::`, req.body);
  res.redirect("/");
})

module.exports = router;