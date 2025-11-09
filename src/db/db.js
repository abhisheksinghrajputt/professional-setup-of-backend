import mongoose from "mongoose";
import { DB_NAME } from "../constrint.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log(`✅ MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ DB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
