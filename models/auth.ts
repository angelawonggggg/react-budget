import mongoose from "mongoose";
import Schema = mongoose.Schema;
import ObjectId = Schema.Types.ObjectId;

export type User = {
  _id: ObjectId;
  isLoggedIn: boolean;
  username: string;
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
