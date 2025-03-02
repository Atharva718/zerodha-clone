import express from "express";
import User from "./model/UserModel.js";
import passport from "passport";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email });

    await User.register(user, password);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    req.login(user, { session: false }, (err) => {
      if (err) return res.status(500).json({ error: err.message });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.cookie("jwt", token, { httpOnly: true, secure: false });
      res.json({ message: "Login successful", token });
    });
  })(req, res, next);
});

// Logout
router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  req.logout(() => {
    res.json({ message: "Logged out successfully" });
  });
});

export default router;
