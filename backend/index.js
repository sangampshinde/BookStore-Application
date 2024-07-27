import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import roleRoute from "./routes/roleRoute.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/role", roleRoute);














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
