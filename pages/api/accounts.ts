import { connect } from "middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import Account from "../../models/accounts";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  if (req.method === "POST") {
    const { title, balance } = req.body;

    if (title && balance) {
      try {
        const account = await Account.create(req.body, "-_id -__v");
        res.status(201).json({ success: true, data: account });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
    } else {
      res.status(400).json({ success: false, error: "Missing fields" });
    }
  }

  if (req.method === "GET") {
    try {
      const accounts = await Account.find({});
      res.status(200).json({ success: true, data: accounts });
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  }
}

export default handler;
