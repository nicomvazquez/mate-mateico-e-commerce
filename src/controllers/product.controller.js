import Product from "../models/product.model.js";
import mongoose from 'mongoose'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.sendStatus(400).json({ message: "product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getProductByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Obtener la categoría de los parámetros de la URL
    const categoryId = new mongoose.Types.ObjectId(category); // Convertir el ID de la categoría a ObjectId
    const products = await Product.find({ category: categoryId }); // Buscar productos que coincidan con la categoría
    res.status(200).json(products);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    const { filename } = req.file;
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      image: filename,
      category, 
    });
    const product = await newProduct.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, stock, image, category } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        stock,
        image,
        category,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res.sendStatus(400).json({ message: "product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
