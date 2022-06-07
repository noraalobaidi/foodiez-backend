const express = require("express");

const router = express.Router();

const { getAllRecipes, getUserRecipes} = require("./recipes.controllers");

router.post("/recipes/", getUserRecipes);
router.get("/recipes", getAllRecipes);

module.exports = router;
