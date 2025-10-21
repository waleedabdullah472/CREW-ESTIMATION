import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  project: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  name: { type: String, default: "Anonymous" },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

export default mongoose.model("Review", reviewSchema);
