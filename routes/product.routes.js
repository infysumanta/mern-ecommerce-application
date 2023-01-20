const express = require("express");
const { productController } = require("../controllers");
const { upload } = require("../config/fileUtils");

const router = express.Router();

router
  .route("/")
  .post(upload.single("image"), productController.createProduct)
  .get(productController.getAllProducts);

router
  .route("/:id")
  .get(productController.getSingleProduct)
  .put(upload.single("image"), productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
