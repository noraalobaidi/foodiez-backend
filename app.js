const connectDb = require("./database");
const express = require("express");
const categoriesRoutes = require("./api/categories/categories.routes");
const recipesRoutes = require("./api/recipes/recipes.routes");
const cors = require("cors");


const app = express();
connectDb();
app.use(express.json());

app.use(recipesRoutes);
app.use("/categories", categoriesRoutes);
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message || "Internal Server Error",
//     },
//   });
// });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
