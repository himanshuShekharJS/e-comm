import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    title:{type: String,index: true},
    categoryValue:String,
    price:Number,
    selectedFile:String,
});


const productDatabase = mongoose.model('productDatabase',productSchema)

export default productDatabase;