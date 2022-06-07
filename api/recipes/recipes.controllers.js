const recipes = require("../../models/Recipe");
const User = require("../../models/User");

exports.getAllRecipes = async (req, res) => {
  try {
      console.log("Hello this is getAll");
    }
    catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.getUserRecipes = async (req, res) => {
    try {
        console.log("Hello this is getUser");
      }
      catch (err) {
      res.status(500).json("Server Error");
    }
};
