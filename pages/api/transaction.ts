import { connect } from "middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import AccountTransaction from "../../models/transactions";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  // const { user } = req.session;
  if (req.method === "POST") {
    const {
      transactionType,
      accountType,
      amount,
      category,
      categoryDetail,
      date,
      textDetails,
    } = req.body;

    if (isNaN(amount)) {
      res
        .status(400)
        .json({ success: false, error: "amount must be a number" });
      return;
    }

    const cleanedPayload = {
      transactionType,
      accountType,
      amount,
      category,
      categoryDetail,
      date,
      textDetails,
    };
    const newTransaction = new AccountTransaction(cleanedPayload);
    const error = newTransaction.validateSync();
    if (error) {
      res.status(400).json({ success: false, error: error });
    } else {
      newTransaction.save();

      res.status(201).json({
        status: "success",
        transaction: newTransaction,
      });
    }
  }

  if (req.method === "GET") {
    try {
      const query: { accountType?: string } = {};
      if (req.query.accountType) {
        query.accountType = req.query.accountType as string;
      }
      const transactions = await AccountTransaction.find(query);
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
