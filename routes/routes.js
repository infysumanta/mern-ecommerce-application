const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/payments", require("./payment.routes"));
router.use("/products", require("./product.routes"));

module.exports = router;
