import { connect } from "middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import ExpenseTransaction from "../../models/expenseTransactions";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  //    const { user } = req.session;
  if (req.method === "POST") {
    const { user, account, amount, category, date } = req.body;

    if (isNaN(amount)) {
      res
        .status(400)
        .json({ success: false, error: "amount must be a number" });
      return;
    }

    const cleanedPayload = {
      user,
      account,
      amount,
      category,
      date,
    };
    const newExpenseTransaction = new ExpenseTransaction(cleanedPayload);
    const error = newExpenseTransaction.validateSync();
    if (error) {
      res.status(400).json({ success: false, error: error });
    } else {
      newExpenseTransaction.save();

      res.status(201).json({
        status: "success",
        transaction: newExpenseTransaction,
      });
    }
  }

  if (req.method === "GET") {
    try {
      const query: { accountType?: string } = {};
      if (req.query.accountType) {
        query.accountType = req.query.accountType as string;
      }
      const transactions = await ExpenseTransaction.find(query);
      res.status(200).json({
        status: "success",
        transactions,
      });
    } catch (error) {
      res.status(500).json({ status: "unsuccess" });
    }
  }
}

export default handler;
