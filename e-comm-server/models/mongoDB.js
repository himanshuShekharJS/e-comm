//making use of all the mongoose functionality
import mongoose from 'mongoose';


//creating Schema
const schema = mongoose.Schema({
    title: String,
    category: String,
    ratings: Number,
    price: Number,
    selectedFile: String,
    //going to convert the uploaded image into string using base64 (React)
});

//turning schema into models
const mongoDatabase = mongoose.model('mongoDatabase',schema);

export default mongoDatabase; 