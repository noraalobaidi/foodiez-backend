const Recipes = require("../../models/Recipe");
const User = require("../../models/User");

exports.getRecipes = async (req, res) => {
  try {
      // $push: { ingredients: ingredient._id }
      const recipes = await Recipes.find()
      res.status(201).json(recipes);
      // console.log("Hello this is getAll");
    }
    catch (err) {
    res.status(500).json("Server Error");
  }
};

// exports.getUserRecipes = async (req, res) => {
//     try {
//       //Somewhere in some other function maybe ingredients 
//         const newUser = await User.findById(req.user._id)
        
//         console.log("Hello this is getUser");
//       }
//       catch (err) {
//       res.status(500).json("Server Error");
//     }
// };
