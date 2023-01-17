const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("common"));
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api", require("./routes/routes"));

app.get("/products", (req, res) => {
  res.send(require("./dummyData"));
});

app.use("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
