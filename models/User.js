const { model, Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

UserSchema.plugin(uniqueValidator);
module.exports = model("User", UserSchema);
