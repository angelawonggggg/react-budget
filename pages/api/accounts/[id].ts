import { connect } from "middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import Account from "../../../models/accounts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connect();

  if (req.method === "GET") {
    const id = req.query.id;
    try {
      const account = await Account.findById(id);
      res.status(200).json({ success: true, data: account });
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  }
}
