const express = require("express");
const router = express.Router();
const { getAllProduct, createProduct, updateProduct, deleteProduct } = require("@/controller/cart");
const { upload } = require("@/controller/file");


router.post("/product", upload.single("image"), createProduct);
router.get("/product", getAllProduct);
router.put("/product/:id", upload.single("image"), updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
