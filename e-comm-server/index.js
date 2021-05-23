import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/router.js';

const app = express();

app.use(express.json({limit: '30mb', extended:true}))
app.use(express.urlencoded({limit: '30mb', extended:true}))
app.use(cors()); //it should always be before routing any requests
app.use("/",router);

//will be stroing this credentials in env_var at the end
const CONNECTION_URL = 'mongodb+srv://himanshuShekharJS:createDB@0019@cluster0.izxna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const PORT = process.env.PORT || 5000;

//connecting to database
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false}).then(()=>app.listen(PORT,()=>console.log(`Connection to DB successfull!! \nServer Running on PORT: ${PORT}`))).catch((err)=>console.error(err.message))

//avoidung thhe console warning
mongoose.set('useFindAndModify',false);

//using mongoDB Atlas 