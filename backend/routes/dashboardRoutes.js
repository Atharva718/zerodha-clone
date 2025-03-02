import express from "express";
import { authenticateUser } from "./middlewares/AuthMiddleware.js";

const router = express.Router();

router.get("/", authenticateUser, (req, res) => {
  res.json({ message: "Welcome to your dashboard!", user: req.user });
});

export default router;
