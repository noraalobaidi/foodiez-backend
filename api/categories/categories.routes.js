const express = require("express");

const router = express.Router();

const {
  fetchCategories,
  addCategory,
} = require("../categories/categories.controller");

router.get("/allCategories", fetchCategories);
router.post("/newCategory", addCategory);

module.exports = router;
