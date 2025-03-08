import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  const { username, password } = req.body; // Removed email

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = new User({ username, password: hashedPassword }); // Removed email
    await newUser .save();
    res.status(201).json({ message: "User  registered successfully!" });
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ error: "Error registering user" });
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { username, password } = req.body; // Changed to username

  try {
    const user = await User.findOne({ username }); // Changed to find by username
    if (!user) return res.status(400).json({ error: "User  not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ error: "JWT_SECRET is missing in environment variables" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log("✅ Generated Token:", token);
    res.json({ token, username: user.username });
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ error: "Error logging in" });
  }
});

export default router;