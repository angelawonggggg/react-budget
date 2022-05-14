import mongoose from "mongoose";

export type User = {
  isLoggedIn: boolean;
  username: string;
  password: string;
};

var user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", user);
