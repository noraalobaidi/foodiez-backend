const express = require("express");

const router = express.Router();

const {
  fetchIngredients,
  createIngredient,
} = require("./ingredients.controllers");

router.get("/ingredients", fetchIngredients);
router.post("/createIngredient", createIngredient);

module.exports = router;
