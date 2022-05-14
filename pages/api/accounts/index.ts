import { connect } from "middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import Accounts from "../../../models/accounts";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  if (req.method === "POST") {
    const { title, balance } = req.body;

    const account = new Accounts({
      title,
      balance: parseFloat(balance),
    });
    const error = account.validateSync();
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      await account.save();
      res.status(201).json({ success: true, data: account });
    }
  }

  if (req.method === "GET") {
    try {
      const accounts = await Accounts.find({});
      res.status(200).json({ success: true, data: accounts });
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  }

  if (req.method === "DELETE") {
    const id = req.body.id;
    if (id) {
      const accounts = await Accounts.findByIdAndDelete(id);
      res.status(200).json({ success: true, data: accounts });
    } else {
      res.status(400).json({ success: false, error: "Missing id" });
    }
  }
}

export default handler;
