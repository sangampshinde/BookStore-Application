import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();


// db connection
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Database");
  } catch (error) {
    throw error;
  }
};

app.listen(8800, () => {
  connectMongoDB();
  console.log("Server is running on port 8800");
});
