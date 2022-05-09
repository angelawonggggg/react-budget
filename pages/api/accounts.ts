// import { Response } from "../../utils/type";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    accounts: [
      { id: 1, name: "Account 1", balance: 100 },
      { id: 2, name: "Account 2", balance: 100 },
    ],
  });
}
