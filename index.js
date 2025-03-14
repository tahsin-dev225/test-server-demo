import express from 'express'
import cors from 'cors';
import router from './src/app/route/route.js';
const app = express();
import dotenv from 'dotenv'
dotenv.config()

app.use(cors());

app.use(express.json());

app.use('/api/v1', router);

app.get('/', (req,res)=>{
    res.json({message : "Welcome to the express server!"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log("Server is running on port ",PORT)
})