const multer = require('multer');
const path = require('path');
const express = require("express");
const router = express.Router();
const { Product } = require('@/models');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Filter file
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('File type not supported'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 
  },
  fileFilter: fileFilter
});

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: "success",
      code: 200,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nameProduct, priceProduct, stockProduct, description } = req.body;
    const image = req.file.path; 
    const newProduct = await Product.create({
      nameProduct,
      priceProduct,
      stockProduct,
      description,
      image
    });
    res.status(201).json({
      status: "success",
      code: 201,
      data: newProduct
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message
    });
  }
};

module.exports = router;