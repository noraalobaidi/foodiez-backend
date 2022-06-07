const Category = require("../../models/Category");

const baseUrl = "http:localhost:8000";

exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
