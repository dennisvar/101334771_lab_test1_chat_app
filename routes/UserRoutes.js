import { Router } from "express";
import User from "../models/User.js";

const app = Router();

// add a user

app.post("/signup-add", async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;

  const newUser = new User({ username, firstname, lastname, email, password });

  try {
    await newUser.save();
    res.status(200).json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// login a user
app.post("/login-check", async (req, res) => {
  const { username, password } = req.body;

  try {
    const foundUser = User.find({ username, password });
    if (foundUser && foundUser.password === password) {
      res.status(200).json({ message: "User logged in successfully" });
    } else {
      res.status(404).json({ message: "Username or password is wrong" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default app;
