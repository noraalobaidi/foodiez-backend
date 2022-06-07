const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("User", UserSchema);
