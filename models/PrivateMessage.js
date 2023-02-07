import mongoose from "mongoose";

const privateMessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "PrivateMessages",
  privateMessageSchema,
  "PrivateMessages"
);
