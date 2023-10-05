// const express = require("express");
// const colors = require("colors");
// const { chats } = require("./data/data");
// const connectDB = require("./config/db");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const morgan = require("morgan");
// const otpRoutes = require("./routes/otpRoutes.js");
import express from "express";
import colors from "colors";
// import { chats } from "./data/data.js";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import otpRoutes from "./routes/otpRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/otp", otpRoutes);
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

// app.get("/api/chats", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chats/:id", (req, res) => {
//   // console.log(req);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

app.listen(
  8000,
  "192.168.29.114",
  console.log("Backend running on 8000".bgMagenta.black)
);
