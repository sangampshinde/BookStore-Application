import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import roleRoute from "./routes/roleRoute.js";
import authRoute from "./routes/authRoute.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/role", roleRoute);
app.use("/api/auth",authRoute);






// Response handlers middleware
app.use((obj, req, res, next)=>{
  const statusCode = obj.status || 500;
  const message = obj.message || "Something went wrong!";
  return res.status(statusCode).json({
      success: [200,201,204].some(a=> a === obj.status) ? true : false,
      status: statusCode,
      message: message,
      data: obj.data
  });
});













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
