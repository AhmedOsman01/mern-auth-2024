import mongoose from "mongoose";

export const connectDB = async (params) => {
  try {
    console.log("mongo_uri", process.env.MONGODB_URL);
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error Connection to MongoDB:", error.message);
    process.exit(1); // 1 is failer , 0 status code is success
  }
};
