import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MonGoDb Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);  
        process.exit(1);
    }
    // await mongoose.connect("mongodb+srv://nassersalem:Nasser5000@cluster0.dvp6x.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0")
    // .then(() => {
    //   console.log("Connected to database!");
    // })
    // .catch(() => {
    //   console.log("Connection failed!");
    // });
  }