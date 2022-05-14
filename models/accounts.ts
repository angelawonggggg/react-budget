import mongoose from "mongoose";

export type Account = {
  id: string;
  title: string;
  balance: number;
  balanceChange: number;
  notes: string;
};

const accountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxlength: [20, "Title must be less than 20 characters"],
  },
  balance: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Account ||
  mongoose.model("Account", accountSchema);