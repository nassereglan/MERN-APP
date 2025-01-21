import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js'

dotenv.config();

const app = express();

//middleware
app.use(express.json());

//the product routes from product.route.js file 
app.use("/api/products", productRoute );

const port = process.env.PORT
app.listen(port, () =>{
    connectDB();
    console.log("the server is running");
});