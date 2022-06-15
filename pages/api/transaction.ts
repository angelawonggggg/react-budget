import { connect } from "middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import AccountTransaction from "../../models/transactions";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import mongoose from "mongoose";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;

  if (!user) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  } else {
    await connect();
  }

  if (req.method === "POST") {
    const { transactionType, accountType, amount, category, date } = req.body;

    if (isNaN(amount)) {
      res
        .status(400)
        .json({ success: false, error: "amount must be a number" });
      return;
    }

    const newTransaction = new AccountTransaction({
      transactionType,
      accountType,
      amount,
      category,
      date,
      userId: user?._id,
    });
    const error = newTransaction.validateSync();
    if (error) {
      res.status(400).json({ success: false, error: error });
    } else {
      await newTransaction.save();

      res.status(201).json({
        status: "success",
        transaction: newTransaction,
      });
    }
  }

  if (req.method === "GET") {
    const { accountType } = req.query;
    try {
      if (accountType) {
        const transactions = await AccountTransaction.find({
          userId: user?._id,
          accountType: accountType,
        });
        res.status(200).json({
          status: "success",
          transactions,
        });
      } else {
        const transactions = await AccountTransaction.find({
          userId: user?._id,
        });

        res.status(200).json({
          status: "success",
          transactions,
        });
      }
    } catch (error) {
      res.status(500).json({ status: "unsuccess" });
    }
  }
}

export default withIronSessionApiRoute(handler, sessionOptions);
