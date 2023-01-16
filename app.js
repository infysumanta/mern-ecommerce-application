const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("common"));

app.get("/", (req, res) => {
  res.send("Welcome to out Oneline shop API");
});

module.exports = app;