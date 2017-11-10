const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/*", (req, res) => {
  res.redirect("/");
});

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
