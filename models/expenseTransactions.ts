import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ExpenseTransactions = new mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  category: String,
  amount: Number,
  account: String,
  date: { type: Date, default: Date.now, required: [true, "date is required"] },
});

export default mongoose.models.ExpenseTransactions ||
  mongoose.model("ExpenseTransactions", ExpenseTransactions);
