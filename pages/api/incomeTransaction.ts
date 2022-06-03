import { connect } from "middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import IncomeTransaction from "../../models/incomeTransactions";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  // const { user } = req.session;
  if (req.method === "POST") {
    try {
      await connect();
      const { accountType, amount, category, date } = req.body;

      if (isNaN(amount)) {
        res
          .status(400)
          .json({ success: false, error: "amount must be a number" });
        return;
      }

      const id = user?._id; // const userDocument = IncomeTransaction.findOne({ _id: user?._id });

      const cleanedPayload = {
        accountType,
        amount,
        category,
        date,
      };
      const newIncomeTransaction = new IncomeTransaction(cleanedPayload);

      // newIncomeTransaction.save();

      res.status(201).json({
        status: "success",
        transaction: newIncomeTransaction,
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  }

  if (req.method === "GET") {
    try {
      const transactions = await IncomeTransaction.find();
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
