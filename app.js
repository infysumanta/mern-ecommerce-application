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

app.use("/api", require("./routes/routes"));

app.get("/products", (req, res) => {
  res.send(require("./dummyData"));
});
module.exports = app;
