import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
  path: './'}
);  // ✅ this loads .env

connectDB()
.then(()=>{
  app.listen(process.env.PORT) || 4000,()=>{
    console.log(`server is rinning at${process.env.PORT}`)
  }
})
.catch((err)=>{
  console.log("DB connection failed");
  
})

































// import mongoose from "mongoose";
// import express from "express";
// import dotenv from "dotenv";

// dotenv.config();   // Load environment variables first

// const app = express();

// // ✅ Recommended — no need to pass useNewUrlParser & useUnifiedTopology in Mongoose v7+
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     console.log("✅ MongoDB Connected");

//     app.listen(process.env.PORT, () => {
//       console.log(`🚀 Server running on port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
