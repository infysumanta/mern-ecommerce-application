const express = require("express");
const { productController } = require("../controllers");
const { upload } = require("../config/fileUtils");

const router = express.Router();

router
  .route("/")
  .post(upload("image"), productController.createProduct)
  .get(productController.getAllProducts);

router
  .route("/:id")
  .get(productController.getSingleProduct)
  .put(upload("image"), productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
