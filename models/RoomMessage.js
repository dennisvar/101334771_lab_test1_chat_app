import mongoose from "mongoose";

const roomMessageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  sender: {
    type: String,
  },
  room: {
    type: String,
  },
  timestamps: true,
});

export default mongoose.model("RoomMessage", roomMessageSchema);
