//all the business logic here
//importing mongoDatabase here to create and add product
import productDatabase from '../models/mongoDB.js'

export const getHomePage = async(req,res) =>{
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