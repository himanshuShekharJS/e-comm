//all the business logic here
//importing mongoDatabase here to create and add product
import productDatabase from "../models/ProductDB.js";
import mongoose from "mongoose";
export const getAllProducts = async (req, res) => {
  try {
    const products = await productDatabase.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new productDatabase(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;
  //validating that id belongs to mongoose Object
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Product Found with that ID");
  const updatedProduct = await productDatabase.findByIdAndUpdate(_id, product, {
    new: true,
  });
  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id: _id } = req.params;
  //validating the id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Product Found with that ID");
  const deletedProduct = await productDatabase.findByIdAndRemove(_id);

  res.json({ message: "Product deleted SuccessFully!!" });
};

export const filterProduct = async (req, res) => {
  const { category } = req.params;
  console.log(category);
  if (category === "high_to_low") {

    try {
      const sortedProducts = await productDatabase.find().sort({ price: -1 });
      res.status(200).json(sortedProducts);
    } catch (error) {
      console.log(error);
    }
  } else if (category === "low_to_high") {
    try {
      const sortedProducts = await productDatabase.find().sort({ price: 1 });
      res.status(200).json(sortedProducts);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const products = await productDatabase.find({ categoryValue: category });
      res.status(200).json(products);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};
export const filterBetweenRange = async (req, res) => {
  
  const { min, max } = req.params;

  try {
    const products = await productDatabase.find({price:{$gte:200,$lte:40000}});
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

export const searchDatabase = async (req, res) => {
  const { value } = req.params;
  try {
    
    const responseAfterSearch = await productDatabase.find({
      $text: { $search: value },
    });
    res.status(200).json(responseAfterSearch);
  } catch (error) {
    console.log(error);
  }
};
