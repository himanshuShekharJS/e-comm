//all the business logic here
//importing mongoDatabase here to create and add product
import productDatabase from '../models/ProductDB.js'
import mongoose from 'mongoose'
export const getAllProducts = async(req,res) =>{
   try {
       const products =  await productDatabase.find();
       console.log(products);
    res.status(200).json(products)
       
   } catch (error) {
       res.status(404).json({message: error.message})
   }
}

export const addProduct = async(req,res) =>{
    // const {title,price,ratings,category,selectedFiles} = req.body;
    const product = req.body;

    const newProduct = new productDatabase(product)
try {
    await newProduct.save();
    res.status(201).json(newProduct)
} catch (error) {
    res.status(409).json({message:error.message})
}
}
export const updateProduct = async(req,res) => {

    const{ id: _id } = req.params;
    console.log('Inside the updateProduct() in contorller.js--->',req.params);
    const product = req.body;
    console.log(req.body);
    //validating that id belongs to mongoose Object
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Product Found with that ID');
    const updatedProduct = await productDatabase.findByIdAndUpdate(_id,product,{new:true})
    res.json(updatedProduct)
}