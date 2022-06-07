import mongoose from "mongoose";

export type Transaction = {
  id: string;
  transactionType: string;
  accountType: string;
  amount: number;
  category: string;
  date: string;
  userId: mongoose.Schema.Types.ObjectId;
};

const AccountTransaction = new mongoose.Schema({
  transactionType: {
    type: String,
    required: [true, "transactionType is required"],
    maxlength: [20, "transactionType must be less than 20 characters"],
  },
  accountType: {
    type: String,
    required: [true, "accountType is required"],
    maxlength: [20, "Title must be less than 20 characters"],
  },
  amount: {
    type: Number,
    required: [true, "amount is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
    maxlength: [20, "Category must be less than 20 characters"],
  },
  date: {
    type: Date,
    required: [true, "date is required"],
    maxlength: [20, "Title must be less than 20 characters"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "userId is required"],
  },
});

export default mongoose.models.AccountTransaction ||
  mongoose.model("AccountTransaction", AccountTransaction);
