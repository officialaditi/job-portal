import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully:-".blue, conn.connection.host);
  } catch (err) {
    console.error("Database connect error".red, err);
    process.exit(1);
  }
};
export default connectDB;
