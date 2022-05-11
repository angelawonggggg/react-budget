import mongoose from "mongoose";
var Schema = mongoose.Schema;

export type User = {
  isLoggedIn: boolean;
  username: string;
  password: string;
};

var user = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

var User = mongoose.model("User", user);
