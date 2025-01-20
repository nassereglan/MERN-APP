import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready !');
});

const port = process.env.PORT
app.listen(port, () =>{
    connectDB();
    console.log("the server is running");
});