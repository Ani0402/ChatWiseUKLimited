import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config(".env")

const db=async()=>{
   try{
     const DB_URL=process.env.DB_URL;

     await mongoose.connect(DB_URL);

     console.log("DB connected successfully");
   }
   catch(error){
    console.log("Error connecting to MongoDB: " + error)
   }
}

export default db;