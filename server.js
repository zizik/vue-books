const path = require("path");
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendfile("/dist/index.html");
});

app.get("/*", (req, res) => {
  res.redirect("/");
});

app.listen(app.get("port"), () => {
  console.log(`Server started at port ${app.get("port")}`);
});
