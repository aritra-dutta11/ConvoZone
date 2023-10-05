import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connection established, host is ${conn.connection.host}`.bgMagenta.black
    );
  } catch (error) {
    console.log(`Error in connection ${error}`.bgRed.white);
  }
};

export default connectDB;
