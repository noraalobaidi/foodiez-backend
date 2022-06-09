const express = require("express");

const router = express.Router();

const { getRecipes , recipeCreate} = require("./recipes.controllers");

router.get("/recipes", getRecipes);
router.post("/recipes", recipeCreate);
// router.get("/recipes/:userId", getUserRecipes);



module.exports = router;
