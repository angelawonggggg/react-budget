import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const IncomeTransactions = new mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  category: String,
  amount: Number,
  accountType: String,
  date: { type: Date, default: Date.now, required: [true, "date is required"] },
});

export default mongoose.models.IncomeTransactions ||
  mongoose.model("IncomeTransactions", IncomeTransactions);
