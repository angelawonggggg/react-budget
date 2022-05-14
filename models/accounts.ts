import mongoose from "mongoose";

export type Account = {
  id: string;
  accountType: string;
  balance: number;
  balanceChange: number;
  notes: string;
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
});

export default mongoose.models.Account ||
  mongoose.model("Account", accountSchema);
