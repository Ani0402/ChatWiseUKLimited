import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profilePicture: { type: String, default: '' }, 
    bio: { type: String, default: '' }, 
    friends: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] },
    createdAt: { type: Date, default: Date.now } 
});

const User = mongoose.model("User", userSchema);

export default User;
