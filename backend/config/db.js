const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected")

  } catch (error) {
    console.log("Conection Error "+ error)

  }
};
module.exports = connectDB;
