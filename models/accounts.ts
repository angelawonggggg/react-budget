import mongoose from "mongoose";

export type Account = {
  id: string;
  accountType: string;
  balance: number;
  balanceChange: number;
  notes: string;
  userId: mongoose.Schema.Types.ObjectId;
};

const accountSchema = new mongoose.Schema({
  accountType: {
    type: String,
    required: [true, "Account type is required"],
    maxlength: [20, "Account type must be less than 20 characters"],
  },
  balance: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

export default mongoose.models.Account ||
  mongoose.model("Account", accountSchema);
