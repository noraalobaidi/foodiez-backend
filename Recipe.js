const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: String,
  image: String,
  category: String,
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "ingredient",
    },
  ],
});

module.exports = model("Recipe", AuthorSchema);
