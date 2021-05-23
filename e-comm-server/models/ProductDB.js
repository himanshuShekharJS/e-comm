import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
    title:String,
    categoryValue:String,
    price:Number,
    selectedFile:String,
});


const productDatabase = mongoose.model('productDatabase',productSchema)


export default productDatabase;