const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: String,
  image: String,
  category: String,
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  user : {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = model("Recipe", RecipeSchema);
