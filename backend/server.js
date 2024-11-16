import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("api running...");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server started at port ${process.env.PORT}`.bgMagenta);
});
