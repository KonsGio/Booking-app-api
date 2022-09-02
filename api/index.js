import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

  mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
  });
   
  
  // middle layers
  app.use("/auth", authRoute);

app.listen(8800, () => {
    connect()
    console.log("Connected to back-end")
});