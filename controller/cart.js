const { Product } = require("@/models");
const { where } = require("sequelize");

//read
const getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: "success",
      code: 200,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

//get by names
const getProductNames = async (req, res) => {
  try {
    const productNames = await Product.findAll({
      attributes: ["nameProduct"],
    });
    res.status(200).json({
      status: "success",
      code: 200,
      data: productNames,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

//get by id
const getProductNameById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      attributes: ["nameProduct", "priceProduct"],
      where: { idProduct: id },
    });
    if (product) {
      res.status(200).json({
        status: "success",
        code: 200,
        data: product,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};
//cread
const createProduct = async (req, res) => {
  try {
    const { nameProduct, priceProduct, stockProduct, description } = req.body;
    const image = req.file.path;
    const newProduct = await Product.create({
      nameProduct,
      priceProduct,
      stockProduct,
      description,
      image,
    });
    res.status(201).json({
      status: "succes",
      code: 200,
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: error,
      code: 500,
      message: error.message,
    });
  }
};

//update
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameProduct, priceProduct, stockProduct, description } = req.body;
    const updates = { nameProduct, priceProduct, stockProduct, description };
    if (req.file) {
      updates.image = req.file.path;
    }
    const updated = await Product.update(updates, {
      where: { idProduct: id },
    });
    if (updated) {
      const updatedProduct = await Product.findOne({
        where: { idProduct: id },
      });
      res.status(200).json({
        status: "success",
        code: 200,
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

//delete
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { idProduct: id } });
    if (deleted) {
      res.status(200).json({
        status: "success",
        code: 200,
        message: "Product deleted",
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductNames,
  getProductNameById,
};
