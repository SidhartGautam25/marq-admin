const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
