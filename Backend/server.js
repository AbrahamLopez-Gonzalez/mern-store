// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
// npm run dev to lunch server
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allowes us to accept JSON data
// middleware

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}


app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
