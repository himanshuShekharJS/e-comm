import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/router.js';
import dotenv from 'dotenv'
const app = express();

app.use(express.json({limit: '30mb', extended:true}))
app.use(express.urlencoded({limit: '30mb', extended:true}))
app.use(cors()); //it should always be before routing any requests
app.use("/",router);
dotenv.config();


const PORT = process.env.PORT || 5000;

//connecting to database
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false}).then(()=>app.listen(PORT,()=>console.log(`Connection to DB successfull!! \nServer Running on PORT: ${PORT}`))).catch((err)=>console.error(err.message))

//avoidung thhe console warning
mongoose.set('useFindAndModify',false);

//using mongoDB Atlas 