import { Router } from "express";
import RoomMessage from "../models/RoomMessage.js";

const app = Router();

// get all room messages by room
app.get("/all", async (req, res) => {
  try {
    const roomMessages = await RoomMessage.find({
      room: req.query.room,
    }).sort({ createdAt: -1 });
    res.status(200).json(roomMessages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add a room message

app.post("/add", async (req, res) => {
  const { sender, room, message } = req.body;

  const newRoomMessage = new RoomMessage({ sender, room, message });

  try {
    await newRoomMessage.save();
    res.status(200).json({ message: "Room message added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default app;
