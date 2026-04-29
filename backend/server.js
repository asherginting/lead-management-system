const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const leadRoutes = require("./routes/leadRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/leads", leadRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Lead Management API is running",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
