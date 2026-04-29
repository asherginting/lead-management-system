const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
  try {
    const { name, email, status } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    const lead = await Lead.create({
      name,
      email,
      status,
    });

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);

      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
