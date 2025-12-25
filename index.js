
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1> Hello Mohamed Abdou this is my node-app docker !<h1>");
});

app.listen(PORT, () => {
  console.log(`App is up and running on port: ${PORT}`);
});