import mongoose from "mongoose";
import Post from "./post.schema.js";
import User from "./user.schema.js";

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  content: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now } 
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
