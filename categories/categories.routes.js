const express = require("express");

const router = express.Router();

const { fetchCategories } = require("./categories.controllers");

router.get("/allCategories", fetchCategories);

module.exports = router;
