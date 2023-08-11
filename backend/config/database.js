import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.log(error.reason);
    });
};

export default connectDB;
