require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const favoriteRoutes = require("./routes/review.routes");
const reviewRoutes = require("./routes/review.routes");

const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/reviews", reviewRoutes);

app.get("*", (req, res) => {
  res.sendFile("/build/index.html", { root: _dirname + "/" });
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// npm run-script dev (run nodemon)

// npm run-script build (ready to deploy)
