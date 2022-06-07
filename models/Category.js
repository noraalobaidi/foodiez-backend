const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
  },
});

module.exports = mongoose.model("Category", CategorySchema);
