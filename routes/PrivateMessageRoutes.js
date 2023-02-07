import { Router } from "express";
import PrivateMessage from "../models/PrivateMessage.js";

const app = Router();

// get all private messages by sender
app.get("/all", async (req, res) => {
  try {
    const privateMessages = await PrivateMessage.find({
      sender: req.query.sender,
    }).sort({ createdAt: -1 });
    res.status(200).json(privateMessages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add a private message
app.post("/add", async (req, res) => {
  const { sender, receiver, message } = req.body;

  const newPrivateMessage = new PrivateMessage({ sender, receiver, message });

  try {
    await newPrivateMessage.save();
    res.status(200).json({ message: "Private message added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default app;
