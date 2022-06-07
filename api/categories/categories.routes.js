const express = require("express");

const router = express.Router();


const { fetchCategories } = require("./categories.controller");


router.get("/allCategories", fetchCategories);

module.exports = router;
