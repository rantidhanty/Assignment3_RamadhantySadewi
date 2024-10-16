const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductNames,
  getProductNameById,
} = require("@/controller/cart");
const { upload } = require("@/controller/file");
const { Product } = require("../models");

router.post("/product", upload.single("image"), createProduct);
router.get("/product", getAllProduct);
router.put("/product/:id", upload.single("image"), updateProduct);
router.delete("/product/:id", deleteProduct);

router.get("/productNames", getProductNames);
router.get("/productName/:id", getProductNameById);

module.exports = router;
