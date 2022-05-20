import mongoose from "mongoose";

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
  categoryDetail: {
    type: String,
    //required: [true, "categoryDetail is required"],
    maxlength: [20, "Title must be less than 20 characters"],
  },
  date: {
    type: String,
    required: [true, "date is required"],
    maxlength: [20, "Title must be less than 20 characters"],
  },
  textDetails: {
    type: String,
    //required: [false, "textDetails is required"],
    maxlength: [20, "Title must be less than 20 characters"],
  },
});

export default mongoose.models.AccountTransaction ||
  mongoose.model("AccountTransaction", AccountTransaction);
