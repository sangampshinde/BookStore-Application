import express from "express";
import mongoose from "mongoose";
const app = express();

// db connection
const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin%401@cluster0.pdbgysg.mongodb.net/AuthDB"
    );
    console.log("Connected to Database");
  } catch (error) {
    throw error;
  }
};

app.listen(8800, () => {
  connectMongoDB();
  console.log("Server is running on port 8800");
});
