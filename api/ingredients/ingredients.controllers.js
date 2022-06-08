const Ingredient = require("../../models/Ingredient");


exports.fetchIngredients = async (req, res) => {
  try {
    const ingredients=await Ingredient.find();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.createIngredient = async(req,res)=>{
try{
  const newIngredient = await Ingredient.create(req.body);
    res.status(201).json(newIngredient);

}
catch(error){
  res.status(500).json("Server Error");
}
};
